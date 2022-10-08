// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '@/node_modules/normalize-scss/sass/_normalize.scss',
        '@/assets/scss/style.scss'
    ],
    target: 'static',
    router: {
        base: '/app/'
    }
})
