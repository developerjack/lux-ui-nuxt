<script setup lang="ts">
  const props = defineProps({
    series:{
      type: Array<number>,
      default: () => []
    }
  })
  watch(() => props.series,() => {
    series[0].data = props.series
  },{ deep: true })
  const series: { data: number[] }[] = reactive([{
    data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  }])
  const chartOptions = ref({
    chart: {
      height: 690,
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: '时段电费曲线',
      align: 'left'
    },
    xaxis: {
      categories: ['00:00','01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00','09:00','10:00',
      '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']
    },
    yaxis: {
      min: 0
    }
  })
</script>

<template>
  <div id="chart">
    <apexchart type="line" height="690" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<style scoped lang="scss">

</style>