<template>
	<div class="app-wrapper" :style="{ 'height': !appStore.isFullScreen ? 'calc(100vh - 64px)' : '100%' }">
		<v-card class="h-full app-card" rounded="xl" style="border-radius: 2px !important;">
			<v-toolbar class="px-5 main-toolbar">
				<Icon v-if="menu.icon" width="30" class="text-primary mx-4" :icon="menu.icon"/>
				<!-- Title Start -->
				<h4 v-if="!$slots.title" class="card-title">{{ menu.text }}</h4>
				<slot v-else name="title" />
				<!-- Title End -->
				<v-spacer />
				<v-btn :icon="!appStore.isFullScreen ? 'mdi-fullscreen' : 'mdi-fullscreen-exit'" @click="appStore.fullScreen"/>
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
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();
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
const fullscreen = () => {

}
</script>
<style lang="scss">
.app-wrapper{
	.main-toolbar {
		height: 44px !important;
		&>.v-toolbar__content{
			height: 44px !important;
		}
	}
}
.app-content{
	height: calc(100% - 44px);
	.v-table{
		height: 100%;
		&>.v-table__wrapper{
			height: calc(100% - 62px) !important;
		}
	}
}
</style>
<style lang="scss" scoped>
.app-wrapper {
	padding: 16px;
}
.app-content {
	overflow: auto !important;
}
.full-screen{
	font-size: 18px;
	cursor: pointer;
}


</style>