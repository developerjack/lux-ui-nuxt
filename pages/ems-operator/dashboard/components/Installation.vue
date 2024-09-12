<template>
	<div class="installation">
		<v-card class="bg-blue-lighten-5" variant="text" title="Station Number" text="10" />
		<v-card class="bg-blue-lighten-5" variant="text" title="PV" text="280 kW" />
		<v-card class="bg-blue-lighten-5" variant="text" title="Battery" text="1580 kWh" />
		<v-card class="bg-blue-lighten-5" variant="text" title="Charging Station" text="1280 kW" />
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.installation {
	display: grid;
	grid-column-gap: 8px;
	grid-row-gap: 8px;
	grid-template-columns:1fr 1fr;
}
</style>