<template>
	<yhlx-main-container :data-headers="headers">
		<template v-slot:append>
			<DialogAdd location="Toolbar"/>
		</template>
		<yhlx-data-table-server :headers="headers" items-url="/api/saas/network" @click:row="item => router.push(`network/${item.id}`)" />
	</yhlx-main-container>
</template>
<script setup lang="ts">
import DialogAdd from './Add.vue';
const router = useRouter();
const headers = ref([
	{ title: "Name", key: "name" },
	{ title: "Type", key: "belongType" },
	{ title: "Role", key: "roles" },
	{ title: "Status", key: "status" },
	{ title: "Notes", key: "notes" },
]);
</script>
