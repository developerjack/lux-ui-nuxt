<script setup lang="ts">
import { Icon } from "@iconify/vue";
import menu from "@/configs/mainMenu";
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();
const router = useRouter();

const path = ref('');
let open = reactive({openList: []});
let menuList = reactive([]);

router.afterEach((to) => {
  path.value = to.fullPath
});

watch(() => appStore.menuType, () => {
	path.value = router.currentRoute.value.fullPath;
	menuList.splice(0, menuList.length);
	menuList.push(...menu.getMenus(appStore.menuType));
	open.openList = [];
	menuList.forEach(item => {
		item.items.forEach(element => {
			if (element.items) {
				open.openList.push(element.text);
			}
		})
	});
}, {
	immediate: true
});
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
.active {
  color: rgb(var(--v-theme-primary)) !important;
}
</style>
