<template>
	<yhlx-main-container :data-headers="headers">
		<template v-slot:append>
			<DialogAdd location="Toolbar"/>
		</template>
		<yhlx-data-table-server :headers="headers" items-url="/api/ems/location" ref="dataTableServer" @getTableItems="getTableItems">
			<template v-slot:body="{ items }">
				<tr>
					<td></td>
					<td>
						<input class="itemInput" @input="changeSearchName" v-model="searchName"/>
					</td>
					<td>
						<input class="itemInput" @input="changeSearchGatewayCount" v-model="searchgatewayCount"/>
					</td>
					<td>
						<input class="itemInput" @input="changeSearchAddress" v-model="searchAddress"/>
					</td>
					<td>
						<input class="itemInput" @input="changeSearchNotes" v-model="searchNotes"/>
					</td>
				</tr>
				<tr 
					v-for="(item, index) in items" 
					:key="index" 
				>
					<td style="width: 55px;height: 55px;">
						<v-checkbox v-model="item.isSelected" @change="handleCheckboxChange(item)"></v-checkbox>
					</td>
					<td> {{item.name}} </td>
					<td> {{item.gatewayCount}} </td>
					<td> {{item.address}} </td>
					<td> {{item.notes}} </td>
				</tr>
			</template>
		</yhlx-data-table-server>
	</yhlx-main-container>
</template>
<script setup lang="ts">
import DialogAdd from './Add.vue';
const headers = ref([
	{ title: "Name", key: "name" },
	{ title: "Gateway Count", key: "gatewayCount" },
	{ title: "Address", key: "address" },
	{ title: "Notes", key: "notes" },
]);
function getTableItems(items){
	tableList.value = items;
}
const dataTableServer = ref(null);
const tableList = ref([]);
const searchName = ref('');
const searchgatewayCount = ref('');
const searchAddress = ref('');
const searchNotes = ref('');
function changeSearchName() {
	dataTableServer.value.setTableData(tableList.value.filter(item => item.name.includes(searchName.value) ));
}
function changeSearchGatewayCount() {
	dataTableServer.value.setTableData(tableList.value.filter(item => searchgatewayCount.value === '' ? true : item.gatewayCount == searchgatewayCount.value));
}
function changeSearchAddress() {
	dataTableServer.value.setTableData(tableList.value.filter(item => item.address.includes(searchAddress.value) ));
}
function changeSearchNotes() {
	dataTableServer.value.setTableData(tableList.value.filter(item => item.notes.includes(searchNotes.value) ));
}
</script>
<style scoped>
.v-input{
	height: 56px;
}
.itemInput{
	border: 1px solid #B3B3B3;
	height: 32px;
	width: 80%;
	border-radius: 5px;
}
.itemInput:hover{
	border: 1px solid #646464;
}
</style>