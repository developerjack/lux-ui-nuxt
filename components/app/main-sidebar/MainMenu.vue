<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { reactive,watch  } from 'vue'
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();
const router = useRouter();

const props = defineProps({
  menu: {
    type: Array<any>,
    default: () => [],
  },
});
let menuList = reactive([])
menuList.push(...props.menu)
watch(()=>appStore.menuType, (newValue, oldValue) => {
    open.openList = []
    getData()
    getMenu()

})
const getData = ()=>{ 
  props.menu.forEach(item=>{ 
    item.items.forEach(element=>{
      if(element.items){
        open.openList.push(element.text)
      }
    })
  })
}
const getMenu = () => {
  if(appStore.menuType=='demo'){ 
      menuList = [props.menu[0]]
      menuList.push(...props.menu.slice(5))
    }
  const arr = props.menu.slice(1)
  arr.forEach(item=>{
    if(item.text.toUpperCase()==appStore.menuType.toUpperCase()){
      menuList = [props.menu[0]]
      menuList.push(item)
    }
    if(item.text=='System'&&appStore.menuType=='SAAS'){
        if(menuList.length === props.menu.length){
          menuList = [props.menu[0]]
          menuList.push(item)
        }else{
          menuList.push(item)
        }
      }
  })
}
const path = ref('')
router.afterEach((to, from) => {
  path.value = to.fullPath
});
let open = reactive({openList:[]})
onMounted(()=>{
  path.value = router.currentRoute.value.fullPath
  getMenu()
  getData()
})
</script>
<template>
  <v-list nav dense v-model:opened="open.openList" open-strategy="multiple">
    <template v-for="menuArea in menuList" :key="menuArea.text">
      <div v-if="menuArea.key || menuArea.text" class="pa-1 mt-2 text-overline">
        {{ menuArea.text }}
      </div>
      <template v-if="menuArea.items">
        <template v-for="menuItem in menuArea.items" :key="menuItem.text">
          <!-- menu level 1 -->
          <v-list-item
            v-if="!menuItem.items"
            :to="menuItem.link"
            color="primary"
            :class="{ 'active': path.startsWith(menuItem.link) && menuItem.link !== '/' , 'v-list-item--active': path.startsWith(menuItem.link) && menuItem.link !== '/'}"
          >
            <template v-slot:prepend>
              <Icon class="mx-2 mr-5" width="20" :icon="menuItem.icon" />
            </template>
            <v-list-item-title
              v-text="menuItem.text"
              class="font-weight-bold"
            ></v-list-item-title>
          </v-list-item>
          <v-list-group v-else :value="menuItem.text" :key="menuItem.text">
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
              :key="subMenuItem.text"
              :to="subMenuItem.link"
              color="primary"
              :class="{ 'active': path.startsWith(subMenuItem.link) && subMenuItem.link !== '/' , 'v-list-item--active': path.startsWith(subMenuItem.link) && subMenuItem.link !== '/'}"
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
.active{
  color: rgb(var(--v-theme-primary)) !important;
}
</style>
