// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    'motion-v/nuxt',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
  ],
  css: ['~/assets/css/main.css'],
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700] // Sesuaikan dengan kebutuhan
    },
    display: 'swap',
    preconnect: true
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',

  },
  colorMode:{
    preference: 'dark', 
    fallback: 'dark', 
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage', 
    storageKey: 'nuxt-color-mode'
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'id', iso: 'id-ID', name: 'Bahasa Indonesia', file: 'id.json' },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
  },
})