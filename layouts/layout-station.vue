<script setup lang="ts">
import { RouterView } from "vue-router";
import MainSiderbar from "@/components/app/main-sidebar/MainSiderbar.vue";
import AppBar from "@/components/app/app-bar/AppBar.vue";
import MainSiderbarStation from "~/components/app/main-sidebar/MainSiderbarStation.vue";
</script>

<style scoped lang="scss"></style>

<template>
  <v-app>
    <MainSiderbarStation />
    <AppAppBarStation />
    <v-main class="fill-height">
      <div class="fill-height">
        <RouterView />
      </div>
    </v-main>
  </v-app>
</template>