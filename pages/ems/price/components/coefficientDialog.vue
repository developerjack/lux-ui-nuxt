<script setup lang="ts">
const coefficientDialog = ref(false)

function changeDialog() {
  coefficientDialog.value = !coefficientDialog.value
}
const formList = reactive({
  gridEnergyPrice: {
    value: '',
    label: '1',
    description: ''
  },
  PVEnergyPrice: {
    value: '',
    label: '2',
    description: ''
  },
  batteryChargingEnergy: {
    value: '',
    label: '3',
    description: ''
  },
  batteryDischargingEnergy: {
    value: '',
    label: '4',
    description: ''
  },
  batterySchedulingFee: {
    value: '',
    label: '5',
    description: ''
  },
  batteryServiceFee: {
    value: '',
    label: '6',
    description: ''
  },
  stationServiceFee: {
    value: '',
    label: '7',
    description: ''
  },
})
defineExpose({
  changeDialog,
})
</script>

<template>
  <v-dialog
      v-model="coefficientDialog"
      persistent
      max-width="800"
      max-height="600"
  >
    <v-card class="overflow-auto">
      <v-container>
        <v-card-title>
          <span class="text-h5">Handle Alarm</span>
        </v-card-title>
        <v-divider class="mx-4 my-3" />
        <v-card-text>
          <v-row class="form">
            <template v-for="key of formList" :key="key.label">
              <v-col cols="12" sm="6" >
                <yhlx-text-field :label="key.label" v-model="key.value"/>
              </v-col>
              <v-col cols="12" sm="6" class="description">{{ key.description }}</v-col>
            </template>

<!--            <v-col-->
<!--                cols="12"-->
<!--                sm="6"-->
<!--            >-->
<!--              <yhlx-text-field label="光伏电价折扣" v-model="form.PVEnergyPrice"/>-->
<!--            </v-col>-->
<!--            <v-col cols="12" sm="6" class="description">默认值为100,与电网电价对比</v-col>-->
<!--            <v-col-->
<!--                cols="12"-->
<!--                sm="6"-->
<!--            >-->
<!--              <yhlx-text-field label="光伏电价折扣" v-model="form.PVEnergyPrice"/>-->
<!--            </v-col>-->
<!--            <v-col cols="12" sm="6" class="description">默认值为100,与电网电价对比</v-col>-->
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <yhlx-btn business-type="Close" variant="text" @click="changeDialog">Close</yhlx-btn>
          <yhlx-btn business-type="Primary" @click="changeDialog">Save</yhlx-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss">
.discription{
  line-height: 48px;
}
</style>