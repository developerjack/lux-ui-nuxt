<template>
	<yhlx-main-container :key="$route.fullPath">
		<template v-slot:title>
			<v-menu open-on-hover>
				<template v-slot:activator="{ props }">
					<v-btn v-bind="props" class="px-0">
            <div>
              <div class="flex-box">
                <h4 class="card-title">{{ device.name }}</h4>
                <v-icon>mdi-chevron-down</v-icon>
              </div>
              <p class="subtitle">副标题</p>
            </div>
					</v-btn>
				</template>
				<v-list>
					<v-list-item v-for="(item, index) in devices" :key="index" @click="switchDevice(item.id)">
						<v-list-item-title>
							<p>{{ item.name }}</p>
              <p class="subtitle">{{'副标题'}}</p>
						</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
		</template>
		<v-tabs v-model="tab">
			<v-tab value="1">Overview</v-tab>
			<v-tab value="2">Info</v-tab>
			<v-tab value="3">Real Data</v-tab>
			<v-tab value="4">Line Chart</v-tab>
			<v-tab value="5">History Data</v-tab>
		</v-tabs>
		<v-card-text>
			<v-tabs-window v-model="tab">
				<v-tabs-window-item value="1">
					One
				</v-tabs-window-item>
				<v-tabs-window-item value="2">
					<v-row>
						<v-col cols="2" class="font-weight-bold">Serial Number</v-col>
						<v-col cols="4">IOC24001</v-col>
						<v-col cols="2" class="font-weight-bold">Location</v-col>
						<v-col cols="4">Xiamen</v-col>
						<v-col cols="2" class="font-weight-bold">Model</v-col>
						<v-col cols="4">IOC_Store</v-col>
						<v-col cols="2" class="font-weight-bold">Firmware version</v-col>
						<v-col cols="4">2024010128</v-col>
						<v-col cols="2" class="font-weight-bold">First Connect</v-col>
						<v-col cols="4">2024-01-01 22:22:22</v-col>
						<v-col cols="2" class="font-weight-bold">Last Connect</v-col>
						<v-col cols="4">2024-02-28 12:23:32</v-col>
						<v-col cols="2" class="font-weight-bold">Status</v-col>
						<v-col cols="4">Activated</v-col>
					</v-row>
				</v-tabs-window-item>
				<v-tabs-window-item value="3">
					<real-data />
				</v-tabs-window-item>
				<v-tabs-window-item value="4">
					<line-chart />
				</v-tabs-window-item>
				<v-tabs-window-item value="5">
					<history-data />
				</v-tabs-window-item>
			</v-tabs-window>
		</v-card-text>
	</yhlx-main-container>
</template>

<script setup lang="ts">
import RealData from "./components/RealData.vue";
import HistoryData from "./components/HistoryData.vue";
import LineChart from "./components/LineChart.vue";
const router = useRouter();

const device = ref({ id: "1", name: "Device NO.1" });
const devices = ref([
	{ id: "1", name: "Device NO.1" },
	{ id: "2", name: "Device NO.2" },
	{ id: "3", name: "Device NO.3" },
	{ id: "4", name: "Device NO.4" },
	{ id: "5", name: "Device NO.5" },
]);

const id = ref(router.currentRoute.value.params.id);
watch(id, () => {
	for (let i = 0; i < devices.value.length; i++) {
		const item = devices.value[i];
		if (item.id === id.value) {
			device.value = item;
			break;
		}
	}
}, {
	immediate: true
})

function switchDevice(itemId: string) {
	id.value = itemId;
	router.push(`./${itemId}`);
}

const tab = ref('one');
</script>
<style lang="scss">
.window-item-inner-right{
  height: calc(100vh - 224px);
}
</style>
<style scoped lang="scss">
.v-card-text{
  height: calc(100% - 48px);
}
.subtitle{
  text-align: left;
  font-size: 12px
}
.flex-box{
  display: flex;
}
</style>
