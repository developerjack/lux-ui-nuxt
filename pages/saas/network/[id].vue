<template>
	<yhlx-main-container>
		<v-expansion-panels v-model="panel" multiple="true" class="px-4 py-6">
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
						<v-col cols="2" class="font-weight-bold">{{ permissions.moduleName }}</v-col>
					</v-row>
					<div class="my-5 checkbox-wrap">
						<v-checkbox v-for="item in permissions.items" :key="item" v-model="selected" :label="item" :value="item" />
					</div>
				</template>
			</v-expansion-panel>
		</v-expansion-panels>
	</yhlx-main-container>
</template>

<script setup lang="ts">
import YhlxMainContainer from "@/components/container/YhlxMainContainer.vue";
const permissions = ref(
	{
		moduleName: 'Command',
		items: [
			'Locations-Sender', 'Sessions-Sender', 'CDRs-Sender', 'Tariffs-Sender', 'Tokens-Sender', 'Commands-Sender', 'ChargingProfiles-Sender',
			'Locations-Receiver', 'Sessions-Receiver', 'CDRs-Receiver', 'Tariffs-Receiver', 'Tokens-Receiver', 'Commands-Receiver', 'ChargingProfiles-Receiver',
		]
	}
);
const selected = ref(['Locations-Sender', 'Sessions-Sender', 'CDRs-Sender', 'Tariffs-Sender', 'Tokens-Sender', 'Locations-Receiver', 'Sessions-Receiver', 'CDRs-Receiver', 'Tariffs-Receiver', 'Tokens-Receiver']);
const panel = ref([0]);

</script>

<style scoped lang="scss">
.checkbox-wrap {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	grid-row-gap: 16px;
	grid-column-gap: 10px;
	
	:deep(.v-checkbox) {
		display: flex;
		width: 100%;
		padding-right: 0 !important;
		.v-input__control {
			width: 100%;
			.v-checkbox-btn {
				flex: 1;
				width: 100%;
				min-height: auto;
				border-radius: 4px;
				padding: 4px 10px 4px 4px;
				border: 1px solid rgba(0, 0, 0, 0.12);
				font-weight: bold;
				&.v-selection-control--dirty {
					border: 1px solid rgba(var(--v-theme-primary), 0.6);
				}
				&:hover {
					border: 1px solid rgba(var(--v-theme-primary), 0.6);
				}
				.v-label--clickable {
					width: 100%;
				}
			}
		}
	}
}
</style>
