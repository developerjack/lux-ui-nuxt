<template>
	<yhlx-add-dialog location="Toolbar" title="Add Admin">
		<template v-slot:content>
			<v-row>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Email*" hint="Please enter email, the email as login info." persistent-hint required />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Password*" type="password" required />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Name*" required />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Phone number" hint="example of persistent helper text" required />
				</v-col>
				<v-col cols="12">
					<v-autocomplete :items="[
            'Admin', 'Operator', 'Maintainer', 'Accountant', 'Device Manager',
             'Auditor', 'Company Manager',
          ]" label="Role" multiple variant="outlined" />
				</v-col>
			</v-row>
		</template>
	</yhlx-add-dialog>
</template>

<script setup lang="ts">
import YhlxAddDialog from "@/components/dialog/YhlxAddDialog.vue";
import YhlxTextField from "@/components/common/YhlxTextField.vue";
</script>