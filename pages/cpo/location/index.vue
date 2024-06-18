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
import axios from "axios";
const router = useRouter();

const headers = ref([
	{ title: "Name", key: "name" },
	{ title: "EVSE Number", key: "evseNumber" },
	{ title: "state", key: "state" },
	{ title: "city", key: "city" },
	{ title: "Address", key: "address" },
	{ title: "Published", key: "published" },
	{ title: "Status", key: "status" },
]);
const items = ref([]);
axios.get('/api/cpo/location').then(response => {
	items.value = response.data.data.content;
});

function rowClick(event: PointerEvent, { item }) {
	router.push(`location/${item.id}`);
}

</script>
