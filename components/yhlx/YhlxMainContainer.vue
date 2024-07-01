<template>
	<div class="app-wrapper" :style="{ 'height': !appStore.isFullScreen ? 'calc(100vh - 64px)' : '100%' }">
		<v-card class="h-full app-card" rounded="xl" style="border-radius: 2px !important;">
			<v-toolbar class="px-3 main-toolbar">
				<Icon v-if="menu.icon" width="24" class="text-primary header-icon" :icon="menu.icon"/>
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
</script>
<style lang="scss">
.main-toolbar {
	height: 48px !important;
	&>.v-toolbar__content{
		height: 48px !important;
	}
}
.app-content{
	overflow: auto;
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
	.header-icon{
		margin: 0 8px;
	}
}
.full-screen{
	font-size: 18px;
	cursor: pointer;
}


</style>