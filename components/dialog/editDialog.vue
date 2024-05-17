<template>
    <v-card class="overflow-auto float-card" v-if="!props.isHide">

        <v-list style="padding: 0 !important;width: 200px">
            <v-list-item v-show="props.items || false" class="font-weight-bold">{{"Columns"}}</v-list-item>
            <v-list-item
                v-for="item in props.items"
                :key="item.value"
                color="primary"
                style="height:30px !important;min-height:none !important;position: relative;"
            >
                <label>{{item.text}}</label>
                <input class="check-box-class" type="checkbox" :value="item.value" name="selected" @click="toggleSelection(item.value)">
            </v-list-item>
            <v-divider />
            <v-list-item
                v-for="item in operateItem"
                :key="item.value"   
                :value="item.value"
                color="primary"
            >
            {{item.text}}
            </v-list-item>
            <v-divider />
            <v-list-item
                :key="Refresh.value"
                :value="Refresh.value"
                color="primary"
            >
            {{Refresh.text}}
            </v-list-item>
        </v-list>
    </v-card>
</template>
<script setup lang="ts">
import YhlxBtn from "@/components/common/YhlxBtn.vue";
const props = defineProps({
    isHide: Boolean, // 是否显示
    items: Array // 表头
});
const selected = ref([])
const operateItem = ref([
    {
        text:'Clear Filters',
        value:'clear'
    },
    {
        text:'Reset Sorting',
        value:'reset'
    },
])
const Refresh = ref({
    text:'Refresh Table',
    value:'refresh'
})
function toggleSelection(value) {
    if (selected.value.includes(value)) {
        selected.value = selected.value.filter(item => item !== value);
    } else {
        selected.value.push(value);
    }
    console.log(selected.value);
}

watch(selected,()=>{
    console.log(selected)
})
</script>
<style lang="scss" scoped>
.float-card{
    position: absolute;
    right:54px;
    top:64px;
    padding:0 !important;
    z-index:2000
}
.check-box-class{
    position: absolute;
    right: 16px;
    top: 18px;
    
}
.v-list-item input[type="checkbox"]:checked {
  background-color: blue !important; /* 修改选中后的背景色为蓝色 */
  border-color: green !important;  /* 修改选中后的边框颜色为绿色 */
}
</style>