<template>
	<yhlx-main-container :data-headers="headers">
		<template v-slot:append>
			<DialogAdd location="Toolbar"/>
		</template>
		<yhlx-data-table-server :headers="headers" items-url="/api/ems-saas/device-model" />
	</yhlx-main-container>
</template>
<script setup lang="ts">
import DialogAdd from './Add.vue';
const headers = ref([
	{ title: "Model", key: "model" },
	{ title: "Firmware", key: "firmwareVersion" },
	{ title: "Notes", key: "notes" },
]);
</script>
