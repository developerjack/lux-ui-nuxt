<template>
	<yhlx-main-container>
		<div class="h-full overflow-auto">
			<v-expansion-panels v-model="panel" multiple="true" class="px-4 py-6">
				<v-expansion-panel title="Details">
					<template v-slot:text>
						<v-row class="info">
							<v-col cols="2" class="font-weight-bold">Name</v-col>
							<v-col cols="4">Li Yuanhan</v-col>
							<v-col cols="2" class="font-weight-bold">Email</v-col>
							<v-col cols="4">liyh@iocharger.com</v-col>
							<v-col cols="2" class="font-weight-bold">Phone Number</v-col>
							<v-col cols="4">18059289854</v-col>
							<v-col cols="2" class="font-weight-bold">Age</v-col>
							<v-col cols="4">35</v-col>
							<v-col cols="2" class="font-weight-bold">Address</v-col>
							<v-col cols="10">中国 福建省 厦门市 集美区 杏林街道 软件园三期 A1栋1404</v-col>
							<v-col cols="2" class="font-weight-bold">Status</v-col>
							<v-col cols="4">Enable</v-col>
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
				<v-expansion-panel title="RF Cards">
					<template v-slot:text>
						<v-data-table :headers="rfCardHeaders" :items="rfCards" />
					</template>
				</v-expansion-panel>
			</v-expansion-panels>
		</div>
	</yhlx-main-container>
</template>

<script setup lang="ts">
import YhlxMainContainer from "@/components/container/YhlxMainContainer.vue";
import axios from "axios";

const panel = ref([0, 1, 2, 3]);

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

// 卡列表
const rfCardHeaders = ref([
	{ title: "ID Tag", key: "idTag" },
	{ title: "Card Name", key: "name", align: "start" },
	{ title: "Expiry Time", key: "expiryTime", sortable: false },
	{ title: "Status", key: "status" },
]);
const rfCards = ref([]);
axios.get('/api/rf').then(response => {
	rfCards.value = response.data.data.content;
});

</script>

<style scoped lang="scss">
</style>
