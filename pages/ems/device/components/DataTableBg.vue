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
      style="margin-right: 16px;"
  >
    <template v-slot:headers="{ columns }">
      <tr class="grey-background">
        <th v-for="(column,index) in columns" :key="index">{{ column.title }}</th>
      </tr>
    </template>
    <template v-slot:body="{ items }">
      <tr v-for="(column, index) in props.items" :key="index" :class="index % 2 !== 0 ? 'grey-background' : ''">
        <td>
          <v-checkbox v-model="selected" :value="column" hide-details></v-checkbox>
        </td>
        <td v-for="item in Object.keys(column)" >
          {{ column[item] }}
        </td>
      </tr>
    </template>
    <template v-slot:bottom>
    </template>
  </v-data-table>
</template>

<style scoped lang="scss">
.grey-background{
  background-color: #F0F0F0;
}
</style>