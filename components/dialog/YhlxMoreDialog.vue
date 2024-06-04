<template>
  <v-card class="overflow-auto float-card">
    <v-list density="compact">
      <v-list-item class="font-weight-bold" v-show="props.dataHeaders">Columns</v-list-item>
      <v-list-item v-for="item in props.dataHeaders" :key="item.key" :title="item.title" @click="dataHeaderClick(item)">
        <template #append>
          <v-checkbox :value="item.key" v-model="item.show" density="compact" hide-details readonly />
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
	dataHeaders: Array<{ // 表头
		key: String,
		title: String,
		show: String
	}>,
});

watch(() => props.dataHeaders, () => {
	if (props.dataHeaders instanceof Array) {
		props.dataHeaders.forEach(item => {
			if (item.show === undefined) {
				item.show = item.key;
			}
		});
	}
}, {
	immediate: true
})

const dataHeaderClick = (item: any) => {
    if (item.key === item.show) {
	    item.show = '';
    } else {
			item.show = item.key;
    }
}

const emit = defineEmits(['refreshTable']);
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