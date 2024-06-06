<template>
	<v-data-table :headers="headerItems" :items="items" />
</template>

<script setup lang="ts">
import axios from "axios";
const props = defineProps({
	headers: Array<{ // 表头
		key: String,
		title: String,
		show: String
	}>,
	itemsUrl: String, // 数据的API地址
});

// 表头
const headerItems = computed(() => {
	return props.headers?.filter(item => item.key === item.show);
});

// 内容
const items = ref([]);
watch(() => props.itemsUrl, () => {
	if (props.itemsUrl === undefined) {
		return;
	}
	axios.get(props.itemsUrl).then(response => {
		items.value = response.data.data.content;
	});
}, {
	immediate: true
})
</script>

<style scoped>

</style>