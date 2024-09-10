export default [
	{
		text: "",
		items: [
			{
				icon: "solar:widget-line-duotone",
				text: "Dashboard",
				link: "/ems-station/dashboard",
			},
		],
	},
	{
		text:'Station',
		items:[
			{
				icon: "solar:library-bold-duotone",
				text: "Station",
				link: "/ems-station/station",
			},
			{
				icon: "solar:library-bold-duotone",
				text: "Gateway",
				link: "/ems-station/gateway",
			},
			{
				icon: "solar:library-bold-duotone",
				text: "Device",
				link: "/ems-station/device",
			},
			{
				icon: "solar:library-bold-duotone",
				text: "Alarm",
				link: "/ems-station/alarm",
			},
			// {
			// 	icon: "solar:library-bold-duotone",
			// 	text: "Test",
			// 	link: "/ems-station/test",
			// },
		]
	},
	{		text:'Analysis',
		items:[
			{
				icon: "solar:library-bold-duotone",
				text: "Overview",
				link: "/ems-station/overview",
			},
			{
				icon: "solar:library-bold-duotone",
				text: "Report",
				link: "/ems-station/report",
			},
		]
	},
	{
		text:'System',
		items:[
			{
				icon: "solar:slider-minimalistic-horizontal-line-duotone",
				text: "Price",
				link: "/ems-station/price",
			},
			{
				icon: "solar:library-bold-duotone",
				text: "Strategy",
				link: "/ems-station/strategy",
			},
			{
				icon: "solar:list-up-bold-duotone",
				text: "Operation Log",
				link: "/common/operation-log",
			}
		]
	}
];
