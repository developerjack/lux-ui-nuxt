<template>
	<drawer-add-dialog location="Toolbar">
		<template v-slot:content>
			<v-card text="Add NetWork"></v-card>
			<v-divider></v-divider>
			<v-form v-model="valid">
				<v-container>
					<v-row>
						<v-col cols="12" sm="6">
							<yhlx-text-field label="Name*" required />
						</v-col>
						<v-col cols="12" sm="6">
							<yhlx-text-field label="Integration Token*" required />
						</v-col>
						<v-col cols="12">
							<yhlx-text-field label="Versions URL" />
						</v-col>
						<v-col cols="12">
							<yhlx-text-field label="Notes" required />
						</v-col>
					</v-row>
				</v-container>
			</v-form>
		</template>
	</drawer-add-dialog>
</template>

<script setup lang="ts">
import DrawerAddDialog from "@/components/dialog/DrawerAddDialog.vue"
import YhlxAddDialog from "@/components/dialog/YhlxAddDialog.vue";
import YhlxTextField from "@/components/common/YhlxTextField.vue";
</script>