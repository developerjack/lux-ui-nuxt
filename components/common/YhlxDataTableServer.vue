<template>
	<v-data-table-server
		:headers="headerItems" :loading="loading"
		:items-length="itemsTotal" :items="items"
		@update:options="loadItems"
		show-select
	/>
</template>

<script setup lang="ts">
import axios from "axios";
import {sleep} from "@antfu/utils";
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
	return props.headers?.filter(item => item.show === undefined || item.key === item.show);
});

// 内容
const loading = ref(true);
const itemsTotal = ref(0);
const items = ref([]);

function loadItems({ page, itemsPerPage, sortBy }) { // 页数(1)，每页数量(10)，排序规则([{key:'name', order: 'asc|desc'}])
	loading.value = true;
	sleep(1000).then(() => {
		if (props.itemsUrl === undefined) {
			loading.value = false;
			return;
		}
		axios.get(props.itemsUrl).then(response => {
			itemsTotal.value = response.data.data.total;
			items.value = response.data.data.content;
		}).finally(() => {
			loading.value = false;
		});
	})
}
</script>

<style scoped>

</style>