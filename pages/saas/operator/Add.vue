<template>
	<register-add-dialog location="Toolbar" title="Add Operator">
		<template v-slot:content>
			<v-row>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Name*" required />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-select label="Role*" :items="orgRoleEnums" multiple />
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
	</register-add-dialog>
</template>

<script setup lang="ts">
import YhlxAddDialog from "@/components/dialog/YhlxAddDialog.vue";
import RegisterAddDialog from "@/components/dialog/RegisterAddDialog.vue";
import YhlxTextField from "@/components/common/YhlxTextField.vue";
import YhlxSelect from "@/components/common/YhlxSelect.vue";
import { countryNameEnums, currencyNameEnums, orgRoleEnums } from "@/data/data";
</script>