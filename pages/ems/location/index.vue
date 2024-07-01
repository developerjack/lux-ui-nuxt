<template>
	<yhlx-main-container :data-headers="headers" :operationObj="operationObj">
		<template v-slot:append>
			<DialogAdd location="Toolbar"/>
		</template>
		<yhlx-data-table-server :headers="headers" :search="true" :showSelect="true" items-url="/api/ems/location" class="emsLocationTable">
			<template v-slot:body.prepend.name>
				<v-text-field density="density" variant="outlined" class="itemInput" v-model="searchName" clearable/>
			</template>
			<template v-slot:body.prepend.address>
				<yhlx-time-input ref="multioleTimeInput" :multiple="true" @getPickTime="getPickTime" clearable/>
			</template>
			<template v-slot:body.prepend.gatewayCount>
				<v-autocomplete
				 	density="density"
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

// 搜索
const searchName = ref('');
const searchgatewayCount = ref();
const sinpleTimeInput = ref()
const multioleTimeInput = ref()


// 选择的时间
function getPickTime(value) {
	console.log(value)
}

function resetSort() {
	console.log('Reset Sorting')
}

const operationObj = {
	refreshTable,
	clearFilter,
	resetSort
}
// 刷新表格
function refreshTable() {
	// 获取表格数据接口
}
// 清空筛选
function clearFilter() {
	searchName.value = ''
	searchgatewayCount.value = null
	multioleTimeInput.value.clearInput()
	sinpleTimeInput.value.clearInput()
}

function filtertableList() {
	// 带筛选条件调接口
}

watch(searchName,() => {
	// 筛选条件
})
watch(searchgatewayCount,() => {
	// 筛选条件
})
</script>
<style lang="scss">
.v-table{
	.v-input{
		.v-field{
			.v-field__input{
				height: 32px;
			}
		}
		.v-input__details{
			display: none;
		}
	}
}
// .emsLocationTable{
// 	.v-input{
// 		height: 32px !important;
// 		.v-input__details{
// 			display: none;
// 		}
// 		.v-field{
// 			.v-field__field{
// 				height: 32px;
// 			}
// 			.v-field__input{
// 				min-height: 32px !important;
// 			}
// 			--v-field-input-padding-top: 0;
// 			--v-field-input-padding-bottom: 0;
// 		}
// 	}
// }
</style>