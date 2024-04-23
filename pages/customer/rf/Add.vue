<template>
	<yhlx-add-dialog location="Toolbar" title="Add RF Card">
		<template v-slot:content>
			<v-row>
				<v-col cols="12" sm="6">
					<v-text-field label="ID Tag*" hint="Please enter ID Tag." persistent-hint required />
				</v-col>
				<v-col cols="12" sm="6">
					<v-text-field label="Expiry Time" type="date"></v-text-field>
				</v-col>
			</v-row>
		</template>
	</yhlx-add-dialog>
</template>

<script setup lang="ts">
import YhlxAddDialog from "@/components/dialog/YhlxAddDialog.vue";
</script>
