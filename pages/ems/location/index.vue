<template>
	<yhlx-main-container :data-headers="headers">
		<template v-slot:append>
			<DialogAdd location="Toolbar"/>
		</template>
		<yhlx-data-table-server :headers="headers" items-url="/api/ems/location" ref="dataTableServer" @getTableItems="getTableItems" class="emsLocationTable">
			<template v-slot:body.prepend>
				<tr>
					<td></td>
					<td class="search-input" v-show="headers[0].show !== ''">
						<v-text-field variant="outlined" class="itemInput" v-model="searchName" clearable/>
					</td>
					<td class="search-input" v-show="headers[1].show !== ''">
						<v-autocomplete
							v-model="searchgatewayCount"
							:items="[...new Set(tableList.map(item => item.gatewayCount))]"
							variant="outlined"
							clearable
						></v-autocomplete>
					</td>
					<td class="search-input" v-show="headers[2].show !== ''">
						<yhlx-time-input :multiple="false" @getPickTime="getPickTime" clearable/>
					</td>
					<td class="search-input" v-show="headers[3].show !== ''">
						<yhlx-time-input :multiple="true" @getPickTime="getPickTime" clearable/>
					</td>
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
function getPickTime(value) {
	console.log(value)
}
watch(searchName,() => {
		console.log(searchName.value)
		dataTableServer.value.setTableData(tableList.value.filter(item => item.name.includes(searchName.value) || searchName.value === null));
	}
)
watch(searchgatewayCount,() => {
	dataTableServer.value.setTableData(tableList.value.filter(item => item.gatewayCount === searchgatewayCount.value || searchgatewayCount.value === null));
})
</script>
<style lang="scss">
.emsLocationTable{
	.search-input{
		.v-input{
			height: 32px !important;
			.v-input__details{
				display: none;
			}
			.v-field{
				.v-field__field{
					height: 32px;
				}
				.v-field__input{
					min-height: 32px !important;
				}
				--v-field-input-padding-top: 0;
				--v-field-input-padding-bottom: 0;
			}
		}
	}
}
</style>