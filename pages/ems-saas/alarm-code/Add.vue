<template>
	<yhlx-add-dialog location="Toolbar" title="Add Alarm Code">
		<template v-slot:content>
			<v-row class="form">
				<v-col cols="12" sm="4">
					<yhlx-text-field label="Code*" persistent-hint required />
				</v-col>
				<v-col cols="12" sm="8">
					<yhlx-text-field label="Name*" placeholder="This is the alram name." required />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-select :items="deviceTypeEnums" label="Device Type*" required />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-select :items="alarmTypeEnums" label="Alarm Type*" required />
				</v-col>
			</v-row>
		</template>
	</yhlx-add-dialog>
</template>
<script setup lang="ts">
import { alarmTypeEnums } from "@/data/data";
import { deviceTypeEnums } from "@/data/ems";
</script>