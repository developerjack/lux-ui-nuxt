<script setup lang="ts">
const props = defineProps<{
	title: string;
}>();
</script>

<template>
	<v-card>
		<v-card-title class="card-title">
			<span> {{ props.title }}</span>
      <slot name="title"></slot>
			<v-spacer></v-spacer>
		</v-card-title>
		<v-divider></v-divider>
		<v-card-text>
			<slot></slot>
		</v-card-text>
	</v-card>
</template>

<style scoped lang="scss">
.v-card-title {
	padding: 1rem;
}
</style>
