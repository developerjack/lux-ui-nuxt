<script setup lang="ts">
// const form:{ [key: string]: string } = reactive({})
// function saveForm() {
//   Object.keys(formList).forEach(item => {
//
//     form[item] = formList[item].value
//     console.log(form)
//   })
//   changeDialog()
// }
const formList = reactive({
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
</script>

<template>
  <v-row class="form">
    <template v-for="key of formList" :key="key.label">
      <v-col cols="12" sm="6" >
        <yhlx-text-field :label="key.label" v-model="key.value"/>
      </v-col>
      <v-col cols="12" sm="6" class="description">{{ key.description }}</v-col>
    </template>
  </v-row>
</template>

<style scoped lang="scss">
.description{
  line-height: 32px;
}
</style>