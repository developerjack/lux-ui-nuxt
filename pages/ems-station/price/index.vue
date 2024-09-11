<template>
	<yhlx-main-container>
		<div class="pa-2 text-right">
			<v-btn class="mr-2" color="primary">保存</v-btn>
		</div>
		<v-divider />
		<v-card-text>
			<v-row>
				<v-col cols="4">
					<v-checkbox label="Nord Pool" />
					<div class="d-flex mb-2" v-for="item in rowList" :key="item.id">
						<yhlx-check-time-input :timeRange="item" @getTimeRange="getTimeRange" />
						<yhlx-text-field class="ml-2" v-model="item.value" />
						<v-btn class="ml-2" icon="mdi-plus" size="small" @click="addRowList"></v-btn>
						<v-btn class="ml-2" icon="mdi-minus" size="small" @click="minusRowList(item.id)" :disabled="rowList.length === 1" ></v-btn>
					</div>
				</v-col>
				<v-col cols="8">
<!--					<timePriceChart :series="series"/>-->
					<apexchart type="line" height="380" :options="chartOptions" :series="series2" />
				</v-col>
			</v-row>
			<v-row class="form">
				<template v-for="config of configs" :key="config">
					<v-col cols="4" >
						<yhlx-text-field :label="config" />
					</v-col>
					<v-col class="align-content-center" cols="6">默认值为100，与电网电价对比</v-col>
				</template>
			</v-row>
		</v-card-text>
	</yhlx-main-container>
</template>
<script setup lang="ts">
interface rowType {
	id: number,
	value: string,
	timeRange: number[]
}
const rowList= ref([{
	id: 0,
	value: '',
	timeRange: []
}])
watch(rowList,() => {
	formatterSeries()
},{ deep: true })
const series = ref([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
function getTimeRange ({item, value}: { item: rowType,value: number[] }) {
	value.sort((a: number, b: number) => a - b)
	item.timeRange = value // 第一次修改timeRange
}
function addRowList () {
	const index = rowList.value.length
	rowList.value.push({
		id: index,
		value: '',
		timeRange: []
	})
}
function minusRowList (id: number) {
	rowList.value.forEach((item,index) => {
		if (item.id === id) {
			rowList.value.splice(index, 1)
			return
		}
	})
}
function formatterSeries () {
	rowList.value.forEach((item) => { // 遍历表单,将item中的value填到item.timeRange与series对应的index上
		if (item.timeRange.length !== 0) {
			for (let i = item.timeRange[0]; i <= item.timeRange[1]; i++) {
				series.value[i] = Number(item.value)
			}
		} else {
			series.value.forEach((element, index) => {
				series.value[index] = Number(item.value)
			})
		}
	})
}

const configs = ["光伏发电电价比例（%）", "储能充电电价比例（%）", "储能放电电价比例（%）", "充电桩充电电价比例（%）"];


watch(() => series,() => {
	series2[0].data = series.value
},{ deep: true });

const series2: { data: number[] }[] = reactive([{
	data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
}])
const chartOptions = ref({
	chart: {
		height: 690,
		type: 'line',
		zoom: {
			enabled: false
		},
		toolbar: {
			show: false
		}
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'straight'
	},
	title: {
		text: '时段电费曲线',
		align: 'left'
	},
	xaxis: {
		categories: ['00:00','01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00','09:00','10:00',
			'11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']
	},
	yaxis: {
		min: 0
	}
})


</script>

<style scoped lang="scss">
</style>