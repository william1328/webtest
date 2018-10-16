import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
    loading: require('~/static/image/loading.svg'),
    error: require('~/static/image/icon24.png')
})