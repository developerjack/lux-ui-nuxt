<template>
	<yhlx-main-container>
		<div class="window-full">
			<v-list class="window-left" v-model:selected="menuOpen">
				<v-list-item v-for="(item, i) in devices" :key="i" :value="i" color="primary">
					<v-list-item-title class="font-weight-bold" v-text="item" />
				</v-list-item>
			</v-list>
			<div class="window-right">
				<v-tabs v-model="tab">
					<v-tab value="1">PV</v-tab>
					<v-tab value="3">Battery</v-tab>
					<v-tab value="2">Charging Station</v-tab>
					<v-tab value="4">Inverter</v-tab>
					<v-tab value="5">Grid</v-tab>
				</v-tabs>
					<v-tabs-window class="pa-4" v-model="tab">
						<v-tabs-window-item value="1">
							<line-chart />
						</v-tabs-window-item>
						<v-tabs-window-item value="2">
							<line-chart />
						</v-tabs-window-item>
						<v-tabs-window-item value="3">
							<line-chart />
						</v-tabs-window-item>
						<v-tabs-window-item value="4">
							<line-chart />
						</v-tabs-window-item>
						<v-tabs-window-item value="5">
							<line-chart />
						</v-tabs-window-item>
					</v-tabs-window>
			</div>
		</div>
	</yhlx-main-container>
</template>

<script setup lang="ts">
import LineChart from "./components/LineChart.vue";

const menuOpen = ref([0]);
const devices = ref([
	"Device NO.1",
	"Device NO.2",
	"Device NO.3",
	"Device NO.4",
	"Device NO.5",
	"Device NO.6",
	"Device NO.7",
	"Device NO.8",
	"Device NO.9",
	"Device NO.10"
]);

const tab = ref('1');
</script>

<style scoped lang="scss">

</style>
