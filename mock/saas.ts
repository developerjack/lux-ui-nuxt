import { apiPageResult } from "./mock";
import { networkNameEnums, countryNameEnums, currencyNameEnums, statusNameEnums, networkRoleEnums, belongTypeEnums, orgTypeEnums, orgNameEnums } from "@/data/data";

const MockAPI = [
	{
		url: "/api/saas/network",
		method: "get",
		response: () => {
			return apiPageResult({
				"name|1": networkNameEnums,
				"belongType|1": belongTypeEnums,
				"roles|1": ['eMSP', 'CPO', 'eMSP, CPO'],
				"description": "The network from China.",
			});
		}
	},
	{
		url: "/api/saas/organization",
		method: "get",
		response: () => {
			return apiPageResult({
				"name|1": orgNameEnums,
				"countryName|1": countryNameEnums,
				"partyId|1": ["YHLX", "ICS", "EMES", "HBC", "NEO"],
				"currency|1": currencyNameEnums,
				"role|1": ['eMSP', 'CPO', 'eMSP, CPO'],
				"expiryTime": "@datetime('yyyy-MM-dd')",
				"status|1": statusNameEnums,
			});
		}
	},
]

export default MockAPI