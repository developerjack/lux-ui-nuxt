<template>
	<yhlx-main-container :data-headers="headItems">
		<template v-slot:append>
			<DialogAdd location="Toolbar"/>
		</template>
		<v-data-table :headers="headers" :items="items" @click:row="rowClick" />
	</yhlx-main-container>
</template>
<script setup lang="ts">
import DialogAdd from './Add.vue';
import YhlxMainContainer from "@/components/container/YhlxMainContainer.vue";
import axios from "axios";
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();
const router = useRouter()
const headers = ref([
	{ title: "Name", key: "name" },
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
const arr = ref([])
watch(appStore.Columns,()=>{
	headers.value = []
	appStore.Columns.forEach(item=>{
		const index = arr.value.findIndex(header=>header.key===item)
		if(index !==-1){
			arr.value[index].index = index
			headers.value.push(arr.value[index])
		}
		headers.value.sort((a, b) => a.index - b.index)
	})
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
const rowClick = (event,{item}) => {
	router.push(`network/${item.id}`)
}
const openDrawer = () => {
	appStore.setAddDrawer(true)
}
</script>
