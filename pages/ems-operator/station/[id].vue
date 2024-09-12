<template>
	<yhlx-main-container>
		<v-tabs v-model="tab">
			<v-tab value="1">Overview</v-tab>
      <v-tab value="2">Data Report</v-tab>
			<v-tab value="3">Info</v-tab>
			<v-tab value="4">Price</v-tab>
			<v-tab value="5">Strategy</v-tab>
		</v-tabs>
		<v-card-text>
			<v-tabs-window v-model="tab">
				<v-tabs-window-item value="1">
					<data-analysis />
				</v-tabs-window-item>
				<v-tabs-window-item value="2">
					<run-report />
				</v-tabs-window-item>
				<v-tabs-window-item value="3">
					<v-row>
						<v-col cols="2" class="font-weight-bold">Name</v-col>
						<v-col cols="4">Software park</v-col>
						<v-col cols="2" class="font-weight-bold">Address</v-col>
						<v-col cols="4">China FuJian Xiamen JiMei software park</v-col>
						<v-col cols="2" class="font-weight-bold">Gateway Count</v-col>
						<v-col cols="4">7</v-col>
						<v-col cols="2" class="font-weight-bold">Device Count</v-col>
						<v-col cols="4">17</v-col>
						<v-col cols="2" class="font-weight-bold">Notes</v-col>
						<v-col cols="10">This is test location.</v-col>
					</v-row>
				</v-tabs-window-item>
				<v-tabs-window-item value="4">
					<price />
				</v-tabs-window-item>
				<v-tabs-window-item value="5">
					<OperationStrategy />
				</v-tabs-window-item>
			</v-tabs-window>
		</v-card-text>
	</yhlx-main-container>
</template>

<script setup lang="ts">
import OperationStrategy from "./components/OperationStrategy.vue"
import RunReport from "./components/RunReport.vue"
import Price from "./components/Price.vue"
import DataAnalysis from "./components/DataAnalysis.vue"
const tab = ref('2');

</script>

<style scoped lang="scss">
</style>
