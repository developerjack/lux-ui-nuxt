<template>
	<yhlx-main-container>
		<v-expansion-panels v-model="panel" multiple="true" class="px-4 py-6">
			<v-expansion-panel title="Details">
				<template v-slot:text>
					<v-row>
						<v-col cols="2" class="font-weight-bold">Name</v-col>
						<v-col cols="10">Xiamen Park Location</v-col>
						<v-col cols="2" class="font-weight-bold">Opening Times</v-col>
						<v-col cols="10">Workday 9:00～18:00</v-col>
						<v-col cols="10" offset="2">Holiday 16:00～24:00</v-col>
						<v-col cols="2" class="font-weight-bold">Facilities</v-col>
						<v-col cols="10">Hotel, Restaurant, Cafe, Mall, Supermarket, Sport, Bus Stop, Parking Lot, Fuel Station, Wifi</v-col>
						<v-col cols="2" class="font-weight-bold">Postal Code</v-col>
						<v-col cols="10">361021</v-col>
						<v-col cols="2" class="font-weight-bold">Address</v-col>
						<v-col cols="10">中国 福建省 厦门市 集美区软件园3期商场1楼</v-col>
						<v-col cols="2" class="font-weight-bold">Directions</v-col>
						<v-col cols="10">集美市民公园往软件园方向，大约一公里，道路左侧，最高的建筑旁。</v-col>
						<v-col cols="2" class="font-weight-bold">Published</v-col>
						<v-col cols="4">Yes</v-col>
						<v-col cols="2" class="font-weight-bold">Status</v-col>
						<v-col cols="4">Enable</v-col>
						<v-col cols="2" class="font-weight-bold">Notes</v-col>
						<v-col cols="10">This is charging location biggest in China.</v-col>
						
					</v-row>
				</template>
			</v-expansion-panel>
		</v-expansion-panels>
	</yhlx-main-container>
</template>

<script setup lang="ts">
import YhlxMainContainer from "@/components/container/YhlxMainContainer.vue";
import axios from "axios";

const panel = ref([0]);

</script>

<style scoped lang="scss">
</style>
