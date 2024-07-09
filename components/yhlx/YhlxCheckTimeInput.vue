<script setup lang="ts">
const props = defineProps({
  width: {
    type: String,
    default: '160'
  },
  timeRange: {
    type: Object,
    default: () => {}
  }
})
const emits = defineEmits(['getTimeRange'])
function openTimePick (){
  if (selected.value.length !== 1) {
    showSelectBox.value = !showSelectBox.value
  }
}
const showSelectBox = ref(false)
const selected = ref([])
const timeRange = ref('0:00-24:00')
function addSelected (i) {
  selected.value.push(i)
  if (selected.value.length === 2) {
    i > selected.value[0] ? (timeRange.value = selected.value[0] + ':00-' + selected.value[1] + ':00') : (timeRange.value = selected.value[1] + ':00-' + selected.value[0] + ':00')
    emits('getTimeRange',{
      item: props.timeRange,
      value: selected.value
    })
    selected.value = []
    showSelectBox.value = false
  } else {
    timeRange.value = selected.value[0] + ':00'
  }
}
const colsNum = computed(()=>{
  console.log(12 / Math.ceil(Number(props.width) / 60))
  return 12 / Math.floor(Number(props.width) / 60)
})
//
// watch(timeRange, () => {
//   emits('getTimeRange',timeRange.value)
// })
</script>

<template>
  <div class="time-pick-box">
    <yhlx-text-field @click="openTimePick" readonly v-model="timeRange" :style="{'width': props.width + 'px'}" :clearable="false" append-inner-icon="mdi-menu-down"/>
    <v-row v-if="showSelectBox" :style="{'width': props.width + 'px'}">
      <v-col :cols="colsNum" v-for="i in 25" :key="i" class="timePick" @click="addSelected(i - 1)">{{ i - 1 + ':00' }}</v-col>
    </v-row>
  </div>
</template>
<style scoped lang="scss">
.timePick{
  cursor: pointer;
}
.timePick:hover{
  background-color: #eee;
}
.time-pick-box{
  position: relative;
  .v-row{
    background-color: white;
    z-index: 300;
    height: 200px;
    overflow-y: scroll;
    border: 1px solid #A8A8A8;
    border-top: none;
    position: absolute;
    top: 60px;
    left: 12px;
  }
}
</style>