<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import LanguageSwitcher from "./LanguageSwitcher.vue";
import ThemeToggle from "./ThemeToggle.vue";
import SystemCard from "@/components/app/main-sidebar/SystemCard.vue";
import { ArrowDown } from '@element-plus/icons-vue'
import UserMenu from "./UserMenu.vue";
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();
</script>

<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="appStore.toggleSidebar"></v-app-bar-nav-icon>
    <el-dropdown>
      <span class="el-dropdown-link">
        <div class="headBox">
          <v-btn class="type-icon" size="38" icon>
            SAAS
          </v-btn>
          <div style="display: flex; align-items: center;">
              Iocharger
          </div>
          <el-icon class="el-icon--right" style="margin-top:12px">
            <arrow-down />
          </el-icon>
        </div>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <div class="headBox">
              <v-btn class="type-icon" size="38" icon>
                eMSP
              </v-btn>
              <div style="display: flex; align-items: center;">
                ICS
              </div>
            </div>
          </el-dropdown-item>
          <el-dropdown-item>
            <div class="headBox">
              <v-btn class="type-icon" size="38" icon>
                CPO
              </v-btn>
              <div style="display: flex; align-items: center;">
                Iocharger
              </div>
            </div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-badge dot color="success">
        <v-icon>mdi-account-multiple-outline</v-icon>
      </v-badge>
    </v-btn>

    <v-btn icon>
      <v-badge color="error" content="7">
        <v-icon>mdi-calendar-check</v-icon>
      </v-badge>
    </v-btn>
    <v-divider vertical thickness="2" inset class="ml-5 mr-1"></v-divider>

    <ThemeToggle />
    <LanguageSwitcher />

    <UserMenu />
  </v-app-bar>
</template>

<style scoped lang="scss">
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.headBox{
  display:flex;
}
.type-icon {
	font-size: 12px;
	font-weight: bold;
//	color: rgb(var(--v-theme-primary)) !important;
  background-color: rgb(var(--v-theme-primary)) !important;
  color:white;
  margin-right:4px;
}
</style>
