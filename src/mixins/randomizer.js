export default {
	methods: {
		randomizer() {
			let now = Date.now().toString();
			let suffixNumber =
				(Math.floor(Math.pow(10, 14) * Math.random() * Math.random()) %
					(1 - 100000 + 1)) +
				1;
			return `${now}-${suffixNumber}`;
		},
	},
};
