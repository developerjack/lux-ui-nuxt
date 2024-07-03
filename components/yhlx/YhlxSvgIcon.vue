<template>
	<nuxt-icon :name="iconName" :class="svgClass" :style="{ color: color, width: width, height: height }"/>
</template>

<script setup>
const props = defineProps({
	name: {
		type: String,
		required: true
	},
	color: {
		type: String,
		default: 'rgb(var(--v-theme-primary))'
	},
	width: {
		type: String,
		default: '100%'
	},
	height: {
		type: String,
		default: '100%'
	},
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
	display: inline-block;
	svg {
		color: currentColor;
		width: 100% !important;
		height: 100% !important;
		margin-bottom: 0;
	}
}

</style>
