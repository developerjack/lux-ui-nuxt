import { apiPageResult } from "./mock";
import { countryNameEnums, currencyNameEnums, statusNameEnums, operatorNameEnums, alarmTypeEnums } from "@/data/data";
import { deviceTypeEnums } from "@/data/ems";

const MockAPI = [
	{
		url: "/api/ems-saas/operator",
		method: "get",
		response: () => {
			return apiPageResult({
				"id|+1": 1,
				"name|1": operatorNameEnums,
				"countryName|1": countryNameEnums,
				"partyId|1": ["YHLX", "ICS", "EMES", "HBC", "NEO"],
				"currency|1": currencyNameEnums,
				"type|1": ['Operator', 'Secondary Operator'],
				"expiryTime": "@optionalDatetime('yyyy-MM-dd')",
				"status|1": statusNameEnums,
			});
		}
	},
	{
		url: "/api/ems-saas/device-model",
		method: "get",
		response: () => {
			return apiPageResult({
				"model|1": ["IOC001", "ICS001", "EV002"],
				"firmwareVersion|1": ['2023090501', '2023090502', '2024081501', '2024090501', ''],
				"notes": "This is device model.",
			});
		}
	},
	{
		url: "/api/ems-saas/firmware",
		method: "get",
		response: () => {
			return apiPageResult({
				"firmwareVersion|1": ['2023090501', '2023090502', '2024081501', '2024090501'],
				"firmwareUrl": "https://www.iocharger.com/file/firmware/2023090501",
				"updateTime": "@datetime('yyyy-MM-dd HH:mm:ss')",
				"notes": "This is firmware.",
			});
		}
	},
	{
		url: "/api/ems-saas/alarm-code",
		method: "get",
		response: () => {
			return apiPageResult({
				"code|+1": 1000,
				"name|1": "Meter Fault",
				"deviceType|1": deviceTypeEnums,
				"alarmType|1": alarmTypeEnums,
			});
		}
	}
]

export default MockAPI