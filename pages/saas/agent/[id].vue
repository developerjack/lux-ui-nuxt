<template>
	<yhlx-main-container>
		<div class="h-full overflow-auto">
			<v-expansion-panels v-model="panel" multiple="true" class="px-4 py-6">
				<v-expansion-panel title="Details">
					<template v-slot:text>
						<v-row>
							<v-col cols="2" class="font-weight-bold">Name</v-col>
							<v-col cols="4">Li Yuanhan</v-col>
							<v-col cols="2" class="font-weight-bold">Authorizations Number</v-col>
							<v-col cols="4">23</v-col>
							<v-col cols="2" class="font-weight-bold">Email</v-col>
							<v-col cols="4">liyh@iocharger.com</v-col>
							<v-col cols="2" class="font-weight-bold">Phone Number</v-col>
							<v-col cols="4">18526854125</v-col>
							<v-col cols="2" class="font-weight-bold">Status</v-col>
							<v-col cols="4">Disabled</v-col>
						</v-row>
					</template>
				</v-expansion-panel>
			</v-expansion-panels>
		</div>
	</yhlx-main-container>
</template>

<script setup lang="ts">
import YhlxMainContainer from "@/components/container/YhlxMainContainer.vue";

const panel = ref([0]);

</script>

<style scoped lang="scss">
</style>
