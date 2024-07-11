<template>
	<yhlx-main-container :items="headItems">
		<template v-slot:append>
			<DialogAdd location="Toolbar"/>
		</template>
		<v-data-table :headers="headers" :items="items" @click:row="rowClick"/>
	</yhlx-main-container>
</template>

<script setup lang="ts">
import DialogAdd from './Add.vue';
import axios from "axios";
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();
const router = useRouter();
const arr = ref([])
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
watch(appStore.Columns,()=>{
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
