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
				<v-col cols="12" class="font-weight-bold">Restrictions</v-col>
				<v-col cols="12" sm="12">
					<v-card>
						<v-tabs
						v-model="selected"
						bg-color="primary"
						>
						<v-tab v-for="(item,index) in props.demoList" :value="index" :key="index">Item {{index}}</v-tab>
						<!-- <v-tab value="two">Item 2</v-tab>
						<v-tab value="three">Item 3</v-tab>
						<v-tab value="four">Item 4</v-tab>
						<v-tab value="five">Item 5</v-tab> -->
						</v-tabs>
						<v-card-text>
							<v-window v-model="selected">
								<v-window-item v-for="(item,index) in props.demoList" :value="index" :key="index">
									<v-row>
										<v-col cols="2" class="font-weight-bold">Restrictions</v-col>
										{{item}}
										<v-col cols="10">
											<b v-if="item[0].isAble">Day:</b> {{item[0].value}} <b v-if="item[0].isAble">Time:</b>{{item[1].value}}<br/>
											<b v-if="item[2].isAble">Energy:</b>{{item[2].value}}<b v-if="item[3].isAble">Duration:</b>{{item[3].value}}<b v-if="item[4].isAble">Current:</b>{{item[4].value}}<b v-if="item[5].isAble">Power:</b>{{item[5].value}}<br/>
											<b v-if="item[6].isAble">Reservation:</b>{{item[6].value}}<br/>
										</v-col>
									</v-row>
								</v-window-item>

								<!-- <v-window-item value="two">
									<v-row>
										<v-col cols="4" class="font-weight-bold">Restrictions</v-col>
										<v-col cols="8">
											<b>Day:</b> Monday, TuesDay, Wednesday, Thursday, Friday <b>Time:</b> 00:00 to 10:00<br/>
										</v-col>
										<v-col cols="4" class="font-weight-bold">Time Price</v-col>
										<v-col cols="8">20 CNY/hour(step: 10 minute)</v-col>
										<v-col cols="4" class="font-weight-bold">ParkingTime Price</v-col>
										<v-col cols="8">5 CNY/hour(step: 30 minute)</v-col>
									</v-row>
								</v-window-item>

								<v-window-item value="three">
									<v-row>
										<v-col cols="4" class="font-weight-bold">Restrictions</v-col>
										<v-col cols="8">
											<b>Day:</b> Monday, TuesDay, Wednesday, Thursday, Friday <b>Time:</b> 10:00 to 18:00<br/>
										</v-col>
										<v-col cols="4" class="font-weight-bold">Energy Price</v-col>
										<v-col cols="8">1.8 CNY/kWh (step: 0.1 kWh)</v-col>
										<v-col cols="4" class="font-weight-bold">ParkingTime Price</v-col>
										<v-col cols="8">8 CNY/hour(step: 30 minute)</v-col>
									</v-row>
								</v-window-item>
								<v-window-item value="four">
									<v-row>
										<v-col cols="4" class="font-weight-bold">Restrictions</v-col>
										<v-col cols="8">
											<b>Day:</b> Monday, TuesDay, Wednesday, Thursday, Friday <b>Time:</b> 18:00 to 00:00<br/>
										</v-col>
										<v-col cols="4" class="font-weight-bold">Time Price</v-col>
										<v-col cols="8">20 CNY/hour(step: 10 minute)</v-col>
										<v-col cols="4" class="font-weight-bold">ParkingTime Price</v-col>
										<v-col cols="8">5 CNY/hour(step: 30 minute)</v-col>
									</v-row>
								</v-window-item>
								<v-window-item value="five">
									<v-row>
										<v-col cols="4" class="font-weight-bold">Restrictions</v-col>
										<v-col cols="8">
											<b>Day:</b> Saturday, Sunday
										</v-col>
										<v-col cols="4" class="font-weight-bold">Energy Price</v-col>
										<v-col cols="8">1.2 CNY/kWh (step: 0.1 kWh)</v-col>
										<v-col cols="4" class="font-weight-bold">ParkingTime Price</v-col>
										<v-col cols="8">5 CNY/hour(step: 30 minute)</v-col>
										<v-col cols="4" class="font-weight-bold">Time Price</v-col>
										<v-col cols="8">20 CNY/hour(step: 10 minute)</v-col>
									</v-row>
								</v-window-item> -->
							</v-window>
						</v-card-text>
						<v-card-text class="text-center">
							<yhlx-btn 
								business-type="Close"
								variant="text"
								@click="removeItem"
							>Remove Tab</yhlx-btn>
							<v-divider
								class="mx-4"
								vertical
							></v-divider>
							<yhlx-btn 
								business-type="Primary"
								variant="text"
								@click="openDialog"
							>Add Tab</yhlx-btn>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
		</template>
	</yhlx-add-dialog>
</template>

<script setup lang="ts">
import YhlxAddDialog from "@/components/dialog/YhlxAddDialog.vue";
import YhlxTextField from "@/components/common/YhlxTextField.vue";
import YhlxSelect from "@/components/common/YhlxSelect.vue";
import YhlxBtn from "@/components/common/YhlxBtn.vue";
import { operatorNameEnums } from "@/data/data";
const emits = defineEmits(['openDialog','removeItem'])
const props = defineProps({
	demoList: {
    type: Array,
    default: () => [],
  },
})
const selected = ref('')
watch(selected,()=>{
	console.log(selected)
})
const removeItem = () => {
	emits('removeItem',selected)
}
const openDialog = () => {
	emits('openDialog')
}
</script>
<style lang="scss" scoped>
.bg-primary{
	background-color: white !important;
	color: black !important;
}
</style>