<template>
	<yhlx-main-container :data-headers="headers">
		<template v-slot:append>
			<DialogAdd location="Toolbar"/>
		</template>
		<yhlx-data-table-server :headers="headers" items-url="/api/ems-saas/firmware" />
	</yhlx-main-container>
</template>
<script setup lang="ts">
import DialogAdd from './Add.vue';
const router = useRouter();
const headers = ref([
	{ title: "Firmware Version", key: "firmwareVersion" },
	{ title: "Firmware", key: "firmwareUrl" },
	{ title: "Update Time", key: "updateTime" },
	{ title: "Notes", key: "notes" },
]);
</script>
