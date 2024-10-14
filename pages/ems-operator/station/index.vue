<template>
	<yhlx-main-container :data-headers="headers" :operations="operations">
		<template v-slot:append>
			<DialogAdd location="Toolbar"/>
		</template>
		<yhlx-data-table-server ref="serverTable" :headers="headers" :show-select="true" items-url="/api/ems/station" :params="params">
			<template v-slot:body.prepend.name>
				<yhlx-text-field density="compact" v-model="params.name" />
			</template>
			<template v-slot:body.prepend.address>
				<yhlx-time-input ref="multipleTimeInputRef" :multiple="false" @getPickTime="getPickTime" clearable/>
			</template>

      <template v-slot:operation="{ item }">
        <v-btn density="comfortable" icon="mdi-ev-station" @click="handleToStation(item)"></v-btn>
        <v-btn density="comfortable" icon="mdi-details" style="margin-left: 20px" @click="handleToStationDetail(item)"></v-btn>
      </template>
		</yhlx-data-table-server>
	</yhlx-main-container>
</template>
<script setup lang="ts">
import {useAppStore} from "~/stores/app";

const router = useRouter();
import DialogAdd from './Add.vue';
const headers = ref([	
	{ title: "Name", key: "name" },
	{ title: "Address", key: "address" },
	{ title: "Notes", key: "notes" },
  { title: "Operation", key: "operation", custom: true }
]);
//  @click:row="(event, { item }) => router.push(`station/${item.id}`)"
// 搜索
const params = reactive({
	name: '',
	time: ''
});
const multipleTimeInput = ref('');

// 选择的时间
function getPickTime(value: string) {
  multipleTimeInput.value = value;
  searchTableList();
}
const multipleTimeInputRef = ref()
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
  serverTable.value.loadItems({});
}

// 清空筛选
function clearFilter() {
	params.name = '';
  multipleTimeInputRef.value.clearInput();
}

function searchTableList() {
  refreshTable();
}
const timeId = ref();
watch(() => params.name, () => {
  clearTimeout(timeId.value);
  timeId.value = setTimeout(searchTableList,300);
})

const appStore = useAppStore();

const handleToStation = (item) => {
  appStore.setTargetStation(item.id)
  window.open('/ems-station/dashboard', '_blank');
}

const handleToStationDetail = (item) => {
  router.push(`station/${item.id}`)
}
</script>

<style lang="scss">

</style>