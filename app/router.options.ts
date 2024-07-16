import type RouterConfig from '@nuxt/schema'

export default <RouterConfig> {
    routes: (_routes) => [
        {
            name: 'home',
            path: '/',
            component: () => import('~/pages/index.vue').then(r => r.default || r)
        },
        {
            name: 'Register',
            path: '/auth/register',
            component: () => import('~/pages/auth/Register.vue').then(r => r.default || r)
        },
        {
            name: 'Login',
            path: '/auth/login',
            component: () => import('~/pages/auth/Login.vue').then(r => r.default || r)
        },
        {
            name: 'MailVertify',
            path: '/auth/mail-vertify',
            component: () => import('~/pages/auth/Mail-Vertify.vue').then(r => r.default || r)
        },
//          CPO
        {
            name: 'CPO-agreement',
            path: '/cpo/agreement',
            component: () => import('~/pages/cpo/agreement/index.vue').then(r => r.default || r)
        },
        {
            name: 'CPO-agreement-detail',
            path: '/cpo/agreement/:id',
            component: () => import('~/pages/cpo/agreement/[id].vue').then(r => r.default || r)
        },
        {
            name: 'CPO-charging-station',
            path: '/cpo/charging-station',
            component: () => import('~/pages/cpo/charging-station/index.vue').then(r => r.default || r)
        },
        {
            name: 'CPO-charging-station-detail',
            path: '/cpo/charging-station/:id',
            component: () => import('~/pages/cpo/charging-station/[id].vue').then(r => r.default || r)
        },
        {
            name: 'CPO-hardware-template',
            path: '/cpo/hardware-template',
            component: () => import('~/pages/cpo/hardware-template/index.vue').then(r => r.default || r)
        },
        {
            name: 'CPO-charging-station-detail',
            path: '/cpo/hardware-template/:id',
            component: () => import('~/pages/cpo/hardware-template/[id].vue').then(r => r.default || r)
        },
        {
            name: 'CPO-location',
            path: '/cpo/location',
            component: () => import('~/pages/cpo/location/index.vue').then(r => r.default || r)
        },
        {
            name: 'CPO-location-detail',
            path: '/cpo/location/:id',
            component: () => import('~/pages/cpo/location/[id].vue').then(r => r.default || r)
        },
        {
            name: 'CPO-tariff',
            path: '/cpo/tariff',
            component: () => import('~/pages/cpo/tariff/index.vue').then(r => r.default || r)
        },
        {
            name: 'CPO-tariff-detail',
            path: '/cpo/tariff/:id',
            component: () => import('~/pages/cpo/tariff/[id].vue').then(r => r.default || r)
        },
//      EMS
        {
            name: 'EMS-admin',
            path: '/ems/admin/admin',
            component: () => import('~/pages/ems/admin/admin/index.vue').then(r => r.default || r)
        },
        {
            name: 'EMS-role',
            path: '/ems/admin/role',
            component: () => import('~/pages/ems/admin/role/index.vue').then(r => r.default || r)
        },
        {
            name: 'EMS-alarm',
            path: '/ems/alarm',
            component: () => import('~/pages/ems/alarm/index.vue').then(r => r.default || r)
        },
        {
            name: 'EMS-alarm-detail',
            path: '/ems/alarm/:id',
            component: () => import('~/pages/ems/alarm/[id].vue').then(r => r.default || r)
        },
        {
            name: 'EMS-dashboard',
            path: '/ems/dashboard',
            component: () => import('~/pages/ems/dashboard/index.vue').then(r => r.default || r)
        },
        {
            name: 'EMS-device',
            path: '/ems/device',
            component: () => import('~/pages/ems/device/index.vue').then(r => r.default || r)
        },
        {
            name: 'EMS-device-detail',
            path: '/ems/device/:id',
            component: () => import('~/pages/ems/device/[id].vue').then(r => r.default || r)
        },
        {
            name: 'EMS-gateway',
            path: '/ems/gateway',
            component: () => import('~/pages/ems/gateway/index.vue').then(r => r.default || r)
        },
        {
            name: 'EMS-gateway-detail',
            path: '/ems/gateway/:id',
            component: () => import('~/pages/ems/gateway/[id].vue').then(r => r.default || r)
        },
        {
            name: 'EMS-location',
            path: '/ems/location',
            component: () => import('~/pages/ems/location/index.vue').then(r => r.default || r)
        },
        {
            name: 'EMS-location-detail',
            path: '/ems/location/:id',
            component: () => import('~/pages/ems/location/[id].vue').then(r => r.default || r)
        },
        {
            name: 'EMS-price',
            path: '/ems/price',
            component: () => import('~/pages/ems/price/index.vue').then(r => r.default || r)
        },
        {
            name: 'EMS-price-detail',
            path: '/ems/price/:id',
            component: () => import('~/pages/ems/price/[id].vue').then(r => r.default || r)
        },
        {
            name: 'EMS-price-add',
            path: '/ems/price/Add',
            component: () => import('~/pages/ems/price/Add.vue').then(r => r.default || r)
        },
        {
            name: 'EMSP-agreement',
            path: '/emsp/agreement',
            component: () => import('~/pages/emsp/agreement/index.vue').then(r => r.default || r)
        },
        {
            name: 'EMSP-agreement-detail',
            path: '/emsp/agreement/:id',
            component: () => import('~/pages/emsp/agreement/[id].vue').then(r => r.default || r)
        },
        {
            name: 'EMSP-customer',
            path: '/emsp/customer/customer',
            component: () => import('~/pages/emsp/customer/customer/index.vue').then(r => r.default || r)
        },
        {
            name: 'EMSP-customer-detail',
            path: '/emsp/customer/customer/:id',
            component: () => import('~/pages/emsp/customer/customer/[id].vue').then(r => r.default || r)
        },
        {
            name: 'EMSP-rf',
            path: '/emsp/customer/rf',
            component: () => import('~/pages/emsp/customer/rf/index.vue').then(r => r.default || r)
        },
        {
            name: 'EMSP-rf-detail',
            path: '/emsp/customer/rf/:id',
            component: () => import('~/pages/emsp/customer/rf/[id].vue').then(r => r.default || r)
        },
//      SAAS
        {
            name: 'SAAS-admin',
            path: '/saas/admin/admin',
            component: () => import('~/pages/saas/admin/admin/index.vue').then(r => r.default || r)
        },
        {
            name: 'SAAS-role',
            path: '/saas/admin/role',
            component: () => import('~/pages/saas/admin/role/index.vue').then(r => r.default || r)
        },
        {
            name: 'SAAS-agent',
            path: '/saas/agent',
            component: () => import('~/pages/saas/agent/index.vue').then(r => r.default || r)
        },
        {
            name: 'SAAS-agent-detail',
            path: '/saas/agent/:id',
            component: () => import('~/pages/saas/agent/[id].vue').then(r => r.default || r)
        },
        {
            name: 'SAAS-network',
            path: '/saas/network',
            component: () => import('~/pages/saas/network/index.vue').then(r => r.default || r)
        },
        {
            name: 'SAAS-network-detail',
            path: '/saas/network/:id',
            component: () => import('~/pages/saas/network/[id].vue').then(r => r.default || r)
        },
        {
            name: 'SAAS-operator',
            path: '/saas/operator',
            component: () => import('~/pages/saas/operator/index.vue').then(r => r.default || r)
        },
        {
            name: 'SAAS-operator-detail',
            path: '/saas/operator/:id',
            component: () => import('~/pages/saas/operator/[id].vue').then(r => r.default || r)
        },
        {
            name: 'SAAS-dashboard',
            path: '/saas/dashboard',
            component: () => import('~/pages/saas/dashboard/index.vue').then(r => r.default || r)
        },



//      landings
        {
            name: 'landings-daily',
            path: '/landings/daily',
            component: () => import('~/pages/landings/daily.vue').then(r => r.default || r)
        },
        {
            name: 'landings-dribbble',
            path: '/landings/dribbble',
            component: () => import('~/pages/landings/dribbble.vue').then(r => r.default || r)
        },
        {
            name: 'landings-labs',
            path: '/landings/labs',
            component: () => import('~/pages/landings/labs.vue').then(r => r.default || r)
        },
        {
            name: 'landings-qq',
            path: '/landings/qq',
            component: () => import('~/pages/landings/qq.vue').then(r => r.default || r)
        },
        {
            name: 'landings-Toolbar',
            path: '/landings/Toolbar',
            component: () => import('~/pages/landings/Toolbar.vue').then(r => r.default || r)
        },
        {
            name: 'landings-Toolbar',
            path: '/landings/trancy-log',
            component: () => import('~/pages/landings/trancy-log.vue').then(r => r.default || r)
        },
        {
            name: 'landings-tryolabs',
            path: '/landings/tryolabs',
            component: () => import('~/pages/landings/tryolabs.vue').then(r => r.default || r)
        },
        {
            name: 'landings-whimsical',
            path: '/landings/whimsical',
            component: () => import('~/pages/landings/whimsical.vue').then(r => r.default || r)
        },
//      ui
        {
            name: 'UI-whimsical',
            path: '/ui/Accordion',
            component: () => import('~/pages/ui/Accordion.vue').then(r => r.default || r)
        },
        {
            name: 'UI-Alert',
            path: '/ui/Alert',
            component: () => import('~/pages/ui/Alert.vue').then(r => r.default || r)
        },
        {
            name: 'UI-Avatar',
            path: '/ui/Avatar',
            component: () => import('~/pages/ui/Avatar.vue').then(r => r.default || r)
        },
        {
            name: 'UI-chip',
            path: '/ui/Chip',
            component: () => import('~/pages/ui/Chip.vue').then(r => r.default || r)
        },
        {
            name: 'UI-Dialog',
            path: '/ui/Dialog',
            component: () => import('~/pages/ui/Dialog.vue').then(r => r.default || r)
        },
        {
            name: 'UI-List',
            path: '/ui/List',
            component: () => import('~/pages/ui/List.vue').then(r => r.default || r)
        },
        {
            name: 'UI-Menus',
            path: '/ui/Menus',
            component: () => import('~/pages/ui/Menus.vue').then(r => r.default || r)
        },
        {
            name: 'UI-Rating',
            path: '/ui/Rating',
            component: () => import('~/pages/ui/Rating.vue').then(r => r.default || r)
        },
        {
            name: 'UI-Sidebar',
            path: '/ui/Sidebar',
            component: () => import('~/pages/ui/Sidebar.vue').then(r => r.default || r)
        },
        {
            name: 'UI-Tabs',
            path: '/ui/Tabs',
            component: () => import('~/pages/ui/Tabs.vue').then(r => r.default || r)
        },
        {
            name: 'UI-TimeLine',
            path: '/ui/TimeLine',
            component: () => import('~/pages/ui/TimeLine.vue').then(r => r.default || r)
        },
        {
            name: 'UI-Tooltip',
            path: '/ui/Tooltip',
            component: () => import('~/pages/ui/Tooltip.vue').then(r => r.default || r)
        },
        {
            name: 'UI-Tree',
            path: '/ui/Tree',
            component: () => import('~/pages/ui/Tree.vue').then(r => r.default || r)
        },
//      widget
        {
            name: 'Widget-Color',
            path: '/widget/Color',
            component: () => import('~/pages/widget/Color.vue').then(r => r.default || r)
        },
        {
            name: 'Widget-Date',
            path: '/widget/Date',
            component: () => import('~/pages/widget/Date.vue').then(r => r.default || r)
        },
        {
            name: 'Widget-Faker-Api',
            path: '/widget/Faker-Api',
            component: () => import('~/pages/widget/Faker-Api.vue').then(r => r.default || r)
        },
        {
            name: 'Widget-Gradient',
            path: '/widget/Gradient',
            component: () => import('~/pages/widget/Gradient.vue').then(r => r.default || r)
        },
        {
            name: 'Widget-Lottie-Animation',
            path: '/widget/Lottie-Animation',
            component: () => import('~/pages/widget/Lottie-Animation.vue').then(r => r.default || r)
        },
        {
            name: 'Widget-Md-Editor',
            path: '/widget/Md-Editor',
            component: () => import('~/pages/widget/Md-Editor.vue').then(r => r.default || r)
        },
        {
            name: 'Widget-Skeleton',
            path: '/widget/Skeleton',
            component: () => import('~/pages/widget/Skeleton.vue').then(r => r.default || r)
        },
        {
            name: 'Widget-Toastify',
            path: '/widget/Toastify',
            component: () => import('~/pages/widget/Toastify.vue').then(r => r.default || r)
        },
        {
            name: 'Widget-VueFlow',
            path: '/widget/VueFlow',
            component: () => import('~/pages/widget/VueFlow.vue').then(r => r.default || r)
        },
//      chart
        {
            name: 'Chart-Annotations',
            path: '/chart/Annotations',
            component: () => import('~/pages/chart/Annotations.vue').then(r => r.default || r)
        },
        {
            name: 'Chart-AreaChart',
            path: '/chart/AreaChart',
            component: () => import('~/pages/chart/AreaChart.vue').then(r => r.default || r)
        },
        {
            name: 'Chart-Base',
            path: '/chart/Base',
            component: () => import('~/pages/chart/Base.vue').then(r => r.default || r)
        },
        {
            name: 'Chart-CandlestickChart',
            path: '/chart/CandlestickChart',
            component: () => import('~/pages/chart/CandlestickChart.vue').then(r => r.default || r)
        },
        {
            name: 'Chart-ChartBoardDark',
            path: '/chart/ChartBoardDark',
            component: () => import('~/pages/chart/ChartBoardDark.vue').then(r => r.default || r)
        },
        {
            name: 'Chart-ChartBoardLight',
            path: '/chart/ChartBoardLight',
            component: () => import('~/pages/chart/ChartBoardLight.vue').then(r => r.default || r)
        },
        {
            name: 'Chart-ColumnChart',
            path: '/chart/ColumnChart',
            component: () => import('~/pages/chart/ColumnChart.vue').then(r => r.default || r)
        },
        {
            name: 'Chart-LineChart',
            path: '/chart/LineChart',
            component: () => import('~/pages/chart/LineChart.vue').then(r => r.default || r)
        },
        {
            name: 'Chart-TableChart',
            path: '/chart/TableChart',
            component: () => import('~/pages/chart/TableChart.vue').then(r => r.default || r)
        },
    ],
}
