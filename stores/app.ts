import type { set } from 'nuxt/dist/app/compat/capi'
import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    theme: 'light',
    mainSidebar: true,
    menuType:'SAAS',
  }),
  persist: [
    {
      paths: ["theme"],
      storage: localStorage,
    },
  ],

  getters: {
    
  },
  actions: {
    toggleSidebar() {
      this.mainSidebar = !this.mainSidebar
    },
    setMenuType(menuType: string) {
      this.menuType = menuType
    },
    setTheme(theme: string) {
      this.theme = theme
    }
  },
})