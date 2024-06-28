<template>
  <div>
    <v-row no-gutters>
      <v-col class="small-card" cols="2" style="background: #F2F2FE">
        <div class="small-card-top">
          <p>总收益</p>
          <p class="unit">天</p>
        </div>
        <div class="small-card-bottom" style="">
          <div class="small-card-left" style="margin-left: 0;margin-top: 8px;padding: 16px 0;flex: 3">
            <p style="font-size: 20px">3256</p>
            <p style="display: flex;">
              XXX
              <span style="color:red;display: flex;margin-left:8px;">
                565
                <nuxt-icon name="svg/trending-up" style="margin-left: 6px;"/>
              </span>
            </p>
          </div>
          <div class="small-card-right" style="display: flex;flex: 2;width: 100%">
            <apexchart
              id="donutChart"
              type="donut"
              :height="90"
              :options="chartOptions"
              :series="chartOptions.series"
            />
            <div style="text-align: left;margin-top: 8px;width: 50px;">
              <p>光伏</p>
              <p>储能</p>
              <p>充电桩</p>
            </div>
          </div>
        </div>
      </v-col>
      <v-col class="small-card" cols="2" style="background: #F5F2FD;color:#6457B8">
        <div class="small-card-top">
          <p>太阳能</p>
          <p class="unit">天</p>
        </div>
        <div class="small-card-bottom">
          <div class="small-card-left">
            <Icon icon="solar:layers-minimalistic-line-duotone" width="70" />
          </div>
          <div class="small-card-right font-list">
            <p class="price">0.2 kWh</p>
            <p class="descript">看不清</p>
            <p class="price">100 元</p>
            <p class="descript">收益</p>
          </div>
        </div>
      </v-col>
      <v-col class="small-card" cols="3" style="background: #FDEAE4;color: #EE7566">
        <div class="small-card-top">
          <p>电池</p>
          <p class="unit price-margin-right">天</p>
        </div>
        <div class="small-card-bottom">
          <div class="small-card-left">
             <Icon icon="solar:layers-minimalistic-line-duotone" width="70" />
          </div>
          <div class="small-card-right font-list price-list">
            <div>
              <p class="price">0.4 kWh</p>
              <p class="descript">充电</p>
              <p class="price">0.9 kWh</p>
              <p class="descript">放电</p>
            </div>
            <div class="small-card-right">
              <p class="price">100 元</p>
              <p class="descript">收益</p>
            </div>
          </div>
        </div>
      </v-col>
      <v-col class="small-card" cols="2" style="background: #EBF5FD;color: #3359A4">
        <div class="small-card-top">
          <p>充电桩</p>
          <p class="unit">天</p>
        </div>
        <div class="small-card-bottom">
          <div class="small-card-left">
            <Icon icon="solar:layers-minimalistic-line-duotone" width="70" />
          </div>
          <div class="small-card-right font-list">
            <p class="price">- kWh</p>
            <p class="descript">耗电量</p>
            <p class="price">100 元</p>
            <p class="descript">收益</p>
          </div>
        </div>
      </v-col>
      <v-col class="small-card" cols="2" style="background: #E4F7F6;color: #3FB4B3">
        <div class="small-card-top">
          <p>电网</p>
          <p class="unit">天</p>
        </div>
        <div class="small-card-bottom">
          <div class="small-card-left">
            <Icon icon="solar:layers-minimalistic-line-duotone" width="70" />
          </div>
          <div class="small-card-right font-list">
            <p class="price">0.0 kWh</p>
            <p class="descript">买电量</p>
            <p class="price">100 元</p>
            <p class="descript">收益</p>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts">
import YhlxSvgIcon from '@/components/yhlx/YhlxSvgIcon.vue'
import { Icon } from "@iconify/vue";
import OnlineRatePie from './OnlineRatePie.vue'

const chartOptions = {
  series: [5,5,3],
  labels: ['光伏','储能','充电桩'],
  chart: {
    width: '90',
    type: "donut",
    offsetX: -10
  },
  colors: ['#0F50F9','#8642D0','#0DADFB'],
  dataLabels: { enabled: false },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    borderColor: "transparent",
    padding: { top: 0, right: 0 },
  },
  stroke: { colors: ["transparent"] },
  tooltip: { theme: "dark", fillSeriesColor: false },
}
</script>
<style lang="scss" scoped>
.small-card{
  background: #339966;
  margin-right: 16px;
  height: 130px;
  padding: 16px !important;
  .small-card-top{
    display: flex;
    .price-margin-right{
      margin-right: 70px;
    }
    p{
      flex: 1;
    }
    .unit{
      text-align: right;
    }
  }
  .small-card-bottom{
    margin-top: 8px;
    justify-content: space-between;
    display: flex;
    .small-card-right{
      text-align: right;
      margin-left: 16px;
      .title-list{
        margin-left: 8px;
        p{
          text-align: left;
          margin-bottom: 4px;
        }
      }
    }
    .font-list{
      .price{
        font-size:18px;
        font-weight:700;
      }
      .descript{
        font-size:10px;
      }
    }
    .price-list{
      display: flex;
    }
  }
}
</style>