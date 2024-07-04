<template>
	<yhlx-main-container :data-headers="headers" :operations="operations">
    <handleAlarmDialog ref="dialog" location="Toolbar" :rowData="rowData" :headers="headers"/>
		<yhlx-data-table-server
      @selectedRows="getSelectedRow"
      single-select
      ref="serverTable"
      item-value="id"
      :headers="headers"
      items-url="/api/ems/alarm"
      v-model="selected"
      @click:row="(event, { item }) => router.push(`alarm/${item.id}`)"
    />
	</yhlx-main-container>
</template>
<script setup lang="ts">
import handleAlarmDialog from './components/handleAlarmDialog.vue'
const router = useRouter();

const headers = ref([
	{ title: "Content", key: "type" },
	{ title: "Level", key: "level" },
	{ title: "Location", key: "locationName" },
	{ title: "Gateway", key: "gateway" },
	{ title: "Device", key: "device" },
	{ title: "Report Time", key: "reportTime" },
	{ title: "Status", key: "status" },
]);
const dialog = ref()
const operations = ref([
  {
    label: 'Clear Filters',
    click: () => {
      clearFilter()
    }
  },
  {
    label: 'Reset Sorting',
    click: () => {
      console.log('reset')
      // resetSort()
    }
  },
  {
    label: 'Refresh Table',
    click: () => {
      refreshTable()
    }
  }, {
		label: 'Handle Alarm',
		click: () => {
			dialog.value.changeAlarmDialog()
		}
	}
])
const rowData = ref()
function getSelectedRow (value) {
  rowData.value = value
}
const serverTable = ref()
function clearFilter() {

}
function refreshTable(data: Object = {}) {
  // 获取表格数据接口
  serverTable.value.loadItems({page: 1, itemsPerPage: 10, data})
}
const selected = ref([]);
</script>
