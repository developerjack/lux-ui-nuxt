<template>
	<v-card>
		<v-card-title class="card-title">
			<span>{{ props.title }}</span>
      <slot name="title"></slot>
			<v-spacer></v-spacer>
		</v-card-title>
		<v-divider></v-divider>
		<v-card-text :style="customerStyle">
			<slot></slot>
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import type {PropType} from "vue";

type Density = 'default' | 'comfortable' | 'compact';
const props = defineProps({
	title: String,
	density: String as PropType<Density>
});

const customerStyle = props.density === 'compact' ? {
	padding: 0,
} : {};

</script>

<style scoped lang="scss">
.v-card-title {
	padding: 0.8rem;
}
</style>
