<template>
	<yhlx-main-container :data-headers="headers">
		<yhlx-data-table-server :headers="headers" items-url="/api/common/operation-log" />
	</yhlx-main-container>
</template>
<script setup lang="ts">
const headers = ref([
	{ title: "Account", key: "account" },
	{ title: "Email", key: "email", align: "start" },
	{ title: "Module", key: "module" },
	{ title: "Operation", key: "operation" },
	{ title: "Ip", key: "ip" },
	{ title: "Operation Time", key: "operationTime" },
]);
</script>
