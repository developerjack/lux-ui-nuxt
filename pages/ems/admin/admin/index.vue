<template>
	<yhlx-main-container :data-headers="headers" >
		<template v-slot:append>
			<DialogAdd location="Toolbar" @refreshTable="refreshTable"/>
		</template>
		<yhlx-data-table-server ref="tableRef" :headers="headers" items-url="/netApi/user/account/page" @click:row="(event, { item }) => router.push(`admin/${item.title}`)" />
	</yhlx-main-container>
</template>
<script setup lang="ts">
import { login } from '@/api/login'
import DialogAdd from './Add.vue';
const router = useRouter();
const tableRef = ref()
const headers = ref([
	{ title: "Name", key: "username" },
	{ title: "Email", key: "email", align: "start" },
	{ title: "Phone Number", key: "phone", sortable: false },
	{ title: "Status", key: "status" },
]);
onMounted(() => {
  const token = localStorage.getItem('access_token');
  if (!token) {
    const formData = new FormData();
    formData.append('grant_type', 'authorization_password');
    formData.append('username', 'yhlx1028');
    formData.append('password', 'yhlx1028');
    login(formData).then(res => {
      const { data } = res
      localStorage.setItem('access_token', data['access_token']);
    })
  }
})
function refreshTable () {
  tableRef.value.loadItems({})
}
</script>
