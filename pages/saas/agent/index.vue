<template>
	<yhlx-main-container :data-headers="headers">
		<template v-slot:append>
			<DialogAdd location="Toolbar"/>
		</template>
		<yhlx-data-table :headers="headers" items-url="/api/agent" @click:row="item => router.push(`agent/${item.id}`)" />
	</yhlx-main-container>
</template>
<script setup lang="ts">
import DialogAdd from './Add.vue';
const router = useRouter();
const headers = ref([
	{ title: "Name", key: "name" },
	{ title: "Email", key: "email", align: "start" },
	{ title: "Phone Number", key: "phoneNumber", sortable: false },
	{ title: "Authorizations", key: "authNumber" },
	{ title: "Status", key: "status" },
]);
</script>
