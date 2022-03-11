<template>
	<div v-if="posts">
		<div class="feed__post">
			<new-post @submit="handlePostSubmit" />
		</div>

		<div class="feed__toggler">
			<toggler-checkbox
				v-model="onlyShowFollowedPosts"
				label="Show only Following users"
			/>
		</div>

		<div class="feed" v-if="posts && !onlyShowFollowedPosts">
			<router-link :to="{ name: 'ModalUser' }">
				<post-item
					@click="triggerModal(post.user_id)"
					v-for="post in posts"
					:key="post.post_id"
					:post="post"
				/>
			</router-link>
		</div>

		<router-view>
			<div class="feed" v-if="posts && onlyShowFollowedPosts">
				<router-link :to="{ name: 'ModalUser' }">
					<post-item
						v-for="post in postsCurrentUserFollowing"
						:key="post.post_id"
						:post="post"
						@click="triggerModal(post.user_id)"
					/>
				</router-link>
			</div>

			<transition name="fade" appear>
				<modal-user
					@close="handleCloseModal"
					v-if="userToDisplay"
					:user="userToDisplay"
				/>
			</transition>
		</router-view>
	</div>
</template>

<script>
import axios from "axios";
import PostItem from "@/components/commons/PostItem";
import TogglerCheckbox from "@/components/commons/TogglerCheckbox";
import NewPost from "@/components/commons/NewPost";
import randomizer from "@/mixins/randomizer";
import ModalUser from "@/components/commons/ModalUser";

export default {
	name: "HomeFeed",

	components: {
		PostItem,
		TogglerCheckbox,
		NewPost,
		ModalUser,
	},

	mixins: [randomizer],

	data() {
		return {
			currentUser: "",
			posts: "",
			users: "",
			onlyShowFollowedPosts: false,
			newPosts: [],
			userToDisplay: "",
		};
	},

	computed: {
		postsCurrentUserFollowing() {
			return this.posts.filter((post) =>
				this.currentUser.following.includes(post.user_id)
			);
		},
	},

	created() {
		const url = "http://localhost:3000/data";

		axios
			.get(url)
			.then(({ data }) => {
				this.currentUser = data.current_user;
				this.posts = this.joinUserAndPost(data.posts, data.users);
				this.users = data.users;
			})
			.finally(() => {
				this.retrieveSavedPosts();
			});
	},

	watch: {
		onlyShowFollowedPosts(value) {
			if (value) {
				this.$router.push({ name: "Following" });
			} else {
				this.$router.push({ name: "home" });
			}
		},
	},

	methods: {
		handlePostSubmit(post) {
			let payload = {
				content: post,
				id: this.randomizer(),
				joined_date: this.currentUser.joined_date,
				name: this.currentUser.name,
				post_id: this.randomizer(),
				profile_picture: this.currentUser.profile_picture,
				user_id: this.currentUser.id,
			};

			this.posts.splice(0, 0, payload);
			this.saveNewPost(payload);
		},

		saveNewPost(post) {
			this.newPosts.push(post);
			let postsArray = JSON.stringify(this.newPosts);
			localStorage.posts = postsArray;
		},

		retrieveSavedPosts() {
			let newPosts = localStorage.posts;

			if (!newPosts) {
				return;
			}

			this.newPosts = JSON.parse(newPosts);

			if (this.posts && this.newPosts) {
				this.newPosts.forEach((newPost) => this.posts.unshift(newPost));
			}
		},

		joinUserAndPost(posts, users) {
			let postsWithUserData = [];

			posts.map((post) => {
				users.map((user) => {
					if (user.id === post.user_id) {
						Object.assign(post, user);

						postsWithUserData.push(post);
					}
				});
			});

			return postsWithUserData;
		},

		triggerModal(id) {
			if (id == this.currentUser.id) {
				this.userToDisplay = this.currentUser;
				return;
			}

			let userRetrieved = this.users.find((user) => user.id == id);
			this.userToDisplay = userRetrieved;
		},

		handleCloseModal() {
			this.userToDisplay = "";
		},
	},
};
</script>
