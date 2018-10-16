import axios from "axios";
//添加请求拦截器
axios.interceptors.request.use(
    config => {
        //在发送请求之前做某事，比如说 设置loading动画显示
        showFullScreenLoading();
        return config;
    },
    error => {
        //请求错误时做些事
        return Promise.reject(error);
    }
);

//添加响应拦截器
axios.interceptors.response.use(
    response => {
        //对响应数据做些事，比如说把loading动画关掉
        tryHideFullScreenLoading();
        return response;
    },
    error => {
        //请求错误时做些事
        return Promise.reject(error);
    }
);

let loading;

function startLoading() {
    loading = Vue.prototype.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.1)',
        target: document.querySelector('.div1')
    });
}

function endLoading() {
    loading.close();
}

//声明一个对象用于存储请求个数
let needLoadingRequestCount = 0;

function showFullScreenLoading() {
    if (needLoadingRequestCount === 0) {
        startLoading();
    }
    needLoadingRequestCount++;
}

function tryHideFullScreenLoading() {
    if (needLoadingRequestCount <= 0) return;
    needLoadingRequestCount--;
    if (needLoadingRequestCount === 0) {
        endLoading();
    }
}