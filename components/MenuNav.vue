<template>
    <div>
   <div class="header pheader clearfix">
  <div class="tool"> </div>
  <div class="nav">
    <li class="act"><nuxt-link :to="{name:'index'}"><span class="tx tx_1">首页</span> <span
            class="tx tx_2">首页{{ROOT_PATH}}</span> </nuxt-link></li>
    <li><nuxt-link :to="{name:'shopservice'}"><span class="tx tx_1">分销系统</span> <span class="tx tx_2"> 分销系统</span> </nuxt-link></li>
    <li><nuxt-link :to="{name:'wechat'}"><span class="tx tx_1">微信开发</span> <span class="tx tx_2"> 微信开发</span> </nuxt-link></li>
    <li><nuxt-link :to="{name:'h5'}"><span class="tx tx_1">三维H5</span> <span class="tx tx_2"> 三维H5</span> </nuxt-link></li>
    <li><nuxt-link :to="{name:'brand'}"><span class="tx tx_1">品牌推广</span> <span class="tx tx_2"> 品牌推广</span> </nuxt-link></li>
    <li><nuxt-link :to="{name:'news'}"><span class="tx tx_1">新闻动态</span> <span class="tx tx_2"> 新闻动态</span> </nuxt-link></li>
    <li><nuxt-link :to="{name:'case'}"><span class="tx tx_1">行业案例</span> <span class="tx tx_2"> 行业案例</span> </nuxt-link></li>
    <li><nuxt-link :to="{name:'contact'}"><span class="tx tx_1">联系我们</span> <span class="tx tx_2"> 联系我们</span> </nuxt-link></li>
  </div>
  <a class="logo" href="/"> <img src="~static/image/logo.png"  alt=""/></a> </div>
<div class="menu-handler" id="menu-handler" @click="menuHandler"> <span class="burger burger-1 trans"></span><span class="burger burger-2 trans-fast"> </span><span class="burger burger-3 trans"></span> </div>
<div class="menuBox" :style="menuStyle"> <a class="mlogo" href="/"> <img src="~static/image/logo.png"/> </a>
  <dl class="navMobile" id="navMobile">
    <dd class="dlin1">
      <p> <nuxt-link :to="{name:'index'}"><span class="line_1"></span><span class="line_2"></span> 首页 </nuxt-link> </p>
    </dd>
    <dd class="dlin2">
      <p> <nuxt-link :to="{name:'shopservice'}"><span class="line_1"></span><span class="line_2"></span> 分销系统 </nuxt-link> </p>
    </dd>
    <dd class="dlin3">
      <p> <nuxt-link :to="{name:'wechat'}"><span class="line_1"></span><span class="line_2"> </span>微信开发 </nuxt-link> </p>
    </dd>
    <dd class="dlin4">
      <p> <nuxt-link :to="{name:'h5'}"><span class="line_1"></span><span class="line_2"></span> 三维H5 </nuxt-link> </p>
    </dd>
    <dd class="dlin5">
      <p> <nuxt-link :to="{name:'brand'}"><span class="line_1"></span><span class="line_2"> </span> 品牌推广 </nuxt-link> </p>
    </dd>
    <dd class="dlin6">
      <p> <nuxt-link :to="{name:'news'}"><span class="line_1"></span><span class="line_2"></span> 新闻动态  </nuxt-link> </p>
    </dd>
    <dd class="dlin7">
      <p> <nuxt-link :to="{name:'case'}"><span class="line_1"></span><span class="line_2"></span> 行业案例 </nuxt-link> </p>
    </dd>
    <dd class="dlin8">
      <p> <nuxt-link :to="{name:'contact'}"><span class="line_1"></span><span class="line_2"></span> 联系我们 </nuxt-link> </p>
    </dd>
  </dl>
  <div class="tool clearfix"> </div>
  <br />
  <br />
</div>
    </div>
 </template>
<script>
export default {
   
  data() {
    return {
      menuStyle: "",
      showMenu: "false",
     };
  },
  methods: {
    menuHandler() {
     // console.log('menuhandler'+this.$route.path)
       if (this.showMenu) {
        this.menuStyle = {top:'0%',display:'block'};
        this.showMenu=false;
      } else {
        this.menuStyle = "top:-100%";
        this.showMenu=true;
      }
      }
     
  },
  watch:{
     $route(to,from){
        this.menuStyle = "top:-100%";
        this.showMenu=true;
      console.log('menu',to.path);
  }
  }

};
</script>
<style scoped>

</style>
