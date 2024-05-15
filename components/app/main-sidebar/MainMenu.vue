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
let menuList = reactive({myList:[]}) // 防止响应式被覆盖
menuList.myList.push(...props.menu) // 将数据变为响应式
watch(()=>appStore.menuType, (newValue, oldValue) => { // 是否切换导航栏选项
    open.openList = []
    getData()
    if(appStore.menuType=='demo'){ // 选择demo则呈现剩下所有菜单项
      menuList.myList = [props.menu[0]]
      menuList.myList.push(...props.menu.slice(5))
    }else if(appStore.menuType==''){
      menuList.myList = [...props.menu]
    }
    getMenu()

})
const getData = ()=>{ // 取出数据中所有有两层嵌套的text作为菜单默认展开的列表
  props.menu.forEach(item=>{ 
    item.items.forEach(element=>{
      if(element.items){
        open.openList.push(element.text)
      }
    })
  })
}
const getMenu = () => { // 获取所选类型的对应菜单
  const arr = props.menu.slice(1)
  arr.forEach(item=>{// 呈现选择的对应菜单项
    if(item.text.toUpperCase()==appStore.menuType.toUpperCase()){
      menuList.myList = [props.menu[0]]
      menuList.myList.push(item)
    }
    if(item.text=='System'&&appStore.menuType=='SAAS'){
        if(menuList.myList.length === props.menu.length){
          menuList.myList = [props.menu[0]]
          menuList.myList.push(item)
        }else{
          menuList.myList.push(item)
        }
      }
  })
}
let open = reactive({openList:[]})
let sortList = reactive([]) // 一个收集当前展开的菜单的列表，以支持点击子项后菜单不会收缩
onMounted(()=>{
  getMenu()
  sortList = []
  getData()
  sortList = open.openList
})
</script>
<template>
  <v-list nav dense v-model:opened="open.openList" open-strategy="multiple">
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
