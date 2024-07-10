<script setup lang="ts">
const prop = defineProps({
  itemList: {
    type: Array,
    default: () => []
  },
  itemObj: {
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
            <h4 class="card-title">{{ prop.itemObj.name }}</h4>
            <v-icon>mdi-chevron-down</v-icon>
          </v-list-item-title>
          <v-list-item-subtitle>
            {{'Software park'}}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </template>
    <v-list>
      <v-list-item v-for="(item, index) in prop.itemList" :key="index" @click="emits('switchDevice',item.id)">
        <v-list-item-title>
          {{ item.name }}
        </v-list-item-title>
        <v-list-item-subtitle>
	        {{'Airport'}}
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<style scoped lang="scss">

</style>