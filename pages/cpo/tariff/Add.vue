<template>
	<yhlx-add-dialog location="Toolbar" title="Add Tariff">
		<template v-slot:content>
			<v-row>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Name" />
				</v-col>
				<v-col cols="12" sm="6"/>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Min Cost" />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Max Cost" />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Start Time" type="date" />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="End Time" type="date"/>
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Update Time" type="date"/>
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-select label="Status" :items="['Enable','Disable']" />
				</v-col>
				<v-col cols="12" sm="12">
					<yhlx-text-field label="Notes" />
				</v-col>
			</v-row>
		</template>
	</yhlx-add-dialog>
</template>

<script setup lang="ts">
import YhlxAddDialog from "@/components/dialog/YhlxAddDialog.vue";
import YhlxTextField from "@/components/common/YhlxTextField.vue";
import YhlxSelect from "@/components/common/YhlxSelect.vue";
import { operatorNameEnums } from "@/data/data";
</script>