import { apiPageResult } from "./mock";


const MockAPI = [
	{
		url: "/api/saas/network",
		method: "get",
		response: () => {
			return apiPageResult({
				"name": "@name",
				"type|1": ['Internal', 'External'],
				"networkType|1": ['eMSP', 'CPO'],
				"description": "The network from China.",
			});
		}
	},
]

export default MockAPI