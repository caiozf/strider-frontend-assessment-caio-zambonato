<template>
	<main class="main">
		<router-view />
	</main>
</template>

<style lang="scss">
#app {
	font-family: Roboto, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}

html,
body {
	margin: 0;
	padding: 0;
}

* {
	box-sizing: border-box;
}

.main {
	background: $color-mercury;
	width: 100vw;
	min-height: 100vh;
	color: $color-blue-dianne;
}
</style>
