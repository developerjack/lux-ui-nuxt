<template>
	<div class="unselect">
		<v-card class="overview-card pa-4 primary bg-indigo-lighten-5 text-indigo">
			<div class="overview-card-top">
				<span>Total Revenue</span>
				<span class="cursor-pointer" @click="changeUnit">{{ unit }}</span>
			</div>
			<div class="overview-card-bottom">
				<div>
					<p class="text-body-main">3,256</p>
					<p class="text-body-caption">Compared
						<span style="color:red;">
							565
							<yhlx-svg-icon class="d-inline-block" name="trending-up" color="red" width="14px" height="14px" />
						</span>
					</p>
				</div>
			</div>
		</v-card>
		<v-card class="overview-card pa-4 bg-orange-lighten-5 text-orange">
			<div class="overview-card-top">
				<span>Solar Energy</span>
				<span class="cursor-pointer" @click="changeUnit">{{ unit }}</span>
			</div>
			<div class="overview-card-bottom">
				<Icon icon="solar:bill-line-duotone" width="65" />
				<div style="text-align: right;">
					<p class="text-body-main">0.2 kWh</p>
					<p class="text-body-caption text-orange-lighten-2">Energy</p>
					<p class="text-body-main">$ 100.00</p>
					<p class="text-body-caption text-orange-lighten-2">Income</p>
				</div>
			</div>
		</v-card>
		<v-card class="overview-card pa-4 bg-deep-orange-lighten-5 text-deep-orange">
			<div class="overview-card-top">
				<span>Battery</span>
				<span class="cursor-pointer" @click="changeUnit">{{ unit }}</span>
			</div>
			<div class="overview-card-bottom">
				<Icon icon="solar:layers-minimalistic-line-duotone" width="65" />
				<div></div>
				<div style="text-align: right;">
					<p class="text-body-main">0.4 kWh</p>
					<p class="text-body-caption text-deep-orange-lighten-2">Charge</p>
					<p class="text-body-main">$ 100.00</p>
					<p class="text-body-caption text-deep-orange-lighten-2">Discharge</p>
				</div>
				<div style="text-align: right;">
					<p class="text-body-main">$ 100.00</p>
					<p class="text-body-caption text-deep-orange-lighten-2">Income</p>
				</div>
			</div>
		</v-card>
		<v-card class="overview-card pa-4 bg-blue-lighten-5 text-blue">
			<div class="overview-card-top">
				<span>Charging Station</span>
				<span class="cursor-pointer" @click="changeUnit">{{ unit }}</span>
			</div>
			<div class="overview-card-bottom">
				<Icon icon="solar:users-group-two-rounded-line-duotone" width="65" />
				<div style="text-align: right;">
					<p class="text-body-main">0.2 kWh</p>
					<p class="text-body-caption text-blue-lighten-2">Energy</p>
					<p class="text-body-main">$ 100.00</p>
					<p class="text-body-caption text-blue-lighten-2">Income</p>
				</div>
			</div>
		</v-card>
		<v-card class="overview-card pa-4 bg-teal-lighten-5 text-teal">
			<div class="overview-card-top">
				<span>Grid</span>
				<span class="cursor-pointer" @click="changeUnit">{{ unit }}</span>
			</div>
			<div class="overview-card-bottom">
				<Icon icon="solar:layers-minimalistic-line-duotone" width="65" />
				<div style="text-align: right;">
					<p class="text-body-main">0.0 kWh</p>
					<p class="text-body-caption text-teal-lighten-2">Sell</p>
					<p class="text-body-main">$ 100.00</p>
					<p class="text-body-caption text-teal-lighten-2">Income</p>
				</div>
			</div>
		</v-card>
	</div>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
const unit = ref('Day')
const unitList = ref(['Day','Month','Year'])
function changeUnit () {
  let index = unitList.value.findIndex(item => item === unit.value)
  if (index < 2){
    index += 1
  } else {
    index = 0
  }
  unit.value = unitList.value[index]
}
</script>
<style lang="scss" scoped>
.overview-card {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.overview-card-top {
		display: flex;
		justify-content: space-between;
	}
	.overview-card-bottom {
		display: flex;
		justify-content: space-between;
	}
}
.unselect {
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;

  display: grid;
  grid-column-gap: 16px;
  grid-template-columns:3fr 3fr 4fr 3fr 3fr;
  height: 140px;
}

</style>