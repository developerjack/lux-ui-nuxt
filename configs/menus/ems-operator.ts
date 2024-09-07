export default [
	{
		text: "",
		items: [
			{
				icon: "solar:widget-line-duotone",
				text: "Dashboard",
				link: "/ems-operator/dashboard",
			},
		],
	},
	{
		text:'EMS',
		items:[
			{
				icon: "solar:library-bold-duotone",
				text: "Location",
				link: "/ems-operator/location",
			},
			{
				icon: "solar:library-bold-duotone",
				text: "Gateway",
				link: "/ems-operator/gateway",
			},
			{
				icon: "solar:library-bold-duotone",
				text: "Alarm",
				link: "/ems-operator/alarm",
			},
		]
	},
	{
		text:'Decision',
		items: [
			{
				icon: "solar:slider-minimalistic-horizontal-line-duotone",
				text: "Price",
				link: "/ems-operator/price",
			}
		]
	},
	{
		text:'System',
		items:[
			{
				icon: "solar:slider-minimalistic-horizontal-line-duotone",
				text: "Admin",
				link: "/common/admin",
			},
			{
				icon: "solar:list-up-bold-duotone",
				text: "Role",
				link: "/common/role",
			},
			{
				icon: "solar:list-up-bold-duotone",
				text: "Setting",
				link: "/ems-operator/setting",
			},
			{
				icon: "solar:list-up-bold-duotone",
				text: "Operation Log",
				link: "/common/operation-log",
			}
		]
	}
];
