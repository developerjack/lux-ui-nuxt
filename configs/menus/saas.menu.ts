export default [
	{
		text: "",
		items: [
			{
				icon: "solar:widget-line-duotone",
				text: "Dashboard",
				link: "/saas/dashboard",
			},
		],
	},
	{
		text:'SaaS',
		items:[{
			icon: "solar:library-bold-duotone",
			text: "Network",
			link: "/saas/network",
		},
		{
			icon: "solar:library-bold-duotone",
			text: "Operator",
			link: "/saas/operator",
		},
		{
			icon: "solar:library-bold-duotone",
			text: "Agent",
			link: "/saas/agent",
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
					link: "/saas/admin/admin",
				},
				{
					icon: "solar:list-up-bold-duotone",
					text: "Role",
					link: "/saas/admin/role",
				}
			],
		}]
	}
];
