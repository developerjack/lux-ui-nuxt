<template>
		<v-dialog v-model="props.dialog" max-width="800" max-height="600">
			<v-card class="overflow-auto">
				<v-container>
					<v-card-text>
						<v-row class="d-flex pa-4">
                            <v-col cols="12" sm="12" style="font-size:20px" class="font-weight-bold">Restrictions</v-col>
							<v-col cols="12" sm="6" style="display: flex">
								<yhlx-select
                                style="width:80px !important"
								:label="restrictionsList[0].label"
								v-model="restrictionsList[0].value"
                                :items="restrictionsList[0].items"
								hide-details
								></yhlx-select>
							</v-col>
                            <v-col cols="12" sm="12" style="display: flex">
								<v-text-field
                                    style="width:80px !important"
                                    variant="outlined"
                                    v-model="restrictionsList[1].start"
                                    :active="menu2"
                                    hide-details
                                    :focus="menu2"
                                    :label="restrictionsList[1].label + ' Start'"
                                    >
                                    <v-menu
                                        v-model="menu2"
                                        :close-on-content-click="false"
                                        activator="parent"
                                        transition="scale-transition"
                                    >
                                        <v-time-picker
                                        v-if="menu2"
                                        v-model="restrictionsList[1].start"
                                        full-width
                                        :title="restrictionsList[1].label"
                                        format="24hr"
                                        min="00:00"
                                        max="23:59"
                                        ></v-time-picker>
                                    </v-menu>
                                </v-text-field>
                                <span class="between">~</span>
                                <v-text-field
                                    style="width:80px !important"
                                    variant="outlined"
                                    v-model="restrictionsList[1].end"
                                    :active="menu3"
                                    hide-details
                                    :focus="menu3"
                                    :label="restrictionsList[1].label + ' End'"
                                    readonly
                                    >
                                    <v-menu
                                        v-model="menu3"
                                        :close-on-content-click="false"
                                        activator="parent"
                                        transition="scale-transition"
                                    >
                                        <v-time-picker
                                        v-if="menu3"
                                        v-model="restrictionsList[1].end"
                                        full-width
                                        :title="restrictionsList[1].label"
                                        format="24hr"
                                        min="00:00"
                                        max="23:59"
                                        ></v-time-picker>
                                    </v-menu>
                                </v-text-field>
							</v-col>
                            <v-col cols="12" sm="12" style="display: flex" v-for="(item,index) in restrictionsList.slice(2,7)" :key="index">
                                <v-text-field
                                    style="width:80px !important"
                                    variant="outlined"
                                    type="number"
                                    v-model="item.start"
                                    :label="item.label=='Reservation'?'Reservation':item.label + ' End'"
                                    :suffix="item.suffix"
                                    hide-details
                                ></v-text-field>
                                <span class="between">~</span>
                                <v-text-field
                                    style="width:80px !important"
                                    variant="outlined"
                                    type="number"
                                    :suffix="item.suffix"
                                    v-model="item.end"
                                    :label="item.label=='Reservation'?'Expires':item.label + ' End'"
                                    hide-details
                                ></v-text-field>
							</v-col>
                            <v-col cols="12" sm="12" style="font-size:20px" class="font-weight-bold">Price</v-col>
                            <v-col cols="12" sm="6" style="display: flex" v-for="(item,index) in restrictionsList.slice(7)" :key="index">
                                <v-text-field
                                    style="width:80px !important"
                                    variant="outlined"
                                    type="number"
                                    v-model="item.value"
                                    :label="item.label"
                                    :suffix="item.suffix"
                                    hide-details
                                ></v-text-field>
                            </v-col>
						</v-row>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<yhlx-btn business-type="Close" variant="text" @click="emit('close')">Close</yhlx-btn>
						<yhlx-btn business-type="Primary" @click="save">Save</yhlx-btn>
					</v-card-actions>
				</v-container>
			</v-card>
		</v-dialog>
</template>

<script setup lang="ts">
import YhlxBtn from "@/components/common/YhlxBtn.vue";
import YhlxSelect from "@/components/common/YhlxSelect.vue";
import { VTimePicker } from 'vuetify/labs/VTimePicker'
const props = defineProps({
    dialog:{
        type:Boolean,
        default:false
    }
})
const emit = defineEmits(['save','close'])
const restrictionsList = reactive([{label:'Day',value:'', isAble:false, items:[
    { title: 'Monday', value: 'Monday' },
    { title: 'Tuesday', value: 'Tuesday' },
    { title: 'Wednesday', value: 'Wednesday' },
    { title: 'Thursday', value: 'Thursday' },
    { title: 'Friday', value: 'Friday' },
    { title: 'Saturday', value: 'Saturday' },
    { title: 'Sunday', value: 'Sunday' }
]},
	{label:'Time',start:'',end:'', isAble:false },
	{label:'Energy',start:'',end:'', isAble:false, suffix:'kWh' },
	{label:'Duration',start:'',end:'', isAble:false, suffix:'hour' },
	{label:'Current',start:'',end:'', isAble:false, suffix:'A' },
	{label:'Power',start:'',end:'', isAble:false, suffix:'kW' },
	{label:'Reservation', start:'', end:'', isAble:false, suffix:'hour' },
	{label:'Energy Price',value:'', isAble:false, suffix:'CNY/kWh' },
	{label:'Flat Price',value:'', isAble:false, suffix:'CNY' },
	{label:'ParkingTime Price',value:'', isAble:false, suffix:'CNY/hour' },
	{label:'Time Price',value:'', isAble:false, suffix:'CNY/hour' },
])
const menu2 = ref(false)
const menu3 = ref(false)
const save = ()=> {
    emit('save',[...restrictionsList])
	restrictionsList.forEach(element => {
		if( !element.start ){
            element.start = ''
            element.end = ''
        }else{
            element.value = ''
        }
		element.isAble = false
    })
}
</script>
<style lang="scss" scoped>
.between{
    margin-top: 16px;
    font-size: 32px;
}
</style>