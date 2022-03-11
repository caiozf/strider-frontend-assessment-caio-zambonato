<template>
	<div class="modal-user" @click="closeModal">
		<div class="modal-user__content" @click.stop>
			<figure class="modal-user__avatar" v-if="user.profile_picture">
				<img :src="user.profile_picture" :alt="user.name" />
			</figure>
			<span class="modal-user__content__close"></span>
			<h3 class="modal-user__content__title">{{ user.name }}</h3>
			<p class="modal-user__content__joined">
				<time :datetime="user.joined_date">
					Joined: {{ formattedDate(user.joined_date) }}
				</time>
			</p>

			<h3 class="modal-user__post">
				<span class="label">Number of posts: </span>{{ user.number_posts }}
			</h3>

			<ul class="list">
				<li class="list__item">
					<span class="list__item__label">Following</span>
					<p class="list__item__content">{{ user.number_following }}</p>
				</li>

				<li class="list__item">
					<span class="list__item__label">Followers</span>
					<p class="list__item__content">{{ user.number_followers }}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import formattedDate from "@/mixins/formattedDate";

export default {
	props: {
		user: {
			type: Object,
			required: true,
		},
	},

	mixins: [formattedDate],

	methods: {
		closeModal() {
			this.$router.push("/");
			this.$emit("close");
		},
	},
};
</script>

<style lang="scss" scoped>
.modal-user {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: rgba(black, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;

	&__content {
		background: white;
		padding: 30px 10px;
		border-radius: 4px;
		width: 90%;
		max-height: 400px;
		position: relative;

		&__title {
			font-size: 1.75rem;
			color: $color-burnt-sienna;
		}

		&__joined {
			font-size: 0.9rem;
			color: darken($color-rob-roy, 20%);
			margin: 0.5rem 0;
		}

		&__close {
			content: "";
			position: absolute;
			width: 15px;
			height: 15px;
			right: 0;
			top: -20px;
			pointer-events: none;
			max-width: 300px;

			&:before,
			&:after {
				content: "";
				width: 100%;
				height: 3px;
				position: absolute;
				top: 50%;
				left: 50%;
				background: white;
			}

			&:before {
				transform: translate(-50%, -50%) rotate(45deg);
			}

			&:after {
				transform: translate(-50%, -50%) rotate(-45deg);
			}
		}

		@include media-query {
			width: 30vw;
		}
	}

	&__avatar {
		@extend .avatar;
		margin: 0 auto 2rem;
		max-width: 100px;
		border: 1px solid darken($color-mercury, 30%);
	}

	&__joined {
		font-size: 0.8rem;
	}
}
</style>
