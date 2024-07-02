<template>
  <v-card class="overflow-auto float-card">
    <v-list density="compact">
      <v-list-item class="font-weight-bold" v-show="props.dataHeaders">Columns</v-list-item>
      <v-list-item v-for="item in props.dataHeaders" :key="item.key" :title="item.title" @click="dataHeaderClick(item)">
        <template #append>
          <v-checkbox :value="item.key" v-model="item.show" density="compact" hide-details readonly />
        </template>
      </v-list-item>
      <v-divider v-show="props.dataHeaders" />
      <v-list-item v-for="item in operatingItems" :key="item.label" color="primary" :title="item.label" @click="item.click()" />
    </v-list>
  </v-card>
</template>
<script setup lang="ts">
const props = defineProps({
	dataHeaders: Array<{ // 表头
		key: string,
		title: string,
		show?: string
	}>,
	operations: {
		type: Object,
		default: () => {}
	}
});
const emits = defineEmits(['showMoreDialog']);
let headersKey = `headers-${useRouter().currentRoute.value.path}`;
const hiddenHeaders:Array<string> = JSON.parse(localStorage.getItem(headersKey) || '[]');
watch(() => props.dataHeaders, () => {
	if (props.dataHeaders instanceof Array) {
		props.dataHeaders.forEach(item => {
			if (item.show === undefined && item.key) {
				item.show = hiddenHeaders.indexOf(item.key) > -1 ? '' : item.key;
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
	const hiddenHeaders = props.dataHeaders?.filter(item => !item.show).map(item=>item.key);
	localStorage.setItem(headersKey, JSON.stringify(hiddenHeaders));
}

const operatingItems = ref([{
    label: 'Clear Filters',
    click: () => {
			props.operations.clearFilter();
			emits('showMoreDialog');
    }
  }, {
    label: 'Reset Sorting',
	  click: () => {
		  props.operations.resetSort();
			emits('showMoreDialog');
	  }
  }, {
		label: 'Refresh Table',
		click: () => {
			props.operations.refreshTable();
			emits('showMoreDialog');
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