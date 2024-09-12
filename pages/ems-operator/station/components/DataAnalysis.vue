<script setup lang="ts">
import axios from "axios";

const menuOpen = ref([0]);
const menuItems = ref(['PV','Battery','Charging Station','On The Grid']);
watch(menuOpen,()=>{
  console.log(menuOpen.value)
})
</script>

<template>
  <div class="d-flex">
    <v-list class="left px-1 py-4" v-model:selected="menuOpen">
      <v-list-item v-for="(item, i) in menuItems" :key="i" :value="i" color="primary">
        <v-list-item-title class="font-weight-bold" v-text="item" />
        <template v-if="item.tag" v-slot:append>
          <v-chip label density="comfortable" color="primary">{{ item.tag }}</v-chip>
        </template>
      </v-list-item>
    </v-list>
    <div class="window-item-inner-right">
      <img v-if="menuOpen[0] === 0" src="@/assets/images/PVAnalysis.png">
      <img v-if="menuOpen[0] === 1" src="@/assets/images/BatteryAnalysis.png">
      <img v-if="menuOpen[0] === 2" src="@/assets/images/ChargingStationAnalysis.png">
      <img v-if="menuOpen[0] === 3" src="@/assets/images/GridAnalysis.png">
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

.window-item-inner-right {
  flex: 1;
  overflow: auto;
}

</style>