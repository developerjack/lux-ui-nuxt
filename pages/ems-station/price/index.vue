<script setup lang="ts">
interface rowType {
	id: number,
	value: string,
	timeRange: number[]
}
import CoefficientDialog from './components/coefficientDialog.vue'
import timePriceChart from './components/timePriceChart.vue'
const selected = ref('one')
const coefficientDialog = ref()
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
</script>

<template>
	<yhlx-main-container :key="$route.fullPath">
		<div class="pa-2 d-flex justify-content-between ">
			<v-radio-group inline hide-details v-model="selected">
				<v-radio label="固定电网电价" value="one" color="primary"></v-radio>
				<v-radio label="现货市场电价" value="two" color="primary"></v-radio>
			</v-radio-group>
			<v-btn class="mr-2" color="primary">保存</v-btn>
		</div>
		<v-divider></v-divider>
		<v-card-text>
			<div class="d-flex" v-if="selected === 'one'">
				<div class="form-box">
					<div class="d-flex mb-2" v-for="item in rowList" :key="item.id">
						<yhlx-check-time-input :timeRange="item" @getTimeRange="getTimeRange"/>
						<yhlx-text-field v-model="item.value"/>
						<v-btn icon="mdi-plus" size="small" @click="addRowList"></v-btn>
						<v-btn icon="mdi-minus" size="small" @click="minusRowList(item.id)" :disabled="rowList.length === 1" ></v-btn>
					</div>
				</div>
				<div class="chart-box">
					<timePriceChart :series="series"/>
				</div>
			</div>
			<v-divider class="mb-4" v-if="selected === 'one'"></v-divider>
			<CoefficientDialog class="mb-4" ref="coefficientDialog"/>
		</v-card-text>
	</yhlx-main-container>
</template>

<style scoped lang="scss">
.form-box {
	width: 30%;
	.v-text-field {
		margin: 0 8px;
	}
}
.chart-box{
	width: 70%;
	margin-left: 16px;
}
</style>