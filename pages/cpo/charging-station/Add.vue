<template>
	<yhlx-add-dialog location="Toolbar" title="Add Location">
		<template v-slot:content>
			<v-row>
				<v-col cols="12" sm="6">
					<yhlx-select label="eMSP*" :items="operatorNameEnums" />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Contact" />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Contact Email" />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Contact Phone" />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Valid From*" type="date" />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Valid To" type="date" />
				</v-col>
			</v-row>
		</template>
	</yhlx-add-dialog>
</template>

<script setup lang="ts">
import { operatorNameEnums } from "@/data/data";
</script>