<template>
	<yhlx-main-container :data-headers="headers" :operations="operations">
		<template v-slot:append>
			<DialogAdd location="Toolbar"/>
		</template>
		<yhlx-data-table-server :headers="headers" ref="serverTable" :show-select="true" :items-url="itemUrl" class="emsLocationTable">
			<template v-slot:body.prepend.name>
				<yhlx-text-field density="compact" v-model="searchName" clearable/>
			</template>
			<template v-slot:body.prepend.gatewayCount>
				<v-autocomplete
				 	density="compact"
          v-model="searchGatewayCount"
					:items="[1,2,3,4]"
					variant="outlined"
					clearable
				></v-autocomplete>
			</template>
			<template v-slot:body.prepend.address>
				<yhlx-time-input ref="multipleTimeInput" :multiple="true" @getPickTime="getPickTime" clearable/>
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

const itemUrl = ref('/api/ems/location')

// 搜索
const searchName = ref('');
const searchGatewayCount = ref();
const simpleTimeInput = ref('')
const multipleTimeInput = ref('')

// 选择的时间
function getPickTime(value) {
  if (value.length === 0) {
    multipleTimeInput.value = ''
    searchTableList()
  } else {
    multipleTimeInput.value = ''
    multipleTimeInput.value = '' + value
    searchTableList()
  }
}

function resetSort() {
	console.log('Reset Sorting')
}

const serverTable = ref()

const operations = {
	refreshTable,
	clearFilter,
	resetSort
}
// 刷新表格
function refreshTable() {
	// 获取表格数据接口
  serverTable.value.loadItems({page: 1, itemsPerPage: 10})
}

// 清空筛选
function clearFilter() {
	searchName.value = '';
	searchGatewayCount.value = null;
	multipleTimeInput.value.clearInput();
	simpleTimeInput.value.clearInput();
}

function searchTableList() {
  itemUrl.value = itemUrl.value.split('?')[0];
  itemUrl.value = itemUrl.value + '?name=' + searchName.value +
      '&gatewayCount=' + searchGatewayCount.value +
      '&address=' + multipleTimeInput.value || '';
  refreshTable();
}
const timeId = ref();
watch(searchName, () => {
  clearTimeout(timeId.value);
  timeId.value = setTimeout(searchTableList,300);
})
watch(searchGatewayCount, ()=> {
  clearTimeout(timeId.value);
  timeId.value = setTimeout(searchTableList,300);
})
</script>
<style lang="scss">
.v-table{
	.v-input{
		.v-input__details{
			display: none;
		}
	}
}
</style>