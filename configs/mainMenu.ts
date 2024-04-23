
import menuLanding from "./menus/landing.menu";
import menuUI from "./menus/ui.menu";
import menuAuth from "./menus/auth.menu";
import menuWidget from "./menus/widget.menu";
// import menuForm from "./menus/form.menu";
import menuChart from "./menus/chart.menu";
import menuTable from "./menus/table.menu";
import menuCustomer from "./menus/customer.menu";
import systemMenu from "./menus/system.menu";
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
		  text: "Customer",
		  items: menuCustomer,
	  },
	  
	  {
			text: "System",
		  items: systemMenu
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
		return getCurrentMenu(this.menu, useRouter().currentRoute.value.path);
	}
};
