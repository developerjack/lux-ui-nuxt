<template>
	<!-- ------------------------------------ -->
	<!-- html -->
	<!-- ------------------------------------ -->
	<v-card title="Gateway Status">
		<v-divider />
		<v-card-text>
			<apexchart type="donut" height="285" :options="chartOptions" :series="chartOptions.series"></apexchart>
			<div class="d-flex justify-space-between mt-4">
				<div></div>
				<div class="d-flex align-center">
          <span class="text-overline">
            <i class="mdi mdi-brightness-1 text-primary mx-1"></i>
          </span>
					<span class="text-subtitle-1 mr-1">Online</span>
				</div>
				<div class="d-flex align-center ">
          <span class="text-overline">
            <i class="mdi mdi-brightness-1 text-info mx-1"></i>
          </span>
					<span class="text-subtitle-1 mr-1">Offline</span>
				</div>
				<div></div>
			</div>
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">

import { useTheme } from "vuetify";
const { current } = useTheme();
/*Chart*/
const chartOptions = computed(() => {
  return {
    series: [85, 35],
    labels: ["Online", "Offline"],
    chart: {
      height: 280,
      type: "donut",
      foreColor: "#adb0bb",
      fontFamily: `inherit`,
    },
    colors: [current.value.colors.primary, current.value.colors.info],
    dataLabels: { enabled: false },
    legend: { show: false },
    stroke: { colors: ["transparent"] },
    plotOptions: {
      pie: {
        donut: {
          size: "85%",
          background: "transparent",
          labels: {
            show: false,
            name: {
              show: true,
              fontSize: "18px",
              color: undefined,
              offsetY: -10,
            },
            value: { show: false, color: "#98aab4" },
            total: { show: false, label: "Our Visitors", color: "#98aab4" },
          },
        },
      },
    },
    tooltip: { theme: "dark", fillSeriesColor: false },
    responsive: [{ breakpoint: 480, options: { chart: { height: 230 } } }],
  }
});
</script>

<style scoped>
</style>
