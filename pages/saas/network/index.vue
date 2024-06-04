<template>
	<yhlx-main-container :data-headers="headers">
		<template v-slot:append>
			<DialogAdd location="Toolbar"/>
		</template>
		<yhlx-data-table :headers="headers" :items="items" @click:row="rowClick" />
	</yhlx-main-container>
</template>
<script setup lang="ts">
import DialogAdd from './Add.vue';
import YhlxMainContainer from "@/components/container/YhlxMainContainer.vue";
import YhlxDataTable from "@/components/common/YhlxDataTable.vue";
import axios from "axios";
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();
const router = useRouter()
const headers = ref([
	{ title: "Name", key: "name", show: "" },
	{ title: "Country", key: "countryName" },
	{ title: "Party ID", key: "partyId" },
	{ title: "Currency", key: "currency" },
	{ title: "Role", key: "role" },
	{ title: "Expiry Time", key: "expiryTime" },
	{ title: "Status", key: "status" },
]);
const items = ref([]);

axios.get('/api/saas/operator').then(response => {
	items.value = response.data.data.content;
});

const rowClick = (event,{item}) => {
	router.push(`network/${item.id}`);
}

</script>
