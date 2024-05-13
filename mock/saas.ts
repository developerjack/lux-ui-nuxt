import { apiPageResult } from "./mock";
import { countryNameEnums, currencyNameEnums, statusNameEnums, networkTypeEnums, belongTypeEnums, companyTypeEnums } from "@/data/data";

const MockAPI = [
	{
		url: "/api/saas/network",
		method: "get",
		response: () => {
			return apiPageResult({
				"name": "@name",
				"belongType|1": belongTypeEnums,
				"networkType|1": networkTypeEnums,
				"description": "The network from China.",
			});
		}
	},
	{
		url: "/api/saas/emsp",
		method: "get",
		response: () => {
			return apiPageResult({
				"name": "@name",
				"countryName|1": countryNameEnums,
				"partyId|1": ["YHLX", "ICS", "EMES", "HBC", "NEO"],
				"currency|1": currencyNameEnums,
				"companyType|1": companyTypeEnums,
				"expiryTime": "@datetime('yyyy-MM-dd')",
				"status|1": statusNameEnums,
			});
		}
	},
]

export default MockAPI