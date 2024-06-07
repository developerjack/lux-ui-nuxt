<template>
	<yhlx-main-container :data-headers="headers">
		<template v-slot:append>
			<DialogAdd location="Toolbar"/>
		</template>
		<yhlx-data-table :headers="headers" items-url="/api/ems/device" @click:row="item => router.push(`device/${item.id}`)" />
	</yhlx-main-container>
</template>
<script setup lang="ts">
import DialogAdd from './Add.vue';
const router = useRouter();
const headers = ref([
	{ title: "Serial Number", key: "serialNumber" },
	{ title: "Location", key: "location" },
	{ title: "Model", key: "model" },
	{ title: "Firmware Version", key: "firmwareVersion" },
	{ title: "Last Connect", key: "lastConnectTime" },
	{ title: "Status", key: "status" },
	{ title: "Notes", key: "notes" },
]);
</script>
