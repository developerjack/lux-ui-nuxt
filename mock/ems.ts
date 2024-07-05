import {apiPageResult, apiPageResult5, apiPageResultMore, apiResult} from "./mock";
import { deviceStatusEnums, countryNameEnums, currencyNameEnums, statusNameEnums, networkRoleEnums, belongTypeEnums, networkStatusEnums, operatorNameEnums } from "@/data/data";

const MockAPI = [
	{
		url: "/api/ems/location",
		method: "get",
		response: () => {
			return apiPageResult({
				"id|+1": 1,
				"name": "@name",
				"address": "@city",
				"gatewayCount|1-10": 3,
				"notes": "This is Location.",
			});
		}
	},
	{
		url: "/api/ems/gateway",
		method: "get",
		response: () => {
			return apiPageResult({
				"id|+1": 1,
				"serialNumber|1": ['IOC24001', 'IOC24002', 'IOC24003', 'IOC24004', 'IOC24005', 'IOC24006'],
				"name": "@name",
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
		url: "/api/ems/device",
		method: "get",
		response: () => {
			return apiPageResult({
				"id|+1": 1,
				"name": "@name",
				"location|1": ['Xiamen', 'Beijing', 'Nanjing', 'Shanghai', '-'],
				"gatewaySerialNumber|1": ['IOC24001', 'IOC24002', 'IOC24003', 'IOC24004', 'IOC24005', 'IOC24006'],
				"gatewayName": "@name",
				"model|1": ['IOC_Store', 'IOC_Light'],
			});
		}
	},
	{
		url: "/api/ems/sub-device",
		method: "get",
		response: () => {
			return apiResult({
				"total": 8,
				"content": [
					{ title: "Gateway", },
					{ title: "PV", tag: 'NO.1', },
					{ title: "Grid", },
					{ title: "Battery", tag: 'NO.1', },
					{ title: "Battery", tag: 'NO.2', },
					{ title: "PCS", },
					{ title: "Charging Station", tag: 'NO.1', },
					{ title: "Charging Station", tag: 'NO.2', },
				]
			});
		}
	},
	{
		url: "/api/ems/sub-device/real",
		method: "get",
		response: () => {
			return apiResult({
				"total": 18,
				"content": [
					{ name: "Ia", value: "0.0A", updateTime: "@datetime('yyyy-MM-dd HH:mm:ss')" },
					{ name: "Ib", value: "0.0A", updateTime: "@datetime('yyyy-MM-dd HH:mm:ss')" },
					{ name: "Ic", value: "0.0A", updateTime: "@datetime('yyyy-MM-dd HH:mm:ss')" },
					{ name: "Ua", value: "220.0V", updateTime: "@datetime('yyyy-MM-dd HH:mm:ss')" },
					{ name: "Ub", value: "220.0V", updateTime: "@datetime('yyyy-MM-dd HH:mm:ss')" },
					{ name: "Uc", value: "220.0V", updateTime: "@datetime('yyyy-MM-dd HH:mm:ss')" },
					{ name: "Pa", value: "-", updateTime: "@datetime('yyyy-MM-dd HH:mm:ss')" },
					{ name: "Pb", value: "-", updateTime: "@datetime('yyyy-MM-dd HH:mm:ss')" },
					{ name: "Pc", value: "-", updateTime: "@datetime('yyyy-MM-dd HH:mm:ss')" },
					{ name: "P", value: "0.0kW", updateTime: "@datetime('yyyy-MM-dd HH:mm:ss')" },
					{ name: "Qa", value: "0.0kWh", updateTime: "@datetime('yyyy-MM-dd HH:mm:ss')" },
					{ name: "Qb", value: "0.0kWh", updateTime: "@datetime('yyyy-MM-dd HH:mm:ss')" },
					{ name: "Qc", value: "0.0kWh", updateTime: "@datetime('yyyy-MM-dd HH:mm:ss')" },
					{ name: "Q", value: "0.0kWh", updateTime: "@datetime('yyyy-MM-dd HH:mm:ss')" },
					{ name: "PF", value: "0.01", updateTime: "@datetime('yyyy-MM-dd HH:mm:ss')" },
					{ name: "F", value: "50Hz", updateTime: "@datetime('yyyy-MM-dd HH:mm:ss')" },
					{ name: "EP+", value: "0.0kW", updateTime: "@datetime('yyyy-MM-dd HH:mm:ss')" },
					{ name: "EP-", value: "0.0kW", updateTime: "@datetime('yyyy-MM-dd HH:mm:ss')" },
				]
			});
		}
	},
	{
		url: "/api/ems/sub-device/history",
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
		url: "/api/ems/alarm",
		method: "get",
		response: () => {
			return apiPageResult({
				"id|+1": 1,
				"type|1": ["Device Offline", "Over Voltage", "Under Voltage", "High Temperature", "Weak Signal", "Other"],
				"level|1": ["Warn", "Error"],
				"reportTime": "@datetime('yyyy-MM-dd HH:mm:ss')",
				"locationName|1": ['Xiamen', 'Beijing', 'Nanjing', 'Shanghai', '-'],
				"gateway|1": ['IOC24001 (@name)', 'IOC24002 (@name)', 'IOC24003 (@name)', 'IOC24004 (@name)', 'IOC24005 (@name)', 'IOC24006 (@name)'],
				"device|1": ["@name (IOC_Store)", "@name (IOC_Light)"],
				"status|1": ["Undisposed", "Auto Recovery", "Manual Disposed"],
			});
		}
	},
	{
		url: "/api/ems/alarm/dashboard",
		method: "get",
		response: () => {
			return apiPageResult5({
				"id|+1": 1,
				"type|1": ["Device Offline", "Over Voltage", "Under Voltage", "High Temperature", "Weak Signal", "Other"],
				"level|1": ["Warn", "Error"],
				"reportTime": "@datetime('yyyy-MM-dd HH:mm:ss')",
				"locationName|1": ['Xiamen', 'Beijing', 'Nanjing', 'Shanghai', '-'],
				"gateway|1": ['IOC24001 (@name)', 'IOC24002 (@name)', 'IOC24003 (@name)', 'IOC24004 (@name)', 'IOC24005 (@name)', 'IOC24006 (@name)'],
				"device|1": ["@name (IOC_Store)", "@name (IOC_Light)"],
				"status|1": ["Undisposed", "Auto Recovery", "Manual Disposed"],
			});
		}
	},
	{
		url: "/api/ems/grid-price",
		method: "get",
		response: () => {
			return apiPageResult({
				"name": "@name",
				"updateTime": "@datetime('yyyy-MM-dd HH:mm:ss')",
				"status|1": statusNameEnums,
			});
		}
	},
	{
		url: "/api/ems/home-price",
		method: "get",
		response: () => {
			return apiPageResult({
				"name": "@name",
				"updateTime": "@datetime('yyyy-MM-dd HH:mm:ss')",
				"status|1": statusNameEnums,
			});
		}
	},
	{
		url: "/api/ems/location/report",
		method: "get",
		response: () => {
			return apiPageResult({
				"id|+1": 1,
				"time|+1": 1,
				"selfSharpPower|1-100": 20,
				"selfPeakPower|1-100": 20,
				"selfFlatPower|1-100": 20,
				"selfValleyPower|1-100": 20,
				"onSharpPower|1-100": 20,
				"onPeakPower|1-100": 20,
				"onFlatPower|1-100": 20,
				"onValleyPower|1-100": 20,
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