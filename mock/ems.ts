import {apiPageResult, apiPageResultMore} from "./mock";
import { deviceStatusEnums, countryNameEnums, currencyNameEnums, statusNameEnums, networkRoleEnums, belongTypeEnums, networkStatusEnums, operatorNameEnums } from "@/data/data";

const MockAPI = [
	{
		url: "/api/ems/device",
		method: "get",
		response: () => {
			return apiPageResult({
				"id|+1": 1,
				"serialNumber|1": ['IOC24001', 'IOC24002', 'IOC24003', 'IOC24004', 'IOC24005', 'IOC24006'],
				"location|1": ['Xiamen', 'Beijing', 'Nanjing', 'Shanghai', '-'],
				"model|1": ['IOC_Light', 'IOC_Store', '-'],
				"firmwareVersion|1": ['2024010101', '-'],
				"lastConnectTime|1": ["@datetime('yyyy-MM-dd HH:mm:ss')", "-"],
				"status|1": deviceStatusEnums,
				"notes": "The device in Xiamen.",
			});
		}
	},
	{
		url: "/api/ems/device/history",
		method: "get",
		response: () => {
			return apiPageResultMore({
				"id|+1": 1,
				"time|+5": 0,
				"ia": "0.1",
				"ib": "0.1",
				"ic": "0.1",
				"ua": "220.0",
				"ub": "220.0",
				"uc": "220.0",
				"pa": "7.0",
				"pb": "7.0",
				"pc": "7.0",
				"p": "21.0",
				"qa": "0.0",
				"qb": "0.0",
				"qc": "0.0",
				"q": "0.0",
				"pf": "0.01",
				"f": "50",
				"ep+": "0.0",
				"ep-": "0.0",
			});
		}
	},
	{
		url: "/api/ems/admin",
		method: "get",
		response: () => {
			return apiPageResult({
				"name": "@name",
				"email": "@email",
				"phoneNumber": "@phone",
				"status|1": statusNameEnums,
			});
		}
	},
]

export default MockAPI