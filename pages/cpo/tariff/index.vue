<template>
	<yhlx-main-container>
		<template v-slot:append>
			<DialogAdd location="Toolbar" @openDialog="openDialog" :demoList="demoList" @removeItem="removeItem(index)"/>
		</template>
		<v-dialog v-model="dialog" max-width="800" max-height="600">
			<v-card class="overflow-auto">
				<v-container>
					<v-card-text>
						<v-row class="d-flex pa-4">
							<v-col cols="12" sm="12" style="display: flex" v-for="item in restrictionsList" :key="item.label">
								<v-checkbox-btn
								v-model="item.isAble"
								class="pe-2"
								></v-checkbox-btn>
								<v-text-field	
								:disabled="!item.isAble"
								:label="item.label"
								v-model="item.value"
								hide-details
								></v-text-field>
							</v-col>
						</v-row>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<yhlx-btn business-type="Close" variant="text" @click="dialog = false">Close</yhlx-btn>
						<yhlx-btn business-type="Primary" @click="save">Save</yhlx-btn>
					</v-card-actions>
				</v-container>
			</v-card>
		</v-dialog>
		<v-data-table :headers="headers" :items="items" @click:row="rowClick"/>
	</yhlx-main-container>
</template>

<script setup lang="ts">
import DialogAdd from './Add.vue';
import YhlxMainContainer from "@/components/container/YhlxMainContainer.vue";
import YhlxBtn from "@/components/common/YhlxBtn.vue";
import axios from "axios";
import { Random } from 'mockjs';
const router = useRouter();
const dialog = ref(false)
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
const restrictionsList = reactive([{label:'Day',value:'', isAble:false},
	{label:'Time',value:'', isAble:false },
	{label:'Energy',value:'', isAble:false },
	{label:'Duration',value:'', isAble:false },
	{label:'Current',value:'', isAble:false },
	{label:'Power',value:'', isAble:false },
	{label:'Reservation',value:'', isAble:false },
	{label:'Energy Price',value:'', isAble:false },
	{label:'Flat Price',value:'', isAble:false },
	{label:'ParkingTime Price',value:'', isAble:false },
	{label:'Time Price',value:'', isAble:false },
])
const demoList = reactive([])
const items = ref([]);
axios.get('/api/cpo/tariff').then(response => {
	items.value = response.data.data.content;
});
const save = ()=> {
	console.log(restrictionsList)
	demoList.push(restrictionsList)
	
	dialog.value = false
}
const openDialog = ()=> {
	dialog.value = true
}
const removeItem = (index)=> {
	demoList.splice(index,1)
}
function rowClick(event: PointerEvent, { item }) {
	router.push(`tariff/${item.id}`);
}

</script>
