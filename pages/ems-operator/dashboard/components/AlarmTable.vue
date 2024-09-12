<template>
	<v-card title="Alarm">
		<v-divider />
		<yhlx-data-table-server :headers="headers" items-url="/api/ems/alarm/dashboard"
		                        :search="false" :show-select="false" :items-per-page="5" density="comfortable"
		                        @click:row="(event, { item }) => router.push(`alarm/${item.id}`)" />
	</v-card>
</template>

<script setup lang="ts">
const router = useRouter();
const headers = ref([
	{ title: "Name", key: "name" },
	{ title: "Station", key: "stationName" },
	{ title: "Device", key: "device" },
	{ title: "Type", key: "type" },
	{ title: "Report Time", key: "reportTime" },
]);
</script>

<style scoped lang="scss">

</style>