<template>
	<div class="device-list">
		<v-btn v-for="i in 6" color="primary" size="large" @click="() => router.push(`../device/${i}`)">{{ 'Device No.' + i }}</v-btn>
	</div>
</template>

<script setup lang="ts">
const router = useRouter();

</script>

<style scoped lang="scss">
.device-list {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
	grid-row-gap: 16px;
	grid-column-gap: 10px;
}
</style>
