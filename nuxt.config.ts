import { createResolver } from "@nuxt/kit";
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { viteMockServe } from "vite-plugin-mock";

const { resolve } = createResolver(import.meta.url);
// PWA Config
const title = "Vuetify 3 + Nuxt 3 Awesome Admin";
const shortTitle = "Lux Admin";
const description = "Lux-Admin,Awesome Nuxt3-Vuetify3 Admin";
const image = "https://github.com/yangjiakai/lux-nuxt3/blob/main/assets/images/banner.png";
const url = "https://lux-vuetify3-nuxt3.netlify.app/";
const apiUrl = 'http://192.168.2.132:9001'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
	
  devtools: { enabled: true },
  typescript: { shim: false },
  build: { transpile: ["vuetify"] },
  sourcemap: { server: false, client: false },
  routeRules: {
    '/**': { ssr: false }
  },
	// components: [
	// 	{
	// 		path: '~/components',
	// 		pathPrefix: false,
	// 	},
	// ],
  nitro: {
    devProxy: {
      "/netApi": {
        target: apiUrl, // 这里是接口地址
        changeOrigin: true
      },
    },
  },
  modules: [
    "nuxt-icons",
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins ||= [];
        config.plugins.push(
          vuetify({
            styles: { configFile: resolve("/assets/scss/variables.scss") },
          }));
				config.plugins.push(viteMockServe({
					logger: false,
					mockPath: "./mock/",
					watchFiles: false
				}));
      });
    },
    ['@nuxtjs/google-fonts', {
      families: {
        Quicksand: [500],
        Inter: [400, 700],
        'Josefin+Sans': true,
        Lato: [100, 300],
        Raleway: {
          wght: [100, 400],
          ital: [100]
        },
      }
    }],
  ],
  // axios: {
  //   proxy: true
  // },
  // proxy: {
  //   '/user': {
  //     target: apiUrl,
  //     changeOrigin: true
  //   }
  // },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  app: {
    head: {
      title: 'Lux-Nuxt3',
      meta: [
        { name: 'description', content: description },
        {
          property: "og:url",
          content: url,
        },
        {
          property: "og:image:secure_url",
          content: image,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          property: "og:image",
          content: image,
        },
        //Twitter
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:url",
          content: url,
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: description,
        },
        {
          name: "twitter:image",
          content: image,
        },
      ],
    }
  }
})
