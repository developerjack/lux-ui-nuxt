<template>
	<yhlx-main-container :key="$route.fullPath">
		<template v-slot:title>
			<yhlx-main-container-title :titleList="devices"/>
		</template>
		<v-tabs v-model="tab">
			<v-tab value="1">Overview</v-tab>
			<v-tab value="2">Info</v-tab>
			<v-tab value="3">Line Chart</v-tab>
			<v-tab value="4">Real Data</v-tab>
			<v-tab value="5">History Data</v-tab>
		</v-tabs>
		<v-card-text>
			<v-tabs-window v-model="tab">
				<v-tabs-window-item value="1">
					One
				</v-tabs-window-item>
				<v-tabs-window-item value="2">
					<v-row>
						<v-col cols="2" class="font-weight-bold">Serial Number</v-col>
						<v-col cols="4">IOC24001</v-col>
						<v-col cols="2" class="font-weight-bold">Location</v-col>
						<v-col cols="4">Xiamen</v-col>
						<v-col cols="2" class="font-weight-bold">Model</v-col>
						<v-col cols="4">IOC_Store</v-col>
						<v-col cols="2" class="font-weight-bold">Firmware version</v-col>
						<v-col cols="4">2024010128</v-col>
						<v-col cols="2" class="font-weight-bold">First Connect</v-col>
						<v-col cols="4">2024-01-01 22:22:22</v-col>
						<v-col cols="2" class="font-weight-bold">Last Connect</v-col>
						<v-col cols="4">2024-02-28 12:23:32</v-col>
						<v-col cols="2" class="font-weight-bold">Status</v-col>
						<v-col cols="4">Activated</v-col>
					</v-row>
				</v-tabs-window-item>
				<v-tabs-window-item value="3">
					<line-chart />
				</v-tabs-window-item>
				<v-tabs-window-item value="4">
					<real-data />
				</v-tabs-window-item>
				<v-tabs-window-item value="5">
					<history-data />
				</v-tabs-window-item>
			</v-tabs-window>
		</v-card-text>
	</yhlx-main-container>
</template>

<script setup lang="ts">
import RealData from "./components/RealData.vue";
import HistoryData from "./components/HistoryData.vue";
import LineChart from "./components/LineChart.vue";

const devices = ref([
	{ id: "1", title: "Device NO.1", subtitle: 'gateway 1' },
	{ id: "2", title: "Device NO.2", subtitle: 'gateway 2' },
	{ id: "3", title: "Device NO.3", subtitle: 'gateway 3' },
	{ id: "4", title: "Device NO.4", subtitle: 'gateway 4' },
	{ id: "5", title: "Device NO.5", subtitle: 'gateway 5' },
]);


const tab = ref('one');
</script>

<style scoped lang="scss">
.v-card-text {
  height: calc(100% - 48px);
}
</style>
