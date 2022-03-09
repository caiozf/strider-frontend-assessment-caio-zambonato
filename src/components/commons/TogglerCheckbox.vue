<template>
	<input
		type="checkbox"
		v-bind="{ ...$attrs, onChange: updateValue }"
		@change="$emit('update:modelValue', $event.target.checked)"
		:id="uuid"
		class="form-input"
	/>

	<span class="check-icon"></span>

	<label :for="uuid" v-if="label">
		{{ label }}
	</label>
</template>

<script>
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
			type: String,
			default: Date.now(),
		},
	},
};
</script>

<style lang="scss" scoped>
input {
	display: none;

	&:checked ~ .check-icon {
		&:after {
			left: 20px;
		}
	}
}

.check-icon {
	display: inline-block;
	position: relative;

	&:before {
		content: "";
		display: inline-block;
		vertical-align: middle;
		width: 30px;
		height: 15px;
		border: 2px solid $color-blue-dianne;
		border-radius: 10px;
		margin-right: 10px;
		position: relative;
	}

	&:after {
		content: "";
		display: inline-block;
		width: 10px;
		height: 10px;
		background: $color-blue-dianne;
		position: absolute;
		left: 5px;
		top: 50%;
		transform: translateY(-50%);
		border-radius: 50%;
		transition: 150ms linear left;
	}
}

label {
	display: inline-block;
	margin-bottom: 1rem;

	&:hover {
		cursor: pointer;
	}

	&::selection {
		background: transparent;
	}
}
</style>
