<template>
	<v-dialog v-model="dialog" persistent max-width="800" max-height="600">
		<template v-slot:activator="{ props }">
			<yhlx-btn business-type="Add" :location="location" v-bind="props" style="width: 36px;height: 36px">{{ title }}</yhlx-btn>
		</template>
		<v-card class="overflow-auto">
			<v-container>
				<v-card-title>
					<span class="text-h5">{{ title }}</span>
				</v-card-title>
				<v-divider class="mx-4 my-3" />
				<v-card-text>
					<slot name="content" />
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<yhlx-btn business-type="Close" variant="text" @click="dialog = false">Close</yhlx-btn>
					<yhlx-btn business-type="Primary" @click="dialog = false">Save</yhlx-btn>
				</v-card-actions>
			</v-container>
		</v-card>
	</v-dialog>
</template>
<script setup lang="ts">
const props = defineProps({
	location: String, // 参考YhlxBtn
	title: String, // 按钮标题
});
const dialog = ref(false);
</script>