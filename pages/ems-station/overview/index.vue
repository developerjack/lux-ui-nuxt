<template>
	<yhlx-main-container>
		<div class="window-full">
			<v-list class="window-left" v-model:selected="menuOpen">
				<v-list-item v-for="(item, i) in menuItems" :key="i" :value="i" color="primary">
					<v-list-item-title class="font-weight-bold" v-text="item" />
				</v-list-item>
			</v-list>
			<div class="window-right">
				<img v-if="menuOpen[0] === 0" src="@/assets/images/PVAnalysis.png">
				<img v-if="menuOpen[0] === 1" src="@/assets/images/BatteryAnalysis.png">
				<img v-if="menuOpen[0] === 2" src="@/assets/images/ChargingStationAnalysis.png">
				<img v-if="menuOpen[0] === 3" src="@/assets/images/GridAnalysis.png">
			</div>
		</div>
	</yhlx-main-container>
</template>

<script setup lang="ts">
const menuOpen = ref([0]);
const menuItems = ref(['PV','Battery','Charging Station','On The Grid']);
watch(menuOpen,()=>{
	console.log(menuOpen.value)
});
</script>

<style scoped lang="scss">
</style>
