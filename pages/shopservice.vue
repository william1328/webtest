<template>
<div>
  
   <!--广告-->
    <addBox></addBox>
    
<div class="main">
  <div class="pageBox">
       <div class="title">
        <p class="title1 tcolor1">一个能帮助企业解决经销商线上线下营销难题的分销平台 </p>
        <p class="title2 tcolor2">You Have Bidding Problems, We Can Get</p>
        <div class="titleline tlinecolor1"></div>
      </div>
      <ul class="lifeList clearfix">
        <li><a href="#">
          <div class="img"> <img src="~static/image/goshop1.jpg"> </div>
          <div class="con"> 品牌形象 </div>
          <div class="con1"> 豪米分销系统有利于企业在行业中提高品牌形象，增加品牌口啤的形成。 </div>
          </a></li>
        <li><a href="#">
          <div class="img"> <img src="~static/image/brandimg2.jpg"> </div>
          <div class="con"> 增加曝光率 </div>
          <div class="con1"> 利用豪米分销商城形成的巨大营销网络覆盖到每一个潜在客户。</div>
          </a></li>
        <li><a href="#">
          <div class="img"> <img src="~static/image/brandimg3.jpg"> </div>
          <div class="con"> 解决销售难题</div>
          <div class="con1"> 独立商铺，针对地区客户展示不同的价格，个性的活动主题。 </div>
          </a></li>
      </ul>
      <ul class="lifeList clearfix">
        <li><a href="#">
          <div class="img"> <img src="~static/image/brandimg1.jpg"> </div>
          <div class="con"> 吸引经销商加盟 </div>
          <div class="con1"> 借助线上线下优势，吸引更多认知与加盟</div>
          </a></li>
        <li><a href="#">
          <div class="img"> <img src="~static/image/goshop5.jpg"> </div>
          <div class="con"> 易于推广 </div>
          <div class="con1"> 二级独立域名，容易获得更好的搜索引擎排名。</div>
          </a></li>
        <li><a href="#">
          <div class="img"> <img src="~static/image/goshop6.jpg"> </div>
          <div class="con"> 简单易用</div>
          <div class="con1"> 独立后台，一键同步更新商品信息 </div>
          </a></li>
      </ul>
<div class="clear"></div>
    <div id="floor2" class="cle mainfloor" style="background:none"> <a href="" target="_blank" class="bluebtn">了解提升效果方法</a> </div>
    </div>
 </div>
 
<div class="main">
  <div class="title">
    <p class="title1 tcolor1">与经销商一起成长</p>
    <p class="title2 tcolor2">经销商结合区域特点，展示适合当地消费者水平的营销活动</p>
    <p class="title3 tcolor3">You Have Bidding Problems, We Can Get</p>
  </div>
  <div><img src="~static/image/goshop7.jpg" alt=""></div>
  <div class="clear" style="height:20px;"></div>
  <div align="center"><img src="~static/image/goshop8.jpg" alt=""></div>
  <div class="clear"></div>
  <div class="title">
    <p class="title1 tcolor1">一键更新 同步更新产品库</p>
    <p class="title2 tcolor2">操作简单 价格打折、首页推荐、促销勾选</p>
    <p class="title3 tcolor3">You Have Bidding Problems, We Can Get</p>
  </div>
  <div>
    <div align="center"><img src="~static/image/goshop9.jpg" alt=""><br>
    </div>
    <div align="center"><img src="~static/image/goshop10.jpg" alt=""></div>
  </div>
   
</div>

 <!-- 留言 -->
        <Message></Message>
</div>
</template>
<script>
import Message from "~/components/Message.vue";
import addBox from "~/layouts/addBox.vue";

export default {
  layout: "main",
  components: {
    Message,addBox
  },
  head(){
    return{
      title:"分销系统-【豪米科技】专业开发三维网站,全景网站,VR网站,分销系统,商城系统,微信二次开发,品牌推广"
    }
  },
};
</script>
