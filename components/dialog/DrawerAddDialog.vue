<template>
	<teleport to="body">
		<v-navigation-drawer
			location="right"
			absolute
			temporary
			v-model="drawer"
			style="top:0;hieght:100vh !important;min-height:100vh !important;width:30vw;z-index: 2001"
		>
			<template v-slot:prepend>
				<slot name="head"></slot>
			</template>
			<v-divider></v-divider>

			<slot name="content"></slot>
			<div style="width: 100%;height: 50px;position: fixed;bottom:0;line-height:45px">
				<v-divider></v-divider>
				<yhlx-btn business-type="Close" variant="text" @click="drawer = false" style="margin-left:65%">Close</yhlx-btn>
				<yhlx-btn business-type="Primary" @click="drawer = false" >Save</yhlx-btn>
			</div>
		</v-navigation-drawer>
	</teleport>
</template>
<script setup lang="ts">
import YhlxBtn from "@/components/common/YhlxBtn.vue";
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