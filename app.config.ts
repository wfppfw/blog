export default defineAppConfig({
    ui: {
        variables: {
            light: {
                background: '255 255 255',
                foreground: 'var(--color-gray-700)',
            },
            dark: {
                background: 'var(--color-gray-900)',
                foreground: 'var(--color-gray-200)',
            },
            header: {
                height: '4rem',
            },
        },
    },
    uiPro: {
        content: true,
    },
    title: 'Hello Nuxt',
    theme: {
        dark: true,
        colors: {
            primary: '#ff0000',
        },
    },
});
