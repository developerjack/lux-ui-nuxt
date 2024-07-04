<template>
	<v-card title="Power Line Chart">
		<v-divider />
		<v-card-text>
			<apexchart type="line" height="200px" :options="chartOptions" :series="chartOptions.series" />
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
const { current } = useTheme();
/*Chart*/
const chartOptions = computed(() => {
  return {
    series: [
      { name: "PV", data: [100, 390, 210, 350, 290, 280, 250] },
      { name: "Battery", data: [100, 250, 125, 215, 150, 310, 170] },
	    { name: "Charging Station", data: [100, 50, 120, 250, 90, 180, 150] },
	    { name: "Grid", data: [100, 190, 240, 30, 120, 210, 70] },
    ],
    grid: {
      show: false,
      borderColor: "transparent",
      padding: { left: 30, right: 0, bottom: 0 },
    },
    plotOptions: {},
    colors: [current.value.colors.primary, current.value.colors.secondary, current.value.colors.info, current.value.colors.warning],
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: [current.value.colors.primary, current.value.colors.secondary, current.value.colors.success, current.value.colors.warning],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 0.9,
        stops: [0, 100, 100, 100],
      },
    },
    chart: {
      type: "line",
      toolbar: { show: false },
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
    xaxis: {
      type: "category",
      categories: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
    },
    yaxis: {
			min: 0,
	    max: 400,
      show: true,
      tickAmount: 4
    },
    stroke: { curve: "smooth", width: "5" },
	  tooltip: {
			theme: "dark",
		  y: {
			  formatter: function (val: number) {
				  return val + "kW";
			  },
		  },
	  },
  }
});

</script>
