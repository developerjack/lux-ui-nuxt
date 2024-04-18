<script setup lang="ts">
import CustomerAdd from './Add.vue';
import YhlxMainContainer from "@/components/container/YhlxMainContainer.vue";
const page = ref(1);
const itemsPerPage = ref(5);
const headers = ref([
	{ title: "Name", key: "name" },
	{ title: "Email", key: "email", align: "start" },
  { title: "Phone number", key: "phoneNumber", sortable: false },
  { title: "Age", key: "age" },
	{ title: "Status", key: "status" },
]);
const desserts = ref([
  {
    name: "Frozen Yogurt",
		email: '434520410@qq.com',
	  phoneNumber: '18059289854',
	  age: 20,
	  status: 'Enable'
  },
  {
    name: "Ice cream sandwich",
	  email: '271743196@qq.com',
	  phoneNumber: '18059289854',
	  age: 10,
	  status: 'Disable'
  },
  {
    name: "Eclair",
	  email: 'liyh@iocharger.com',
	  phoneNumber: '18059289854',
	  age: 18,
	  status: 'Enable'
  },
  {
    name: "Cupcake",
	  email: '18059289854@qq.com',
	  phoneNumber: '18059289854',
	  age: 7,
	  status: 'Enable'
  },
  {
    name: "Gingerbread",
	  email: 'huanghl@iocharger.com',
	  phoneNumber: '18059289854',
	  age: 50,
	  status: 'Enable'
  },
  {
		name: "Jack",
	  email: 'developjack@github.com',
	  phoneNumber: '18059289854',
	  age: 33,
	  status: 'Disable'
  },
  {
    name: "Lollipop",
	  email: '123456789@qq.com',
	  phoneNumber: '18059289854',
	  age: 28,
	  status: 'Enable'
  },
  {
    name: "Honeycomb",
	  email: '199104150070@qq.com',
	  phoneNumber: '18059289854',
	  age: 9,
	  status: 'Enable'
  },
  {
    name: "Donut",
	  email: '434520410@qq.com',
	  phoneNumber: '18059289854',
	  age: 46,
	  status: 'Disable'
  },
  {
    name: "KitKat",
	  email: '434520410@qq.com',
	  phoneNumber: '18059289854',
	  age: 88,
	  status: 'Enable'
  },
]);
const pageCount = computed(() => {
  return Math.ceil(desserts.value.length / itemsPerPage.value);
});

</script>

<template>
	<yhlx-main-container>
		<template v-slot:append>
			<CustomerAdd location="Toolbar"/>
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

<style scoped lang="scss">

</style>
