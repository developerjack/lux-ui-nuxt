<template>
	<yhlx-add-dialog location="Toolbar" title="Add Agent">
		<template v-slot:content>
			<v-row>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Email*" placeholder="johndoe@gmail.com" hint="Please enter email, the email as login info." required />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Password*" type="password" required></yhlx-text-field>
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Name*" required />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Phone number" required />
				</v-col>
				<v-col cols="12">
					<yhlx-select :items="[
						'China', 'Spain', 'Britain', 'Austria', 'Iceland', 'Poland', 'Denmark', 'Germany', 'France', 'Netherlands', 'Norway'
          ]" label="Country" multiple />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Authorization number" hint="The number of organization the agent can develop" required />
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