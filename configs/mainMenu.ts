
import menuLanding from "./menus/landing.menu";
import menuUI from "./menus/ui.menu";
import menuAuth from "./menus/auth.menu";
import menuWidget from "./menus/widget.menu";
// import menuForm from "./menus/form.menu";
import menuChart from "./menus/chart.menu";
import menuTable from "./menus/table.menu";
import menuSaaS from "./menus/saas.menu";
import menuEMSP from "./menus/emsp.menu";
import menuSystem from "./menus/system.menu";
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
    {
      text: "",
      items: [
        {

          text: "Dashboard",
          link: "/",
          icon: "solar:widget-line-duotone",
        },
      ],
    },
	  
	  {
		  text: "SaaS",
		  items: menuSaaS,
	  },
	  
	  {
		  text: "eMSP",
		  items: menuEMSP,
	  },
	  
	  {
			text: "System",
		  items: menuSystem
	  },

    {
      text: "Landing",
      items: [
        ...menuLanding,

      ],
    },
    {
      text: "UI",
      items: menuUI,
    },
    {
      text: "Auth",
      items: menuAuth,
    },
    {
      text: "Widgets",
      items: menuWidget,
    },
    // {
    //   text: "Form",
    //   items: menuForm,
    // },
    {
      text: "Chart",
      items: menuChart,
    },
    {
      text: "Table",
      items: menuTable,
    }
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
	}
};
