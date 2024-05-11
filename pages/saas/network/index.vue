<template>
	<yhlx-main-container>
		<template v-slot:append>
			<DialogAdd location="Toolbar"/>
		</template>
		<v-data-table :headers="headers" :items="items" />
	</yhlx-main-container>
</template>
<script setup lang="ts">
import DialogAdd from './Add.vue';
import YhlxMainContainer from "@/components/container/YhlxMainContainer.vue";
import axios from "axios";

const headers = ref([
	{ title: "Name", key: "name" },
	{ title: "Type", key: "networkType" },
	{ title: "Network Type", key: "networkType" },
	{ title: "Description", key: "description" },
]);
const items = ref([]);
axios.get('/api/saas/network').then(response => {
	items.value = response.data.data.content;
});

</script>
