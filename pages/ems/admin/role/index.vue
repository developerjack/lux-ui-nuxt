<template>
	<yhlx-main-container>
		<div class="h-full d-flex">
			<v-list class="left px-1 py-4" :key="headerTitle">
				<v-list-item
          v-for="({ menuItem }, i) in roleItems"
          :key="i"
          :value="menuItem"
          color="primary"
          rounded="shaped"
          @click="changeType('Detail', i)"
          :class="{ ' v-list-item--active': selectedId === i, 'text-primary': selectedId === i }"
        >
					<v-list-item-title class="font-weight-bold" v-text="menuItem.title" />
					<template v-slot:append>
						<v-chip label density="comfortable" color="primary">{{ menuItem.count }}</v-chip>
					</template>
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
				<yhlx-card title="Permissions" class="mt-4">
					<div class="my-6">
						<v-card variant="outlined">
							<v-text-field v-model="searchStr" variant="solo-filled" append-inner-icon="mdi-magnify" hide-details clearable placeholder="Search" />
						</v-card>
					</div>
					<template v-for="(permission, index) in filterPermissions" :key="index">
						<h1 class="mt-8 mb-6">{{ permission.moduleName }}</h1>
						<div class="mt-5 module-checkbox-wrapper">
							<v-checkbox v-for="item in permission.items" :key="item" v-model="formData.selected" :label="item" :value="item" />
						</div>
					</template>
				</yhlx-card>
			</div>
		</div>
	</yhlx-main-container>
</template>

<script setup lang="ts">
const roleItems: Array<{ roleId: number,menuItem: { title: string, count: number },RoleName: string,Note: string,selected: string[] }> = reactive([])
const formData: { RoleName: string, Note: string, selected: string[] } = reactive({
  RoleName: '',
  Note: '',
  selected: []
})
const selectedId = ref()
const headerTitle = ref('Add')
const searchStr = ref('');
const menuItems = ref([
	{
		title: "Admin",
		count: 123,
	},
	{
		title: "Operator",
		count: 10,
	},
	{
		title: "Maintainer",
		count: 145,
	},
	{
		title: "Accountant",
		count: 23,
	},
	{
		title: "Device Manager",
		count: 13,
	},
	{
		title: "Auditor",
		count: 3,
	},
	{
		title: "operator Manager",
		count: 118,
	},
]);

const permissions = ref([
	{
		moduleName: 'Command',
		items: [
			'Send Hard Reset', 'Send Soft Reset', 'Send Unlock Connector', 'Send Start Transaction', 'Send Stop Transaction', 'Send Update Firmware',
			'Send Get Configuration', 'Send Change Configuration', 'Send Get Diagnostics', 'Send Change Availability', 'Send Clear Cache'
		]
	},
	{
		moduleName: 'Create',
		items: [
			'Create Location', 'Create Charging Station', 'Create User', 'Create Group', 'Create Customer', 'Create Driver',
			'Create Token', 'Create Package', 'Create Coupon', 'Create Smart Charging Group', 'Create Charge Tariff', 'Create Reimbursement Tariff',
			'Create Wholesale Billing Rule', 'Create Reimbursement Billing Rule', 'Create Retail Billing Rule', 'Create Charge Assist Web User', 'Create Energy Mix Profile', 'Create Role',
			'Create exception groups', 'Create exceptions'
		]
	}
]);
onMounted(() => {
  menuItems.value.forEach((item,index) => {
    roleItems.push({
      roleId: index,
      menuItem: {
        title: item.title,
        count: item.count
      },
      RoleName: item.title,
      Note: item.title + 'count: ' + item.count,
      selected: ['Create Location','Create Customer','Send Soft Reset']
    })
  })
  selectedId.value = 0
  changeType('Detail')
})
const filterPermissions = computed(():{ moduleName:string; items: string[] }[] => {
  const arr: Array<{moduleName:string; items: string[]}> = []
  permissions.value.forEach(item => {
    arr.push({
      moduleName: item.moduleName,
      items: (item.items.filter(element => searchStr.value === null ? true : element.includes(searchStr.value)))
    })
  })
  return arr
})
function saveForm () {
  if (headerTitle.value === 'Add') {
    roleItems.push({
      roleId: roleItems.length,
      menuItem: {
        title: formData.RoleName,
        count: roleItems.length + 1
      },
      RoleName: formData.RoleName,
      Note: formData.Note,
      selected: formData.selected
    })
    selectedId.value = 0
    changeType('Detail')
  } else {
    roleItems[selectedId.value].menuItem.title = formData.RoleName
    roleItems[selectedId.value].RoleName = formData.RoleName
    roleItems[selectedId.value].Note = formData.Note
    roleItems[selectedId.value].selected = formData.selected
  }
  headerTitle.value = 'Detail'
}
function changeType (titleName: string, index: any = null) {
  clearInput()
  headerTitle.value = titleName
  if (titleName === 'Detail' && index !== null) {
    selectedId.value = index
    formData.RoleName = roleItems[selectedId.value].RoleName
    formData.Note = roleItems[selectedId.value].Note
    formData.selected = roleItems[selectedId.value].selected
  } else if (titleName === 'Add') {
    selectedId.value = null
  }
}
function deleteRoleItem () {
  roleItems.splice(selectedId.value, 1)
  selectedId.value = 0
  changeType('Detail')
}
function clearInput () {
  searchStr.value = ''
  formData.RoleName = ''
  formData.Note = ''
  formData.selected = []
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
