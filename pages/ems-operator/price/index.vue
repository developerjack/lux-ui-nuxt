<template>
	<yhlx-main-container  items-url="/api/ems/price" :data-headers="headers">
		<yhlx-data-table-server :headers="headers" items-url="/api/ems/price" @click:row="(event, { item }) => router.push(`price/${item.id}`)"/>
	</yhlx-main-container>
</template>
<script setup lang="ts">
const router = useRouter();
const headers = ref([
	{ title: "Station", key: "stationName" },
	{ title: "Nord Pool", key: "nordPool" },
	{ title: "Update Time", key: "updateTime" },
]);
</script>
