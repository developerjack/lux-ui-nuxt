<template>
	<div class="app-wrapper">
		<v-card class="h-full app-card" rounded="xl">
			<v-toolbar class="px-5">
				<Icon v-if="menu.icon" width="30" class="text-primary mx-4" :icon="menu.icon"/>
				<h4 class="card-title">{{ menu.text }}</h4>
				<v-spacer></v-spacer>
				<slot name="append" />
				<v-btn icon @click="showMoreDialog">
					<v-icon>mdi-dots-vertical</v-icon>
				</v-btn>
			</v-toolbar>
			<yhlx-more-dialog v-show="isHide" :data-headers="props.dataHeaders" />
			<v-divider />
			<div class="overflow-auto">
				<slot />
			</div>
		</v-card>
	</div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import Menu = NavigationConfig.Menu;
import mainMenu from "@/configs/mainMenu";
import YhlxMoreDialog from '@/components/dialog/YhlxMoreDialog.vue'
const props = defineProps({
	dataHeaders: Array // 编辑框的表头列表
})
const menu: Menu = mainMenu.getCurrentMenu();
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
</style>