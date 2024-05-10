<template>
	<yhlx-add-dialog location="Toolbar" title="Add Network">
		<template v-slot:content>
			<v-row>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Name*" required />
				</v-col>
				<v-col cols="12" sm="6">
					<v-autocomplete :items="['Internal', 'External']" label="Type*" variant="outlined" />
				</v-col>
				<v-col cols="12" sm="6">
					<v-autocomplete :items="['eMSP', 'CPO']" label="Network Type*" variant="outlined" />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Description" required />
				</v-col>
			</v-row>
		</template>
	</yhlx-add-dialog>
</template>

<script setup lang="ts">
import YhlxAddDialog from "@/components/dialog/YhlxAddDialog.vue";
import YhlxTextField from "@/components/common/YhlxTextField.vue";
</script>