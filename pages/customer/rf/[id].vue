<template>
	<yhlx-main-container>
		<div class="h-full overflow-auto">
			<v-expansion-panels v-model="panel" multiple="true" class="px-4 py-6">
				<v-expansion-panel title="Details">
					<template v-slot:text>
						<v-row class="info">
							<v-col cols="2" class="font-weight-bold">
								ID Tag
							</v-col>
							<v-col cols="10">
								9F5D4F8C
							</v-col>
							<v-col cols="2" class="font-weight-bold">
								Card Name
							</v-col>
							<v-col cols="10">
								Li's Card
							</v-col>
							<v-col cols="2" class="font-weight-bold">
								Customer Email
							</v-col>
							<v-col cols="10">
								liyh@iocharger.com
							</v-col>
							<v-col cols="2" class="font-weight-bold">
								Customer Name
							</v-col>
							<v-col cols="10">
								Li Yuanhan
							</v-col>
							<v-col cols="2" class="font-weight-bold">
								Expiry Time
							</v-col>
							<v-col cols="10">
								2024-12-01
							</v-col>
							<v-col cols="2" class="font-weight-bold">
								Status
							</v-col>
							<v-col cols="10">
								Enable
							</v-col>
						</v-row>
					</template>
				</v-expansion-panel>
				<v-expansion-panel title="Transactions">
					<template v-slot:text>
						<v-data-table
							style="flex: 1;"
							:headers="headers"
							:items="desserts"
							:items-per-page="itemsPerPage">
							<template v-slot:bottom>
								<div class="text-center pt-2 pb-4">
									<v-pagination v-model="page" :length="pageCount"></v-pagination>
								</div>
							</template>
						</v-data-table>
					</template>
				</v-expansion-panel>
			</v-expansion-panels>
		</div>
	</yhlx-main-container>
</template>

<script setup lang="ts">
import YhlxMainContainer from "@/components/container/YhlxMainContainer.vue";
import axios from "axios";

const panel = ref([0, 1]);

const total = ref(0);
const itemsPerPage = ref(10);
const headers = ref([
	{ title: "Transaction Id", key: "transactionId" },
	{ title: "Location", key: "locationName" },
	{ title: "Charging Station", key: "chargingStationName" },
	{ title: "Energy", key: "energy" },
	{ title: "Start Time", key: "startTime" },
	{ title: "End Time", key: "endTime" },
]);
const desserts = ref([]);
const pageCount = computed(() => {
	return Math.ceil(total.value / itemsPerPage.value);
});

axios.get('/api/transaction').then(response => {
	const data = response.data.data;
	total.value = data.total;
	desserts.value = data.content;
});

</script>

<style scoped lang="scss">
.info {
	padding: 20px 12px;
	.v-col {
		padding: 4px;
	}
}
</style>
