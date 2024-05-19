import Mock from "mockjs";
Mock.Random.extend({
	phone: function () {
		return this.pick(['139', '135', '189']) + Mock.mock(/\d{8}/);
	},
	optionalDatetime(format?: string) {
		if (Math.random() < 0.7) {
			return Mock.Random.date(format);
		} else {
			return "Indefinite";
		}
	}
});

export const apiResult = (data:any) : any => {
	return {
		code: 200,
		message: "success",
		data,
	}
}

export const apiPageResult = (item:any) : any => {
	return apiResult({
		"total": 37,
		"content|37": [item]
	});
}

export const apiMergeResult = (json:any) : any => {
	return Object.assign({
		code: 200,
		message: "success"
	}, json);
}

//