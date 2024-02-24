// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    extends: [process.env.NUXT_UI_PRO_PATH || '@nuxt/ui-pro'],
    modules: [
        '@nuxt/content',
        '@nuxt/image',
        '@nuxt/ui',
        '@nuxthq/studio',
        '@nuxtjs/fontaine',
        '@nuxtjs/google-fonts',
        '@vueuse/nuxt',
        'nuxt-og-image',
    ],
    content: {
        highlight: {
            langs: [
                'swift',
                'kotlin',
                'bash',
                'javascript',
                'php'
            ],
            theme: {
                // Default theme (same as single string)
                default: 'github-dark',
                // Theme used if `html.dark`
                dark: 'github-dark',
                // Theme used if `html.sepia`
                sepia: 'monokai'
            }
        }
    },
    hooks: {
        // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
        'components:extend': (components) => {
            const globals = components.filter((c) =>
                ['UButton'].includes(c.pascalName),
            )

            globals.forEach((c) => (c.global = true))
        },
    },
    ui: {
        icons: ['heroicons', 'simple-icons'],
    },
    // Fonts
    fontMetrics: {
        fonts: ['DM Sans'],
    },
    googleFonts: {
        display: 'swap',
        download: true,
        families: {
            'DM+Sans': [300, 400, 500, 600, 700],
        },
    },
    runtimeConfig: {
        public: {}
    },
    routeRules: {},
    devtools: {
        enabled: true,
    },
})
