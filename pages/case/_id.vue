<template>
  <div>
    <!--banner-->
    

    <!--广告-->
     <add-box></add-box>

          <div class="banadd"><img :src="config.addpic"></div>
    <!-- 新闻列表 -->


    <div class="ndtxtsBox">
  <div class="ndtxt_L">
    <div class="con_pic"> <img v-lazy="config.upload + thumb"> </div>
    <div class="con_title"> 网站简介 </div>
    <div class="nd-txts">
      
      
      {{values.post_content}}
    </div>
    <div class="caselink flr"><a onclick="javascript:window.open('{{}}');" href="javascript:void(0);">[ 访问该网站 ]</a></div>
    <div class="nd-tools">
      <div class="news-padding">
        <dl class="newNav clearfix">
          <dd> <span class="m1"></span><span class="name">行业案例</span> <span class="nt"><a href="/case/"> MORE+</a></span> </dd>
        </dl>
        <div class="newsRlist">
          <ul class="clearfix">
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- 留言 -->
<Message></Message>  

   
    

  </div>
</template>
<script>
import axios from "axios";

import Message from "~/components/Message.vue";
import global_ from "~/components/Global.vue";

export default {
  layout: "main",

  /*   goBack() {
               this.$router.go(-1)
           }, */
  components: {
    Message
  },
  created() {
    console.log("creat caseid ok");
    //调用新闻内容
    this.getinfo();
    /* var id = "id=" + this.$route.params.id;
    axios
      .post("http://test.my/indexapi?api=caseid", id)
      .then(response => {
        this.values = response.data;
        this.thumb = this.values.smeta.thumb;
        // console.log(this.response);
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问");
      }); */
  },
  methods:{
    //新闻
    getinfo(){
       let loading = this.$loading({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)',
      target: document.querySelector('.div1')
      })
      axios({
        
        url: this.config.apiurl+"indexapi&api=caseid",
        method: "post",
        data:
          "id=" +  this.$route.params.id
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
  },
  data() {
    return {
      config: global_.config,
      activeIndex: "1",
      activeIndex2: "1",
      values: [],
      title: "",
      thumb: ""
    };
  },
   head(){
    return{
      title:this.values.post_title + "-【豪米科技】专业开发三维网站,全景网站,VR网站,分销系统,商城系统,微信二次开发,品牌推广"
    }
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

<style>
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
