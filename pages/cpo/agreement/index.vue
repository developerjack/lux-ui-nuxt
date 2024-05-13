<script setup lang="ts">
import DialogAdd from './Add.vue';
import YhlxMainContainer from "@/components/container/YhlxMainContainer.vue";
import axios from "axios";

const headers = ref([
	{ title: "eMSP Name", key: "emspName" },
	{ title: "eMSP Network", key: "emspNetworkName" },
	{ title: "Contact", key: "contactName" },
	{ title: "Contact Email", key: "contactEmail" },
	{ title: "Contact Phone", key: "contactPhone" },
	{ title: "Valid From", key: "validFrom" },
	{ title: "Valid To", key: "validTo" },
]);
const items = ref([]);
axios.get('/api/agreement').then(response => {
	items.value = response.data.data.content;
});

</script>

<template>
	<yhlx-main-container>
		<template v-slot:append>
			<DialogAdd location="Toolbar"/>
		</template>
		<v-data-table :headers="headers" :items="items" />
	</yhlx-main-container>
</template>
