<template>
	<yhlx-main-container>
<!--		<v-expansion-panels v-model="panel" :multiple="true" class="px-4 py-6">-->
<!--			<v-expansion-panel title="Details">-->
<!--				<template v-slot:text>-->
<!--					<v-row>-->
<!--						<v-col cols="2" class="font-weight-bold">Serial Number</v-col>-->
<!--						<v-col cols="4">IOC24001</v-col>-->
<!--						<v-col cols="2" class="font-weight-bold">Location</v-col>-->
<!--						<v-col cols="4">Xiamen</v-col>-->
<!--						<v-col cols="2" class="font-weight-bold">Model</v-col>-->
<!--						<v-col cols="4">IOC_Store</v-col>-->
<!--						<v-col cols="2" class="font-weight-bold">Firmware version</v-col>-->
<!--						<v-col cols="4">2024010128</v-col>-->
<!--						<v-col cols="2" class="font-weight-bold">First Connect</v-col>-->
<!--						<v-col cols="4">2024-01-01 22:22:22</v-col>-->
<!--						<v-col cols="2" class="font-weight-bold">Last Connect</v-col>-->
<!--						<v-col cols="4">2024-02-28 12:23:32</v-col>-->
<!--						<v-col cols="2" class="font-weight-bold">Status</v-col>-->
<!--						<v-col cols="4">Activated</v-col>-->
<!--					</v-row>-->
<!--				</template>-->
<!--			</v-expansion-panel>-->
<!--		</v-expansion-panels>-->
		
		<v-card style="margin: 8px;">
			<v-tabs
				v-model="tab"
				bg-color="primary"
				slider-color="primary"
			>
				<v-tab value="one">Item One</v-tab>
				<v-tab value="two">Item Two</v-tab>
				<v-tab value="three">Item Three</v-tab>
			</v-tabs>
			
			<v-card-text>
<!--				<v-tabs-window v-model="tab">-->
<!--					<v-tabs-window-item value="one">-->
<!--						One-->
<!--					</v-tabs-window-item>-->
<!--					-->
<!--					<v-tabs-window-item value="two">-->
<!--						Two-->
<!--					</v-tabs-window-item>-->
<!--					-->
<!--					<v-tabs-window-item value="three">-->
<!--						Three-->
<!--					</v-tabs-window-item>-->
<!--				</v-tabs-window>-->
				测试
			</v-card-text>
		</v-card>
	</yhlx-main-container>
</template>

<script setup lang="ts">
const panel = ref([0, 1]);
const tab = ref('');
</script>

<style scoped lang="scss">

</style>
