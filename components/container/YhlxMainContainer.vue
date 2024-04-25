<template>
	<div class="app-wrapper">
		<v-card class="h-full app-card" rounded="xl" style="display: flex; flex-direction: column;">
			<v-toolbar class="px-5">
				<Icon v-if="menu.icon" width="30" class="text-primary mx-4" :icon="menu.icon"/>
				<h4 class="card-title">{{ menu.text }}</h4>
				<v-spacer></v-spacer>
				<slot name="append" />
				<v-btn icon>
					<v-icon>mdi-dots-vertical</v-icon>
				</v-btn>
			</v-toolbar>
			<v-divider />
			<div class="overflow-hidden">
				<slot />
			</div>
		</v-card>
	</div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import Menu = NavigationConfig.Menu;
import mainMenu from "@/configs/mainMenu";

const menu: Menu = mainMenu.getCurrentMenu();
</script>

<style scoped>
.app-wrapper {
	height: calc(100vh - 64px);
	padding: 20px;
}
</style>