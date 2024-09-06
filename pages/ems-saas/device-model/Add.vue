<template>
	<yhlx-add-dialog location="Toolbar" title="Add Model">
		<template v-slot:content>
			<v-row class="form">
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Model*" required />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-select :items="['2023090501', '2023090502', '2024081501', '2024090501']" label="Firmware" />
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