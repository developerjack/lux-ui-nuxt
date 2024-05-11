import { apiMergeResult, apiPageResult } from "./mock";
import saas from "./saas";
import { statusNameEnums } from "@/data/data";

const MockAPI = [
	{
		url: "/api/customer",
		method: "get",
		response: () => {
			return apiPageResult({
				"name": "@name",
				"email": "@email",
				"phoneNumber": "@phone",
				"age|20-30": 23,
				"status|1": statusNameEnums,
			});
		}
	},
	{
		url: "/api/rf",
		method: "get",
		response: () => {
			return apiPageResult({
				"idTag": "@string('upper', 8)",
				"name": "@name",
				"customerName": "@name",
				"customerEmail": "@email",
				"expiryTime": "@datetime('yyyy-MM-dd')",
				"status|1": statusNameEnums,
			});
		}
	},
	{
		url: "/api/transaction",
		method: "get",
		response: () => {
			return apiPageResult({
				"transactionId|+1": 1,
				"customerName": "@name",
				"customerEmail": "@email",
				"locationName": "@city(true)",
				"chargingStationName": "@name",
				"energy": "@natural(0, 100)",
				"startTime": "@datetime('yyyy-MM-dd HH:mm:ss')",
				"endTime": "@datetime('yyyy-MM-dd HH:mm:ss')"
			});
		}
	},
	{
		url: `/api/rf/statistic/FFFFFFFF`,
		method: "get",
		response: () => {
			return apiMergeResult({
				"data|12": [{
					"idTag": "9F5D4F8C",
					"time": "@datetime('yyyy-MM')",
					"duration|100-300": 200,
					"energy|1000-3000": 2000,
					"cost|800-2400": 1600,
					"times|20-60": 40,
				}]
			});
		}
	},
	{
		url: "/api/admin",
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
	{
		url: "/api/agent",
		method: "get",
		response: () => {
			return apiPageResult({
				"name": "@name",
				"email": "@email",
				"phoneNumber": "@phone",
				"authNumber|1-10": 3,
				"status|1": statusNameEnums,
			});
		}
	},
	...saas
]

export default MockAPI
