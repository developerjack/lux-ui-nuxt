<template>
	<div class="d-flex">
		<v-list class="left px-1 py-4" v-model:selected="menuOpen">
			<v-list-item v-for="(item, i) in menuItems" :key="i" :value="i" color="primary">
				<v-list-item-title class="font-weight-bold" v-text="item.title" />
				<template v-if="item.tag" v-slot:append>
					<v-chip label density="comfortable" color="primary">{{ item.tag }}</v-chip>
				</template>
			</v-list-item>
		</v-list>
		<div class="right">
			<v-data-table :headers="headers" :items="items" :items-per-page="9999" hide-default-footer />
		</div>
	</div>
</template>

<script setup lang="ts">
import axios from "axios";

const menuOpen = ref([0]);
const menuItems = ref([]);
axios.get("/api/ems/sub-device").then(response => {
	menuItems.value = response.data.data.content;
});

const headers = ref([
	{ title: "Name", key: "name" },
	{ title: "Value", key: "value" },
	{ title: "Update Time", key: "updateTime" },
]);
const items = ref([]);
axios.get("/api/ems/sub-device/real").then(response => {
	items.value = response.data.data.content;
});

</script>

<style scoped lang="scss">
.d-flex {
	border: 1px solid rgba(0, 0, 0, 0.12);
}
.left {
	width: 240px;
	border-right: 1px solid rgba(0, 0, 0, 0.12);
}

.right {
	flex: 1;
	overflow: auto;
}

</style>

