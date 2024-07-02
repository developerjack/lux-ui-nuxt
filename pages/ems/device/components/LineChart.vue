<template>
	<div class="d-flex">
		<v-list class="left px-1 py-4" v-model:selected="menuOpen">
			<v-list-item v-for="(item, i) in menuItems" :key="i" :value="i" color="primary">
				<v-list-item-title class="font-weight-bold" v-text="item.title" />
				<template v-if="item.tag" v-slot:append>
					<v-chip label density="comfortable" color="primary">{{ item.tag }}</v-chip>
				</template>
			</v-list-item>
		</v-list>
		<div class="window-item-inner-right">
      <p>更新时间: {{"2024-06-05/10:20"}}</p>
      <div class="table-box">
        <DataTableBg :items="leftItems" :headers="leftHeaders"></DataTableBg>
        <DataTableBg :items="rightItems" :headers="rightHeaders"></DataTableBg>
      </div>
      <div>
        <apexchart :options="chartOptions" :series="chartOptions.series"></apexchart>
      </div>
		</div>
	</div>
</template>

<script setup lang="ts">
import axios from "axios";
import DataTableBg from "./DataTableBg.vue";
const leftItems = ref([
{
  name: "电压(V)",
  total: "",
  AGroup: "220",
  BGroup: "220",
  CGroup: "220",
},{
  name: "电流(A)",
  total: "",
  AGroup: "10",
  BGroup: "10",
  CGroup: "10",
},{
  name: "有功功率(KW)",
  total: "6.6",
  AGroup: "2.2",
  BGroup: "2.2",
  CGroup: "2.2",
},{
  name: "无功功率(KW)",
  total: "0.1",
  AGroup: "0",
  BGroup: "0",
  CGroup: "0",
},{
  name: "Pf",
  total: "1",
  AGroup: "",
  BGroup: "",
  CGroup: "",
},{
  name: "F(Hz)",
  total: "50",
  AGroup: "",
  BGroup: "",
  CGroup: "",
}])
const rightItems = ref([
  {
    name: "直流电压(V)",
    total: "",
    PV1: "830",
    PV2: "830",
    PV3: "830",
    PV4: "830",
  },{
    name: "直流电流(A)",
    total: "",
    PV1: "5.1",
    PV2: "5.0",
    PV3: "5.3",
    PV4: "5.2",
  },{
    name: "有功功率(KW)",
    total: "17",
    PV1: "4.2",
    PV2: "4.2",
    PV3: "4.3",
    PV4: "4.3",
  }])
const leftHeaders = ref([
  { title: "", key: "name" },
  { title: "Total", key: "total" },
  { title: "A组", key: "AGroup" },
  { title: "B组", key: "BGroup" },
  { title: "C组", key: "CGroup" }
])
const rightHeaders = ref([
  { title: "", key: "name" },
  { title: "Total", key: "total" },
  { title: "PV1", key: "PV1" },
  { title: "PV2", key: "PV2" },
  { title: "PV3", key: "PV3" },
  { title: "PV4", key: "PV4" },
])

const chartOptions = {
  series: [
    { name: "光伏", data: [100, 390, 210, 350, 290, 180, 250] },
    { name: "储能", data: [100, 250, 125, 215, 150, 310, 170] },
    { name: "充电桩", data: [150, 213, 165, 215, 130, 210, 470] },
  ],
  grid: {
    show: false,
    borderColor: "transparent",
    padding: { left: 0, right: 0, bottom: 0 },
  },
  plotOptions: {},
  colors: ['#2FCFFC', '#2B339C', '#1961F9'],
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      gradientToColors: ["#0b70fb"],
      shadeIntensity: 1,
      type: "horizontal",
      opacityFrom: 1,
      opacityTo: 0.9,
      stops: [0, 100, 100, 100],
    },
  },
  chart: {
    type: "line",
    height: 100,
    offsetX: -15,
    toolbar: { show: false },
    foreColor: "#adb0bb",
    fontFamily: `inherit`,
    dropShadow: {
      enabled: true,
      color: "rgba(0,0,0,0.2)",
      top: 12,
      left: 4,
      blur: 3,
      opacity: 0.4,
    },
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
    categories: ["Jan", "Feb", "Mar", "Jun", "Jul", "Aug", "Sep"],
  },
  yaxis: {
    show: true,
    min: 100,
    max: 400,
    tickAmount: 3,
    labels: {
      style: {
        cssClass: "grey--text lighten-2--text fill-color",
      },
    },
  },
  stroke: { curve: "smooth", width: "5" },
  tooltip: { theme: "dark" },

}

const menuOpen = ref([0]);
const menuItems = ref([{ title: "", tag: "" }]);
axios.get("/api/ems/sub-device").then(response => {
	menuItems.value = response.data.data.content;
});
</script>

<style lang="scss">
.table-box{
  table{
    padding: 0 !important;
    border: 1px solid #c5c5c5 !important;
  }
}
</style>

<style scoped lang="scss">
.d-flex {
	border: 1px solid rgba(0, 0, 0, 0.12);
}
.left {
	width: 240px;
	border-right: 1px solid rgba(0, 0, 0, 0.12);
}

.window-item-inner-right {
	flex: 1;
	overflow: auto;
  p{
    margin-top: 8px;
    margin-right: 10%;
    text-align: right;
  }
  .table-box{
    display: flex;
    margin: 16px 8px 0;
    &>.v-data-table{
      .v-table__wrapper{
        &>table{
          padding: 0 !important;
          border: 1px solid #f5f5f5 !important;
        }
      }
    }
  }
}
</style>
