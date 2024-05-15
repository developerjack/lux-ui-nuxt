<template>
	<yhlx-main-container>
		<div class="h-full overflow-auto">
			<v-expansion-panels v-model="panel" multiple="true" class="px-4 py-6">
				<v-expansion-panel title="Details">
					<template v-slot:text>
						<v-row class="info">
							<v-col cols="2" class="font-weight-bold">eMSP Name</v-col>
							<v-col cols="4">Iocharger</v-col>
							<v-col cols="2" class="font-weight-bold">Country</v-col>
							<v-col cols="4">China</v-col>
							<v-col cols="2" class="font-weight-bold">Country Code</v-col>
							<v-col cols="4">CN</v-col>
							<v-col cols="2" class="font-weight-bold">Part ID</v-col>
							<v-col cols="4">IOC</v-col>
							<v-col cols="2" class="font-weight-bold">Contact</v-col>
							<v-col cols="4">Li Yuanhan</v-col>
							<v-col cols="2" class="font-weight-bold">Contact Email</v-col>
							<v-col cols="4">liyh@iocharger.com</v-col>
							<v-col cols="2" class="font-weight-bold">Contact Phone</v-col>
							<v-col cols="4">18059289854</v-col>
							<v-col cols="6"></v-col>
							<v-col cols="2" class="font-weight-bold">Valid From</v-col>
							<v-col cols="4">2020-10-15</v-col>
							<v-col cols="2" class="font-weight-bold">Valid To</v-col>
							<v-col cols="4">2030-10-15</v-col>
						</v-row>
					</template>
				</v-expansion-panel>
				<v-expansion-panel title="Statistics">
					<template v-slot:text>
						<v-data-table-virtual :headers="statisticsHeaders" :items="statisticsItems" />
					</template>
				</v-expansion-panel>
				<v-expansion-panel title="Transactions">
					<template v-slot:text>
						<v-data-table :headers="headers" :items="items" />
					</template>
				</v-expansion-panel>
			</v-expansion-panels>
		</div>
	</yhlx-main-container>
</template>

<script setup lang="ts">
import YhlxMainContainer from "@/components/container/YhlxMainContainer.vue";
import axios from "axios";

const panel = ref([0, 1, 2]);

// 统计
const statisticsHeaders = ref([
	{ title: "Month", key: "time" },
	{ title: "Duration(hour)", key: "duration" },
	{ title: "Energy(kWh)", key: "energy" },
	{ title: "Cost($)", key: "cost" },
	{ title: "Times", key: "times" },
]);
const statisticsItems = ref([]);
axios.get('/api/rf/statistic/FFFFFFFF').then(response => {
	statisticsItems.value = response.data.data;
});

// 充电记录
const headers = ref([
	{ title: "Transaction Id", key: "transactionId" },
	{ title: "Location", key: "locationName" },
	{ title: "Charging Station", key: "chargingStationName" },
	{ title: "Energy", key: "energy" },
	{ title: "Start Time", key: "startTime" },
	{ title: "End Time", key: "endTime" },
]);
const items = ref([]);
axios.get('/api/transaction').then(response => {
	items.value = response.data.data.content;
});

</script>

<style scoped lang="scss">
</style>
