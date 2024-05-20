import { set } from 'nuxt/dist/app/compat/capi'
import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    theme: 'light',
    mainSidebar: true,
    menuType:'SAAS',
    isLogin:true,
    addDrawer:false,
    Columns:[''],
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
    setIsLogin(isLogin: boolean) {
      this.isLogin = isLogin
    },
    setMenuType(menuType: string) {
      this.menuType = menuType
    },
    setAddDrawer(addDrawer:boolean) {
      this.addDrawer = addDrawer
    },
    setColumns(Columns: Array<string>){
      this.Columns.splice(0)
      this.Columns.push(...Columns)
    },
    setTheme(theme: string) {
      this.theme = theme
    }
  },
})