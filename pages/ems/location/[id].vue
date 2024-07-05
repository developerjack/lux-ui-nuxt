<template>
	<yhlx-main-container>
		<v-tabs v-model="tab">
			<v-tab value="1">Overview</v-tab>
			<v-tab value="2">Info</v-tab>
			<v-tab value="3">Devices</v-tab>
      <v-tab value="4">Data Report</v-tab>
		</v-tabs>
		<v-card-text>
			<v-tabs-window v-model="tab">
				<v-tabs-window-item value="1">
          <img src="../../../assets/images/homeBgImg.png">
				</v-tabs-window-item>
				<v-tabs-window-item value="2">
					<v-row>
						<v-col cols="2" class="font-weight-bold">Name</v-col>
						<v-col cols="4">Software park</v-col>
						<v-col cols="2" class="font-weight-bold">Address</v-col>
						<v-col cols="4">China FuJian Xiamen JiMei software park</v-col>
						<v-col cols="2" class="font-weight-bold">Gateway Count</v-col>
						<v-col cols="4">7</v-col>
						<v-col cols="2" class="font-weight-bold">Device Count</v-col>
						<v-col cols="4">17</v-col>
						<v-col cols="2" class="font-weight-bold">Status</v-col>
						<v-col cols="10">Activated</v-col>
						<v-col cols="2" class="font-weight-bold">Notes</v-col>
						<v-col cols="10">This is test location.</v-col>
					</v-row>
				</v-tabs-window-item>
				<v-tabs-window-item value="3">
					<devices />
				</v-tabs-window-item>
        <v-tabs-window-item value="4">
          <DataReport></DataReport>
        </v-tabs-window-item>
			</v-tabs-window>
		</v-card-text>
	</yhlx-main-container>
</template>

<script setup lang="ts">
import Devices from "./components/Devices.vue";
import DataReport from "./components/DataReport.vue"
const tab = ref('2');

</script>

<style scoped lang="scss">
img{
  width: 100%;
}
</style>
