
import menuLanding from "./menus/landing.menu";
import menuUI from "./menus/ui.menu";
import menuAuth from "./menus/auth.menu";
import menuWidget from "./menus/widget.menu";
// import menuForm from "./menus/form.menu";
import menuChart from "./menus/chart.menu";
// import menuTable from "./menus/table.menu";
import menuSaaS from "./menus/saas.menu";
import menuEMSP from "./menus/emsp.menu";
import menuCPO from "./menus/cpo.menu";
import menuEMSSaas from "./menus/ems-saas";
import menuEMSOperator from "./menus/ems-operator";
import menuEMSStation from "./menus/ems-station";
import Menu = NavigationConfig.Menu;

function getCurrentMenu(items: Menu[], path: string) : Menu {
	for (let i: number = 0; i < items.length; i++) {
		if (items[i].link == path) {
			return items[i]
		} else if (Array.isArray(items[i].items)) {
			const menu: Menu = getCurrentMenu(items[i].items!, path);
			if (menu.text) {
				return menu;
			}
		}
	}
	return {};
}

export default {
  menu: [
	  ...menuSaaS,
	  ...menuEMSP,
	  ...menuCPO,
	  ...menuEMSSaas,
	  ...menuEMSOperator,
	  ...menuEMSStation,
	  ...menuLanding,
    ...menuUI,
    ...menuAuth,
    ...menuWidget,
    ...menuChart,
    // ...menuForm,
    // ...menuTable,
  ],
	getCurrentMenu() : Menu {
		let path = useRouter().currentRoute.value.path;
		let menu = getCurrentMenu(this.menu, path);
		while (!menu || !menu.text) {
			if (!path.concat("/")) {
				break;
			}
			const idx = path.lastIndexOf("/");
			path = path.substring(0, idx);
			menu = getCurrentMenu(this.menu, path);
		}
		return menu;
	},
	getMenus(menuType: string) {
		switch (menuType) {
			case "OCPI SAAS":
				return menuSaaS;
			case "OCPI eMSP":
				return menuEMSP;
			case "OCPI CPO":
				return menuCPO;
			case "EMS SaaS":
				return menuEMSSaas;
			case "EMS Operator":
				return menuEMSOperator;
			case "EMS Station":
				return menuEMSStation;
			case "Demo":
				return this.menu;
			default:
				return [];
		}
	},
	getCompanies() {
		return [
			{
				title: 'SaaS',
				type: 'EMS SaaS',
				typeName: 'SaaS'
			},
			{
				title: 'Iocharger',
				type: 'EMS Operator',
				typeName: 'Operator'
			},
			{
				title: 'Software Park',
				type: 'EMS Station',
				typeName: 'Station'
			},
			// {
			// 	title:'Iocharger',
			// 	type:'OCPI SAAS',
			// 	typeName: 'SaaS'
			// },
			// {
			// 	title:'EMES',
			// 	type:'OCPI eMSP',
			// 	typeName: 'eMSP'
			// },
			// {
			// 	title:'ICS',
			// 	type:'OCPI CPO',
			// 	typeName: 'CPO'
			// },
			// {
			// 	title:'Demo',
			// 	type:'Demo',
			// 	typeName: 'Demo'
			// }
		];
	},
	getDefaultLink(menus:any): string | undefined {
	let link:string | undefined;
	for (let i = 0; i < menus.length; i++) {
		const menu = menus[i];
		if (menu.items && menu.items.length > 0) {
			link = this.getDefaultLink(menu.items);
		}
		if (!link) {
			link = menu.link;
		}
		if (!!link) {
			break;
		}
	}
	return link;
}
};
