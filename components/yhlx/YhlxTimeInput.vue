<template>
  <v-menu
    :close-on-content-click="false"
    location="bottom"
    class="date-picker-menu"
    v-model="menu"
  >
    <template v-slot:activator="{ props }">
      <yhlx-text-field v-model="formatDate" density="compact" v-bind="props" readonly append-inner-icon="mdi-calendar-month-outline" />
    </template>
    <v-date-picker v-model="datetime" :multiple="!multiple ? multiple : 'range'">
      <template v-slot:title />
      <template v-slot:header />
      <template v-slot:actions>
        <v-btn color="primary" @click="menu = false">取消</v-btn>
        <v-btn color="primary" @click="confirmPickerTime">确定</v-btn>
      </template>
    </v-date-picker>
  </v-menu>
</template>
<script setup lang="ts">
  const props = defineProps ({
    multiple: {
      type: Boolean,
      default: true
    }
  })
  const emits = defineEmits(["getPickTime"])
  const datetime = ref()
  const menu = ref(false)
  const formatDate = ref()
  const confirmPickerTime = () => {
    formatDate.value = formatterShowDate(datetime.value)
    emits('getPickTime',formatDate.value)
    menu.value = false
  }
  function formatterShowDate (date: Array<any>) { // 格式化选中时间
    if (props.multiple) {
      const arr: Array<string> = []
      date.forEach(element => {
        const { year, month, day } = FormatterDate(element)
        arr.push(`${year}/${month.padStart(2, '0')}/${day.padStart(2, '0')}`)
      });
      return arr.length > 1 ? arr[0] + ' - ' + arr[arr.length - 1] : arr[0]
    } else {
      const { year, month, day } = FormatterDate(date)
      return `${year}/${month.padStart(2, '0')}/${day.padStart(2, '0')}`
    }
  }
  function FormatterDate (date: string) { // 格式化
    const dateFormatter = new Date(date);
    const year = dateFormatter.getFullYear();
    const month = (dateFormatter.getMonth() + 1).toString().padStart(2, '0');
    const day = dateFormatter.getDate().toString().padStart(2, '0');
    return { year, month, day }
  }
  function clearInput() {
    formatDate.value = ''
  }
  defineExpose({
    clearInput
  })
</script>
<style lang="scss" >
.date-picker-menu{
  .v-overlay__content{
    .v-picker-title{
      padding: 0 !important;
    }
  }
}
</style>