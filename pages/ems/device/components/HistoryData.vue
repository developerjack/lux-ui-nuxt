<template>
	<div>
		<v-data-table :headers="headers" :items="items" :items-per-page="9999" hide-default-footer>
			<template v-slot:item.time="{ item }">
				{{ timeFormat(item.time) }}
			</template>
		</v-data-table>
	</div>
</template>

<script setup lang="ts">

import axios from "axios";

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

axios.get("/api/ems/device/history").then(response => {
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
