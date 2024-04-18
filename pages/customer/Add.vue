<template>
	<yhlx-add-dialog location="Toolbar" title="Add Customer">
		<template v-slot:content>
			<v-row>
				<v-col cols="12" sm="6">
					<v-text-field label="Email*" hint="Please enter email, the email as login info." persistent-hint required />
				</v-col>
				<v-col cols="12" sm="6">
					<v-text-field label="Password*" type="password" required></v-text-field>
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<v-text-field label="Name*" required />
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<v-text-field label="Phone number" hint="example of persistent helper text" required />
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age" required></v-select>
				</v-col>
				<v-col cols="12" sm="6">
					<v-autocomplete :items="[
                'Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey',
                 'Reading', 'Writing', 'Coding','Basejump',
              ]" label="Interests" multiple density="comfortable" variant="outlined"></v-autocomplete>
				</v-col>
			</v-row>
		</template>
	</yhlx-add-dialog>
</template>

<script setup lang="ts">
import YhlxAddDialog from "@/components/dialog/YhlxAddDialog.vue";
</script>