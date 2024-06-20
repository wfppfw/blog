export default defineNuxtConfig({
    srcDir: 'src/',
    runtimeConfig: {
        // The private keys which are only available server-side

        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
            adminUserName: 'Moon',
            apiBase: '/api',
        },
    },
    app: {
        head: {
            link: [{ rel: 'icon', href: '/favicon1.ico' }],
        },
        baseURL: '/',
        buildAssetsDir: '/static/',
    },
    css: ['@/public/css/base.css'],
    extends: ['@nuxt/ui-pro'],

    modules: [
        '@pinia/nuxt',
        'nuxt-viewport',
        'nuxt-icon',
        '@nuxt/content',
        '@nuxt/ui',
        '@nuxt/fonts',
        '@nuxtjs/tailwindcss',
    ],
    content: {
        documentDriven: true,
    },
    viewport: {
        breakpoints: {
            desktop: 1024,
            desktopMedium: 1280,
            desktopWide: 1600,
            mobile: 320,
            mobileMedium: 375,
            mobileWide: 425,
            tablet: 768,
        },
        cookieName: 'viewport',
        defaultBreakpoints: {
            desktop: 'desktop',
            mobile: 'mobile',
            tablet: 'tablet',
        },
        fallbackBreakpoint: 'desktop',
    },
    router: {
        // base: './',
        // routes: [
        //     {
        //         path: '/:catchAll(.*)', // 使用:catchAll()来捕获任何路径
        //         component: '~/pages/about.vue', // 将这些路径映射到404页面
        //     },
        // ],
    },
});
