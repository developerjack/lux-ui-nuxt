<template>
	<div class="app-wrapper">
		<v-card class="h-full app-card" rounded="xl">
			<v-toolbar class="px-5">
				<Icon v-if="menu.icon" width="30" class="text-primary mx-4" :icon="menu.icon"/>
				<!-- Title Start -->
				<h4 v-if="!$slots.title" class="card-title">{{ menu.text }}</h4>
				<slot v-else name="title" />
				<!-- Title End -->
				<v-spacer />
				<slot name="append" />
				<v-btn icon="mdi-dots-vertical" @click="showMoreDialog" />
			</v-toolbar>
			<yhlx-more-dialog v-show="isHide" :data-headers="props.dataHeaders" :operationObj="props.operationObj" @showMoreDialog="showMoreDialog"/>
			<v-divider />
			<div class="app-content">
				<slot />
			</div>
		</v-card>
	</div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import mainMenu from "~/configs/mainMenu";
const props = defineProps({
	dataHeaders: Array<{ // 表头
		title: string,
		key: string,
		show?: string
	}>,
	operationObj: {
		type: Object,
		default: () => {}
	}
})
const menu: NavigationConfig.Menu = mainMenu.getCurrentMenu();
const isHide = ref(false)
const showMoreDialog = () => {
	isHide.value = !isHide.value
}
</script>

<style scoped>
.app-wrapper {
	height: calc(100vh - 64px);
	padding: 16px;
}
.app-content {
	overflow: auto !important;
	height: calc(100vh - 160px);
}
</style>