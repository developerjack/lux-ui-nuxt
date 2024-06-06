<template>
	<yhlx-main-container>
		<v-expansion-panels v-model="panel" :multiple="true" class="px-4 py-6">
			<v-expansion-panel title="Details">
				<template v-slot:text>
					<v-row>
						<v-col cols="2" class="font-weight-bold">Name</v-col>
						<v-col cols="4">Internal</v-col>
						<v-col cols="2" class="font-weight-bold">Type</v-col>
						<v-col cols="4">Internal</v-col>
						<v-col cols="2" class="font-weight-bold">Role</v-col>
						<v-col cols="4">CPO,eMSP</v-col>
						<v-col cols="2" class="font-weight-bold">Status</v-col>
						<v-col cols="4">available</v-col>
					</v-row>
				</template>
			</v-expansion-panel>
			<v-expansion-panel title="OCPI Support">
				<template v-slot:text>
					<div class="module-checkbox-wrapper">
						<v-checkbox v-for="item in modules" :key="item" v-model="selected" :label="item" :value="item" />
					</div>
				</template>
			</v-expansion-panel>
		</v-expansion-panels>
	</yhlx-main-container>
</template>

<script setup lang="ts">
const modules = ref([
	'Locations-Sender', 'Sessions-Sender', 'CDRs-Sender', 'Tariffs-Sender', 'Tokens-Sender', 'Commands-Sender', 'ChargingProfiles-Sender',
	'Locations-Receiver', 'Sessions-Receiver', 'CDRs-Receiver', 'Tariffs-Receiver', 'Tokens-Receiver', 'Commands-Receiver', 'ChargingProfiles-Receiver',
]);
const selected = ref(['Locations-Sender', 'Sessions-Sender', 'CDRs-Sender', 'Tariffs-Sender', 'Tokens-Sender', 'Locations-Receiver', 'Sessions-Receiver', 'CDRs-Receiver', 'Tariffs-Receiver', 'Tokens-Receiver']);
const panel = ref([0, 1]);
</script>

<style scoped lang="scss">

</style>
