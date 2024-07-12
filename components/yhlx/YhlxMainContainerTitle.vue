<script setup lang="ts">
const router = useRouter();
const prop = defineProps({
  titleList: {
    type: Array<{  id: string; title: string; subtitle?: string; }>,
    default: () => []
  }
})
const titleItem = ref({ title: '',subtitle: '', id: '' });
const id = ref('');

function switchDevice(value: string) {
  id.value = value;
  router.push(`./${value}`);
}

onMounted(() => {
  id.value = router.currentRoute.value.params.id
})
watch(id, () => {
  for (let i = 0; i < prop.titleList.length; i++) {
    const item = prop.titleList[i];
    if (item.id === id.value) {
      titleItem.value = item;
      break;
    }
  }
}, {
  immediate: true
})
</script>

<template>
  <v-menu open-on-hover>
    <template v-slot:activator="{ props }">
      <v-list style="background: none;" class="pa-0 cursor-pointer" v-bind="props">
        <v-list-item>
          <v-list-item-title class="d-flex">
            <h4 class="card-title">{{ titleItem.title }}</h4>
            <v-icon>mdi-chevron-down</v-icon>
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ titleItem.subtitle }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </template>
    <v-list>
      <v-list-item v-for="(item, index) in prop.titleList" :key="index" @click="switchDevice(item.id)">
        <v-list-item-title>
          {{ item.title }}
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