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
		<div class="window-item-inner-right" :style="{ 'height': !appStore.isFullScreen ? 'calc(100vh - 224px)' : 'calc(100vh - 163px)' }">
      <p>更新时间: {{"2024-06-05/10:20"}}</p>
      <div class="table-box">
        <DataTableBg :items="leftItems" :headers="leftHeaders"></DataTableBg>
        <DataTableBg :items="rightItems" :headers="rightHeaders"></DataTableBg>
      </div>
      <div class="line-chart-box">
        <div class="time-pick-box">
          时间范围：<yhlx-time-input :multiple="false"/><span>~</span><yhlx-time-input :multiple="false"/>
        </div>
        <apexchart height="300px" :options="chartOptions" :series="chartOptions.series"></apexchart>
      </div>
		</div>
	</div>
</template>

<script setup lang="ts">
import axios from "axios";
import DataTableBg from "./DataTableBg.vue";
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();

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
    { name: "Ua", data: [100, 390, 210, 350, 290, 180, 250] },
    { name: "Ub", data: [100, 250, 125, 215, 150, 310, 170] },
    { name: "Uc", data: [150, 213, 165, 215, 130, 210, 470] },
  ],
  colors: ['#85A4EB', '#88BFC7', '#7DAE77'],
  chart: {
    type: "area",
    height: "300px",
    offsetX: -15,
    toolbar:{
      show: false
    }
  },
  legend: {
    show: true,
    position: 'top',
    itemMargin: {
      horizontal: 20,
      vertical: 0
    },
  },
  xaxis: {
    type: "category",
    categories: ["Jan", "Feb", "Mar", "Jun", "Jul", "Aug", "Sep"],
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

<style lang="scss">
.table-box{
  table{
    padding: 0 !important;
    border: 1px solid #c5c5c5 !important;
  }
}
.line-chart-box{
  .v-input{
    .v-input__details{
      display: none;
    }
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
  .line-chart-box{
    margin-top: 60px;
    position: relative;
    .time-pick-box{
      z-index: 3000;
      position: absolute;
      right: 26px;
      top: -10px;
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
