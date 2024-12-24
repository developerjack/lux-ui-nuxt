<template>
	<yhlx-add-dialog location="Toolbar" title="Add OCPI Platform">
		<template v-slot:content>
			<v-row class="form">
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Name*" required />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Integration Token*" required />
				</v-col>
				<v-col cols="12">
					<yhlx-text-field label="Versions URL" />
				</v-col>
				<v-col cols="12">
					<yhlx-text-field label="Notes" required />
				</v-col>
			</v-row>
		</template>
	</yhlx-add-dialog>
</template>

<script setup lang="ts">

</script>