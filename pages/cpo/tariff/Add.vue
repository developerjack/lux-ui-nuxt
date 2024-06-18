<template>
	<yhlx-add-dialog location="Toolbar" title="Add Tariff">
		<template v-slot:content>
			<v-row>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Name" />
				</v-col>
				<v-col cols="12" sm="6"/>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Min Cost" />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Max Cost" />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Start Time" type="date" />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="End Time" type="date"/>
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Update Time" type="date"/>
				</v-col>
				<v-col cols="12" sm="12">
					<yhlx-text-field label="Notes" />
				</v-col>
				<v-col cols="12" class="font-weight-bold">Restrictions And Price</v-col>
				<v-col cols="12" sm="12">
					<v-card>
						<v-tabs
						v-model="selected"
						bg-color="primary"
						>
						<v-tab v-for="(item,index) in props.demoList" :value="index" :key="index">Item {{index}}</v-tab>
						</v-tabs>
						<v-card-text>
							<v-window v-model="selected">
								<v-window-item v-for="(item,index) in props.demoList" :value="index" :key="index">
									<v-row>
										<v-col cols="4" class="font-weight-bold">Restrictions</v-col>
										<v-col cols="8">
											<b v-if="item[0].start !='' && item[0].end != ''">Day:</b><span class="restriction-item">{{item[0].value}}</span> 
											<b v-if="item[1].start !='' && item[1].end != ''">Time:</b><span class="restriction-item">{{getFinalString(item[1])}}</span><br/>
											<b v-if="item[2].start !='' && item[2].end != ''">Energy:</b><span class="restriction-item">{{getFinalString(item[2])}}</span>
											<b v-if="item[3].start !='' && item[3].end != ''">Duration:</b><span class="restriction-item">{{getFinalString(item[3])}}</span><br/>
											<b v-if="item[4].start !='' && item[4].end != ''">Current:</b><span class="restriction-item">{{getFinalString(item[4])}}</span>
											<b v-if="item[5].start !='' && item[5].end != ''">Power:</b><span class="restriction-item">{{getFinalString(item[5])}}</span><br/>
											<b v-if="item[6].start !='' && item[6].end != ''">Reservation:</b><span class="restriction-item">{{item[6].start}}</span>
											<b v-if="item[6].start !='' && item[6].end != ''">Expires:</b><span class="restriction-item">{{item[6].end }}</span> <!-- + ' ' + item[6].suffix-->
										</v-col>
										<v-col cols="4" class="font-weight-bold" v-if="item[7].value !=''">Energy Price</v-col>
										<v-col cols="8"  v-if="item[7].value !=''">{{item[7].value + ' ' + item[7].suffix + ' (step: 0.1 kWh)'}}</v-col>
										<v-col cols="4" class="font-weight-bold" v-if="item[8].value !=''">Flat Price</v-col>
										<v-col cols="8"  v-if="item[8].value !=''">{{item[8].value + ' ' + item[8].suffix}}</v-col>
										<v-col cols="4" class="font-weight-bold" v-if="item[9].value !=''">ParkingTime Price</v-col>
										<v-col cols="8" v-if="item[9].value !=''">{{item[9].value + ' ' + item[9].suffix + ' (step: 30 minute)'}}</v-col>
										<v-col cols="4" class="font-weight-bold" v-if="item[10].value !=''">Time Price</v-col>
										<v-col cols="8" v-if="item[10].value !=''">{{item[10].value + ' ' + item[10].suffix + ' (step: 10 minute)'}}</v-col>
									</v-row>
								</v-window-item>
							</v-window>
						</v-card-text>
						<v-card-text class="text-center">
							<yhlx-btn 
								business-type="Close"
								variant="text"
								@click="removeItem"
							>Remove Item</yhlx-btn>
							<v-divider
								class="mx-4"
								vertical
							></v-divider>
							<yhlx-btn 
								business-type="Primary"
								variant="text"
								@click="openDialog"
							>Add Item</yhlx-btn>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
		</template>
	</yhlx-add-dialog>
</template>

<script setup lang="ts">
import { operatorNameEnums } from "@/data/data";
const emits = defineEmits(['openDialog','removeItem'])
const props = defineProps({
	demoList: {
    type: Array,
    default: () => [],
  },
})
const selected = ref(0)
watch(props.demoList,()=>{
	console.log('props.demoList',props.demoList)
	selected.value = 0
})
const removeItem = () => {
	emits('removeItem',selected.value)
}
const openDialog = () => {
	emits('openDialog')
}
const getFinalString = (obj)=>{
	return obj.start !='' && obj.end != '' ? obj.start + ' to ' + obj.end + ' ' + obj.suffix : ''
}
</script>
<style lang="scss" scoped>
.bg-primary{
	background-color: white !important;
	color: black !important;
}
.restriction-item{
	display: inline-block;
	width: 100px;
}
b{
	display: inline-block !important;
	width: 90px;
}
</style>