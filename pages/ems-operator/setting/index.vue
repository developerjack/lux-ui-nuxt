<template>
	<yhlx-main-container>
		<yhlx-card class="ma-4" title="EMS">
			<v-row class="form">
				<v-col cols="12" sm="6" md="4">
					<div class="text-h6 text-medium-emphasis">EMS Lite Address</div>
					<yhlx-text-field />
				</v-col>
			</v-row>
			<v-card-actions>
				<yhlx-btn business-type="Cancel">Reset</yhlx-btn>
				<yhlx-btn>Save</yhlx-btn>
			</v-card-actions>
		</yhlx-card>
		<yhlx-card class="ma-4" title="SMTP">
			<v-row class="form">
				<v-col cols="12" sm="6" md="4">
					<div class="text-h6 text-medium-emphasis">Server Address</div>
					<yhlx-text-field />
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<div class="text-h6 text-medium-emphasis">Server Port</div>
					<yhlx-text-field />
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<div class="text-h6 text-medium-emphasis">Sender Email</div>
					<yhlx-text-field />
				</v-col>
			</v-row>
			<v-row class="form">
				<v-col cols="12" sm="6" md="4">
					<div class="text-h6 text-medium-emphasis">Account</div>
					<yhlx-text-field />
				</v-col>
				<v-col cols="12" sm="6" md="4">
					<div class="text-h6 text-medium-emphasis">Authorization Code</div>
					<yhlx-text-field />
				</v-col>
			</v-row>
			<v-card-actions>
				<yhlx-btn business-type="Cancel">Reset</yhlx-btn>
				<yhlx-btn>Save</yhlx-btn>
			</v-card-actions>
		</yhlx-card>
	</yhlx-main-container>
</template>

<script setup lang="ts">
</script>
