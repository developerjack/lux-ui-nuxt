<script setup lang="ts">
interface ItemType {
  type: string;
  sharpPower: number;
  peakPower: number;
  flatPower: number;
  valleyPower: number;
  totalPower: number;
  proceeds: number;
}
const headers = ref([{
  title: "Type",
  value: "type"
},{
  title: "Sharp power",
  value: "sharpPower"
},{
  title: "Peak power",
  value: "peakPower"
},{
  title: "Flat power",
  value: "flatPower"
},{
  title: "Valley power",
  value: "valleyPower"
},{
  title: "Total Power",
  value: "totalPower"
},{
  title: "Proceeds",
  value: "proceeds"
}])
const items = ref<{ [key: string]: ItemType }>({
  selfPV: {
    type: "光伏自用",
    sharpPower: 12,
    peakPower: 54,
    flatPower: 45,
    valleyPower: 76,
    totalPower: 187,
    proceeds: 455
  },
  onPV: {
    type: "光伏上网",
    sharpPower: 12,
    peakPower: 54,
    flatPower: 45,
    valleyPower: 76,
    totalPower: 187,
    proceeds: 455
  },
  selfBattery: {
    type: "储能自用",
    sharpPower: 12,
    peakPower: 54,
    flatPower: 45,
    valleyPower: 76,
    totalPower: 187,
    proceeds: 455
  },
  onBattery: {
    type: "储能上网",
    sharpPower: 12,
    peakPower: 54,
    flatPower: 45,
    valleyPower: 76,
    totalPower: 187,
    proceeds: 455
  },
  selfStation: {
    type: "充电桩自用",
    sharpPower: 12,
    peakPower: 54,
    flatPower: 45,
    valleyPower: 76,
    totalPower: 187,
    proceeds: 455
  },
  onStation: {
    type: "充电桩上网",
    sharpPower: 12,
    peakPower: 54,
    flatPower: 45,
    valleyPower: 76,
    totalPower: 187,
    proceeds: 455
  }
})

</script>

<template>
  <div>
    <v-data-table :headers="headers" hide-default-footer>
      <template v-slot:body>
        <tr v-for="key in Object.keys(items)">
          <td>{{items[key].type}}</td>
          <td>{{items[key].sharpPower}}</td>
          <td>{{items[key].peakPower}}</td>
          <td>{{items[key].flatPower}}</td>
          <td>{{items[key].valleyPower}}</td>
          <td>{{items[key].totalPower}}</td>
          <td>{{items[key].proceeds}}</td>
        </tr>
      </template>
    </v-data-table>
    <div>
      <v-row class="proceeds-row">
        <v-col cols="2">
          光伏综合收益
        </v-col>
        <v-col cols="2">
          910
        </v-col>
        <v-col cols="2">
          储能差价收益
        </v-col>
        <v-col cols="2">
          910
        </v-col>
        <v-col cols="2">
          电站综合收益
        </v-col>
        <v-col cols="2">
          910
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style scoped lang="scss">
.v-data-table{
  border-bottom: 1px solid #E0E0E0;
}
.proceeds-row{

}
</style>