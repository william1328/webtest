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
    <div class="main">
       <div class="newList">
      <ul>
        <li v-for="value in values" :key="value.post_title">
          <div class="clearfix">
            <div class="time"><span class="day"> {{value.post_date|formatDateDay}} </span> <span class="month"> {{value.post_date|formatDateMonth}}</span> <span
              class="year"> {{value.post_date|formatDate}}</span></div>
            <div class="img"><img v-lazy="config.upload+value.smeta.thumb" class="img-responsive" alt=""></div>
            <div class="con">
              <div class="t"><nuxt-link :to="{name:'news-id',params:{id:value.object_id}}">{{value.post_title}}</nuxt-link></div>
              <div class="c"> {{value.post_content|replaceHtml}}</div>
              <span class="more3">	<nuxt-link :to="{name:'news-id',params:{id:value.object_id}}">MORE&gt;&gt;</nuxt-link></span></div>
          </div>
        </li>         
      </ul>
    </div>
   </div> 
   <div class="clear">

    </div>
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
    <!--在线留言-->
    
      <Message></Message>
    </div>
</template>
<script>
import axios from "axios";

import Message from "~/components/Message.vue";
import global_ from "~/components/Global.vue";

export default {
  scrollToTop: true,

  layout: "main",
  head() {
    return {
      title:
        "行业新闻 - 【豪米科技】专业开发三维网站,全景网站,VR网站,分销系统,商城系统,微信二次开发,品牌推广"
    };
  },
  created() {
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
      pagesize: 6,
      cid: 1,
      catName: [],
      total: 0
    };
  },
  methods: {
    // postData = "count=6" + "&page=2",
    getInfo(currentpage) {
     /*    let loading = this.$loading({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)',
      target: document.querySelector('.div1')
      }) */
      axios({
        url: this.config.apiurl + "indexapi&api=newsindex",
        method: "post",
        data:
          "cid=" +
          this.cid +
          "&pagesize=" +
          this.pagesize +
          "&currentpage=" +
          (currentpage ? currentpage : this.currentpage)
      })
        .then(response => {
       //     loading.close();
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
  /*   scrollToTop:false,
 */ filters: {
     /* thumb(img) {
     if (img) {
        var thumb = img.replace('"thumb"', "thumb");
        thumb = thumb.replace('"template"', "template");
        thumb = thumb.replace("http://test.my/data/upload/", "");

        //     console.log(thumb.thumb)
      }
    }, */

     replaceHtml(content) {
      if (content) {
        return content.substr(0,300);
      }
    },
    formatDate(time) {
      var m = null;
      //  console.log("time" + time);
      var d = new Date(time);
      /*  if ((m = d.getMonth()).toString().length < 2) {
        m = "0" + m;
      } */
      return time.split('-')[0]
    },
    formatDateDay(time) {
     // var d = new Date(time);
    //  return d.getDate();
     return time.split('-')[2].substring(0,2)
    },
    formatDateMonth(time) {
      //var d = new Date(time);
      var m = time.split('-')[1];
       m = Number(m)
      switch (m) {
        case 1:
          return "Jan";
          break;
        case 2:
          return "Feb";
          break;
        case 3:
          return "Mar";
          break;
        case 4:
          return "Apr";
          break;
        case 5:
          return "May";
          break;
        case 6:
          return "Jun";
          break;
        case 7:
          return "July";
          break;
        case 8:
          return "Aug";
          break;
        case 9:
          return "Sep";
          break;
        case 10:
          return "Oct";
          break;
        case 11:
          return "Nor";
          break;
        case 12:
          return "Dec";
          break;
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
.el-pagination {
  white-space: normal;
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
