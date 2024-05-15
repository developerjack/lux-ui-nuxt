import { apiPageResult } from "./mock";
import { networkNameEnums, countryNameEnums, currencyNameEnums, statusNameEnums, networkTypeEnums, belongTypeEnums, companyTypeEnums, companyNameEnums } from "@/data/data";

const MockAPI = [
	{
		url: "/api/saas/network",
		method: "get",
		response: () => {
			return apiPageResult({
				"id|+1": 1,
				"name|1": networkNameEnums,
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
				"id|+1": 1,
				"name|1": companyNameEnums,
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