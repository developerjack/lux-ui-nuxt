<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { RouterView } from "vue-router";
import MainSiderbar from "@/components/app/main-sidebar/MainSiderbar.vue";
import AppBar from "@/components/app/app-bar/AppBar.vue";
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();
const isLogin = ref(true)
watch(()=>appStore.isLogin,()=>{
  isLogin.value = appStore.isLogin
})
</script>

<style scoped lang="scss"></style>

<template>
  <v-app>
    <MainSiderbar v-if="isLogin"/>
    <AppBar v-if="isLogin"/>
    <v-main class="fill-height">
      <div class="fill-height">
        <transition name="fade">
          <RouterView />
        </transition>
      </div>
    </v-main>
  </v-app>
</template>
