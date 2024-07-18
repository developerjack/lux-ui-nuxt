<template>
	<yhlx-main-container>
		<div class="h-full d-flex">
			<v-list class="left px-1 py-4" :key="headerTitle">
				<v-list-item
          v-for="(menuItem, i) in menuItems"
          :key="i"
          :value="menuItem"
          color="primary"
          rounded="shaped"
          @click="changeType('Detail', menuItem.value)"
        >
					<v-list-item-title class="font-weight-bold" v-text="menuItem.title" />
<!--					<template v-slot:append>-->
<!--						<v-chip label density="comfortable" color="primary">{{ menuItem.count }}</v-chip>-->
<!--					</template>-->
				</v-list-item>
        <div class="border-dashed">
          <nuxt-icon name="svg/add-plus" style="font-size: 32px;" @click="changeType('Add')"></nuxt-icon>
        </div>
			</v-list>
			<div class="right pa-5">
				<yhlx-card title="">
          <template v-slot:title>
            <div class="d-flex justify-space-between">
              <p style="line-height: 36px">{{ headerTitle }}</p>
              <div>
                <yhlx-btn color="primary" class="width-limit" @click="saveForm">save</yhlx-btn>
                <yhlx-btn v-if="headerTitle !== 'Add'" color="red" class="ml-2 width-limit" @click="deleteRoleItem">delete</yhlx-btn>
              </div>
            </div>
          </template>
					<v-row>
						<v-col cols="12" sm="6">
							<yhlx-text-field label="Title*" required v-model="formData.RoleName" />
						</v-col>
						<v-col cols="12" sm="6">
							<yhlx-text-field label="Notes" v-model="formData.Note"/>
						</v-col>
					</v-row>
				</yhlx-card>
				<yhlx-card title="Permissions" class="mt-4" style="height: calc(100% - 165px)">
					<div class="my-6">
						<v-card variant="outlined">
							<v-text-field v-model="searchStr" variant="solo-filled" append-inner-icon="mdi-magnify" hide-details clearable placeholder="Search" />
						</v-card>
					</div>
					<template v-for="(permission, index) in permissions" :key="index">
						<h1 class="mt-8 mb-6">{{ permission.moduleName }}</h1>
						<div class="mt-5 module-checkbox-wrapper">
							<v-checkbox v-for="item in permission.items" :key="item.value" v-model="formData.selected" :label="item.label" :value="item.value" />
						</div>
					</template>
				</yhlx-card>
			</div>
		</div>
	</yhlx-main-container>
</template>

<script setup lang="ts">
import { login } from "@/api/login";
import { getPermission, getRoleDetail, createRole, updateRole, logicDeleteRole, getRoleList } from '@/api/ems/admin/roleManage'
const roleItems: Array<{ roleId: number,menuItem: { title: string, count: number },RoleName: string,Note: string,selected: string[] }> = reactive([])
const formData: { RoleName: string, Note: string, selected: string[] } = reactive({
  RoleName: '',
  Note: '',
  selected: []
})
const selectedId = ref()
const headerTitle = ref('Add')
const searchStr = ref('');
const menuItems: Ref<{ title: string,value: string }[]> = ref([]);
watch(() => formData.selected, () => {
  console.log(formData.selected)
})
const permissions: { moduleName: string, items: { value: string, label: string }[] }[] = reactive([
	{
		moduleName: 'Command',
		items: []
	},
	{
		moduleName: 'Create',
		items: []
	}
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
      ApiGetPermission()
    })
  } else {
    ApiGetPermission()
    getMenuList()
  }
})
function changeType (titleName: string, index: any = null) {
  clearInput()
  headerTitle.value = titleName
  selectedId.value = index
  if (titleName === 'Detail' && index !== null) {
    ApiGetRoleDetail(index)
  } else if (titleName === 'Add') {
    selectedId.value = null
  }
}
function deleteRoleItem () {
  logicDeleteRole(selectedId.value).then(res => {
    getMenuList()
  })
  changeType('Detail')
}
function saveForm() {
  const obj = {
    id: selectedId.value,
    name: formData.RoleName,
    notes: formData.Note,
    permissionIdList: formData.selected
  }
  if (headerTitle.value === 'Detail') {
    updateRole(obj).then((res) => {
      console.log(res)
    })
  } else {
    createRole(obj).then(res => {
      console.log(res)
    })
  }
}
function clearInput () {
  searchStr.value = ''
  formData.RoleName = ''
  formData.Note = ''
  formData.selected = []
}
function ApiGetPermission () {
  getPermission().then(response => {
    response.data.forEach(item => {
      if (item.groupName === 'Command') {
        permissions[0].items.push({
          label: item.code,
          value: item.id
        })
      } else {
        permissions[1].items.push({
          label: item.code,
          value: item.id
        })
      }
    })
  })
}
function ApiGetRoleDetail (id: any) {
  getRoleDetail(id).then(response => {
    formData.RoleName = response.data.name
    formData.Note = response.data.notes
    response.data.permissionList.forEach(item => {
      formData.selected.push(item.id)
    })
  })
}
function getMenuList () {
  getRoleList().then(res => {
    menuItems.value = []
    res.data.forEach(item => {
      menuItems.value.push({
        title: item.name,
        value: item.id,
      })
    })
    changeType('Detail',res.data.content[0].id)
  })
}
</script>

<style scoped lang="scss">
.left {
	width: 240px;
	border-right: 1px solid rgba(0, 0, 0, 0.12);
}
.right {
	flex: 1;
	overflow: auto;
}
.width-limit{
  width: 80px;
}
:deep(svg){
  cursor: pointer;
  margin: 0 auto;
}
.border-dashed{
  border: 1px dashed;
  border-radius: 5px;
  margin-top: 16px;
}
</style>
