<script setup lang="ts">
import CoefficientDialog from './components/coefficientDialog.vue'
const selected = ref('')
const coefficientDialog = ref()
function openDialog() {
  coefficientDialog.value.changeDialog()
}
</script>

<template>
  <yhlx-main-container :key="$route.fullPath">
    <div class="check-box">
      <v-radio-group inline hide-details v-model="selected">
        <v-radio label="固定电网电价" value="one" color="primary"></v-radio>
        <v-radio label="现货市场电价" value="two" color="primary"></v-radio>
      </v-radio-group>
      <v-btn color="primary" @click="openDialog">设置金额系数</v-btn>
    </div>

    <v-card-text>

    </v-card-text>
    <CoefficientDialog ref="coefficientDialog"/>
  </yhlx-main-container>
</template>

<style scoped lang="scss">
.check-box{
  display: flex;
  padding: 8px;
  justify-content: normal;
  .v-checkbox{
    margin-right: 16px;
    .v-label{
      height: 25px;
    }
  }
}
</style>