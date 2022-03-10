<template>
	<textarea
		class="form-input form-input--textarea"
		v-bind="{ ...$attrs }"
		:value="modelValue"
		:placeholder="label"
		@input="$emit('update:modelValue', $event.target.value)"
	></textarea>
</template>

<script>
import inputField from "@/mixins/inputField";

export default {
	name: "MessageBox",

	mixins: [inputField],

	props: {
		modelValue: {
			type: String,
			default: "",
		},
	},
};
</script>

<style lang="scss" scoped>
.form-input {
	display: block;
	margin: 1rem 0;
	background: lighten($color-mercury, 4%);
	padding: 10px 15px;
	border: 1px solid darken($color-mercury, 50%);
	border-radius: 4px;
	resize: none;
	width: 100%;
}
</style>
