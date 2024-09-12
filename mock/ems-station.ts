import {apiPageResult, apiPageResult5} from "./mock";
import {deviceStatusEnums} from "~/data/data";

const MockAPI = [
	{
		url: "/api/ems-station/alarm/dashboard",
		method: "get",
		response: () => {
			return apiPageResult5({
				"id|+1": 1,
				"name|1": ["Device Offline", "Over Voltage", "Under Voltage", "High Temperature", "Weak Signal", "Other"],
				"device|1": ["@name (Lihub)", "@name (Hybrid)", "@name (Gateway)"],
				"alarmType|1": ["Warn", "Error"],
				"reportTime": "@datetime('yyyy-MM-dd HH:mm:ss')",
			});
		}
	},
	{
		url: "/api/ems-station/gateway",
		method: "get",
		response: () => {
			return apiPageResult({
				"id|+1": 1,
				"serialNumber|1": ['IOC24001', 'IOC24002', 'IOC24003', 'IOC24004', 'IOC24005', 'IOC24006'],
				"name": "@name",
				"model|1": ['IOC_Light', 'IOC_Store', '-'],
				"firmwareVersion|1": ['2024010101', '-'],
				"lastConnectTime|1": ["@datetime('yyyy-MM-dd HH:mm:ss')", "-"],
				"status|1": deviceStatusEnums,
				"notes": "The device in Xiamen.",
			});
		}
	},
	{
		url: "/api/ems/device",
		method: "get",
		response: () => {
			return apiPageResult({
				"id|+1": 1,
				"name": "@name",
				"gatewaySerialNumber|1": ['IOC24001', 'IOC24002', 'IOC24003', 'IOC24004', 'IOC24005', 'IOC24006'],
				"gatewayName": "@name",
				"type|1": ['Lihub', 'Hybrid'],
			});
		}
	},
	{
		url: "/api/ems/station/run-report",
		method: "get",
		response: () => {
			return apiPageResult({
				"id|+1": 1,
				"PVIncome|100-1000": 200,
				"PVEnergy|1-100": 20,
				"batteryChargingIncome|100-1000": 200,
				"batteryChargingEnergy|1-100": 20,
				"batteryProceeds|100-1000": 200,
				"batteryDischargeEnergy|1-100": 20,
				"chargingStationIncome|50-1000": 100,
				"chargingStationEnergy|1-100": 20,
				"gridIncome|100-1000": 150,
				"gridEnergyInput|1-100": 20,
				"gridOutgo|100-1000": 150,
				"gridEnergyOutput|1-100": 20
			});
		}
	},
]

export default MockAPI