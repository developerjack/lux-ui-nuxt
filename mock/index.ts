const MockAPI = [
	{
		url: "/api/transaction",
		method: "get",
		response: () => {
			return {
				code: 200,
				message: "success",
				data: {
					"total": 30,
					"content|10": [
						{
							"transactionId|+1": 1,
							"customerName": "@cname",
							"customerEmail": "@email",
							"locationName": "@city(true)",
							"chargingStationName": "@cname",
							"energy": "@natural(0, 100)",
							"startTime": "@datetime('yyyy-MM-dd HH:mm:ss')",
							"endTime": "@datetime('yyyy-MM-dd HH:mm:ss')"
						}
					]
				}
				// data: {
				// 	'rows|10': [{
				// 		id: '@guid',
				// 		name: '@cname',
				// 		'age|20-30': 23,
				// 		'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师']
				// 	}]
				// },
			}
		}
	}
]

export default MockAPI
