import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    theme: 'light',
    mainSidebar: true,
    menuType: '',
    isFullScreen: false,
    addDrawer:false,
  }),
  persist: [
    {
      paths: ["theme","menuType"],
      storage: localStorage,
    },
  ],

  getters: {
    
  },
  actions: {
    toggleSidebar() {
      this.mainSidebar = !this.mainSidebar
    },
    fullScreen() {
      this.isFullScreen = !this.isFullScreen
    },
    setMenuType(menuType: string) {
      this.menuType = menuType
    },
    setAddDrawer(addDrawer:boolean) {
      this.addDrawer = addDrawer
    },
    setTheme(theme: string) {
      this.theme = theme
    }
  },
})