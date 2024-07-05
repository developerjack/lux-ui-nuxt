<template>
	<yhlx-main-container :data-headers="headers">
		<template v-slot:append>
			<yhlx-btn business-type="Add" location="Toolbar" density="comfortable" @click="router.push(`home-price/add`)">Add</yhlx-btn>
		</template>
		<yhlx-data-table-server :headers="headers" items-url="/api/ems/home-price" />
	</yhlx-main-container>
</template>
<script setup lang="ts">
const router = useRouter();
const headers = ref([
	{ title: "Name", key: "name" },
	{ title: "Update Time", key: "updateTime" },
	{ title: "Status", key: "status" },
]);
</script>
