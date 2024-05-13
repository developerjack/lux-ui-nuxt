<template>
	<yhlx-add-dialog location="Toolbar" title="Add Agreement">
		<template v-slot:content>
			<v-row>
				<v-col cols="12" sm="6">
					<yhlx-select label="eMSP*" :items="companyNameEnums" />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-select label="eMSP Network*" :items="emspNetworkNameEnums" />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Valid From*" type="date" />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Valid To" type="date" />
				</v-col>
				<v-col cols="12">
					<yhlx-select label="Module*" :items="moduleImplEnums" multiple />
				</v-col>
			</v-row>
		</template>
	</yhlx-add-dialog>
</template>

<script setup lang="ts">
import YhlxAddDialog from "@/components/dialog/YhlxAddDialog.vue";
import YhlxTextField from "@/components/common/YhlxTextField.vue";
import YhlxSelect from "@/components/common/YhlxSelect.vue";
import { companyNameEnums, emspNetworkNameEnums, moduleImplEnums } from "@/data/data";
</script>