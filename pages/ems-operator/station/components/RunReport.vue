<script setup lang="ts">
const headers: any[] = [{
	title: 'Date',
	value: "id"
},{
	title: "PV",
	align: "center",
	children: [{
		title: "Energy",
		value: "PVEnergy"
	},{
		title: "Income",
		value: "PVIncome"
	}]
},{
	title: "Battery",
	align: "center",
	children: [{
		title: "Charging Energy",
		value: "batteryChargingEnergy"
	},{
		title: "Outgo",
		value: "batteryChargingIncome"
	},{
		title: "Discharge Energy",
		value: "batteryDischargeEnergy"
	},{
		title: "Income",
		value: "batteryProceeds"
	}]
},{
	title: "Charging Station",
	align: "center",
	children: [{
		title: "Charging Energy",
		value: "chargingStationEnergy"
	},{
		title: "Income",
		value: "chargingStationIncome"
	}]
},{
	title: "Grid",
	align: "center",
	children: [{
		title: "Energy Input",
		value: "gridEnergyInput"
	},{
		title: "Income",
		value: "gridIncome"
	},{
		title: "Energy Output",
		value: "gridEnergyOutput"
	},{
		title: "Outgo",
		value: "gridOutgo"
	}]
}]
const serverTable = ref()
</script>

<template>
  <div class="d-flex">
    <div class="window-item-inner-right">
        <div class="table-flex">
          <p>Energy Unit：kWh；Monetary Unit：dollar</p>
          <div class="time-pick-box">
            Date Range：<yhlx-time-input :multiple="true"/>
          </div>
        </div>
        <yhlx-data-table-server ref="serverTable" items-url="/api/ems/station/run-report" :headers="headers" :search="false" :showSelect="false" hide-default-footer />
    </div>
  </div>
</template>

<style scoped lang="scss">
.d-flex {
  border: 1px solid rgba(0, 0, 0, 0.12);
  height: 100%;
}
.left {
  width: 240px;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
}
.window-item-inner-right{
  flex: 1;
  overflow-x: auto;
  .v-table{
    height: calc(100% - 49px);
  }
}

.table-flex{
  display: flex;
  line-height: 40px;
  justify-content: space-between;
  padding: 4px 8px;
  .time-pick-box{
    display: flex;
    width: 360px;
    line-height: 40px;
  }
}

</style>