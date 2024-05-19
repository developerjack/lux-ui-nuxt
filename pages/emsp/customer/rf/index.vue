<template>
	<yhlx-main-container>
		<template v-slot:append>
			<DialogAdd/>
		</template>
		<v-data-table :headers="headers" :items="items" @click:row="rowClick">
		</v-data-table>
	</yhlx-main-container>
</template>

<script setup lang="ts">
import YhlxMainContainer from "@/components/container/YhlxMainContainer.vue";
import DialogAdd from './Add.vue';
import axios from "axios";

const router = useRouter();
const headers = ref([
	{ title: "ID Tag", key: "idTag" },
	{ title: "Card Name", key: "name", align: "start" },
	{ title: "Customer Email", key: "customerEmail" },
	{ title: "Customer Name", key: "customerName" },
	{ title: "Expiry Time", key: "expiryTime", sortable: false },
	{ title: "Status", key: "status" },
]);
const items = ref([]);
axios.get('/api/rf').then(response => {
	items.value = response.data.data.content;
});

function rowClick(event: PointerEvent, { item }) {
	router.push(`rf/${item.idTag}`);
}
</script>

<style scoped lang="scss"></style>
