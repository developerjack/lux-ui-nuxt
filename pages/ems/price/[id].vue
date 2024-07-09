<script setup lang="ts">
import CoefficientDialog from './components/coefficientDialog.vue'
import timePriceChart from './components/timePriceChart.vue'
const selected = ref('one')
const coefficientDialog = ref()
const timeInput = ref()
const rowList = ref([{
  id: 0,
  value: '',
  timeRange: ''
}])
watch(rowList,() => {
  formatterSeries()
},{ deep: true })
const series = ref([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
function getTimeRange ({item, value}) {
  value.sort((a, b) => a - b)
  item.timeRange = value // 第一次修改timeRange
}
function openDialog () {
  coefficientDialog.value.changeDialog()
}
function addRowList () {
  const index = rowList.value.length
  rowList.value.push({
    id: index,
    value: '',
    timeRange: ''
  })
}
function minusRowList (id) {
  rowList.value.forEach((item,index) => {
    if (item.id === id) {
      rowList.value.splice(index, 1)
      return
    }
  })
}
function formatterSeries () {
  rowList.value.forEach((item,index) => { // 遍历表单,将item中的value填到item.timeRange与series对应的index上
    if (item.timeRange !== '') {
      for (let i = item.timeRange[0]; i <= item.timeRange[1]; i++) {
        series.value[i] = Number(item.value)
      }
    } else {
      series.value.forEach((element, index) => {
        series.value[index] = Number(item.value)
      })
    }
  })
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

    <v-card-text v-if="selected === 'one'">
      <div class="form-chart-box">
        <div class="form-box">
          <v-row>
            <v-col cols="12" class="time-price-box" v-for="item in rowList" :key="item.id">
              <yhlx-check-time-input ref="timeInput" :timeRange="item" @getTimeRange="getTimeRange"/>
              <yhlx-text-field v-model="item.value"/>
              <v-btn icon="mdi-plus" size="small" @click="addRowList"></v-btn>
              <v-btn icon="mdi-minus" size="small" @click="minusRowList(item.id)" :disabled="rowList.length === 1" ></v-btn>
            </v-col>
          </v-row>
        </div>
        <div class="chart-box">
          <timePriceChart :series="series"/>
        </div>
      </div>
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
.form-chart-box{
  display: flex;
  .form-box{
    width: 30%;
    display: flex;
    .v-row{
      height: 72px;
    }
    .time-price-box{
      display: flex;
      .v-text-field{
        margin: 0 8px;
      }
    }
  }

  .chart-box{
    width: 70%;
    margin-left: 16px;
  }
}

</style>