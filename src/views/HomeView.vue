<template>
	<div class="container">
		<div class="home">
			<div class="home__feed">
				<home-feed v-if="!error" @showError="handleShowError" />
				<div class="oops" v-if="error">
					<h3 class="oops__title">Oops!</h3>
					<p class="oops__text">
						Something is wrong... We cannot find the page you are looking for
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import HomeFeed from "@/components/core/HomeFeed";

export default {
	name: "HomeView",

	data() {
		return {
			error: false,
		};
	},

	components: {
		HomeFeed,
	},

	methods: {
		handleShowError(error) {
			console.warn(error);
			this.error = true;
		},
	},
};
</script>

<style lang="scss">
.home {
	padding: 2rem;

	&__feed {
		margin: 0 auto;

		@include media-query {
			max-width: 600px;
		}
	}

	.oops {
		&__title {
			font-size: 4rem;
			margin-bottom: 2rem;
			color: $color-burnt-sienna;
			font-weight: bold;
		}

		&__text {
			font-size: 1.5rem;
			color: darken($color-sandy-brown, 10%);
		}
	}
}
</style>
