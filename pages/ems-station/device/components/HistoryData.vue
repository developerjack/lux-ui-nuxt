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
		<div class="window-item-inner-right">
			<v-data-table :headers="headers" :items="items" :items-per-page="9999" hide-default-footer>
				<template v-slot:item.time="{ item }">
					{{ timeFormat(item.time) }}
				</template>
			</v-data-table>
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
	{ title: "", key: "id", width: 50 },
	{ title: "Time", key: "time" },
	{ title: "Ia(A)", key: "ia" },
	{ title: "Ib(A)", key: "ib" },
	{ title: "Ic(A)", key: "ic" },
	{ title: "Ua(V)", key: "ua" },
	{ title: "Ub(V)", key: "ub" },
	{ title: "Uc(V)", key: "uc" },
	{ title: "Pa(kW)", key: "pa" },
	{ title: "Pb(kW)", key: "pb" },
	{ title: "Pc(kW)", key: "pc" },
	{ title: "P(kW)", key: "p" },
	{ title: "Qa(kWh)", key: "qa" },
	{ title: "Qb(kWh)", key: "qb" },
	{ title: "Qc(kWh)", key: "qc" },
	{ title: "Q(kWh)", key: "q" },
	{ title: "PF", key: "pf" },
	{ title: "F(Hz)", key: "f" },
	{ title: "Ep+(kWh)", key: "ep+" },
	{ title: "Ep-(kWh)", key: "ep-" },
]);
const items = ref([]);
axios.get("/api/ems/sub-device/history").then(response => {
	items.value = response.data.data.content;
});

function timeFormat(time:number): String {
	let hour:number = Math.floor(time / 60);
	let min:number = Math.floor(time % 60)
	const hourStr = hour > 9 ? hour : "0" + hour;
	const minStr = min > 9 ? min : "0" + min;
	return hourStr + ":" + minStr;
}
</script>

<style scoped lang="scss">
.d-flex {
	border: 1px solid rgba(0, 0, 0, 0.12);
}
.left {
	width: 240px;
	border-right: 1px solid rgba(0, 0, 0, 0.12);
}

.window-item-inner-right {
	flex: 1;
	overflow: auto;
}

</style>
