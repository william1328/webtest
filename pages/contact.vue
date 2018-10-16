<template>
    <div>

<iframe src="http://www.web-020.com/export/map.php"  frameborder="0" scrolling="no"></iframe>

<!-- 联系方式 --> 
 <div class="ctapanel"> <div class="sec_title"> <div class="ch transy dly_1 tranShow">
                    联系我们
                </div> <div class="sec-Ttxt transy tranShow"> <h4>
                        Contact us</h4> <p> <span>——————</span> 您可以通过拨打下方电话或者发送邮件的方式与我们取得联系 <span>——————</span> </p> </div> </div> <ul class="ctas ppw clearfix"> <li class="cta1"> <div class="icob"> <span class="ico"></span> </div> <p class="en">
                        ADDRESS
                    </p> <p class="ch">
                         番禺大道上城国际三栋925房
                    </p> </li> <li class="cta2"> <div class="icob"> <span class="ico"></span> </div> <p class="en">
                        tel
                    </p> <p class="ch">020-31079202</p> </li> <li class="cta3"> <div class="icob"> <span class="ico"></span> </div> <p class="en">
                        PHONE
                    </p> <p class="ch">19806412355</p> </li> <li class="cta4"> <div class="icob"> <span class="ico"></span> </div> <p class="en">
                        emall
                    </p> <p class="ch"> <a href="mailto:service@web-020.com">service@web-020.com</a> </p> </li> </ul>

 
          </div>
 <!-- 留言 -->
           <message></message>
 
 
     </div>
</template>
<script>
import Message from "~/components/Message.vue";
 
export default {
  asyncData() {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({ name: 'world' })
      }, 100)
    })
  },
  layout: "main",
  components: {
    Message
  },
  watch: {
    $route(to, from) {
      console.log("com", to.path);
    }
  },
  head(){
    return{
      title:"联系我们-【豪米科技】专业开发三维网站,全景网站,VR网站,分销系统,商城系统,微信二次开发,品牌推广"
    }
  },
};
</script>
<style scoped>
iframe {
  margin: 0 auto;
  width: 100%;
  height: 400px;
  padding: 0;
  border: 0;
}
</style>


