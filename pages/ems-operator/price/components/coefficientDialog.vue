<script setup lang="ts">
interface formType {
  [key: string]: {
    value: string,
    label: string,
    description: string,
  }
}
const form:{ [key: string]: string } = reactive({})
function getFormData() {
  Object.keys(formList).forEach(item => {
    form[item] = formList[item].value
  })
}
const formList: formType = reactive({
  gridEnergyPrice: {
    value: '',
    label: '光伏发电电价比例（%）',
    description: '默认值为100，与电网电价对比'
  },
  PVEnergyPrice: {
    value: '',
    label: '储能充电电价比例（%）',
    description: '默认值为100，与电网电价对比'
  },
  batteryChargingEnergy: {
    value: '',
    label: '储能放电电价比例（%）',
    description: '默认值为100，与电网电价对比'
  },
  batteryDischargingEnergy: {
    value: '',
    label: '充电桩充电电价比例（%）',
    description: '默认值为100，与电网电价对比'
  }
})
defineExpose({
  getFormData
})
</script>

<template>
  <v-row class="form">
    <template v-for="key of formList" :key="key.label">
      <v-col cols="6" >
        <yhlx-text-field :label="key.label" v-model="key.value"/>
      </v-col>
      <v-col cols="6">{{ key.description }}</v-col>
    </template>
  </v-row>
</template>

<style scoped lang="scss">
</style>