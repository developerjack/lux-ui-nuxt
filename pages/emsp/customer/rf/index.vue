<template>
	<yhlx-main-container :items="headItems">
		<template v-slot:append>
			<DialogAdd/>
		</template>
		<v-data-table :headers="headers" :items="items" @click:row="rowClick">
		</v-data-table>
	</yhlx-main-container>
</template>

<script setup lang="ts">
import DialogAdd from './Add.vue';
import axios from "axios";
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();
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
const arr = ref([])
watch(appStore.Columns,()=>{
	console.log(appStore.Columns)
	headers.value = []
	appStore.Columns.forEach(item=>{
		const index = arr.value.findIndex(header=>header.key===item)
		if(index !==-1){
			arr.value[index].index = index
			headers.value.push(arr.value[index])
		}
	})
	headers.value.sort((a, b) => a.index - b.index)
})
function rowClick(event: PointerEvent, { item }) {
	router.push(`rf/${item.idTag}`);
}
const headItems = ref([])
onMounted(()=>{
	arr.value = headers.value
	headers.value.forEach(item=>{
		headItems.value.push({
			text:item.title,
			value:item.key
		})
	})
})
</script>

<style scoped lang="scss"></style>
