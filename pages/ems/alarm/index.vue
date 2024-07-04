<template>
	<yhlx-main-container :data-headers="headers" :operations="operations">
    <handleAlarmDialog ref="dialog" location="Toolbar" :rowData="rowData" :headers="headers"/>
		<yhlx-data-table-server
      @selectedRows="getSelectedRow"
      single-select
      ref="serverTable"
      item-value="device"
      :search="false"
      :headers="headers"
      items-url="/api/ems/alarm"
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
  }
])
const rowData = ref() // 选中的行信息
function getSelectedRow (value: Array<object>) { // 获取选中行的信息
  rowData.value = value
}
const isFirstPush = ref(true) // 判定是否是第一次加入处理警告操作功能
watch(rowData, () => {
  if(rowData.value.length !== 0 && isFirstPush.value){
    isFirstPush.value = false
    operations.value.push({
      label: 'Handle Alarm',
      click: () => {
        dialog.value.changeAlarmDialog()
      }
    })
  }
  if (rowData.value.length === 0) {
    isFirstPush.value = true
    operations.value.pop()
  }
})
const serverTable = ref()
function clearFilter() {

}
function refreshTable(data: Object = {}) {
  // 获取表格数据接口
  serverTable.value.loadItems({page: 1, itemsPerPage: 10, data})
}
</script>
