<template>
	<yhlx-add-dialog location="Toolbar" title="Add Location">
		<template v-slot:content>
			<v-row>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Name" />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Opening Times" />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Postal Code" />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-select label="Published" :items="['yes','no']" />
				</v-col>
				<v-col cols="12" sm="6">
					<v-autocomplete
						variant="outlined"
						label="province"
						v-model="selectedProvince"
						:items="province"
						@update:search="handleProvinceChange"
					></v-autocomplete>
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-select label="City" :items="cities" />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Address" />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Directions" />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="EVSE Number" type="number"/>
				</v-col>
				<v-col cols="12" sm="6">
					<v-combobox
					variant="outlined"
					v-model="select"
					:items="items"
					label="Facilities"
					chips
					clearable
					multiple
					/>
				</v-col>
				<v-col cols="12" sm="12">
					<yhlx-text-field label="Note" />
				</v-col>
				<v-col cols="12" sm="12" class="font-weight-bold">Location:  </v-col><!--<span>{{Location}}</span>-->
				<v-col cols="12" sm="12">
					<map-container @getLocationName="getLocationName" :height="400"></map-container>
				</v-col>
			</v-row>
		</template>
	</yhlx-add-dialog>
</template>

<script setup lang="ts">
import YhlxAddDialog from "@/components/dialog/YhlxAddDialog.vue";
import YhlxTextField from "@/components/common/YhlxTextField.vue";
import YhlxSelect from "@/components/common/YhlxSelect.vue";
import MapContainer from '@/components/common/MapContainer.vue'
import { operatorNameEnums,ChineseProvince } from "@/data/data";
const select = ref(null)
const province = ref([])
const items = ref(['Hotel','Restaurant','Cafe','Mall','Supermarket','Sport','Recreation Area','Nature','Museum','Bus Stop','Taxi Stand','Train Station','Airport','Carpool Parking','Fuel Station','Wi-Fi'])
let cities = ref([])
const selectedProvince = ref()
let selectedCity = ref()
const published = ref()
const status = ref()
const handleProvinceChange = () => {
	selectedCity.value = ''
	cities.value = ChineseProvince.find(item=>item.province == selectedProvince.value).cities
	console.log()
}
const Location = ref('')
const getLocationName = (selectedAddress) => {
	Location.value = selectedAddress
}
onMounted(()=>{
	ChineseProvince.forEach(element => {
		province.value.push(element.province)
	});
})
</script>