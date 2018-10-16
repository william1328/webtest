<template>
  <div>
    <!--banner-->

     

     
    <!--广告-->
    <div class="index-flash">
       <el-carousel :interval="5000" arrow="always" :height="flashHeight">
        <el-carousel-item v-for="value in item" :key="value.index">
      
         
         <div v-if="!value.isvideo" >
            <div class="font" :style="{height:flashHeight}">
                <dd>灵感来自于生活</dd>
            <dt>创新是我们一向的追求</dt>
            </div>
          
         
             <img   :src="value.img">
          

           </div>
 
          <video v-if="value.isvideo" controls autoplay="autoplay">
                    <source :src="value.video" type="video/mp4">
             </video>

        </el-carousel-item>
      </el-carousel>
    </div>
    <!--商城分销系统-->
    <div class="fx" ref="fx0">
      <div class="idx_title"><nuxt-link :to="{name:'shopservice'}">
        <div class="ch transy dly_1 tranShow"> 分销系统 —— 品牌+渠道平台 <span class="idx_line idx_line_1"></span><span
          class="idx_line idx_line_2"> </span><span class="idx_line idx_line_3"></span><span
          class="idx_line idx_line_4"> </span><span class="idx_line idx_line_5"></span><span
          class="idx_line idx_line_6"> </span></div>
      </nuxt-link>
        <div class="top-txt transy tranShow">
          <h4>Mall distribution system</h4>
        </div>
      </div>
      <el-row>
        <el-col :span="6" :xs="{span: 24, offset: 0}" >
          <div class="services_list fuwu-01 yundong">
            <div class="fuwu-main">
              <div class="fuwu-img"><img src="~static/images/fx01.png" alt="高端定制网站建设"></div>
              <h5>品牌形象</h5>
              <p>分销系统有利于企业在行业中提高品牌形象，增加品牌口啤的形成。 

              </p>
            </div>
            <div class="topBox"></div>
          </div>
        </el-col>
        <el-col :span="6" :xs="{span: 24, offset: 0}" >
          <div class="services_list fuwu-02 yundong">
            <div class="fuwu-main">
              <div class="fuwu-img"><img src="~static/images/fx02.png" alt="微信小程序开发"></div>
              <h5> 增加曝光率 </h5>
              <p>利用豪米分销商城形成的巨大营销网络覆盖到每一个潜在客户。</p>
            </div>
            <div class="topBox"></div>
          </div>
        </el-col>
        <el-col :span="6" :xs="{span: 24, offset: 0}" >
          <div class="services_list fuwu-03 yundong">
            <div class="fuwu-main">
              <div class="fuwu-img"><img src="~static/images/fx03.png" alt="HTML5响应式网站开发"></div>
              <h5> 解决销售难题 </h5>
              <p>独立商铺，针对地区客户展示不同的价格，个性的活动主题。</p>
            </div>
            <div class="topBox"></div>
          </div>
        </el-col>
        <el-col :span="6" :xs="{span: 24, offset: 0}" >

          <div class="services_list fuwu-04 yundong">
            <div class="fuwu-main">
              <div class="fuwu-img"><img src="~static/images/fx04.png" alt="移动端手机网站与APP"></div>
              <h5> 吸引经销商加盟 </h5>
              <p>招募分销商难？借助线上线下优势，吸引更多认知与加盟</p>
            </div>
            <div class="topBox"></div>
          </div>
        </el-col>
      </el-row>
    </div>


    <!-- 微信小程序 -->
    <div class="weixin up-stransition">
      <div class="idx_title"><nuxt-link :to="{name:'wechat'}">
        <div class="ch transy dly_1 tranShow"> 微信二次开发 <span class="idx_line idx_line_1"></span><span
          class="idx_line idx_line_2"> </span><span class="idx_line idx_line_3"></span><span
          class="idx_line idx_line_4"> </span><span class="idx_line idx_line_5"></span><span
          class="idx_line idx_line_6"> </span></div>
      </nuxt-link>
        <div class="top-txt transy tranShow">
          <h4> Wechat development</h4>
        </div>
        <!--16-->
        <div class="idx_pros clearfix transy dly_3 tranShow"><a class="idxp1   idxp11 ">
          <div class="cover"></div>
          <div class="pic"></div>
          <div class="ico"></div>
          <div class="txts">
            <p class="ch1"> 微官网 </p>
            <p class="en"> wechat website </p>
          </div>
          <div class="arrow"></div>
        </a><a class="idxp2  idxp21 ">
          <div class="cover"></div>
          <div class="pic" style="background-color: #e1930a;"></div>
          <div class="ico"></div>
          <div class="txts">
            <p class="ch1"> 无人互动解答 </p>
            <p class="en"> content </p>
          </div>
          <div class="arrow"></div>
        </a><a class="idxp1  idxp12 ">
          <div class="cover"></div>
          <div class="pic"></div>
          <div class="ico"></div>
          <div class="txts">
            <p class="ch1"> 网络小游戏 </p>
            <p class="en"> game </p>
          </div>
          <div class="arrow"></div>
        </a><a class="idxp2  idxp22 ">
          <div class="cover"></div>
          <div class="pic" style="background-color: #00ae66;"></div>
          <div class="ico"></div>
          <div class="txts">
            <p class="ch1"> 刮刮卡/大转盘 </p>
            <p class="en"> luck draw </p>
          </div>
          <div class="arrow"></div>
        </a><a class="idxp1  idxp13 ">
          <div class="cover"></div>
          <div class="pic"></div>
          <div class="ico"></div>
          <div class="txts">
            <p class="ch1"> 优惠券 </p>
            <p class="en"> coupon </p>
          </div>
          <div class="arrow"></div>
        </a><a class="idxp2  idxp23 ">
          <div class="cover"></div>
          <div class="pic" style="background-color: #19a9e5;"></div>
          <div class="ico"></div>
          <div class="txts">
            <p class="ch1"> H5动画/h5场景 </p>
            <p class="en"> Animation </p>
          </div>
          <div class="arrow"></div>
        </a></div>
      </div>
    </div>


    <!-- 行业案例 -->
    <div class="index-case up-stransition">
            <div class="idx_title"><nuxt-link :to="{name:'case'}">
        <div class="ch transy dly_1 tranShow"> 行业案例分享 <span class="idx_line idx_line_1"></span><span
          class="idx_line idx_line_2"> </span><span class="idx_line idx_line_3"></span><span
          class="idx_line idx_line_4"> </span><span class="idx_line idx_line_5"></span><span
          class="idx_line idx_line_6"> </span></div>
      </nuxt-link>
        <div class="top-txt transy tranShow">
          <h4>Industry case sharing</h4>
        </div>
      </div>

       <el-row    class="row-bg">
        <el-col :span="6" v-for="(value,index) in values" :key="index" :id="`case-piclist-${index}`" class="mobile" >
           <div class="grid-content bg-purple"><nuxt-link :to="{name:'case-id',params:{id:value.object_id}}">
            <div class="case_pic" ref="casepic"><img v-lazy="config.upload+value.smeta.thumb" class="img-responsive"
                                  alt="" > <span class="bodr"></span></div>
            <div class="title">
              <p class="ch"> {{value.post_title}} </p>
              <span class="line line_1"></span>
              <span class="line line_2"></span>
              </div>
          </nuxt-link></div>
        </el-col>
        
      </el-row>
     
      <el-row>

  <el-col :span="24">
        <div class="index-case-service">
            <p class="title">我们一直以客户为先，为您<span>定制策划方案</span>、<span>设计开发</span>到<span>技术支持</span>亮相落地的全面服务</p>
            <p class="title-dep">豪米科技拥有先进的互联网技术，多年来为客户提供“顾问式设计”为理念，专注服务于注重品质的优质客户；我们以提升客户品牌价值为己任，深度挖掘客户潜在需求，做企业的品牌形象管家。 信诺盛世业务涵盖：高端网站设计、移动应用开发、微信开发支持、互联网品牌合作等。我们为中小型企业拥有自己的品牌文化、视觉形象而努力！</p>
            <p class="button">
              <el-button type="success">咨询客服</el-button>
  <el-button type="info">了解更多</el-button>
            </p>
  </div>
              
  </el-col>
  </el-row>
  
       </div>


    <!-- 新闻资讯  -->

<div class="index-news up-stransition">
  
      <div class="title" >
            <h1>
            Internet+ <br />
              &nbsp;&nbsp; News And story
            </h1>
          </div>
   <div class="index-tabs">
                  <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="top">
    <el-tab-pane label="行业新闻" name="first">
                <div class="index-news-box">
        	             <div class="index-news-cont">
                                           <dl class="wow fadeInUp animated" style="" v-for="value in news[0]" :key="value.post_title">
                	<nuxt-link :to="{name:'news-id',params:{id:value.tid,cid:value.term_id}}">
                        <dt>
                            <b>{{value.post_date|formatDateDay}}</b>
                            <span>{{value.post_date|formatDate}}</span>
                        </dt>
                        <dd>
                            <h1>{{value.post_title}}</h1>
                            <p>
                              {{value.post_content|replaceHtml}}
                            </p>
                        </dd>
                    </nuxt-link>
                </dl>
				               	            </div>
         </div>                   
    </el-tab-pane>
    <el-tab-pane label="营销策划" name="second">
       <div class="index-news-box">
        	             <div class="index-news-cont">
                                           <dl class="wow fadeInUp animated" style="" v-for="value in news[1]" :key="value.post_title">
                	<a href="/web/3562.html">
                        <dt>
                            <b>{{value.post_date|formatDateDay}}</b>
                            <span>{{value.post_date|formatDate}}</span>
                        </dt>
                        <dd>
                            <h1>{{value.post_title}}</h1>
                            <p>
                              {{value.post_content|replaceHtml}}
                            </p>
                        </dd>
                    </a>
                </dl>
				               	            </div>
         </div>         
               


    </el-tab-pane>
    <el-tab-pane label="创业故事" name="third">
       <div class="index-news-box">
        	             <div class="index-news-cont">
                                           <dl class="wow fadeInUp animated" style="" v-for="value in news[2]" :key="value.post_title">
                	<a href="/web/3562.html">
                        <dt>
                            <b>{{value.post_date|formatDateDay}}</b>
                            <span>{{value.post_date|formatDate}}</span>
                        </dt>
                        <dd>
                            <h1>{{value.post_title}}</h1>
                            <p>
                              {{value.post_content|replaceHtml}}
                            </p>
                        </dd>
                    </a>
                </dl>
				               	            </div>
         </div>         
    </el-tab-pane>
    <el-tab-pane label="电商教程" name="fourth"> <div class="index-news-box">
        	             <div class="index-news-cont">
                                           <dl class="wow fadeInUp animated" style="" v-for="value in news[3]" :key="value.post_title">
                	<a href="/news/154">
                        <dt>
                            <b>{{value.post_date|formatDateDay}}</b>
                            <span>{{value.post_date|formatDate}}</span>
                        </dt>
                        <dd>
                            <h1>{{value.post_title}}</h1>
                            <p>
                              {{value.post_content|replaceHtml}}
                            </p>
                        </dd>
                    </a>
                </dl>
				               	            </div>
         </div>         </el-tab-pane>
  </el-tabs>
   </div>
 </div>
    
  </div>

</template>
 <script>
//const url = "http://test.my/data/upload/";
import global_ from "~/components/Global.vue";

import axios from "axios";
export default {
  layout: "imain",
  data() {
    return {
      config: global_.config,

      item: [
        {
          img: global_.config.cdn + "flash/iflash01.jpg",
          txt: global_.config.cdn + "flash/indexpictxt1.png",
          isvideo: false
        },
        {
          video: global_.config.cdn + "flash/design.mp4",
          txt: global_.config.cdn + "flash/indexpictxt2.png",
          isvideo: true
        }
      ],
      activeIndex: "1",
      activeIndex2: "1",
      activeName: "first",
      news: [],
      values: [],
      currentpage: 1,
      pagesize: 12,
      cid: 8,
      catName: [],
      total: 0,
      casepicStyle: [500, 600, 700, 800, 900, 1000],
      flashHeight: "",
      flasfontHeight:"",
      isvideo: true
    };
  },

  created() {
    // console.log("creat ok"+this.$route.url);

    this.getInfo();
    this.getnews();
  },
  destroyed() {
    document.removeEventListener("scroll", this.handleScroll);
  },

  mounted() {
    this.getFlash();
    //   console.log('elem'+document.getElementById("index-flash").style.height)
    document.addEventListener("scroll", this.handleScroll);
    //   console.log("ok");
  },

  methods: {
    //flash

    getFlash() {
      //广告高度
      var bodyW = document.documentElement.clientWidth;
      var bodyH = document.documentElement.clientHeight;
      //  console.log("bodyH" + bodyH);
      if (bodyW > 641) {
        this.flashHeight = bodyH + "px";
        this.flashFotHeight = bodyH/2 +"px";
      }
    },

    //获取案例
    getInfo() {
      axios({
        // url: this.config.apiurl + "indexapi?api=caselist",
        url: this.config.apiurl + "indexapi&api=caselist",
        method: "post",
        data:
          "cid=" + this.cid + "&pagesize=" + this.pagesize + "&currentpage=1"
      })
        .then(response => {
          /* console.log(response);
          console.log("total:" + response.data.total); */
          this.total = response.data.total;
          this.values = response.data.data;
        })
        .catch(error => {
          //      console.log(error);
        });
    },


 //获取新闻
    getnews() {
      axios({
        // url: this.config.apiurl + "indexapi?api=caselist",
        url: this.config.apiurl + "indexapi&api=inews",
        method: "get",
         
      })
        .then(response => {
        
          this.news = response.data;
        })
        .catch(error => {
                console.log(error);
        });
    },



    handleClick(tab, event) {
      //   console.log("indextest" + tab, event);
    },
    handleScroll() {
      // console.log("ok2222");
      /* var picbox = document.getElementById("case-piclist-0");
      console.log('picbox' + picbox.offsetHeight) */

      var scrollH =
        document.body.scrollTop || document.documentElement.scrollTop;
      //新闻
      var theBox = document.getElementsByClassName("index-news up-stransition");
      // console.log(theBox)
      var windowH = window.innerHeight;
      //微信
      var theWxH = document.getElementsByClassName("weixin up-stransition");
      //案例
      var theCase = document.getElementsByClassName(
        "index-case up-stransition"
      );
      //导航
      var NavH = document.getElementsByClassName("header pheader clearfix");

      if (scrollH > windowH * 0.8) {
        NavH[0].style.opacity = "1";
      } else {
        NavH[0].style.opacity = "0.5";
      }

      if (theWxH[0].offsetTop - scrollH < windowH * 0.7) {
        theWxH[0].className = "weixin up-stransition up-stransition-show";
      }

      if (theBox[0].offsetTop - scrollH < windowH * 0.7) {
        //   document.getElementById('demo').innerHTML = theBoxH - scrollH;
        theBox[0].className = "index-news up-stransition up-stransition-show";
      }

      if (theCase[0].offsetTop - scrollH < windowH * 0.7) {
        theCase[0].className = "index-case up-stransition up-stransition-show";
        //图片逐个展示
        /*  var picbox = [];
        for (var i = 0; i < this.pagesize; i++) {
          picbox[i] = document.getElementById("case-piclist-" + i + "");
          picbox[i].className =
            "el-col el-col-6 up-stransition up-stransition-show";
        } */
      }
    }
  },
  filters: {
    formatDate(time) {
       return   time.split('-')[0]+'/'+time.split('-')[1];
    },
    formatDateDay(time) {
     // var d = time.toString().replace(/-/g, "/");
     // d = new Date(time);
      //return d.getDate().toString();
    //  return time;
     return   time.split('-')[2].substring(0,2);
       //  return a[2];
    },
    replaceHtml(content) {
      if (content) {
        return content.replace(/<\/?.+?>/g, "");
      }
    }
  },
  head() {
    return {
      title: "广州网站建设,广州商城网站制作,广州网站建设公司",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "广州网站建设公司豪米网络拥有一支多年网站设计经验的优秀团队，为企业网站建设打造最优质的官方形象网站，广州商城网站制作，咨询电话：020-31079202"
        }
      ]
    };
  }
};
</script>
 

 <style>
 .el-tabs__nav {
  float: right;
  padding-right: 1em;
}
 

.el-carousel__indicators {
  bottom: 10%;
}
@media screen and (max-width: 641px) {
  .el-carousel__container {
    height: 200px;
  }
  .el-tabs__item {
    width: 25%;
  }
}

.el-tabs__item {
  font-weight: bold;
}
.el_row {
  margin-left: 0;
  margin-right: 0;
}
</style>
 

<style scoped>
/* 修改elementui组件样式 */



.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

/* 案例 */

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #f6f6f6;
}

.bg-purple-light {
  background: #f6f6f6;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 30px;
  background-color: #f6f6f6;
}
.pic img {
  width: 100%;
}
.title {
  text-align: center;
}
</style>
