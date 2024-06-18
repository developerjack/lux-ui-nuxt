<template>
	<yhlx-main-container :data-headers="headers">
		<yhlx-data-table-server :headers="headers" items-url="/api/ems/alarm" @click:row="(event, { item }) => router.push(`alarm/${item.id}`)" />
	</yhlx-main-container>
</template>
<script setup lang="ts">
const router = useRouter();
const headers = ref([
	{ title: "Content", key: "type" },
	{ title: "Level", key: "level" },
	{ title: "Location", key: "locationName" },
	{ title: "Gateway", key: "gateway" },
	{ title: "Device", key: "device" },
	{ title: "Report Time", key: "reportTime" },
	{ title: "Status", key: "status" },
]);
</script>
