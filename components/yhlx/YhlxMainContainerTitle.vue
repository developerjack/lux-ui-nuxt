<script setup lang="ts">
const prop = defineProps({
  titleList: {
    type: Array<{ name: string; subtitle: string; id: string }>,
    default: () => []
  },
  titleItem: {
    type: Object,
    default: () => {}
  }
})
const emits = defineEmits(['switchDevice'])
</script>

<template>
  <v-menu open-on-hover>
    <template v-slot:activator="{ props }">
      <v-list style="background: none;" class="pa-0 cursor-pointer" v-bind="props">
        <v-list-item>
          <v-list-item-title class="d-flex">
            <h4 class="card-title">{{ prop.titleItem.name }}</h4>
            <v-icon>mdi-chevron-down</v-icon>
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ prop.titleItem.subtitle }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </template>
    <v-list>
      <v-list-item v-for="(item, index) in prop.titleList" :key="index" @click="emits('switchDevice',item.id)">
        <v-list-item-title>
          {{ item.name }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ item.subtitle }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<style scoped lang="scss">

</style>