<template>
	<yhlx-add-dialog location="Toolbar" title="Add Agent">
		<template v-slot:content>
			<v-row class="form">
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
					<yhlx-text-field label="Phone Number" required />
				</v-col>
				<v-col cols="12">
					<yhlx-select :items="[
						'China', 'Spain', 'Britain', 'Austria', 'Iceland', 'Poland', 'Denmark', 'Germany', 'France', 'Netherlands', 'Norway'
          ]" label="Country" multiple />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Authorization Number" hint="The number of operator the agent can develop" required />
				</v-col>
			</v-row>
		</template>
	</yhlx-add-dialog>
</template>
<script setup lang="ts">
</script>