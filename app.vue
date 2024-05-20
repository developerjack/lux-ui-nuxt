<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const list = ref(['/','/auth/login','Register']) // 假定不用验证的页面为这些
const router = useRouter();
router.beforeEach((to, from, next) => {
  if(list.value.indexOf(to.fullPath)==-1 && !localStorage.getItem("token")){
    router.push('/auth/login')
  }else{
    next()
  }
})
</script>