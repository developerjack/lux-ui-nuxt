<template>
	<yhlx-add-dialog location="Toolbar" title="Add Admin">
		<template v-slot:content>
			<v-row class="form">
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
					<yhlx-text-field label="Phone Number" hint="example of persistent helper text" required />
				</v-col>
				<v-col cols="12">
					<yhlx-select :items="[
            'Admin', 'Operator', 'Maintainer', 'Accountant', 'Device Manager',
            'Auditor', 'operator Manager',
          ]" label="Role" multiple />
				</v-col>
				<v-col cols="12">
					<yhlx-select :items="operatorNameEnums" label="Operator" multiple />
				</v-col>
			</v-row>
		</template>
	</yhlx-add-dialog>
</template>
<script setup lang="ts">
import { operatorNameEnums } from "~/data/data";
</script>