<template>
	<teleport to="body">
		<v-navigation-drawer
			location="right"
			absolute
			temporary
			v-model="drawer"
			style="top:0;hieght:100vh !important;min-height:100vh !important;width:30vw;z-index: 2001"
		>
			<slot name="content"></slot>
		</v-navigation-drawer>
	</teleport>
</template>
<script setup lang="ts">
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();
const drawer = ref(false)
watch(()=>appStore.addDrawer,()=>{
	drawer.value = appStore.addDrawer
})
watch(drawer,()=>{
	if(drawer.value==false){
		appStore.setAddDrawer(false)
	}
})
</script>
<style lang="scss" scoped>
.v-navigation-drawer__scrim{
	z-index: 2000 !important;
}
</style>