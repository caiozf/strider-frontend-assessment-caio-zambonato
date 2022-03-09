<template>
	<div class="container">
		<div class="home">
			<div class="home__feed">
				<home-feed :userData="userData" />
			</div>
		</div>
	</div>
</template>

<script>
import HomeFeed from "@/components/core/HomeFeed";
import axios from "axios";
import { ref } from "vue";

export default {
	name: "HomeView",

	components: {
		HomeFeed,
	},

	setup() {
		const url = "http://localhost:3000/data";
		const userData = ref(null);

		axios.get(url).then(({ data }) => {
			userData.value = data;
		});

		return { userData };
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
