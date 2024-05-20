<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const router = useRouter();
router.afterEach((to, from) => {
  // to and from are both route objects.
  console.log('router.to.path',to.fullPath)
  console.log('router.from.path',from.fullPath)
})
</script>