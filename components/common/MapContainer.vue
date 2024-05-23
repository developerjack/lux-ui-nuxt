<template>
  <div id="container" :style="heightStyle"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import AMapLoader from '@amap/amap-jsapi-loader';
const props = defineProps({
  height:{
    type:Number,
    default:800
  }
})
const emits = defineEmits('getLocationName')
let map = null;
let marker = null;
const selectedAddress = ref('');
const heightStyle = computed(()=>{
  return `width: 100%;height: ${props.height}px;`
})
onMounted(() => {
  window._AMapSecurityConfig = {
    securityJsCode: "33d09ebb80da18535c4b6e178821ea9e",
  };
  AMapLoader.load({
    key: 'a8d5c94eb4b07ac062391211676755f5',
    version: '2.0',
    plugins: ['AMap.Geocoder']
  }).then((AMap) => {
    map = new AMap.Map('container', {
      zoom: 11,
      center: [118.0853479, 24.4801069]
    });
    marker = new AMap.Marker({
      position: [118.0853479, 24.4801069],
      map: map
    });
    map.on('click', function (e) {
      if (marker) {
        marker.setMap(null); // 清除之前的标志
      }
      marker = new AMap.Marker({
        position: e.lnglat,
        map: map
      });
      AMap.plugin('AMap.Geocoder', function () {
        var geocoder = new AMap.Geocoder({
          city: '全国'
        });

        geocoder.getAddress(e.lnglat, function (status, result) {
          if (status === 'complete' && result.regeocode) {
            selectedAddress.value = result.regeocode.formattedAddress;
              emits('getLocationName',selectedAddress)
          }
        });
      });
    });
  }).catch((error) => {
    console.error(error);
  });
});


</script>