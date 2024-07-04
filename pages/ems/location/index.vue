<template>
	<yhlx-main-container :data-headers="headers" :operations="operations">
		<template v-slot:append>
			<DialogAdd location="Toolbar"/>
		</template>
		<yhlx-data-table-server ref="serverTable" :headers="headers" :show-select="true" items-url="/api/ems/location" :params="params">
			<template v-slot:body.prepend.name>
				<yhlx-text-field density="compact" v-model="params.name" />
			</template>
			<template v-slot:body.prepend.gatewayCount>
				<yhlx-autocomplete density="compact" v-model="searchGatewayCount" :items="[1,2,3,4]" />
			</template>
			<template v-slot:body.prepend.address>
				<yhlx-time-input ref="multipleTimeInput" :multiple="false" @getPickTime="getPickTime" clearable/>
			</template>
		</yhlx-data-table-server>
	</yhlx-main-container>
</template>
<script setup lang="ts">
import DialogAdd from './Add.vue';
const headers = ref([	
	{ title: "Name", key: "name" },
	{ title: "Gateway Count", key: "gatewayCount" },
	{ title: "Address", key: "address" },
	{ title: "Notes", key: "notes" },
]);

// 搜索
const params = reactive({
	name: '',
	gatewayCount: 0,
	time: ''
});
const searchGatewayCount = ref();
const multipleTimeInput = ref('');

// 选择的时间
function getPickTime(value: string) {
  multipleTimeInput.value = value;
  searchTableList();
}

const serverTable = ref();

const operations = [
  {
    label: 'Clear Filters',
    click: () => {
      clearFilter()
    }
  },
  {
    label: 'Reset Sorting',
    click: () => {
      resetSort()

    }
  },
  {
    label: 'Refresh Table',
    click: () => {
      refreshTable()
    }
  }
]

function resetSort() {
  console.log('Reset Sorting')
}

// 刷新表格
function refreshTable(params = {}) {
	// 获取表格数据接口
  serverTable.value.loadItems();
}

// 清空筛选
function clearFilter() {
	params.name = '';
	searchGatewayCount.value = null;
	multipleTimeInput.value.clearInput();
}

function searchTableList() {
  refreshTable();
}
const timeId = ref();
watch(() => params.name, () => {
  clearTimeout(timeId.value);
  timeId.value = setTimeout(searchTableList,300);
})
watch(searchGatewayCount, ()=> {
  clearTimeout(timeId.value);
  timeId.value = setTimeout(searchTableList,300);
})
</script>
<style lang="scss">

</style>