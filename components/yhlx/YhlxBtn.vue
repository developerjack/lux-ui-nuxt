<template>
	<v-btn v-if="location === 'Toolbar' && icon.length > 0" icon>
		<v-icon :color="color" :icon="icon" size="large" />
	</v-btn>
	<v-btn v-else :color="color" :variant="variant" class="px-4" v-bind="props">
		<slot/>
	</v-btn>
	
</template>

<script setup lang="ts">
const props = defineProps({
	businessType: { // Add, Submit, Close, Cancel
		type: String,
		default: 'Submit'
	},
	location: { // Body, Toolbar
		type: String,
		default: 'Body'
	},
});
const color = ref("");
const icon = ref("");
const variant = ref("elevated");

onMounted(() => {
	if (props.businessType === "Add") {
		color.value = "warning";
		icon.value = "mdi-plus";
	}
	else if (props.businessType === "Submit") {
		color.value = "primary";
		variant.value = "elevated";
	}
	else if (props.businessType === "Close") {
		color.value = "error";
		variant.value = "tonal";
	}
	else if (props.businessType === "Cancel") {
		color.value = "error";
		variant.value = "tonal";
	}
	else {
		color.value = 'primary'
	}
})

</script>