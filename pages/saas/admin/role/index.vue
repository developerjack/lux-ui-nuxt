<template>
	<yhlx-main-container>
		<template v-slot:append>
			<yhlx-btn business-type="Add" location="Toolbar" />
		</template>
		<div class="h-full d-flex">
			<v-list class="left px-1 py-4">
				<v-list-item v-for="(item, i) in menuItems" :key="i" :value="item" color="primary" rounded="shaped">
					<v-list-item-title class="font-weight-bold" v-text="item.title" />
					<template v-slot:append>
						<v-chip label density="comfortable" color="primary">{{ item.count }}</v-chip>
					</template>
				</v-list-item>
			</v-list>
			<div class="right pa-5">
	
				<yhlx-card title="Detail">
					<v-row>
						<v-col cols="12" sm="6">
							<yhlx-text-field label="Title*" required />
						</v-col>
						<v-col cols="12" sm="6">
							<yhlx-text-field label="Notes" />
						</v-col>
					</v-row>
				</yhlx-card>
				<yhlx-card title="Permissions" class="mt-4">
					<div class="my-6">
						<v-card variant="outlined">
							<v-text-field v-model="searchStr" variant="solo-filled" append-inner-icon="mdi-magnify" hide-details clearable placeholder="Search" />
						</v-card>
					</div>
					
					<template v-for="(permission, index) in permissions" :key="index">
						<h1 class="mt-8 mb-6">{{ permission.moduleName }}</h1>
						<div class="my-5 module-checkbox-wrapper">
							<v-checkbox v-for="item in permission.items" :key="item" v-model="selected" :label="item" :value="item" />
						</div>
					</template>
				</yhlx-card>
			</div>
		</div>
	</yhlx-main-container>
</template>

<script setup lang="ts">
const searchStr = ref("");
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

const selected = ref([]);
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

</style>
