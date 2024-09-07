<script setup lang="ts">
  const props = defineProps({
    rowData: Array<object>,
    headers: {
      type: Array,
      default: () => []
    }
  })
  const handleType = ref('')
  const alarmDialog = ref(false)
  const alarmDescription = ref('')
  // 开关弹窗
  const changeAlarmDialog = () => {
    alarmDialog.value = !alarmDialog.value
  }
  function saveHandleAlarm () {
    alarmDialog.value = false
    clearInputValue()
  }
  function closeDialog () {
    alarmDialog.value = false
    clearInputValue()
  }
  function clearInputValue () {
    alarmDescription.value = ''
    handleType.value = ''
  }
  defineExpose({
    changeAlarmDialog
  })
</script>

<template>
  <v-dialog
    v-model="alarmDialog"
    persistent
    max-width="800"
    max-height="600"
  >
    <v-card class="overflow-auto">
      <v-container>
        <v-card-title>
          <span class="text-h5">Handle Alarm</span>
        </v-card-title>
        <v-divider class="mx-4 my-3" />
        <v-card-text>
          <v-row class="form">
            <v-col
              cols="12"
              sm="6"
            >
              <yhlx-select
                label="Handle Type"
                v-model="handleType"
                :items="[{
                  title: 'misreport',
                  value: 'misreport'
                },{
                  title: 'resolved',
                  value: 'resolved'
                },{
                  title: 'other',
                  value: 'other'
                }]"
              />
            </v-col>
            <v-col
                cols="12"
                sm="12"
            >
              <v-textarea label="Processing Content" variant="outlined" v-model="alarmDescription" />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <yhlx-btn business-type="Close" variant="text" @click="closeDialog">Close</yhlx-btn>
          <yhlx-btn business-type="Primary" @click="saveHandleAlarm">Save</yhlx-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss">
</style>