<template>
  <div class="pie-card-mes">
    <!-- 描述card -->
    <div class="card-list">
      <div style="display:flex">
        <div class="card-item first-card-item" style="margin-bottom: 5px;">
          <p class="card-item-title">电桩数量</p>
          <div class="card-item-content">
            <p>10</p>
            <p>座</p>
          </div>
        </div>
        <div class="card-item" style="margin-bottom: 5px;">
          <p class="card-item-title">光伏总装机容量</p>
          <div class="card-item-content">
            <p>280</p>
            <p>kWh</p>
          </div>
        </div>
      </div>
      <div style="display:flex">
        <div class="card-item first-card-item">
          <p class="card-item-title">X能总装机容量</p>
          <div class="card-item-content">
            <p>1580</p>
            <p>kWh</p>
          </div>
        </div>
        <div class="card-item">
          <p class="card-item-title">充电桩总装机容量</p>
          <div class="card-item-content">
            <p>1280</p>
            <p>kW</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 饼图 -->
    <div class="pie-list">
      <p class="pie-list-title">设备状态</p>
      <v-row>
        <v-col cols="4">
          <OnlineRatePie></OnlineRatePie>
          <div class="pie-list-descript">
            <p>网关在线率</p>
            <p>在线 9 台</p>
            <p>离线 1 台</p>
          </div>
        </v-col>
        <v-col cols="4">
          <OnlineRatePie :color="['#277473', '#70AA3B']"></OnlineRatePie>
          <div class="pie-list-descript">
            <p>网关在线率</p>
            <p>在线 9 台</p>
            <p>离线 1 台</p>
          </div>
        </v-col>
        <v-col cols="4">
          <OnlineRatePie :color="['#5215AA', '#B7B842']"></OnlineRatePie>
          <div class="pie-list-descript">
            <p>网关在线率</p>
            <p>在线 9 台</p>
            <p>离线 1 台</p>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script setup lang="ts">
import OnlineRatePie from './OnlineRatePie.vue'

</script>
<style lang="scss" scoped>
.pie-card-mes{
  width: 30%;
  margin-right: 60px;
  .card-list{
    padding: 16px 0;
    font-weight: 700;
    // border: 2px solid #454ABF;
    .card-item{
      flex: 1;
      padding: 8px 16px 20px;
      background: #E6F4FD;
      .card-item-content{
        margin-top: 20px;
        display: flex;
        p{
          flex: 1;
        }
      }
    }
    .first-card-item{
      margin-right: 10px;
    }
  }
  .pie-list{
    margin-top: 40px;
    .pie-list-title{
      font-weight: 700;
      font-size: 16px;
    }
    .pie-list-descript{
      text-align: center;
    }
  }
}
</style>