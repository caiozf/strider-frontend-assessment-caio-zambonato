export default {
	props: {
		label: {
			type: String,
			default: "",
		},

		modelValue: {
			type: Boolean,
			default: false,
		},

		uuid: {
			type: Number,
			default: Date.now(),
		},
	},
};
