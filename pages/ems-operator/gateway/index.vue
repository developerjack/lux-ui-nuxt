<template>
	<yhlx-main-container :data-headers="headers">
		<template v-slot:append>
			<DialogAdd location="Toolbar"/>
		</template>
		<yhlx-data-table-server :headers="headers" items-url="/api/ems/gateway" />
	</yhlx-main-container>
</template>
<script setup lang="ts">
import DialogAdd from './Add.vue';
const router = useRouter();
const headers = ref([
	{ title: "Serial Number", key: "serialNumber" },
	{ title: "Name", key: "name" },
	{ title: "Station", key: "station" },
	{ title: "Model", key: "model" },
	{ title: "Firmware Version", key: "firmwareVersion" },
	{ title: "Last Connect", key: "lastConnectTime" },
	{ title: "Status", key: "status" },
	{ title: "Notes", key: "notes" },
]);
</script>
