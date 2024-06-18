export default [
	{
		text: "",
		items: [
			{
				icon: "solar:widget-line-duotone",
				text: "Dashboard",
				link: "/ems/dashboard",
			},
		],
	},
	{
		text:'EMS',
		items:[
			{
				icon: "solar:library-bold-duotone",
				text: "Location",
				link: "/ems/location",
			},
			{
				icon: "solar:library-bold-duotone",
				text: "Gateway",
				link: "/ems/gateway",
			},
			{
				icon: "solar:library-bold-duotone",
				text: "Device",
				link: "/ems/device",
			},
		]
	},
	{
		text:'System',
		items:[{
			icon: "solar:streets-bold-duotone",
			text: "Admin",
			items: [
				{
					icon: "solar:slider-minimalistic-horizontal-line-duotone",
					text: "Admin",
					link: "/ems/admin/admin",
				},
				{
					icon: "solar:list-up-bold-duotone",
					text: "Role",
					link: "/ems/admin/role",
				}
			],
		}]
	}
];
