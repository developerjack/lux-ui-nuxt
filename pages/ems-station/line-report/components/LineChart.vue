<template>
	<div class="line-chart-box">
		<div class="time-pick-box">
			<yhlx-time-input />
		</div>
		<apexchart height="300px" :options="chartOptions" :series="chartOptions.series"></apexchart>
	</div>
	<v-row class="form">
		<v-col cols="2"><v-checkbox label="A相电压" hide-details /></v-col>
		<v-col cols="2"><v-checkbox label="B相电压" hide-details /></v-col>
		<v-col cols="2"><v-checkbox label="C相电压" hide-details /></v-col>
		
		<v-col cols="2"><v-checkbox label="A相电流" hide-details /></v-col>
		<v-col cols="2"><v-checkbox label="B相电流" hide-details /></v-col>
		<v-col cols="2"><v-checkbox label="C相电流" hide-details /></v-col>
		
		<v-col cols="2"><v-checkbox label="A相功率" hide-details /></v-col>
		<v-col cols="2"><v-checkbox label="B相功率" hide-details /></v-col>
		<v-col cols="2"><v-checkbox label="C相功率" hide-details /></v-col>
		
		<v-col cols="2"><v-checkbox label="充电电量" hide-details /></v-col>
		<v-col cols="2"><v-checkbox label="放电电量" hide-details /></v-col>
		
		<v-col cols="2"><v-checkbox label="SOC" hide-details /></v-col>
		<v-col cols="2"><v-checkbox label="温度" hide-details /></v-col>
		<v-col cols="2"><v-checkbox label="频率" hide-details /></v-col>
		<v-col cols="2"><v-checkbox label="温度" hide-details /></v-col>
		<v-col cols="2"><v-checkbox label="湿度" hide-details /></v-col>
	</v-row>
</template>

<script setup lang="ts">
import axios from "axios";

const chartOptions = {
  series: [
    { name: "Ua", data: [100, 290, 210, 250, 290, 180, 250, 150, 213, 165, 215, 130, 210, 270] },
    { name: "Ub", data: [100, 250, 125, 215, 150, 310, 170, 100, 290, 210, 250, 290, 180, 250] },
    { name: "Uc", data: [150, 213, 165, 215, 130, 210, 270, 100, 250, 125, 215, 150, 310, 170] },
  ],
  colors: ['#85A4EB', '#88BFC7', '#7DAE77'],
  chart: {
    type: "area",
    height: "300px",
    offsetX: 0,
    offsetY: 0,
    toolbar:{
      show: false
    }
  },
  grid: {
    show: false,
    borderColor: "transparent",
    padding: { left: 10, right: 0, bottom: 0 },
  },
  legend: {
    show: true,
    position: 'bottom',
    itemMargin: {
      horizontal: 20,
      vertical: 0
    },
  },
  xaxis: {
    type: "category",
    categories: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "70:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00"],
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 5,
    hover: {
      size: 5
    },
  },
  tooltip: { theme: "dark" },
}

const menuOpen = ref([0]);
const menuItems = ref([{ title: "", tag: "" }]);
axios.get("/api/ems/sub-device").then(response => {
	menuItems.value = response.data.data.content;
});
</script>
<style scoped lang="scss">
.d-flex {
	border: 1px solid rgba(0, 0, 0, 0.12);
}
.left {
	width: 240px;
	border-right: 1px solid rgba(0, 0, 0, 0.12);
}

.window-right {
  .line-chart-box{
    margin-top: 60px;
    padding: 0 8px;
    position: relative;
    .time-pick-box{
      z-index: 3000;
      position: absolute;
      right: 26px;
      top: -20px;
      display: flex;
      width: 400px;
      line-height: 40px;
      &>span{
        margin: 0 4px;
      }
    }
  }
}
</style>
