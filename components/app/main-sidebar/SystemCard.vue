<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">

const openGithubSite = () => {
  window.open("https://github.com/developerjack", "_blank");
};
</script>

<template>
  <div class="test px-3 py-2">
    <div style="display: grid; align-content: center; grid-template-columns: 50px 1fr 20px;">
	    <v-btn class="type-icon" size="38" color="white" icon>
	      SAAS
	    </v-btn>
	    <div style="color: white; display: flex; align-items: center;">
	        Iocharger
	    </div>
	    <v-icon size="small" style="height: 100%; color: white;">mdi-chevron-down</v-icon>
    </div>
  </div>
</template>

<style scoped lang="scss">
.test {
	background-color: rgb(var(--v-theme-primary));
}
.type-icon {
	font-size: 12px;
	font-weight: bold;
	color: rgb(var(--v-theme-primary)) !important;
}
</style>
