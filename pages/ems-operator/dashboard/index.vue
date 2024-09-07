<template>
  <v-row class="pa-4 pb-0">
    <v-col class="pa-2" cols="12" lg="12">
	    <Overview />
    </v-col>
	  <v-col class="pa-2" cols="12" lg="4">
		  <Installation />
	  </v-col>
	  <v-col class="pa-2" cols="12" lg="8">
		  <DataLine />
	  </v-col>
    <v-col class="pa-2" cols="12" lg="4">
      <DeviceStatus />
    </v-col>
    <v-col class="pa-2" cols="12" lg="8">
      <AlarmTable />
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import Overview from "./components/Overview.vue";
import Installation from "./components/Installation.vue";
import DataLine from "./components/PowerLineChart.vue";
import DeviceStatus from "./components/DeviceStatus.vue";
import AlarmTable from "./components/AlarmTable.vue";
</script>

<style scoped lang="scss">
</style>
