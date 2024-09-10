<template>
	<yhlx-main-container>
    <template v-slot:title>
      <yhlx-main-container-title :titleList="gateways"/>
    </template>
		<v-tabs v-model="tab">
			<v-tab value="1">Overview</v-tab>
			<v-tab value="2">Info</v-tab>
			<v-tab value="3">Config</v-tab>
		</v-tabs>
		<v-card-text>
			<v-tabs-window v-model="tab">
				<v-tabs-window-item value="1">
					<img alt="" src="@/assets/images/homeBgImg.png" style="width: 80%">
				</v-tabs-window-item>
				<v-tabs-window-item value="2">
					<v-row>
						<v-col cols="2" class="font-weight-bold">Serial Number</v-col>
						<v-col cols="4">IOC24001</v-col>
						<v-col cols="2" class="font-weight-bold">Model</v-col>
						<v-col cols="4">IOC_Store</v-col>
						<v-col cols="2" class="font-weight-bold">Name</v-col>
						<v-col cols="4">David Gonzalez</v-col>
						<v-col cols="2" class="font-weight-bold">Location</v-col>
						<v-col cols="4">Xiamen</v-col>
						<v-col cols="2" class="font-weight-bold">Firmware version</v-col>
						<v-col cols="4">2024010128</v-col>
						<v-col cols="2" class="font-weight-bold">First Connect</v-col>
						<v-col cols="4">2024-01-01 22:22:22</v-col>
						<v-col cols="2" class="font-weight-bold">Last Connect</v-col>
						<v-col cols="4">2024-02-28 12:23:32</v-col>
						<v-col cols="2" class="font-weight-bold">Status</v-col>
						<v-col cols="4">Activated</v-col>
					</v-row>
				</v-tabs-window-item>
				<v-tabs-window-item value="3">
					<v-row class="form">
						<template v-for="config in configs">
							<v-col cols="2" class="font-weight-bold">{{ config.key }}</v-col>
							<v-col cols="10">
								<yhlx-text-field :value="config.value" />
							</v-col>
						</template>
					</v-row>
				</v-tabs-window-item>
			</v-tabs-window>
		</v-card-text>
	</yhlx-main-container>
</template>

<script setup lang="ts">
const tab = ref('one');
const gateways = ref([
  { id: "1", title: "Gateway NO.1"},
  { id: "2", title: "Gateway NO.2"},
  { id: "3", title: "Gateway NO.3"},
  { id: "4", title: "Gateway NO.4"},
  { id: "5", title: "Gateway NO.5"},
])
const configs = [
	{ key: "ID", value: "1"},
	{ key: "SerialNumber", value: "IOC001"},
	{ key: "ServerProtocol", value: "wss"},
	{ key: "ServerHost", value: "www.iocharger.com"},
	{ key: "ServerPort", value: "8113"},
	{ key: "ServerURL", value: "ocpp/gateway"},
	{ key: "Model", value: "IOC15-22T"},
	{ key: "WiFi", value: "true"},
	{ key: "4G", value: "true"},
	{ key: "DNS", value: "223.5.5.5"},
	{ key: "Lang", value: "en"},
	{ key: "WiFiDHCP", value: "true"},
	{ key: "WiFiIp", value: "192.168.2.2"},
	{ key: "WiFiName", value: "YHLX_XM"},
	{ key: "WifiPwd", value: "123456"},
	{ key: "Vendor", value: "IOC"},
	{ key: "MBusIp", value: "0.0.0.0"},
	{ key: "WebSocketPingInterval", value: "60"},
];

</script>

<style scoped lang="scss">
.v-row{
  margin-bottom: 0;
}
</style>
