<template>
	<div>
		<v-data-table :headers="headers" :items="items" :items-per-page="9999" hide-default-footer />
	</div>
</template>

<script setup lang="ts">
import moment from "moment";

const headers = ref([
	{ title: "Device", key: "device" },
	{ title: "Name", key: "name" },
	{ title: "Value", key: "value" },
	{ title: "Update Time", key: "updateTime" },
]);

const items = ref([
	{ device: '网关', name: "Ia", value: "0.0A", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '网关', name: "Ib", value: "0.0A", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '网关', name: "Ic", value: "0.0A", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '网关', name: "Ua", value: "220.0V", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '网关', name: "Ub", value: "220.0V", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '网关', name: "Uc", value: "220.0V", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '网关', name: "Pa", value: "-", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '网关', name: "Pb", value: "-", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '网关', name: "Pc", value: "-", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '网关', name: "P", value: "0.0kW", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '网关', name: "Qa", value: "0.0kWh", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '网关', name: "Qb", value: "0.0kWh", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '网关', name: "Qc", value: "0.0kWh", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '网关', name: "Q", value: "0.0kWh", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '网关', name: "PF", value: "0.01", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '网关', name: "F", value: "50Hz", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '网关', name: "EP+", value: "0.0kW", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '网关', name: "EP-", value: "0.0kW", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	
	{ device: '并网口', name: "Ia", value: "0.0A", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '并网口', name: "Ib", value: "0.0A", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '并网口', name: "Ic", value: "0.0A", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '并网口', name: "Ua", value: "220.0V", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '并网口', name: "Ub", value: "220.0V", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '并网口', name: "Uc", value: "220.0V", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '并网口', name: "Pa", value: "-", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '并网口', name: "Pb", value: "-", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '并网口', name: "Pc", value: "-", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '并网口', name: "P", value: "0.0kW", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '并网口', name: "Qa", value: "0.0kWh", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '并网口', name: "Qb", value: "0.0kWh", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '并网口', name: "Qc", value: "0.0kWh", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '并网口', name: "Q", value: "0.0kWh", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '并网口', name: "PF", value: "0.1°C", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '并网口', name: "F", value: "0.1°C", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '并网口', name: "EP+", value: "0.0kW", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '并网口', name: "EP-", value: "0.0kW", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	
	{ device: '光伏', name: "Ipv1", value: "0.0A", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '光伏', name: "Ipv2", value: "0.0A", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '光伏', name: "Ipv3", value: "0.0A", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '光伏', name: "Ipv4", value: "0.0A", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '光伏', name: "Upv1", value: "220.0V", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '光伏', name: "Upv2", value: "220.0V", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '光伏', name: "Upv3", value: "220.0V", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '光伏', name: "Upv4", value: "220.0V", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '光伏', name: "Ppv1", value: "-", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '光伏', name: "Ppv2", value: "-", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '光伏', name: "Ppv3", value: "-", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '光伏', name: "Ppv4", value: "-", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '光伏', name: "Ppv", value: "0.0kW", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '光伏', name: "日发电量", value: "100.0kWh", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	{ device: '光伏', name: "总发电量", value: "1000.0kWh", updateTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") },
	
]);

</script>
