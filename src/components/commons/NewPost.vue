<template>
	<div class="new-post">
		<message-box v-model="post" rows="6" label="What are you thinking today?" />
		<button
			type="button"
			:disabled="post.length < 3"
			class="new-post__submit"
			@click.prevent="submitPost"
		>
			Submit
		</button>
	</div>
</template>

<script>
import MessageBox from "@/components/commons/MessageBox";

export default {
	name: "NewPost",

	components: {
		MessageBox,
	},

	data() {
		return {
			post: "",
		};
	},

	methods: {
		submitPost() {
			this.$emit("submit", this.post);
		},
	},
};
</script>

<style lang="scss" scoped>
.new-post {
	text-align: right;

	&__submit {
		background: $color-jungle-green;
		color: white;
		padding: 0.5rem 1.5rem;
		font-size: 1.25rem;
		margin-bottom: 1rem;
		border: none;
		border-radius: 2rem;
		cursor: pointer;
		transition: background 200ms ease;

		&:disabled {
			opacity: 0.5;
		}

		&:hover {
			background: $color-blue-dianne;
		}
	}
}
</style>
