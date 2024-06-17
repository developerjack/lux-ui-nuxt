<template>
	<yhlx-main-container :data-headers="headers">
		<yhlx-data-table-server :headers="headers" items-url="/api/ems/device" @click:row="(event, { item }) => router.push(`device/${item.id}`)" />
	</yhlx-main-container>
</template>
<script setup lang="ts">
const router = useRouter();
const headers = ref([
	{ title: "Location", key: "location" },
	{ title: "Gateway Serial Number", key: "gatewaySerialNumber" },
	{ title: "Gateway Name", key: "gatewayName" },
	{ title: "Model", key: "model" },
]);
</script>
