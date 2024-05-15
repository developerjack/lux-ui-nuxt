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
const router = useRouter()
const headers = ref([
	{ title: "Name", key: "name" },
	{ title: "Type", key: "belongType" },
	{ title: "Role", key: "roles" },
	{ title: "Status", key: "status" },
	{ title: "Notes", key: "notes" },
]);
const items = ref([]);
axios.get('/api/saas/network').then(response => {
	items.value = response.data.data.content;
});

const rowClick = (event,{item}) => {
	router.push(`network/${item.id}`);
}
</script>
