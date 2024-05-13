<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { reactive,watch  } from 'vue'
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();
const props = defineProps({
  menu: {
    type: Array<any>,
    default: () => [],
  },
});


let menuList = reactive({myList:[]})
menuList.myList.push(...props.menu)
watch(()=>appStore.menuType, (newValue, oldValue) => {
    console.log('appStore',appStore.menuType)
    const arr = props.menu.slice(1)
    console.log(arr)
    if(appStore.menuType=='demo'){
      menuList.myList = [props.menu[0]]
      menuList.myList.push(...props.menu.slice(4))
    }else if(appStore.menuType=='CPO'){
      menuList.myList = [props.menu[0]]
      menuList.myList.push(props.menu[3])
    }
    arr.forEach(item=>{
      if(item.text==''||item.text.toUpperCase()==appStore.menuType.toUpperCase()){
        menuList.myList = [props.menu[0]]
        menuList.myList.push(item)
        console.log(menuList)
      }
    })

})


const open = reactive(['Customer','Admin','Landing Pages','UI Components','Widget','Chart Pages'])
</script>
<template>
  <v-list nav dense v-model="open">
    <template v-for="menuArea in menuList.myList" :key="menuArea.key">
      <div v-if="menuArea.key || menuArea.text" class="pa-1 mt-2 text-overline">
        {{ menuArea.text }}
      </div>
      <template v-if="menuArea.items">
        <template v-for="menuItem in menuArea.items" :key="menuItem.key">
          <!-- menu level 1 -->
          <v-list-item
            v-if="!menuItem.items"
            :to="menuItem.link"
            color="primary"
          >
            <template v-slot:prepend>
              <Icon class="mx-2 mr-5" width="20" :icon="menuItem.icon" />
            </template>
            <v-list-item-title
              v-text="menuItem.text"
              class="font-weight-bold"
            ></v-list-item-title>
          </v-list-item>
          <v-list-group :active="menuItem.isActive" v-else :value="menuItem.text" :key="menuItem.text">
            <!-- subMenu activator -->
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" color="primary">
                <template v-slot:prepend>
                  <Icon class="mx-2 mr-5" width="20" :icon="menuItem.icon" />
                </template>
                <v-list-item-title
                  v-text="menuItem.text"
                  class="font-weight-bold"
                ></v-list-item-title>
              </v-list-item>
            </template>
            <!-- menu level 2 -->
            <v-list-item
              v-for="subMenuItem in menuItem.items"
              :key="subMenuItem.key"
              :to="subMenuItem.link"
              color="primary"
            >
              <template v-slot:prepend>
                <Icon class="mx-2 mr-5" width="20" :icon="subMenuItem.icon" />
              </template>
              <v-list-item-title
                v-text="subMenuItem.text"
                class="font-weight-bold"
              ></v-list-item-title>
            </v-list-item>
          </v-list-group>
        </template>
      </template>
    </template>
  </v-list>
</template>

<style scoped>
.v-list-group .v-list-item {
  padding-left: 8px !important;
}
</style>
