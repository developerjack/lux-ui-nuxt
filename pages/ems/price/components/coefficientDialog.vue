<script setup lang="ts">
const coefficientDialog = ref(false)

function changeDialog() {
  coefficientDialog.value = !coefficientDialog.value
}
const form:{ [key: string]: string } = reactive({})
function saveForm() {
  Object.keys(formList).forEach(item => {

    form[item] = formList[item].value
    console.log(form)
  })
  changeDialog()
}
const formList:{ [key: string]: object } = reactive({
  gridEnergyPrice: {
    value: '',
    label: '上网电价',
    description: ''
  },
  PVEnergyPrice: {
    value: '',
    label: '光伏电价折扣',
    description: '默认值为100，与电网电价对比'
  },
  batteryChargingEnergy: {
    value: '',
    label: '储能充电价价格比例（%）',
    description: '默认值为100，与电网电价对比'
  },
  batteryDischargingEnergy: {
    value: '',
    label: '储能放电价格折扣',
    description: '默认值为100，与电网电价对比'
  },
  batterySchedulingFee: {
    value: '',
    label: '储能调度服务费',
    description: "(1)在谷时电价时段利用储能放电，收取的服务费。\n(2)在尖峰和峰时电价时段不收服务费。"
  },
  batteryServiceFee: {
    value: '',
    label: '储能备电服务费',
    description: ''
  },
  stationServiceFee: {
    value: '',
    label: '充电桩充电服务费',
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
          <span class="text-h5">设置金额系数</span>
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
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <yhlx-btn business-type="Close" variant="text" @click="changeDialog">Close</yhlx-btn>
          <yhlx-btn business-type="Primary" @click="saveForm">Save</yhlx-btn>
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