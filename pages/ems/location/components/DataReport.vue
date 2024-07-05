<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import axios from "axios";
const appStore = useAppStore();
const menuOpen = ref([0])
const menuItems = ref([{
  title: "Location",
  tag: ""
},{
  title: "PV",
  tag: ""
},{
  title: "Battery",
  tag: "NO.1"
},{
  title: "Battery",
  tag: "NO.2"
},{
  title: "charging Station",
  tag: "NO.1"
},{
  title: "charging Station",
  tag: "NO.2"
}])
const stationHeaders = [{
    title: 'Time',
    value: "time"
  },{
  title: "charging Station Charging",
  align: "center",
  children: [{
    title: "Sharp power",
    value: "selfSharpPower"
  },{
    title: "Peak power",
    value: "selfPeakPower"
  },{
    title: "Flat power",
    value: "selfFlatPower"
  },{
    title: "Valley power",
    value: "selfValleyPower"
  }]
}]
const headers = [{
  title: 'Time',
  value: "time"
},{
  title: "Self-consumption",
  align: "center",
  children: [{
    title: "Sharp power",
    value: "selfSharpPower"
  },{
    title: "Peak power",
    value: "selfPeakPower"
  },{
    title: "Flat power",
    value: "selfFlatPower"
  },{
    title: "Valley power",
    value: "selfValleyPower"
  }]
},{
  title: "on-grid electricity",
  align: "center",
  children: [{
    title: "Sharp power",
    value: "onSharpPower"
  },{
    title: "Peak power",
    value: "onPeakPower"
  },{
    title: "Flat power",
    value: "onFlatPower"
  },{
    title: "Valley power",
    value: "onValleyPower"
  }]
}]
const serverTable = ref()
const getHeaders = computed(() => {
  return (selected.value === 4 || selected.value === 5) ? stationHeaders : headers
})
const selected = ref(0)
function changeTable (index) {
  selected.value = index
}
watch(selected, () => {
  switch (selected.value){
    case 0:
      // 充电站表格接口
        serverTable.value.loadItems({})
      break;
    case 1:
      // 光伏表格接口
      serverTable.value.loadItems({})
      break;
    case 2:
      // 电池1表格接口
      serverTable.value.loadItems({})
      break;
    case 3:
      // 电池2表格接口
      serverTable.value.loadItems({})
      break;
    case 4:
      // 充电桩1表格接口
      serverTable.value.loadItems({})
      break;
    case 5:
      // 充电桩2表格接口
      serverTable.value.loadItems({})
      break;
  }
})
</script>

<template>
  <div class="d-flex">
    <v-list class="left px-1 py-4" v-model:selected="menuOpen">
      <v-list-item v-for="(item, i) in menuItems" :key="i" :value="i" color="primary" @click="changeTable(i)">
        <v-list-item-title class="font-weight-bold" v-text="item.title"/>
        <template v-if="item.tag" v-slot:append>
          <v-chip label density="comfortable" color="primary">{{ item.tag }}</v-chip>
        </template>
      </v-list-item>
    </v-list>
    <div class="window-item-inner-right" :style="{ 'height': !appStore.isFullScreen ? 'calc(100vh - 224px)' : 'calc(100vh - 163px)' }">
        <div class="table-flex">
          <p v-if="selected === 0">电量单位：kWh；金额单位：美元</p>
          <p v-else>电量单位：kWh</p>
          <div class="time-pick-box">
            时间范围：<yhlx-time-input :multiple="true"/>
          </div>
        </div>
        <yhlx-data-table-server ref="serverTable" items-url="/api/ems/location/Report" :headers="getHeaders" :search="false" :showSelect="false" hide-default-footer></yhlx-data-table-server>
    </div>
  </div>
</template>

<style scoped lang="scss">
.d-flex {
  border: 1px solid rgba(0, 0, 0, 0.12);
}
.left {
  width: 240px;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
}
.window-item-inner-right{
  flex: 1;
  height: calc(100vh - 226px) !important;
}

.table-flex{
  display: flex;
  line-height: 40px;
  justify-content: space-between;
  padding: 4px 8px;
  border-bottom: 1px solid #E0E0E0;
  .time-pick-box{
    display: flex;
    width: 360px;
    line-height: 40px;
  }
}

</style>