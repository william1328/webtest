<template>
  <div>
    <!--banner-->    
     
    <!--广告-->
<div class="banadd"><img :src="config.addpic"></div>
    <!-- news cat -->
    <div class="pnav nwnav" id="pnav">
  <div class="main">
    <p class="cpnav"> <span class="caret"></span> </p>
    <ul class="clearfix">
      
      <li v-for="value in catName" :key="value.post_title">
          <nuxt-link :to="{name:'news-list',params:{list:'list'+value.term_id,cid:value.term_id}}">{{value.name}}</nuxt-link> 
          <span class="line"></span></li>
       
    </ul>
  </div>
</div>
    <!-- 新闻列表 -->
      <!-- 新闻列表 -->
    <div class="main">
      <div class="newscontent">
              <h2>{{values.post_title}} </h2>
              <div class="time">{{values.post_date}}</div>
              <div class="cont">{{values.post_content|replaceHtml}}</div>
    </div>
    </div>
   
    <!--在线留言-->
    
      <Message></Message>
    </div>
</template>
<script>
import axios from "axios";

import Message from "~/components/Message.vue";
import global_ from "~/components/Global.vue";

export default {
  layout: "main",

  created() {
    console.log("creat ok");
    //调用新闻
    this.getinfo();
    /* var id = "id="+this.$route.params.id;
    axios
      .post("indexapi&api=newsid", 
       id
       
      )
      .then(response => {
          console.log(response);
        this.values = response.data;
        //  console.log(this.response);
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问");
      });
 */
    this.getCatname();
  },
  data() {
    return {
      config: global_.config,

      activeIndex: "1",
      activeIndex2: "1",
      values: [],
      title: "",
      catName: []
    };
  },
  methods: {
    getinfo() {
        let loading = this.$loading({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)',
      target: document.querySelector('.div1')
      })
      axios({
        url: this.config.apiurl + "indexapi&api=newsid",
        method: "post",
        data: "id=" + this.$route.params.id
      })
        .then(response => {
           loading.close();
          this.values = response.data;
          this.thumb = this.values.smeta.thumb;
        })
        .catch(error => {
          console.log(error);
          alert("网络错误，不能访问");
        });
    },

    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    getCatname() {
      axios({
        url: this.config.apiurl + "indexapi&api=newsnav",
        method: "get"
      })
        .then(response => {
          //        console.log(response)
          this.catName = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  head() {
    return {
      title:
        this.values.post_title +
        "-【豪米科技】专业开发三维网站,全景网站,VR网站,分销系统,商城系统,微信二次开发,品牌推广"
    };
  },
  filters: {
    formatDate(time) {
      var m = null;
      console.log("time" + time);
      var d = new Date(time);
      if ((m = d.getMonth()).toString().length < 2) {
        m = "0" + m;
      }
      return d.getFullYear() + "/" + m;
    },
    formatDateDay(time) {
      var d = new Date(time);
      return d.getDate();
    },
    replaceHtml(content) {
      if (content) {
        return content.replace(/<\/?.+?>/g, "");
      }
    }
  }
};
</script>

<style >
.page {
  clear: both;
  margin-top: 20px;
  text-align: center;
}

.el-row {
  margin-bottom: 0px;

  /*  & :last-child {
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