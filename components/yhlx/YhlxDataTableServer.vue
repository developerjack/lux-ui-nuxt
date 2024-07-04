<template>
	<v-data-table-server
		:headers="headerItems"
		:items-per-page="itemsPerPage"
		:loading="loading"
		:items-length="itemsTotal" 
		:items="items"
		:item-value="itemValue"
		@update:options="loadItems"
		v-model="selected"
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
	search: {
		type: Boolean,
		default: true
	}, // 是否显示搜索行
	showSelect: {
		type: Boolean,
		default: true
	},
  itemValue: {
    type: String,
    default: 'name'
  }
});
const emits = defineEmits(['selectedRows'])
const selected = ref([]);
watch(selected,() => {
  const arr: Array<object> = []
  items.value.forEach((item, index) => {
    if(selected.value.includes(item[props.itemValue])){
      arr.push(item)
    }
  })
  emits('selectedRows', arr)
})
// 表头
const headerItems = computed(() => {
	return props.headers?.filter(item => item.show === undefined || item.key === item.show);
});
// 内容
const loading = ref(true);
const itemsPerPage = ref(0)
const itemsTotal = ref(0);
const items = ref([]);
function loadItems({ page = 1, itemsPerPage = 10, data = {}, sortBy }) { // 页数(1)，每页数量(10)，排序规则([{key:'name', order: 'asc|desc'}])
	loading.value = true;
  let query = ''
  if (data !== {}) {
    query += '?'
    Object.keys(data).forEach(key => {
      query += `${key}=${data[key]}&`;
    })
    query = query.substring(0, query.length - 1);
  }
	sleep(800).then(() => {
		if (props.itemsUrl === undefined) {
			loading.value = false;
			return;
		}
		axios.get(props.itemsUrl + query).then(response => {
			itemsTotal.value = response.data.data.total;
			items.value = response.data.data.content;
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
.body-prepend-search{
  box-shadow: none !important;
  transform: none !important;
}
</style>