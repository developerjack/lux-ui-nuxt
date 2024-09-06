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
	{ title: "Content", key: "type" },
	{ title: "Level", key: "level" },
	{ title: "Location", key: "locationName" },
	{ title: "Device", key: "device" },
	{ title: "Report Time", key: "reportTime" },
]);
</script>

<style scoped lang="scss">

</style>