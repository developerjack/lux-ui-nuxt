<template>
	<v-data-table-server
		:headers="headerItems"
		:items-per-page="itemsPerPage"
		:loading="loading"
		:items-length="itemsTotal" 
		:items="items"
		@update:options="loadItems"
		:show-select="showSelect"
	>
		<template v-slot:body.prepend v-if="search">
			<tr class="body-prepend-search">
				<td v-if="showSelect"></td>
				<td v-for="(headerItem, index) in headerItems" :key="index">
					<slot :name="'body.prepend.' + headerItem.key"></slot>
				</td>
			</tr>
		</template>
	</v-data-table-server>
</template>

<script setup lang="ts">
import axios from "axios";
import { sleep } from "@antfu/utils";
const props = defineProps({
	headers: Array<{ // 表头
		key: string,
		title: string,
		show?: string
	}>,
	itemsUrl: String, // 数据的API地址
	search: { // 是否显示搜索行
		type: Boolean,
		default: true
	},
	showSelect: { // 是否显示选择框
		type: Boolean,
		default: true
	},
	params: { // 搜索参数
		type: Object,
		default: {}
	}
});
// 表头
const headerItems = computed(() => {
	return props.headers?.filter(item => item.show === undefined || item.key === item.show);
});
// 内容
const loading = ref(true);
const itemsPerPage = ref(10);
const itemsTotal = ref(0);
const items = ref([]);
function loadItems({ page = 1, itemsPerPage = 10, sortBy = {} }) { // 页数(1)，每页数量(10)，排序规则([{key:'name', order: 'asc|desc'}])
	loading.value = true;
	sleep(800).then(() => {
		if (props.itemsUrl === undefined) {
			loading.value = false;
			return;
		}
		axios.get(props.itemsUrl, {
			params: props.params
		}).then(response => {
			itemsTotal.value = response.data.data.total;
			items.value = response.data.data.content;
      console.log(items.value)
		}).finally(() => {
			loading.value = false;
		});
	})
}
defineExpose({
  loadItems
})
</script>

<style lang="scss" scoped>
.body-prepend-search {
  box-shadow: none !important;
  transform: none !important;
}
.v-data-table{
  border-bottom: 1px solid #E0E0E0 !important;
}
</style>