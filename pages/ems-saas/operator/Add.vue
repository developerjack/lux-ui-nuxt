<template>
	<v-dialog v-model="dialog" persistent max-width="800" max-height="600">
		<template v-slot:activator="{ props }">
			<yhlx-btn business-type="Add" location="Toolbar" density="comfortable" v-bind="props" />
		</template>
		<v-card class="overflow-auto">
			<v-container>
				<v-card-title>
					<span class="text-h5">Send operator apply url to email.</span>
				</v-card-title>
				<v-divider class="mx-4 my-3" />
				<v-card-text>
					<v-row class="form">
						<v-col cols="12" sm="6">
							<yhlx-text-field label="Email*" required />
						</v-col>
					</v-row>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<yhlx-btn business-type="Close" variant="text" @click="dialog = false">Close</yhlx-btn>
					<yhlx-btn @click="dialog = false">Send</yhlx-btn>
				</v-card-actions>
			</v-container>
		</v-card>
	</v-dialog>
</template>

<script setup lang="ts">
const dialog = ref(false);
</script>