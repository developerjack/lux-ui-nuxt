<template>
	<yhlx-add-dialog location="Toolbar" title="Add Admin" @submit="submit">
		<template v-slot:content>
			<v-row class="form">
				<v-col cols="12" sm="6">
					<yhlx-text-field v-model="email" label="Email*" hint="Please enter email, the email as login info." persistent-hint required />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field v-model="password" label="Password*" type="password" required />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field v-model="username" label="Name*" required />
				</v-col>
				<v-col cols="12" sm="6">
					<yhlx-text-field v-model="phone" label="Phone Number" hint="example of persistent helper text" required />
				</v-col>
				<v-col cols="12">
					<yhlx-select :items="props.roleList" label="Role" multiple v-model="roleIdList"/>
				</v-col>
			</v-row>
		</template>
	</yhlx-add-dialog>
</template>
<script setup lang="ts">
import { createAccount } from '@/api/ems/admin/adminManage'
const props = defineProps({
  roleList:{
    type: Array,
    default: () => []
  }
})
const emits = defineEmits(['refreshTable'])
const email = ref('')
const password = ref('')
const username = ref('')
const phone = ref('')
const roleIdList= ref([])
function submit() {
  const obj = {
    username: username.value,
    password: password.value,
    email: email.value,
    phone: phone.value,
    roleIdList: roleIdList.value
  }
  createAccount(obj).then(res => {
    emits('refreshTable')
  })
}
</script>