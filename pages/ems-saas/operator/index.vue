<template>
	<yhlx-main-container :data-headers="headers">
		<template v-slot:append>
			<DialogAdd location="Toolbar"/>
		</template>
		<yhlx-data-table-server :headers="headers" items-url="/api/ems-saas/operator" @click:row="(event, { item }) => router.push(`operator/${item.id}`)" />
	</yhlx-main-container>
</template>
<script setup lang="ts">
import DialogAdd from './Add.vue';
const router = useRouter();
const headers = ref([
	{ title: "Name", key: "name" },
	{ title: "Country", key: "countryName" },
	{ title: "Currency", key: "currency" },
	{ title: "Type", key: "type" },
	{ title: "Expiry Time", key: "expiryTime" },
	{ title: "Status", key: "status" },
]);
</script>
