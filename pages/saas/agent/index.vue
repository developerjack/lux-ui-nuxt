<script setup lang="ts">
import DialogAdd from './Add.vue';
import YhlxMainContainer from "@/components/container/YhlxMainContainer.vue";
import axios from "axios";

const router = useRouter();

const headers = ref([
	{ title: "Name", key: "name" },
	{ title: "Email", key: "email", align: "start" },
  { title: "Phone Number", key: "phoneNumber", sortable: false },
	{ title: "Authorizations", key: "authNumber" },
	{ title: "Status", key: "status" },
]);
const items = ref([]);
axios.get('/api/agent').then(response => {
	items.value = response.data.data.content;
});

function rowClick(event: PointerEvent, { item }) {
	router.push(`agent/${item.id}`);
}

</script>

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
