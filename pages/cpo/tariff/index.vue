<template>
	<yhlx-main-container>
		<template v-slot:append>
			<DialogAdd location="Toolbar" @openDialog="openDialog" :demoList="demoList" @removeItem="removeItem"/>
		</template>
		<yhlx-reservation-dialog :dialog="ReDialog" @save="save" @close="close"></yhlx-reservation-dialog>
		<v-data-table :headers="headers" :items="items" @click:row="rowClick"/>
	</yhlx-main-container>
</template>

<script setup lang="ts">
import DialogAdd from './Add.vue';
import axios from "axios";
import { Random } from 'mockjs';
const router = useRouter();
const ReDialog = ref(false)
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
const demoList = ref([])
demoList.value.push([{label:'Day',value:'Monday'},
	{label:'Time',start:'0:00',end:'11:00', suffix:'' },
	{label:'Energy',start:'0',end:'20', suffix:'kWh' },
	{label:'Duration',start:'0',end:'1', suffix:'hour' },
	{label:'Current',start:'0',end:'32', suffix:'A' },
	{label:'Power',start:'0',end:'14', suffix:'kW' },
	{label:'Reservation',start:'Reservation', end:'Expires', suffix:'hour' },
	{label:'Energy Price',value:'1.2', suffix:'CNY/kWh' },
	{label:'Flat Price',value:'10', suffix:'CNY' },
	{label:'ParkingTime Price',value:'5', suffix:'CNY/hour' },
	{label:'Time Price',value:'20', suffix:'CNY/hour' },
])
onMounted(()=>{
	console.log('demoList',demoList)
})
const items = ref([]);
const save = (value)=> {
	demoList.value.push(value.map(obj => ({ ...obj })))
	ReDialog.value = false
}
const openDialog = ()=> {
	ReDialog.value = true
}
const removeItem = (index)=> {
	console.log(index)
	demoList.value.splice(index,1)
}
const close = ()=>{
	ReDialog.value = false
}
function rowClick(event: PointerEvent, { item }) {
	router.push(`tariff/${item.id}`);
}

</script>
