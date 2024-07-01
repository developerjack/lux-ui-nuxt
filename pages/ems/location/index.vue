<template>
	<yhlx-main-container :data-headers="headers" :operationObj="operationObj">
		<template v-slot:append>
			<DialogAdd location="Toolbar"/>
		</template>
		<yhlx-data-table-server :headers="headers" :search="true" :showSelect="true" items-url="/api/ems/location" ref="dataTableServer" @getTableItems="getTableItems" class="emsLocationTable">
			<template v-slot:body.prepend.name>
				<v-text-field variant="outlined" class="itemInput" v-model="searchName" clearable/>
			</template>
			<template v-slot:body.prepend.address>
				<yhlx-time-input ref="multioleTimeInput" :multiple="true" @getPickTime="getPickTime" clearable/>
			</template>
			<template v-slot:body.prepend.gatewayCount>
				<v-autocomplete
					v-model="searchgatewayCount"
					:items="formatterGatewayCount"
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

// 表格dom对象
const dataTableServer = ref();

// 处理后的表格数据
const tableList = ref([]);

// 搜索
const searchName = ref('');
const searchgatewayCount = ref();
const sinpleTimeInput = ref()
const multioleTimeInput = ref()

// 分页
const itemsTotal = ref(0);
const itemsPerPage = ref(10);

// 选择的时间
function getPickTime(value) {
	console.log(value)
}

// 表格中的数据
function getTableItems(items, perPage){
	tableList.value = items;
	itemsPerPage.value = perPage;
	itemsTotal.value = items.length;
}

function resetSort() {
	console.log('Reset Sorting')
}

const operationObj = {
	refreshTable,
	clearFilter,
	resetSort
}

const formatterGatewayCount = computed(() => {
	return [...new Set(filtertableList().map(item => item.gatewayCount))]
})

// 刷新表格
function refreshTable() {
	dataTableServer.value.loadItems({ page: Math.ceil(itemsTotal.value / itemsPerPage.value),itemsPerPage: itemsPerPage.value})
}
// 清空筛选
function clearFilter() {
	searchName.value = ''
	searchgatewayCount.value = null
	multioleTimeInput.value.clearInput()
	sinpleTimeInput.value.clearInput()
}

function filtertableList() {
	if(searchName.value && searchgatewayCount.value){
		return tableList.value.filter(item => 
			item.name.includes(searchName.value) && (item.gatewayCount === searchgatewayCount.value)
		);
	}else if(searchName.value){
		return tableList.value.filter(item => item.name.includes(searchName.value));
	}else if(searchgatewayCount.value){
		return tableList.value.filter(item => item.gatewayCount === searchgatewayCount.value);
	}else{
		return tableList.value
	}
}

watch(searchName,() => {
	dataTableServer.value.setTableData(filtertableList())
})
watch(searchgatewayCount,() => {
	dataTableServer.value.setTableData(filtertableList())
})
</script>
<style lang="scss">
.emsLocationTable{
	.v-input{
		height: 32px !important;
		.v-input__details{
			display: none;
		}
		.v-field{
			.v-field__field{
				height: 32px;
			}
			.v-field__input{
				min-height: 32px !important;
			}
			--v-field-input-padding-top: 0;
			--v-field-input-padding-bottom: 0;
		}
	}
}
</style>