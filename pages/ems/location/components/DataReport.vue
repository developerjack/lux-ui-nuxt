<script setup lang="ts">
import TotalTable from './TotalTable.vue'
import { useAppStore } from "@/stores/app";
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
const headers = [{
    title: 'Time',
    value: "time"
  },{
  title: "PV",
  align: "center",
  children: [{
    title: "PV Income",
    value: "PVIncome"
  },{
    title: "PV Electricity",
    value: "PVElectricity"
  }]
},{
  title: "Battery",
  align: "center",
  children: [{
    title: "Battery Charging Income",
    value: "batteryChargingIncome"
  },{
    title: "Battery Charging Electricity",
    value: "batteryChargingElectricity"
  },{
    title: "Battery Discharge Income",
    value: "batteryProceeds"
  },{
    title: "Battery Discharge Electricity",
    value: "batteryDischargeElectricity"
  }]
},{
  title: "Charging Station",
  align: "center",
  children: [{
    title: "Station Service Fee",
    value: "serviceFee"
  },{
    title: "Station Charging Electricity",
    value: "serviceElectricity"
  }]
},{
  title: "on The Grid",
  align: "center",
  children: [{
    title: "Grid Income",
    value: "gridIncome"
  },{
    title: "Grid Electricity",
    value: "servicePower"
  }]
}]
const serverTable = ref()
</script>

<template>
  <div class="d-flex">
    <div class="window-item-inner-right" :style="{ 'height': !appStore.isFullScreen ? 'calc(100vh - 224px)' : 'calc(100vh - 163px)' }">
        <div class="table-flex">
          <p>电量单位：kWh；金额单位：美元</p>
          <div class="time-pick-box">
            时间范围：<yhlx-time-input :multiple="true"/>
          </div>
        </div>
        <yhlx-data-table-server ref="serverTable" items-url="/api/ems/location/Report" :headers="headers" :search="false" :showSelect="false" hide-default-footer></yhlx-data-table-server>
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
  overflow-x: auto;
  //height: calc(100vh - 226px) !important;
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