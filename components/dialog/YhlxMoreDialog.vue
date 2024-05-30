<template>
  <v-card class="overflow-auto float-card">
    <v-list density="compact">
      <v-list-item class="font-weight-bold" v-show="props.dataHeaders">Columns</v-list-item>
      <v-list-item v-for="item in props.dataHeaders" :key="item.value" :title="item.text" @click="dataHeaderClick(item)">
        <template #append>
          <v-checkbox :value="item.value" v-model="checked" density="compact" hide-details readonly />
        </template>
      </v-list-item>
      <v-divider />
      <v-list-item v-for="item in operatingItems" :key="item.label" color="primary" :title="item.label" @click="item.click()" />
    </v-list>
  </v-card>
</template>
<script setup lang="ts">
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();
const props = defineProps({
	dataHeaders: Array, // 表头
});
const emit = defineEmits(['refreshTable']);

const dataHeaderClick = (item: any) => {
    const index = checked.indexOf(item.value);
    index !== -1 ? checked.splice(index, 1) : checked.push(item.value);
}
const checked = reactive([]);

const operatingItems = ref([{
    label: 'Clear Filters',
    click: () => {
			console.log("Clear Filters")
    }
  }, {
    label: 'Reset Sorting',
	  click: () => {
		  console.log("Reset Sorting")
	  }
  }, {
		label: 'Refresh Table',
		click: () => {
			console.log("Refresh Table");
			emit('refreshTable');
		}
	},
]);

watch(props.dataHeaders, () => {
  props.dataHeaders.forEach(item => {
    checked.push(item.value)
  })
})

watch(checked, () => {
  appStore.setColumns(checked)
})
</script>
<style lang="scss" scoped>
.float-card {
  position: absolute;
  right: 54px;
  top: 57px;
  z-index: 999;
}

.v-card {
	max-height: 500px;
}

.v-list {
  width: 200px;
}

:deep(.v-checkbox .v-selection-control) {
	min-height: 0;
}
</style>