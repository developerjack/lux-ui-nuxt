<template>
	<yhlx-add-dialog location="Toolbar" title="Add Firmware">
		<template v-slot:content>
			<v-row class="form">
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Firmware Version*" required />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Update Time*" required />
				</v-col>
				<v-col cols="12">
					<yhlx-text-field label="Firmware*" placeholder="This is file or url" required />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Reties" placeholder="Number of reties"  required />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Reties Interval(s)*" />
				</v-col>
				<v-col cols="12">
					<yhlx-text-field label="Notes" />
				</v-col>
			</v-row>
		</template>
	</yhlx-add-dialog>
</template>
<script setup lang="ts">
</script>