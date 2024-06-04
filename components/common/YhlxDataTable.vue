<template>
	<v-data-table :headers="headerItems" />
</template>

<script setup lang="ts">
const props = defineProps({
	headers: Array<{ // 表头
		key: String,
		title: String,
		show: String
	}>,
});

const headerItems = computed(() => {
	return props.headers?.filter(item => item.key === item.show);
});
</script>

<style scoped>

</style>