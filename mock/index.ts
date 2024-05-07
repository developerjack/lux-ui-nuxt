import Mock from "mockjs";
Mock.Random.extend({
	phone: function () {
		return this.pick(['139', '135', '189']) + Mock.mock(/\d{8}/);
	}
});

const MockAPI = [
	{
		url: "/api/customer",
		method: "get",
		response: () => {
			return {
				code: 200,
				message: "success",
				data: {
					"total": 37,
					"content|37": [
						{
							"name": "@name",
							"email": "@email",
							"phoneNumber": "@phone",
							"age|20-30": 23,
							"status|1": ['Enable', 'Disable'],
						}
					]
				}
			}
		}
	},
	{
		url: "/api/rf",
		method: "get",
		response: () => {
			return {
				code: 200,
				message: "success",
				data: {
					"total": 37,
					"content|37": [
						{
							"idTag": "@string('upper', 8)",
							"name": "@name",
							"customerName": "@name",
							"customerEmail": "@email",
							"expiryTime": "@datetime('yyyy-MM-dd')",
							"status|1": ['Enable', 'Disable'],
						}
					]
				}
			}
		}
	},
	{
		url: "/api/transaction",
		method: "get",
		response: () => {
			return {
				code: 200,
				message: "success",
				data: {
					"total": 37,
					"content|37": [
						{
							"transactionId|+1": 1,
							"customerName": "@name",
							"customerEmail": "@email",
							"locationName": "@city(true)",
							"chargingStationName": "@name",
							"energy": "@natural(0, 100)",
							"startTime": "@datetime('yyyy-MM-dd HH:mm:ss')",
							"endTime": "@datetime('yyyy-MM-dd HH:mm:ss')"
						}
					]
				}
			}
		}
	},
	{
		url: `/api/rf/statistic/FFFFFFFF`,
		method: "get",
		response: () => {
			return {
				code: 200,
				message: "success",
				"data|12": [{
					"idTag": "9F5D4F8C",
					"time": "@datetime('yyyy-MM')",
					"duration|100-300": 200,
					"energy|1000-3000": 2000,
					"cost|800-2400": 1600,
					"times|20-60": 40,
				}]
			}
		}
	},
	{
		url: "/api/admin",
		method: "get",
		response: () => {
			return {
				code: 200,
				message: "success",
				data: {
					"total": 37,
					"content|37": [
						{
							"name": "@name",
							"email": "@email",
							"phoneNumber": "@phone",
							"status|1": ['Enable', 'Disable'],
						}
					]
				}
			}
		}
	},
]

export default MockAPI
