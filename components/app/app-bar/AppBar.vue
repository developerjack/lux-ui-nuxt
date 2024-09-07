<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import LanguageSwitcher from "./LanguageSwitcher.vue";
import ThemeToggle from "./ThemeToggle.vue";
const router = useRouter();
import UserMenu from "./UserMenu.vue";
import { useAppStore } from "@/stores/app";
import menu from "@/configs/mainMenu";
const appStore = useAppStore();

const list = ref(menu.getCompanies());
let title = ref(list.value[0].title);
let type = ref(list.value[0].type);
let typeName = ref(list.value[0].typeName);

onMounted(() => {
	if (appStore.menuType) {
		type.value = appStore.menuType;
		list.value.forEach(item => {
			if(item.type === type.value){
				title.value = item.title;
				typeName.value = item.typeName;
			}
		})
	} else {
		changeTitle(list.value[0]);
	}
})

// 选项
const options = computed(() => {
	return list.value;
});

const changeTitle = (item) => {
  title.value = item.title;
  type.value = item.type;
	const link = menu.getDefaultLink(menu.getMenus(type.value));
	if (!!link) {
		router.push(link);
	}
	appStore.setMenuType(item.type);
}
</script>

<template>
  <v-app-bar v-if="!appStore.isFullScreen">
    <v-app-bar-nav-icon @click="appStore.toggleSidebar" />
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">
          {{ title }}
          <v-chip label density="comfortable" color="primary ml-1" size="x-small">{{ typeName }}</v-chip>
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in options" :key="index" @click="changeTitle(item)">
          <v-list-item-title>
            {{ item.title }}
            <v-chip label density="comfortable" color="primary" size="x-small">{{ item.typeName }}</v-chip>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-spacer></v-spacer>
	  
    <v-btn icon>
      <v-badge color="error" content="7">
        <v-icon>mdi-bell-outline</v-icon>
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
	font-size: 8px;
	font-weight: bold;
  background-color: rgb(var(--v-theme-primary)) !important;
  color:white;
}
.box {
  font-size:10px;
  margin: 0 auto !important;
  line-height:36px;
  color:white;
  background-color:#51A77C;
}
</style>
