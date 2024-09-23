<template>
	<yhlx-main-container>
		<yhlx-card class="ma-4" title="EMS">
			<v-card-text>
				<v-row class="form">
					<v-col cols="12" sm="6" md="4">
						<yhlx-text-field label="EMS Lite Address" />
					</v-col>
				</v-row>
			</v-card-text>
			<v-card-actions>
				<yhlx-btn business-type="Cancel">Reset</yhlx-btn>
				<yhlx-btn>Save</yhlx-btn>
			</v-card-actions>
		</yhlx-card>
		<yhlx-card class="ma-4" title="SMTP">
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
				</v-row>
				<v-row class="form">
					<v-col cols="12" sm="6" md="4">
						<yhlx-text-field label="Account" />
					</v-col>
					<v-col cols="12" sm="6" md="4">
						<yhlx-text-field label="Authorization Code" />
					</v-col>
				</v-row>
			</v-card-text>
			<v-card-actions>
				<yhlx-btn business-type="Cancel">Reset</yhlx-btn>
				<yhlx-btn>Save</yhlx-btn>
			</v-card-actions>
		</yhlx-card>
	</yhlx-main-container>
</template>

<script setup lang="ts">
</script>
