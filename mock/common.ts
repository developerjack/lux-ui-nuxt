import { apiPageResult } from "./mock";
import { userStatusEnums } from "@/data/data";

const MockAPI = [
	{
		url: "/api/common/admin",
		method: "get",
		response: () => {
			return apiPageResult({
				"name": "@name",
				"email": "@email",
				"phoneNumber": "@phone",
				"status|1": userStatusEnums,
			});
		}
	},
	{
		url: "/api/common/operation-log",
		method: "get",
		response: () => {
			return apiPageResult({
				"account|1": ['202309050001', '202309050002', '202309050003', '202309050004'],
				"email": "@email",
				"module|1": ["Operator", "Model", "Firmware", "Alarm Code"],
				"operation|1": ["Create", "Update", "Delete"],
				"ip": "192.168.2.102",
				"operationTime": "@datetime('yyyy-MM-dd HH:mm:ss')",
			});
		}
	},
]

export default MockAPI