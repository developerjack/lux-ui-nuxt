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
import { Random } from 'mockjs';
const router = useRouter();

const headers = ref([
	{ title: "Name", key: "name" },
	{ title: "Min", key: "min" },
	{ title: "Max", key: "max" },
	{ title: "Start Time", key: "startTime" },
	{ title: "End Time", key: "endTime" },
	{ title: "Update Time", key: "updateTime" },
	{ title: "Status", key: "status" },
	{ title: "Notes", key: "notes" },
]);
const items = ref([]);
axios.get('/api/cpo/tariff').then(response => {
	items.value = response.data.data.content;
});

function rowClick(event: PointerEvent, { item }) {
	router.push(`tariff/${item.id}`);
}

</script>
