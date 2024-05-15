<template>
	<yhlx-add-dialog location="Toolbar" title="Add Network">
		<template v-slot:content>
			<v-row>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Name*" required />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-select :items="['eMSP', 'CPO']" label="Role*" multiple />
				</v-col>
				<v-col cols="12">
					<yhlx-text-field label="Versions URL" />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Integration Token*" required />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Description" required />
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
import { moduleImplEnums } from "@/data/data";
</script>