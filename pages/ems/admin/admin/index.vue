<template>
	<yhlx-main-container :data-headers="headers" >
		<template v-slot:append>
			<DialogAdd location="Toolbar" :roleList="roleList" @refreshTable="refreshTable"/>
		</template>
		<yhlx-data-table-server ref="tableRef" :headers="headers" items-url="/netApi/user/account/page" @click:row="(event, { item }) => openEditDialog(item)" />
    <v-dialog v-model="dialog" max-width="800" max-height="600">
      <v-card class="overflow-auto">
        <v-container>
          <v-card-title>
            <span class="text-h5">{{ 'Edit' }}</span>
          </v-card-title>
          <v-divider class="mx-4 my-3" />
          <v-card-text>
            <v-row class="form">
              <v-col cols="12" sm="6">
                <yhlx-text-field v-model="form.email" label="Email*" hint="Please enter email, the email as login info." persistent-hint required />
              </v-col>
              <v-col cols="12" sm="6">
                <yhlx-text-field v-model="form.password" label="Password*" type="password" required />
              </v-col>
              <v-col cols="12" sm="6">
                <yhlx-text-field v-model="form.username" label="Name*" required />
              </v-col>
              <v-col cols="12" sm="6">
                <yhlx-text-field v-model="form.phone" label="Phone Number" hint="example of persistent helper text" required />
              </v-col>
              <v-col cols="12">
                <yhlx-select :items="roleList" label="Role" multiple v-model="form.roleIdList"/>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <yhlx-btn business-type="Close" variant="text" @click="dialog = false">Close</yhlx-btn>
            <yhlx-btn business-type="Primary" @click="saveForm">Save</yhlx-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
	</yhlx-main-container>
</template>
<script setup lang="ts">
import { login } from '@/api/login'
import { getRoleList } from '@/api/ems/admin/roleManage'
import DialogAdd from './Add.vue';
import { updateAccount } from "@/api/ems/admin/adminManage";
const router = useRouter();
const tableRef = ref()
const headers = ref([
	{ title: "Name", key: "username" },
	{ title: "Email", key: "email", align: "start" },
	{ title: "Phone Number", key: "phone", sortable: false },
	{ title: "Status", key: "status" },
]);
const roleList = ref([])
const dialog = ref(false)
const form = ref({
  username: '',
  password: '',
  email: '',
  phone: '',
  roleIdList: []
})
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
  getRoleList().then(response => {
    response.data.forEach((item) => {
      roleList.value.push({
        value: item.id,
        title: item.name
      })
    })
  })
})
function refreshTable () {
  tableRef.value.loadItems({})
}
function openEditDialog (item) {
  dialog.value = true
  form.value = {
    ...form.value,
    ...item
  }
  form.value.roleIdList = []
  item.roleList.forEach(item => {
    form.value.roleIdList.push(item.id)
  })
}
function saveForm () {
  updateAccount(form.value).then(res => {
    dialog.value = false
    refreshTable()
  })
}
</script>
