<template>
	<yhlx-main-container>
		<yhlx-card class="ma-4" title="Dashboard">
			运营商相关的统计数据，比如站点数量，设备数量等
		</yhlx-card>
		<yhlx-card class="ma-4" title="Info">
			<v-row>
				<v-col cols="2" class="font-weight-bold">Name</v-col>
				<v-col cols="4">Iocharger</v-col>
				<v-col cols="2" class="font-weight-bold">Country</v-col>
				<v-col cols="4">China</v-col>
				<v-col cols="2" class="font-weight-bold">Country Code</v-col>
				<v-col cols="4">CN</v-col>
				<v-col cols="2" class="font-weight-bold">Currency</v-col>
				<v-col cols="4">China Yuan</v-col>
				<v-col cols="2" class="font-weight-bold">Type</v-col>
				<v-col cols="4">Operator</v-col>
				<v-col cols="2" class="font-weight-bold">Expiry Time</v-col>
				<v-col cols="4">2025-02-18</v-col>
				<v-col cols="2" class="font-weight-bold">Status</v-col>
				<v-col cols="4">Enable</v-col>
			</v-row>
		</yhlx-card>
		<yhlx-card class="ma-4" title="Secondary Operator" density="compact">
			<yhlx-data-table-server :headers="headers" items-url="/api/ems-saas/operator" />
		</yhlx-card>
	</yhlx-main-container>
</template>

<script setup lang="ts">
import axios from "axios";

const headers = ref([
	{ title: "Name", key: "name" },
	{ title: "Expiry Time", key: "expiryTime" },
	{ title: "Status", key: "status" },
]);
const items = ref([]);
axios.get("/api/ems-saas/operator").then(response => {
	items.value = response.data.data.content;
});
</script>

<style scoped lang="scss">
</style>
