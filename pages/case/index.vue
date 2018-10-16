<template>
    
    <div>
          <div class="banadd"><img :src="config.addpic"></div>


<!-- case cat -->
    <div class="pnav nwnav" id="" style="overflow:visible;height:0">
  <div class="main">
    <p class="cpnav"> <span class="caret"></span> </p>
    <ul class="clearfix">
      
      <li v-for="value in catName" :key="value.post_title">
          <nuxt-link :to="{name:'case-list',params:{list:'list'+value.term_id,cid:value.term_id}}">{{value.name}}</nuxt-link> 
          <span class="line"></span></li>
       
    </ul>
  </div>
</div>

<!-- caselist -->
    <div class="caselist">
        <ul>
  <li v-for="value in values" :key="value.post_title" >
    <div class="ppw">
      <div class="img"> <nuxt-link :to="{name:'case-id',params:{id:value.object_id}}"><img v-lazy="config.upload+value.smeta.thumb" class="img-responsive" ></nuxt-link></div>
      <div class="con"><nuxt-link :to="{name:'case-id',params:{id:value.object_id}}">{{value.post_title}}</nuxt-link> </div>
    </div>
  </li>
  
  
</ul>



    </div>
<div class="clear"></div>
    <div class="page" style="margin:20px auto;clear:both;width:100%">
      <!--翻页-->
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="handlecurrentpage"
        :page-size= "pagesize"
                :total="total">
      </el-pagination>
    </div>

    </div>
</template>
<script>

import Vue from 'vue';
import global_ from "~/components/Global.vue";

import axios from "axios";
/* //添加请求拦截器
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
} */

 

export default {
  layout: "main",

  created() {
    console.log("cread");
    if (this.$route.params.cid) {
      this.cid = this.$route.params.cid;
    } else {
      this.cid = this.cid;
    }

    this.getInfo();
    this.getCatname();
  },

  data() {
    return {
      config: global_.config,
      activeIndex: "1",
      activeIndex2: "1",
      values: [],
      currentpage: 1,
      pagesize: 20,
      cid: 8,
      catName: [],
      total: 0
    };
  },
  methods: {
    getInfo(currentpage) {

     /*  let loading = this.$loading({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)',
      target: document.querySelector('.div1')
      })
 */
       axios({
        url: this.config.apiurl + "indexapi&api=caselist",
        method: "post",

        data:
          "cid=" +
          this.cid +
          "&pagesize=" +
          this.pagesize +
          "&currentpage=" +
          (currentpage ? currentpage : this.currentpage),
         
 
       })
        .then(response => {
          /*  loading.close(); */
          console.log(response);
          console.log("total:" + response.data.total);
          this.total = response.data.total;
          this.values = response.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getCatname() {
      axios({
        url: this.config.apiurl + "indexapi&api=casenav",
        method: "get",
        interceptors: console.log("loading")
      })
        .then(response => {
          //        console.log(response)
          this.catName = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    handlecurrentpage(currentpage) {
      //  this.currentPage = currentpage;
      setTimeout(() => {
        this.getInfo(currentpage);
      }, 500);
    }
  },
  head() {
    return {
      title:
        
        "行业案例-【豪米科技】专业开发三维网站,全景网站,VR网站,分销系统,商城系统,微信二次开发,品牌推广"
    };
  },
  filters: {
    thumb(img) {
      if (img) {
        /*  var thumb = img.replace('"thumb"', "thumb");
        thumb = thumb.replace('"template"', "template");
        thumb = thumb.replace("http://test.my/data/upload/", "");
 */
        //     console.log(thumb.thumb)
      }
    }
  },

  destory: function() {
    this.created();
  }
};
</script>

<style>
.page {
  clear: both;
  margin-top: 20px;
  text-align: center;
}

.el-row {
  margin-bottom: 0px;

  /* & :last-child {
    margin-bottom: 0;
  } */
}
.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
