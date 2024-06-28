<template>
	<nuxt-icon :name="iconName" :class="svgClass"/>
</template>

<script setup>
const props = defineProps({
	name: {
		type: String,
		required: true
	},
	color: {
		type: String,
		default: ''
	}
})

const iconName = computed(() => `svg/${props.name}`)
const svgClass = computed(() => {
	if (props.name) {
		return `yhlx-svg-icon icon-${props.name}`;
	}
	return 'yhlx-svg-icon';
})
</script>

<style lang="scss">
.yhlx-svg-icon {
	svg {
		color: rgb(var(--v-theme-primary));
		width: 100% !important;
		height: 100% !important;
		margin-bottom: 0;
	}
}

</style>
