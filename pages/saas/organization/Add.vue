<template>
	<yhlx-add-dialog location="Toolbar" title="Add Organization">
		<template v-slot:content>
			<v-row>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Name*" required />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-select label="Type*" :items="orgTypeEnums" />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-select label="Country*" :items="countryNameEnums" />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Party ID*" required />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-select label="Currency*" :items="currencyNameEnums" />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Expiry Time" type="date" />
				</v-col>
			</v-row>
		</template>
	</yhlx-add-dialog>
</template>

<script setup lang="ts">
import YhlxAddDialog from "@/components/dialog/YhlxAddDialog.vue";
import YhlxTextField from "@/components/common/YhlxTextField.vue";
import YhlxSelect from "@/components/common/YhlxSelect.vue";
import { countryNameEnums, currencyNameEnums, orgTypeEnums } from "@/data/data";
</script>