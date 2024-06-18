<template>
	<yhlx-main-container>
		<v-expansion-panels v-model="panel" :multiple="true" class="px-4 py-6">
			<v-expansion-panel title="Details">
				<template v-slot:text>
					<v-row>
						<v-col cols="2" class="font-weight-bold">Name</v-col>
						<v-col cols="4">Iocharger</v-col>
						<v-col cols="2" class="font-weight-bold">Country</v-col>
						<v-col cols="4">China</v-col>
						<v-col cols="2" class="font-weight-bold">Country Code</v-col>
						<v-col cols="4">CN</v-col>
						<v-col cols="2" class="font-weight-bold">Part ID</v-col>
						<v-col cols="4">IOC</v-col>
						<v-col cols="2" class="font-weight-bold">Currency</v-col>
						<v-col cols="4">China Yuan</v-col>
						<v-col cols="2" class="font-weight-bold">Role</v-col>
						<v-col cols="4">eMSP, CPO</v-col>
						<v-col cols="2" class="font-weight-bold">Expiry Time</v-col>
						<v-col cols="4">2025-02-18</v-col>
						<v-col cols="2" class="font-weight-bold">Status</v-col>
						<v-col cols="4">Enable</v-col>
					</v-row>
				</template>
			</v-expansion-panel>
		</v-expansion-panels>
	</yhlx-main-container>
</template>

<script setup lang="ts">
const panel = ref([0]);
</script>

<style scoped lang="scss">
</style>
