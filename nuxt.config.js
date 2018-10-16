module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: '广州豪米网络',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    plugins: [{ src: '~plugins/element-ui' }, { src: '~plugins/lazyload' }],

    router: {
        base: "" //此为根目录，如果有具体目录需求按实际情况写
    },



    css: ['~assets/css/style.css', '~assets/css/media.css'],


    // loading: require('~components/loading.vue'),
    /*
     ** Customize the progress bar color
     */
    loading: '~/components/loading.vue',

    // loading: '~components/loading.vue',
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        //    publicPath: 'https://subdomain.mydomain.com/',
        vendor: ['axios', 'element-ui', 'vue-lazyload'],
        /*多个地方引用，防止多次打包*/
        extractCSS: { allChunks: true },

        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}