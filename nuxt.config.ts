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
    modules: ['@pinia/nuxt', 'nuxt-viewport', 'nuxt-icon'],
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
    router: { base: './' },
});
