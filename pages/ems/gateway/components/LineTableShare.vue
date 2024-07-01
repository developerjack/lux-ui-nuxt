<template>
  <div class="line-table-share" style="width: 70%;">
    <p class="line-title">实时数据</p>
    <apexchart id="lineChart" type="line" height="280" :options="chartOptions" :series="chartOptions.series" />
    <p class="line-title">警告信息</p>
    <v-data-table :items="items" :headers="headers">
      <template v-slot:headers="{ columns }">
        <tr class="grey-background">
          <th v-for="column in columns" :key="column.key">{{ column.title }}</th>
        </tr>
      </template>
      <template v-slot:body="{ items }">
        <tr v-for="(item, index) in items" :class="{ 'grey-background': (index + 1) % 2 === 0  }" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.warm }}</td>
          <td>{{ item.level }}</td>
          <td>{{ item.time }}</td>
        </tr>
      </template>
      <template v-slot:bottom>
      </template>
    </v-data-table>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
  categories: {
    type: Array,
    default: () => [],
  }
})
const headers = ref([
  { title: "序号", key: "id" },
  { title: "电桩名称", key: "name" },
  { title: "电桩位置", key: "address" },
  { title: "告警设备", key: "warm" },
  { title: "告警等级", key: "level" },
  { title: "告警时间", key: "time" },
]);
const items = ref([
  {
    id: 1,
    name: "电桩1",
    address: "广东省广州市天河区",
    warm: "电桩1",
    level: "严重",
    time: "2022-01-01 12:00:00",
  },
  {
    id: 2,
    name: "电桩2",
    address: "广东省广州市天河区",
    warm: "电桩2",
    level: "严重",
    time: "2022-07-01 12:00:00",
  },
  {
    id: 3,
    name: "电桩3",
    address: "广东省广州市天河区",
    warm: "电桩3",
    level: "严重",
    time: "2022-01-01 12:00:00",
  }
]);
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
      height: 280,
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
onMounted(() => {
  const chart = new ApexCharts(document.querySelector("#lineChart"), chartOptions);
  chart.render()
})
</script>

<style lang="scss" scoped>
.line-table-share{
  width: 70%;
  .line-title{
    font-size: 16px;
    font-weight: 700;
  }
}
.grey-background{
  background-color: #F0F0F0;
}
</style>