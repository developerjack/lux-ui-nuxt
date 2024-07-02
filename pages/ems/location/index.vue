<template>
	<yhlx-main-container :data-headers="headers" :operationObj="operationObj">
		<template v-slot:append>
			<DialogAdd location="Toolbar"/>
		</template>
		<yhlx-data-table-server :headers="headers" ref="serverTable" :search="true" :showSelect="true" :items-url="itemUrl" class="emsLocationTable">
			<template v-slot:body.prepend.name>
				<v-text-field density="compact" variant="outlined" class="itemInput" v-model="searchName" clearable/>
			</template>
			<template v-slot:body.prepend.address>
				<yhlx-time-input ref="multioleTimeInput" :multiple="true" @getPickTime="getPickTime" clearable/>
			</template>
			<template v-slot:body.prepend.gatewayCount>
				<v-autocomplete
				 	density="compact"
          v-model="searchgatewayCount"
					:items="[1,2,3,4]"
					variant="outlined"
					clearable
				></v-autocomplete>
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
const searchgatewayCount = ref();
const sinpleTimeInput = ref('')
const multioleTimeInput = ref('')


// 选择的时间
function getPickTime(value) {
  if(value.length === 0) {
    multioleTimeInput.value = ''
    filtertableList()
  }else{
    multioleTimeInput.value = ''
    multioleTimeInput.value = '' + value
    filtertableList()
  }
}

function resetSort() {
	console.log('Reset Sorting')
}

const serverTable = ref()

const operationObj = {
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
	searchName.value = ''
	searchgatewayCount.value = null
	multioleTimeInput.value.clearInput()
	sinpleTimeInput.value.clearInput()
}

function filtertableList() {
  itemUrl.value = itemUrl.value.split('?')[0]
  itemUrl.value = itemUrl.value + '?name=' + searchName.value +
      '&gatewayCount=' + searchgatewayCount.value +
      '&address=' + multioleTimeInput.value || ''
  refreshTable()
}
const timeId = ref()
watch(searchName, ()=>{
  clearTimeout(timeId.value)
  timeId.value = setTimeout(filtertableList,300)
})
watch(searchgatewayCount, ()=>{
  console.log('searchgatewayCount')
  clearTimeout(timeId.value)
  timeId.value = setTimeout(filtertableList,300)
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