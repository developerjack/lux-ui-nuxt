<template>
	<yhlx-main-container>
		<template v-slot:append>
			<DialogAdd location="Toolbar"/>
		</template>
		<v-data-table :headers="headers" :items="items" @click:row="rowClick"/>
	</yhlx-main-container>
</template>

<script setup lang="ts">
import DialogAdd from './Add.vue';
import YhlxMainContainer from "@/components/container/YhlxMainContainer.vue";
import axios from "axios";
const router = useRouter();

const headers = ref([
	{ title: "CPO", key: "operatorName" },
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

function rowClick(event: PointerEvent, { item }) {
	router.push(`agreement/${item.id}`);
}

</script>
