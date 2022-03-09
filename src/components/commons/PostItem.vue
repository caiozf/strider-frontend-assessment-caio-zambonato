<template>
	<div class="post">
		<header class="post__header">
			<figure class="post__avatar" v-if="post.profile_picture">
				<img :src="post.profile_picture" :alt="post.name" />
			</figure>
			<h3 class="post__author">{{ post.name }}</h3>
		</header>
		<article class="post__body">
			<p class="post__content">{{ post.content }}</p>
			<small>{{ formattedDate(post.post_date) }}</small>
		</article>
	</div>
</template>

<script>
import formattedDate from "@/mixins/formattedDate";

export default {
	name: "PostItem",

	mixins: [formattedDate],

	props: {
		post: {
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.post {
	border: 1px solid darken($color-mercury, 15%);
	border-radius: 4px;
	margin-bottom: 1.5rem;
	background: lighten($color-mercury, 4%);
	box-shadow: 0 3px 6px rgba(black, 0.16);

	&__header {
		display: flex;
		padding: 1rem;
		align-items: center;
		border-bottom: 1px solid darken($color-mercury, 15%);
	}

	&__body {
		padding: 1.5rem 1rem;
		text-align: left;
		line-height: 1.4rem;
		color: darken($color-mercury, 50%);
	}

	&__author {
		font-size: 1.25rem;
		margin-left: 1rem;
		color: $color-blue-dianne;
	}

	&__avatar {
		max-width: 50px;
		border-radius: 50%;
		overflow: hidden;
	}

	small {
		font-size: 0.75rem;
		color: darken($color-mercury, 30%);
	}
}
</style>
