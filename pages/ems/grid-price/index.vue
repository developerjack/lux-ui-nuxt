<template>
	<yhlx-main-container :data-headers="headers">
		<template v-slot:append>
			<DialogAdd location="Toolbar"/>
		</template>
		<yhlx-data-table-server :headers="headers" items-url="/api/ems/grid-price" />
	</yhlx-main-container>
</template>
<script setup lang="ts">
import DialogAdd from './Add.vue';
const headers = ref([
	{ title: "Name", key: "name" },
	{ title: "Update Time", key: "updateTime" },
	{ title: "Status", key: "status" },
]);
</script>
