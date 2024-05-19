import { apiPageResult } from "./mock";
import { networkNameEnums, countryNameEnums, currencyNameEnums, statusNameEnums, networkRoleEnums, belongTypeEnums, networkStatusEnums, operatorNameEnums } from "@/data/data";

const MockAPI = [
	{
		url: "/api/cpo/tariff",
		method: "get",
		response: () => {
			return apiPageResult({
				"id": "@string('upper', 36)",
				"name": "@name",
				"min|10-20": 10,
				"max|20-40": 4,
				"startTime": "@datetime('yyyy-MM-dd HH:mm:ss')",
				"endTime": "@optionalDatetime('yyyy-MM-dd HH:mm:ss')",
				"updateTime": "@datetime('yyyy-MM-dd HH:mm:ss')",
				"status|1": statusNameEnums,
				"notes": "This is tariff.",
			});
		}
	},
]

export default MockAPI