<script setup lang="ts">
import YhlxMainContainer from "@/components/container/YhlxMainContainer.vue";
import CustomerAdd from './Add.vue';
const page = ref(1);
const itemsPerPage = ref(5);
const headers = ref([
	{ title: "ID Tag", key: "idTag" },
	{ title: "Card Name", key: "name", align: "start" },
	{ title: "Customer Email", key: "customerEmail" },
	{ title: "Customer Name", key: "customerName" },
  { title: "Expiry Time", key: "expiryTime", sortable: false },
  { title: "Status", key: "status" },
]);
const desserts = ref([
  {
	  idTag: "9F5D4F8C",
	  name: 'Li\'s Card',
	  customerEmail: 'liyh@iocharger.com',
	  customerName: 'Li Yuanhan',
	  expiryTime: '2024-12-01',
	  status: 'Enable'
  },
	{
		idTag: "BEB16B14",
		name: 'Wang\'s Card',
		customerEmail: 'wanghh@iocharger.com',
		customerName: 'Wang Huihuang',
		expiryTime: '2025-02-12',
		status: 'Enable'
	},
	{
		idTag: "30D33C19",
		name: 'Huang\'s Card',
		customerEmail: 'huanghl@iocharger.com',
		customerName: 'Huang Honglian',
		status: 'Enable'
	},
	{
		idTag: "7DCA0BF9",
		name: 'Zhang\'s Card',
		customerEmail: 'zhangjing@iocharger.com',
		customerName: 'Zhang jing',
		expiryTime: '2025-03-22',
		status: 'Disable'
	},
	{
		idTag: "0BA3D10A",
		name: 'Huang\'s Card',
		customerEmail: 'huangxd@iocharger.com',
		customerName: 'Huang Xidi',
		expiryTime: '2024-11-21',
		status: 'Enable'
	},
	{
		idTag: "9F6024CC",
		name: 'Ding\'s Card',
		customerEmail: 'dingzy@iocharger.com',
		customerName: 'Ding Ziyang',
		status: 'Disable'
	},
]);
const pageCount = computed(() => {
  return Math.ceil(desserts.value.length / itemsPerPage.value);
});
</script>

<template>
	<yhlx-main-container>
		<template v-slot:append>
			<CustomerAdd/>
		</template>
		<v-data-table
			style="flex: 1;"
			v-model:page="page"
			:headers="headers"
			:items="desserts"
			:items-per-page="itemsPerPage">
			<template v-slot:bottom>
				<div class="text-center pt-2 pb-4">
					<v-pagination v-model="page" :length="pageCount"></v-pagination>
				</div>
			</template>
		</v-data-table>
	</yhlx-main-container>
</template>

<style scoped lang="scss"></style>
