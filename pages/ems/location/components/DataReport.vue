<script setup lang="ts">
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();
const menuOpen = ref([0])
const menuItems = ref([{
  title: "Location",
  tag: ""
},{
  title: "PV",
  tag: ""
},{
  title: "Battery",
  tag: ""
},{
  title: "charging Station",
  tag: ""
}])
const headers = [{
  title: 'Time',
  value: "time"
},{
  title: "PV Self-consumption",
  align: "center",
  children: [{
    title: "Sharp power",
    value: "selfSharpPower"
  },{
    title: "Peak power",
    value: "selfPeakPower"
  },{
    title: "Flat power",
    value: "selfFlatPower"
  },{
    title: "Valley power",
    value: "selfValleyPower"
  }]
},{
  title: "PV on-grid electricity",
  align: "center",
  children: [{
    title: "Sharp power",
    value: "onSharpPower"
  },{
    title: "Peak power",
    value: "onPeakPower"
  },{
    title: "Flat power",
    value: "onFlatPower"
  },{
    title: "Valley power",
    value: "onValleyPower"
  }]
}]
</script>

<template>
  <div class="d-flex">
    <v-list class="left px-1 py-4" v-model:selected="menuOpen">
      <v-list-item v-for="(item, i) in menuItems" :key="i" :value="i" color="primary">
        <v-list-item-title class="font-weight-bold" v-text="item.title" />
        <template v-if="item.tag" v-slot:append>
          <v-chip label density="comfortable" color="primary">{{ item.tag }}</v-chip>
        </template>
      </v-list-item>
    </v-list>
    <div class="window-item-inner-right" :style="{ 'height': !appStore.isFullScreen ? 'calc(100vh - 224px)' : 'calc(100vh - 163px)' }">
      <v-data-table :headers="headers" hide-default-footer></v-data-table>
    </div>
  </div>
</template>

<style scoped lang="scss">
.d-flex {
  border: 1px solid rgba(0, 0, 0, 0.12);
}
.left {
  width: 240px;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
}
.window-item-inner-right{
  flex: 1;
  height: calc(100vh - 224px) !important;
}
</style>