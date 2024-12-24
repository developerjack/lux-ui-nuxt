<template>
	<yhlx-main-container>
		<div class="mx-4 my-6">
			<v-row>
				<v-col cols="2" class="font-weight-bold">Name</v-col>
				<v-col cols="4">BYD</v-col>
				<v-col cols="2" class="font-weight-bold">Roles</v-col>
				<v-col cols="4">CPO, eMSP</v-col>
				<v-col cols="2" class="font-weight-bold">Status</v-col>
				<v-col cols="4">Available</v-col>
				<v-col cols="6"></v-col>
				<v-col cols="2" class="font-weight-bold">Notes</v-col>
				<v-col cols="10">The platform from China.</v-col>
			</v-row>
			<h2 class="mt-8 mb-4 ml-1">OCPI Support</h2>
			<div class="module-checkbox-wrapper">
				<v-checkbox v-for="item in modules" :key="item" v-model="selected" :label="item" :value="item" />
			</div>
		</div>
	</yhlx-main-container>
</template>

<script setup lang="ts">
const panel = ref([0, 1]);
const modules = ref([
	'Locations-Sender', 'Sessions-Sender', 'CDRs-Sender', 'Tariffs-Sender', 'Tokens-Sender', 'Commands-Sender', 'ChargingProfiles-Sender',
	'Locations-Receiver', 'Sessions-Receiver', 'CDRs-Receiver', 'Tariffs-Receiver', 'Tokens-Receiver', 'Commands-Receiver', 'ChargingProfiles-Receiver',
]);
const selected = ref(['Locations-Sender', 'Sessions-Sender', 'CDRs-Sender', 'Tariffs-Sender', 'Tokens-Sender', 'Locations-Receiver', 'Sessions-Receiver', 'CDRs-Receiver', 'Tariffs-Receiver', 'Tokens-Receiver']);
</script>

<style scoped lang="scss">

</style>
