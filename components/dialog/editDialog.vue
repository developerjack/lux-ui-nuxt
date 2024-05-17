<template>
    <v-card class="overflow-auto float-card">

        <v-list style="padding: 0 !important;width: 200px">
            <v-list-item class="font-weight-bold" v-show="props.items || false">{{"Columns"}}</v-list-item>
            <v-list-item
                v-for="item in props.items"
                :key="item.value"
                color="primary"
                style="height:30px !important;min-height:none !important;position: relative;"
            >
                <label>{{item.text}}</label>
                <input class="check-box-class" type="checkbox" :value="item.value" v-model="checked.myCheck" name="selected">
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
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();
const props = defineProps({
    isHide: Boolean, // 是否显示
    items: Array // 表头
});
const selected = ref([])
const checked = reactive({myCheck:[]})
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
watch(props.items,()=>{
    props.items.forEach(item=>{
        checked.myCheck.push(item.value)
    })
})

const Refresh = ref({
    text:'Refresh Table',
    value:'refresh'
})

watch(()=>checked.myCheck,()=>{
    appStore.setColumns(checked.myCheck)
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
</style>