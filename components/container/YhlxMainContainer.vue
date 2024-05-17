<template>
	<div class="app-wrapper">
		<v-card class="h-full app-card" rounded="xl" style="display: flex; flex-direction: column;position: relative;">
			<v-toolbar class="px-5">
				<Icon v-if="menu.icon" width="30" class="text-primary mx-4" :icon="menu.icon"/>
				<h4 class="card-title">{{ menu.text }}</h4>
				<v-spacer></v-spacer>
				<slot name="append" />
				<v-btn icon @click="showEditDialog">
					<v-icon>mdi-dots-vertical</v-icon>
				</v-btn>
			</v-toolbar>
			<editDialog v-show="isHide" :items="props.items"></editDialog>
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
import editDialog from '@/components/dialog/editDialog.vue'
import { useAppStore } from "@/stores/app";
const router = useRouter()
const appStore = useAppStore();
const props = defineProps({
	items: Array // 编辑框的表头列表
})
const menu: Menu = mainMenu.getCurrentMenu();
const isHide = ref(false)
const showEditDialog = () => {
	isHide.value = !isHide.value
}
onMounted(()=>{
  if(!localStorage.getItem("token")){
    router.push('/auth/login')
  }
})
</script>

<style scoped>
.app-wrapper {
	height: calc(100vh - 64px);
	padding: 20px;
}
</style>