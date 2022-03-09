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
		</article>
	</div>
</template>

<script>
export default {
	name: "PostItem",

	props: {
		post: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style lang="scss">
.post {
	border: 1px solid;
	border-radius: 4px;
	margin-bottom: 1.5rem;

	&__header {
		display: flex;
		align-items: center;
		border-bottom: 1px solid;
	}

	&__header,
	&__body {
		padding: 1rem;
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
}
</style>
