<script setup lang="ts">
import CustomerAdd from './Add.vue';
import YhlxMainContainer from "@/components/container/YhlxMainContainer.vue";
import axios from "axios";

const headers = ref([
	{ title: "Name", key: "name" },
	{ title: "Email", key: "email", align: "start" },
  { title: "Phone number", key: "phoneNumber", sortable: false },
	{ title: "Authorizations", key: "authNumber" },
	{ title: "Status", key: "status" },
]);
const items = ref([]);
axios.get('/api/agent').then(response => {
	items.value = response.data.data.content;
});

</script>

<template>
	<yhlx-main-container>
		<template v-slot:append>
			<CustomerAdd location="Toolbar"/>
		</template>
		<v-data-table :headers="headers" :items="items" />
	</yhlx-main-container>
</template>
