<template>
	<yhlx-main-container>
		<template v-slot:append>
			<DialogAdd location="Toolbar"/>
		</template>
		<v-data-table :headers="headers" :items="items" @click:row="rowClick">
			<template v-slot:item.status="{ value }">
				<v-chip
					:color="value=='Enable' ? 'green' : 'red'"
					class="text-uppercase"
					size="small"
					label
				>{{ value }}</v-chip>
			</template>
		</v-data-table>
	</yhlx-main-container>
</template>
<script setup lang="ts">
import DialogAdd from './Add.vue';
import YhlxMainContainer from "@/components/container/YhlxMainContainer.vue";
import axios from "axios";
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

const rowClick = (event,{item}) => {
	router.push(`operator/${item.id}`)
}

</script>
