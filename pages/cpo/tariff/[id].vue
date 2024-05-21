<template>
	<yhlx-main-container>
		<div class="h-full overflow-auto">
			<v-expansion-panels v-model="panel" multiple="true" class="px-4 py-6">
				<v-expansion-panel title="Details">
					<template v-slot:text>
						<v-row>
							<v-col cols="2" class="font-weight-bold">Name</v-col>
							<v-col cols="4">Xiamen Park Tariff</v-col>
							<v-col cols="6"></v-col>
							<v-col cols="2" class="font-weight-bold">Min Cost</v-col>
							<v-col cols="4">10</v-col>
							<v-col cols="2" class="font-weight-bold">Max Cost</v-col>
							<v-col cols="4">40</v-col>
							<v-col cols="2" class="font-weight-bold">Start Time</v-col>
							<v-col cols="4">2020-10-01 00:00:00</v-col>
							<v-col cols="2" class="font-weight-bold">End Time</v-col>
							<v-col cols="4">Indefinite</v-col>
							<v-col cols="2" class="font-weight-bold">Update Time</v-col>
							<v-col cols="4">2024-10-01 00:00:00</v-col>
							<v-col cols="2" class="font-weight-bold">Status</v-col>
							<v-col cols="4">Enable</v-col>
							<v-col cols="2" class="font-weight-bold">Notes</v-col>
							<v-col cols="10">This is the tariff of China Fujian Xiamen Park. It includes the reservation price. The price for each session of the working day. The price is the same for each session on the weekend. Attention please, the tariff described are tax inclusive.</v-col>
						</v-row>
						<v-row>
							<v-col cols="12">---- Tariff Item 1</v-col>
							<v-col cols="2" class="font-weight-bold">Restrictions</v-col>
							<v-col cols="10">
								Reservation Expires
							</v-col>
							<v-col cols="2" class="font-weight-bold">Time Price</v-col>
							<v-col cols="10">20 CNY/hour(step: 10 minute)</v-col>
						</v-row>
						<v-row>
							<v-col cols="12">---- Tariff Item 2</v-col>
							<v-col cols="2" class="font-weight-bold">Restrictions</v-col>
							<v-col cols="10">
								<b>Day:</b> Monday, TuesDay, Wednesday, Thursday, Friday <b>Time:</b> 00:00 to 10:00<br/>
							</v-col>
							<v-col cols="2" class="font-weight-bold">Time Price</v-col>
							<v-col cols="10">20 CNY/hour(step: 10 minute)</v-col>
							<v-col cols="2" class="font-weight-bold">ParkingTime Price</v-col>
							<v-col cols="10">5 CNY/hour(step: 30 minute)</v-col>
						</v-row>
						<v-row>
							<v-col cols="12">---- Tariff Item 3</v-col>
							<v-col cols="2" class="font-weight-bold">Restrictions</v-col>
							<v-col cols="10">
								<b>Day:</b> Monday, TuesDay, Wednesday, Thursday, Friday <b>Time:</b> 10:00 to 18:00<br/>
							</v-col>
							<v-col cols="2" class="font-weight-bold">Energy Price</v-col>
							<v-col cols="10">1.8 CNY/kWh (step: 0.1 kWh)</v-col>
							<v-col cols="2" class="font-weight-bold">ParkingTime Price</v-col>
							<v-col cols="10">8 CNY/hour(step: 30 minute)</v-col>
						</v-row>
						<v-row>
							<v-col cols="12">---- Tariff Item 4</v-col>
							<v-col cols="2" class="font-weight-bold">Restrictions</v-col>
							<v-col cols="10">
								<b>Day:</b> Monday, TuesDay, Wednesday, Thursday, Friday <b>Time:</b> 18:00 to 00:00<br/>
							</v-col>
							<v-col cols="2" class="font-weight-bold">Time Price</v-col>
							<v-col cols="10">20 CNY/hour(step: 10 minute)</v-col>
							<v-col cols="2" class="font-weight-bold">ParkingTime Price</v-col>
							<v-col cols="10">5 CNY/hour(step: 30 minute)</v-col>
						</v-row>
						<v-row>
							<v-col cols="12">---- Tariff Item 5</v-col>
							<v-col cols="2" class="font-weight-bold">Restrictions</v-col>
							<v-col cols="10">
								<b>Day:</b> Saturday, Sunday
							</v-col>
							<v-col cols="2" class="font-weight-bold">Energy Price</v-col>
							<v-col cols="10">1.2 CNY/kWh (step: 0.1 kWh)</v-col>
							<v-col cols="2" class="font-weight-bold">ParkingTime Price</v-col>
							<v-col cols="10">5 CNY/hour(step: 30 minute)</v-col>
							<v-col cols="2" class="font-weight-bold">Time Price</v-col>
							<v-col cols="10">20 CNY/hour(step: 10 minute)</v-col>
						</v-row>
<!--						<v-row> 每个item都可以选择约束条件-->   
<!--							<v-col cols="12">&#45;&#45;&#45;&#45; Tariff Item full demo</v-col>-->
<!--							-->
<!--							<v-col cols="2" class="font-weight-bold">Restrictions</v-col>-->
<!--							<v-col cols="10">-->
<!--								<b>Day:</b> Monday <b>Time:</b> 00:00 to 11:00<br/>-->
<!--								<b>Energy:</b> 0 to 20 kWh <b>Duration:</b> 0 to 1 hour <b>Current:</b> 0 to 32 A <b>Power:</b> 0 to 14 kW<br/>-->
<!--								<b>Reservation:</b> Reservation Expires<br/>-->
<!--							</v-col>-->
<!--							-->
<!--							<v-col cols="2" class="font-weight-bold">Energy Price</v-col>-->
<!--							<v-col cols="10">1.2 CNY/kWh (step: 0.1 kWh)</v-col>-->
<!--							<v-col cols="2" class="font-weight-bold">Flat Price</v-col>-->
<!--							<v-col cols="10">10 CNY</v-col>-->
<!--							<v-col cols="2" class="font-weight-bold">ParkingTime Price</v-col>-->
<!--							<v-col cols="10">5 CNY/hour(step: 30 minute)</v-col>-->
<!--							<v-col cols="2" class="font-weight-bold">Time Price</v-col>-->
<!--							<v-col cols="10">20 CNY/hour(step: 10 minute)</v-col>-->
<!--						</v-row>-->
					</template>
				</v-expansion-panel>
			</v-expansion-panels>
		</div>
	</yhlx-main-container>
</template>

<script setup lang="ts">
import YhlxMainContainer from "@/components/container/YhlxMainContainer.vue";
import axios from "axios";

const panel = ref([0]);

</script>

<style scoped lang="scss">
</style>
