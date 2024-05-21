<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import LanguageSwitcher from "./LanguageSwitcher.vue";
import ThemeToggle from "./ThemeToggle.vue";
import UserMenu from "./UserMenu.vue";
import { useAppStore } from "@/stores/app";

const appStore = useAppStore();
onMounted(()=>{
  type.value = appStore.menuType
  list.value.forEach(item => {
    if(item.type==type){
      title.value = item.title
    }
  })
})
let title = ref("Iocharger")
let type = ref("SAAS")
const list = ref([{
  title:'Iocharger',
  type:'SAAS'
},{
  title:'ICS',
  type:'eMSP'
},{
  title:'EMES',
  type:'CPO'
},{
  title:'demo',
  type:'demo'
}])

const changeTitle = (item) => {
  title.value = item.title
  type.value = item.type
  appStore.setMenuType(item.type)
}
</script>

<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="appStore.toggleSidebar"></v-app-bar-nav-icon>
    <div class="text-center">
      <v-menu
        open-on-hover
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            v-bind="props"
            style="font-size:14px"
          >
            <div style="line-height:36px">
              {{title}}
              <v-chip label density="comfortable" color="primary" size="x-small" style="font-size:8px">{{ type }}</v-chip>
            </div>
            <v-icon size="small" style="height: 100%; color: #51A77C;">mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in list"
            :key="index"
            @click="changeTitle(item)"
          >
            <v-list-item-title style="font-size:12px;">
              <div style="line-height:36px">
                {{ item.title }}
                <v-chip label density="comfortable" color="primary" size="x-small" style="font-size:8px">{{ item.type }}</v-chip>
              </div>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
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
	font-size: 8px;
	font-weight: bold;
  background-color: rgb(var(--v-theme-primary)) !important;
  color:white;
}
.box{
  font-size:10px;
  margin: 0 auto !important;
  line-height:36px;
  color:white;
  background-color:#51A77C;
}
</style>
