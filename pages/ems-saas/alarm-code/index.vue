<template>
	<yhlx-main-container :data-headers="headers">
		<template v-slot:append>
			<DialogAdd location="Toolbar"/>
		</template>
		<yhlx-data-table-server :headers="headers" items-url="/api/ems-saas/alarm-code" />
	</yhlx-main-container>
</template>
<script setup lang="ts">
import DialogAdd from './Add.vue';
const router = useRouter();
const headers = ref([
	{ title: "Code", key: "code" },
	{ title: "Name", key: "name" },
	{ title: "Device Type", key: "deviceType" },
	{ title: "Alarm Type", key: "alarmType" },
]);
</script>
