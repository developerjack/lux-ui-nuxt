<script setup lang="ts">
  const props = defineProps({
    items: {
      type: Array,
      default: () => []
    },
    headers: {
      type: Array,
      default: () => []
    }
  })
  const selected = ref([])
</script>

<template>
  <v-data-table
      :items="props.items"
      :headers="props.headers"
      show-select
      v-model="selected"
      item-value="name"
      hide-default-footer
  />
</template>

<style scoped lang="scss">
.grey-background{
  background-color: #F0F0F0;
}
</style>