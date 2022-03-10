<template>
	<div class="container">
		<div class="home">
			<div class="home__feed">
				<home-feed />
			</div>
		</div>
	</div>
</template>

<script>
import HomeFeed from "@/components/core/HomeFeed";

export default {
	name: "HomeView",

	components: {
		HomeFeed,
	},
};
</script>

<style lang="scss">
.home {
	padding: 2rem 0;

	&__feed {
		margin: 0 auto;
		overflow-y: auto;

		@include media-query {
			max-width: 600px;
		}
	}
}
</style>
