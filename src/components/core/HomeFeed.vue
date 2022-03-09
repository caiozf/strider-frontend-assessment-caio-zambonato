<template>
	<div class="feed__toggler">
		<toggler-checkbox
			v-model="onlyShowFollowedPosts"
			label="Show only Following users"
		/>
	</div>

	<div class="feed" v-if="userData && !onlyShowFollowedPosts">
		<post-item
			v-for="post in joinUserAndPost(userData.posts)"
			:key="post.post_id"
			:post="post"
		/>
	</div>

	<div class="feed" v-else-if="userData && onlyShowFollowedPosts">
		<post-item
			v-for="post in joinUserAndPost(postsCurrentUserFollowing)"
			:key="post.post_id"
			:post="post"
		/>
	</div>
</template>

<script>
import PostItem from "@/components/commons/PostItem";
import TogglerCheckbox from "@/components/commons/TogglerCheckbox";

export default {
	name: "HomeFeed",

	components: {
		PostItem,
		TogglerCheckbox,
	},

	props: {
		userData: {
			type: Object,
			required: true,
		},
	},

	data() {
		return {
			onlyShowFollowedPosts: false,
		};
	},

	computed: {
		postsCurrentUserFollowing() {
			return this.userData.posts.filter((post) =>
				this.userData.current_user.following.includes(post.user_id)
			);
		},
	},

	methods: {
		joinUserAndPost(posts) {
			let postsWithUserData = [];

			posts.map((post) => {
				this.userData.users.map((user) => {
					if (user.id === post.user_id) {
						Object.assign(post, user);

						postsWithUserData.push(post);
					}
				});
			});

			return postsWithUserData;
		},
	},
};
</script>
