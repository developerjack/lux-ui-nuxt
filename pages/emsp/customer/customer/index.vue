<template>
	<yhlx-main-container :items="headItems">
		<template v-slot:append>
			<DialogAdd location="Toolbar"/>
		</template>
		<v-data-table :headers="headers" :items="tableList" @click:row="rowClick">
			<template
				v-slot:body="{ items }"
			>
				<tr>
					<td>
						<v-text-field variant="underlined" label="Label" @input="changeSearchName" v-model="searchName"/>
					</td>
					<td>
						<v-text-field variant="underlined" label="Label" @input="changeSearchEmail" v-model="searchEmail"/>
					</td>
					<td> 3 </td>
					<td> 4 </td>
					<td>
						<v-select
							variant="underlined"
							label="Select"
							:items="['Disable', 'Enable']"
							v-model="searchStatus"
							clearable
						></v-select>
					</td>
				</tr>
					<tr 
						v-for="(item, index) in items" 
						:key="index" 
					>
						<td> {{item.name}} </td>
						<td> {{item.email}} </td>
						<td> {{item.phoneNumber}} </td>
						<td> {{item.age}} </td>
						<td> {{item.status}} </td>
					</tr>
			</template>
		</v-data-table>
	</yhlx-main-container>
</template>

<script setup lang="ts">
import DialogAdd from './Add.vue';
import axios from "axios";
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();
const router = useRouter();

// 用户列表
const headers = ref([
	{ title: "Name", key: "name" },
	{ title: "Email", key: "email", align: "start" },
	{ title: "Phone Number", key: "phoneNumber", sortable: false },
	{ title: "Age", key: "age" },
	{ title: "Status", key: "status" },
]);
const items = ref([]);
axios.get('/api/customer').then(response => {
	items.value = response.data.data.content;
	tableList.value = items.value;
});
function rowClick(event: PointerEvent, { item }) {
	router.push(`customer/${item.id}`);
}
const tableList = ref([])
const searchName = ref('')
function changeSearchName() {
	tableList.value = items.value.filter(item => item.name.includes(searchName.value))
}
const searchEmail = ref('')
function changeSearchEmail() {
	tableList.value = items.value.filter(item => item.email.includes(searchEmail.value))
}
const searchStatus = ref('')
watch(searchStatus,()=>{
	tableList.value = items.value.filter(item => item.status.includes(searchStatus.value || ''))
})
const arr = ref([])
watch(appStore.Columns,()=>{
	console.log(appStore.Columns)
	headers.value = []
	appStore.Columns.forEach(item=>{
		const index = arr.value.findIndex(header=>header.key===item)
		if(index !==-1){
			arr.value[index].index = index
			headers.value.push(arr.value[index])
		}
	})
	headers.value.sort((a, b) => a.index - b.index)
})
const headItems = ref([])
onMounted(()=>{
	arr.value = headers.value
	headers.value.forEach(item=>{
		headItems.value.push({
			text:item.title,
			value:item.key
		})
	})
})
</script>