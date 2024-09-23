<template>
	<v-card class="pa-3" elevation="3">
		<v-card-title class="mt-4 text-h4">Operator Apply</v-card-title>
		<v-card-subtitle class="mb-4">Fill in operator information</v-card-subtitle>
		<v-card-text>
			<v-form ref="refLoginForm" lazy-validation>
				<v-text-field label="Company Name*" variant="underlined" color="primary" required outlined />
				<v-select label="Country*" :items="countryNameEnums" variant="underlined" color="primary" required outlined />
				<v-select label="Currency*" :items="currencyNameEnums" variant="underlined" color="primary" required outlined />
				<v-select label="Time Zone*" :items="timeZoneEnums" variant="underlined" color="primary" required outlined />
				<v-text-field label="Address" variant="underlined" color="primary" required outlined />
				<v-text-field label="Contact" variant="underlined" color="primary" required outlined />
				<v-text-field v-model="email" required label="Contact Email*"
				              variant="underlined" color="primary" :rules="emailRules" outlined validateOn="blur" @keyup.enter="handleLogin" />
				<v-btn block size="x-large" color="primary" @click="handleLogin" class="mt-2">Submit</v-btn>
			</v-form>
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import { countryNameEnums, currencyNameEnums, timeZoneEnums } from "~/data/data";

definePageMeta({
	layout: "auth",
});

const refLoginForm = ref();
const email = ref("vuetify3-visitor@gmail.com");
const password = ref("sfm12345");

const handleLogin = async () => {
	refLoginForm.value.validate();
};

// Error Check
const emailRules = ref([
	(v: string) => !!v || "E-mail is required",
	(v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
]);

const showPassword = ref(false);
const passwordRules = ref([
	(v: string) => !!v || "Password is required",
	(v: string) => (v && v.length <= 10) || "Password must be less than 10 characters",
]);
</script>

<style scoped lang="scss">
</style>