<template>
	<yhlx-add-dialog location="Toolbar" title="Add Device">
		<template v-slot:content>
			<v-row class="form">
				<v-col cols="12" sm="6">
					<yhlx-text-field label="Serial Number*" required />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-combobox label="Location" :items="['Xiamen', 'Beijing', 'Nanjing', 'Shanghai']"/>
				</v-col>
				<v-col cols="12" sm="12">
					<yhlx-text-field label="Notes" />
				</v-col>
			</v-row>
		</template>
	</yhlx-add-dialog>
</template>

<script setup lang="ts">

</script>