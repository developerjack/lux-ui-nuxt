<template>
	<yhlx-main-container>
		<v-container>
			<v-card-actions class="justify-end">
				<yhlx-btn business-type="Cancel">Reset</yhlx-btn>
				<yhlx-btn>Save</yhlx-btn>
			</v-card-actions>
			<v-card-title class="card-title">
				<span>Basic Info</span>
			</v-card-title>
			<v-card-text>
				<v-row>
					<v-col cols="12" sm="6" md="4">
						<yhlx-text-field label="Name" />
					</v-col>
					<v-col cols="12" sm="6" md="4">
						<yhlx-text-field label="Logo" />
					</v-col>
					<v-col cols="12" sm="6" md="4">
						<yhlx-text-field label="Currency" />
					</v-col>
					<v-col cols="12" sm="6" md="4">
						<yhlx-text-field label="Location Limit" />
					</v-col>
					<v-col cols="12" sm="6" md="4">
						<yhlx-text-field label="Expiry Time" />
					</v-col>
				</v-row>
			</v-card-text>
			<v-card-title class="card-title">
				<span>Contact</span>
			</v-card-title>
			<v-card-text>
				<v-row>
					<v-col cols="12" sm="6" md="4">
						<yhlx-text-field label="Contact Name" />
					</v-col>
					<v-col cols="12" sm="6" md="4">
						<yhlx-text-field label="Contact Email" />
					</v-col>
					<v-col cols="12" sm="6" md="4">
						<yhlx-text-field label="Contact Phone Number" />
					</v-col>
				</v-row>
			</v-card-text>
			<v-card-title class="card-title">
				<span>SMTP</span>
			</v-card-title>
			<v-card-text>
				<v-row>
					<v-col cols="12" sm="6" md="4">
						<yhlx-text-field label="Server Address" />
					</v-col>
					<v-col cols="12" sm="6" md="4">
						<yhlx-text-field label="Server Port" />
					</v-col>
					<v-col cols="12" sm="6" md="4">
						<yhlx-text-field label="Sender Email" />
					</v-col>
					<v-col cols="12" sm="6" md="4">
						<yhlx-text-field label="Account" />
					</v-col>
					<v-col cols="12" sm="6" md="4">
						<yhlx-text-field label="Authorization Code" />
					</v-col>
				</v-row>
			</v-card-text>
			<v-card-title class="card-title">
				<span>Location</span>
			</v-card-title>
			<v-card-text>
				<v-row>
					<v-col cols="12" sm="6" md="4">
						<yhlx-text-field label="Country" />
					</v-col>
					<v-col cols="12" sm="6" md="4">
						<yhlx-text-field label="Language" />
					</v-col>
					<v-col cols="12" sm="6" md="4">
						<yhlx-text-field label="Time Zone" />
					</v-col>
					<v-col cols="12">
						<yhlx-text-field label="Address" />
					</v-col>
				</v-row>
			</v-card-text>
		</v-container>
	</yhlx-main-container>
</template>
<script setup lang="ts">
</script>
