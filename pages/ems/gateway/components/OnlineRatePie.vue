<template>
  <div>
    <apexchart id="pieChart" type="pie" height="302px" :options="chartOptions" :series="chartOptions.series" />
  </div>
</template>

<script setup>
import { set } from "~/node_modules/nuxt/dist/app/compat/capi"

const props = defineProps({
  color: {
    type: Array,
    default: ['#427BE5','#54B3BB'],
  },
  data: {
    type: Array,
    default: [9,1],
  },
  label: {
    type: Array,
    default: ['在线', '离线'],
  },
  title: {
    type: String,
    default: '网关在线率',
  },
})
const chartOptions = {
  series: [9,1],
  labels: ['在线', '离线'],
  chart: {
    // width: '180',
    height: 302,
    width: 302,
    type: "pie"
  },
  colors: props.color,
  dataLabels: { enabled: false },
  legend: {
    show: true,
    position: 'bottom',
    offsetY: -10,
    markers: {
      width: 16,
      height: 12, 
      radius: 4,
      offsetX: 0,
      offsetY: 0
    }
  },
  grid: {
    show: false,
    borderColor: "transparent",
    padding: { top: 0, right: 0 },
  },
  stroke: { colors: ["transparent"] },
  tooltip: { theme: "dark", fillSeriesColor: false },
}
</script>

<style lang="scss" scoped>

</style>