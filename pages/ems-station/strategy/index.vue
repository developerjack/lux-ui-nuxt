<template>
	<yhlx-main-container>
		<v-card-text>
			<v-row class="py-2">
				<!-- 1、防逆流功能   -->
				<v-col cols="2">1、防逆流功能</v-col>
				<v-col cols="6">
					<v-row>
						<v-col cols="6">并网上行功率设置开关</v-col>
						<v-col cols="6">
							<v-switch color="primary" hide-details density="compact" />
						</v-col>
						<v-col cols="6">并网上行功率百分比设置</v-col>
						<v-col cols="6" style="display: flex">
							<v-slider v-model="onGridRate" hide-details max-width="200px" color="primary"/>
							<span style="line-height: 32px;font-size: 16px">{{ Math.round(onGridRate) + '%' }}</span>
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="1">
					<v-btn color="primary">保存</v-btn>
				</v-col>
				<v-col cols="2" />
				<!-- 2、市电最大功率控制   -->
				<v-col cols="2">2、市电最大功率控制</v-col>
				<v-col cols="6">
					<v-row>
						<v-col cols="6">控制开关</v-col>
						<v-col cols="6">
							<v-switch color="primary" hide-details density="compact" />
						</v-col>
						<v-col cols="6">功率设置值</v-col>
						<v-col cols="6" class="d-flex">
							<yhlx-text-field max-width="200px" density="compact"/>
							<span class="unit">kVA</span>
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="1">
					<v-btn color="primary">保存</v-btn>
				</v-col><v-col cols="3"/>
				<!--   3、充电桩充电   -->
				<v-col cols="2">3、充电桩充电</v-col>
				<v-col cols="6">
					<v-row class="ml-0">
						<v-col cols="6" class="pl-0">
							<v-checkbox-btn
								v-model="stationMax"
								color="primary"
								class="pe-2"
								label="最大功率充电"
							></v-checkbox-btn>
						</v-col>
						<v-col cols="6" class="pl-6">
							<yhlx-select
								density="compact"
								max-width="200px"
								:items="['光伏优先，储能其次，市电最低']"
							></yhlx-select>
						</v-col>
						<v-col cols="12" class="pl-0">
							<v-checkbox-btn
								v-model="stationMid"
								color="primary"
								label="经济模式(光伏先充，未充满则峰时用储能，谷时用市电)"
							></v-checkbox-btn>
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="1">
					<v-btn color="primary">保存</v-btn>
				</v-col><v-col cols="3"/>
				<!--   4、储能充电   -->
				<v-col cols="2">4、储能充电</v-col>
				<v-col cols="6">
					<v-row class="ml-0">
						<v-col cols="12" class="pl-0">
							<v-checkbox-btn
								v-model="batteryMax"
								color="primary"
								class="pe-2"
								label="最大功率充电(光伏优先，市电不分时段)"
							></v-checkbox-btn>
						</v-col>
						<v-col cols="12" class="pl-0">
							<v-checkbox-btn
								v-model="batteryMid"
								color="primary"
								label="经济模式(光伏优先，其次市电谷时充电)"
							></v-checkbox-btn>
						</v-col>
						<v-col cols="6" class="pl-0">
							<v-checkbox-btn
								v-model="batteryMin"
								color="primary"
								label="备电SOC模式(光伏优先，其次市电不分时段备电至50%，再次市电谷时充电)"
							></v-checkbox-btn>
						</v-col>
						<v-col class="d-flex">
							<v-slider v-model="batteryRate" hide-details max-width="200px" color="primary"/>
							<span style="line-height: 48px;font-size: 16px">{{ Math.round(batteryRate) + '%' }}</span>
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="1">
					<v-btn color="primary">保存</v-btn>
				</v-col><v-col cols="3"/>
				<v-col cols="2" class="pl-8"></v-col>
				<v-col cols="6" >
					<v-checkbox-btn
						v-model="onlyStation"
						color="primary"
						label="只给充电桩"
					></v-checkbox-btn>
				</v-col>
				<v-col cols="1">
					<v-btn color="primary">保存</v-btn>
				</v-col><v-col cols="3"/>
				<!--    5、虚拟电厂调度     -->
				<v-col cols="2">5、虚拟电厂调度</v-col>
				<v-col cols="6">
					<v-row>
						<v-col cols="6">控制开关</v-col>
						<v-col cols="6">
							<v-switch color="primary" hide-details density="compact" />
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="1">
					<v-btn color="primary">保存</v-btn>
				</v-col><v-col cols="3"/>
				<!--   6、无功输出      -->
				<v-col cols="2">6、无功输出</v-col>
				<v-col cols="6">
					<v-row>
						<v-col cols="6">控制开关</v-col>
						<v-col cols="6" style="display: flex">
							<v-slider v-model="PRate" hide-details max-width="200px" color="primary"/>
							<span style="line-height: 32px;font-size: 16px">{{ Math.round(PRate) + '%' }}</span>
						</v-col>
						<v-col cols="6">功率设置值</v-col>
						<v-col cols="6" style="display: flex">
							<yhlx-text-field max-width="200px" density="compact"/>
							<span class="unit">kVA</span>
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="1">
					<v-btn color="primary">保存</v-btn>
				</v-col><v-col cols="3"/>
			</v-row>
		</v-card-text>
	</yhlx-main-container>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'layout-station'
})
const onGridRate = ref(0)
const batteryRate = ref(0)
const PRate = ref(0)
const stationMax = ref()
const stationMid = ref()
const batteryMax = ref()
const batteryMid = ref()
const batteryMin = ref()
const onlyStation = ref()
</script>

<style scoped lang="scss">
.v-checkbox-btn {
	:deep(.v-label) {
		opacity: 1 !important;
		font-size: 14px !important;
	}
}
.v-row {
	.v-col {
		line-height: 32px;
	}
	margin-left: 20px;
}
.unit {
	line-height: 40px;
	margin-left: 8px;
}
</style>
