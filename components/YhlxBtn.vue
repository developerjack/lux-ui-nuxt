<template>
	<v-btn v-if="location === 'Toolbar' && icon.length > 0" icon>
		<v-icon :color="color" :icon="icon" size="large" />
	</v-btn>
	<v-btn v-else :color="color" v-bind="props">
		<slot/>
	</v-btn>
	
</template>

<script setup lang="ts">
const props = defineProps({
	businessType: { // Add, Submit, Cancel
		type: String,
		default: 'Submit'
	},
	location: { // Body, Toolbar
		type: String,
		default: 'Body'
	},
});
const color = ref("")
const icon = ref("")

onMounted(() => {
	console.log(props.location);
	if (props.businessType === "Add") {
		color.value = "warning";
		icon.value = "mdi-plus";
	}
	else if (props.businessType === "Primary") {
		color.value = "success";
	}
	else if (props.businessType === "Close") {
		color.value = "error";
	}
	else {
		color.value = 'success'
	}
})

</script>