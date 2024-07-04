<template>
	<yhlx-main-container :data-headers="headers" :operations="operations">
		<template v-slot:append>
			<DialogAdd location="Toolbar"/>
		</template>
		<yhlx-data-table-server :headers="headers" ref="serverTable" :show-select="true" :items-url="itemUrl" class="emsLocationTable" @click:row="(event, { item }) => router.push(`location/${item.id}`)">
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
				<yhlx-time-input ref="multipleTimeInputRef" :multiple="false" @getPickTime="getPickTime" clearable/>
			</template>
		</yhlx-data-table-server>
	</yhlx-main-container>
</template>
<script setup lang="ts">
const router = useRouter();
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
const multipleTimeInput = ref('')
const multipleTimeInputRef = ref()

// 选择的时间
function getPickTime(value: string) {
  multipleTimeInput.value = value
  searchTableList()
}

const serverTable = ref()

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
function refreshTable(data: Object = {}) {
  serverTable.value.loadItems({page: 1, itemsPerPage: 10, data})
}

// 清空筛选
function clearFilter() {
	searchName.value = '';
	searchGatewayCount.value = null;
  multipleTimeInputRef.value.clearInput();
}

function searchTableList() {
  const data = {
    searchName: searchName.value,
    searchGatewayCount: searchGatewayCount.value,
    address: multipleTimeInput.value
  }
  refreshTable(data);
}
const timeId = ref();
watch(searchName, () => { // 防止多次api接口调用
  clearTimeout(timeId.value);
  timeId.value = setTimeout(searchTableList,300);
})
watch(searchGatewayCount, ()=> {
  searchTableList();
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