<template>
	<yhlx-add-dialog location="Toolbar" title="Add Customer">
		<template v-slot:content>
			<v-row>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Email*" placeholder="johndoe@gmail.com" hint="Please enter email, the email as login info." required />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Password*" type="password" required />
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<yhlx-text-field label="Name*" required />
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<yhlx-text-field label="Phone Number" required />
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<yhlx-select :items="['0-17', '18-29', '30-54', '54+']" label="Age" required />
				</v-col>
			</v-row>
		</template>
	</yhlx-add-dialog>
</template>

<script setup lang="ts">
import YhlxAddDialog from "@/components/dialog/YhlxAddDialog.vue";
import YhlxTextField from "@/components/common/YhlxTextField.vue";
import YhlxSelect from "@/components/common/YhlxSelect.vue";
</script>