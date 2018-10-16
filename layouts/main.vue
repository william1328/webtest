<template>
  <div>
    <!--banner-->
    
    <menu-nav></menu-nav>
<nuxt />
     
    <!-- footer -->
    <div class="footer">
      <el-row>
        <el-col :span="7" :xs="{span: 24, offset: 0}" :offset="1" >
          <p class="fo_ab"><span>ABOUT US</span><br>
            豪米科技奉行“低成本打造品牌”的宗旨，专注于品牌推广、一站式营销系统开发等领域，为解决企业营销难题而生，为企业量身订制互联网品牌解决方案。<br>
            <br>
          </p>
        </el-col>
        <el-col :span="7" :xs="{span: 24, offset: 0}" :offset="1" >
          <span>CONTACT US</span><br>
          <p><strong>地址： </strong> 广州市番禺大道上城国际三栋925房</p>
          <p><strong>服务热线： </strong>020-31079202 </p>
          <p><strong>咨询电话：</strong>19806412355/15918107520</p>
          <p><strong>邮箱：</strong><a href="mailto:service@web-020.com">service@web-020.com </a></p>
        </el-col>
        <el-col :span="7" :xs="{span: 24, offset: 0}" :offset="1" >
          <p> © Copyright 2015-2018 All Right Reserved </p>

        </el-col>

      </el-row>
      <el-row>
        <el-col :span="24">
          <ul class="fo-nav clearfix">
            <li><nuxt-link :to="{name:'shopservice'}">商城分销 </nuxt-link><strong>|</strong></li>
            <li><nuxt-link :to="{name:'shopservice'}">三维动态 </nuxt-link><strong>|</strong></li>
            <li><nuxt-link :to="{name:'shopservice'}">关于豪米 </nuxt-link><strong>|</strong></li>
            <li><nuxt-link :to="{name:'shopservice'}">新闻动态 </nuxt-link><strong>|</strong></li>
            <li><nuxt-link :to="{name:'shopservice'}">联系我们 </nuxt-link></li>
          </ul>
        </el-col>
      </el-row>


    </div>

  </div>
</template>
 <script>
 
import MenuNav from "~/components/MenuNav.vue";
 export default {
    components: {
    MenuNav
  },
  data(){
    return{
     }
  }
 }
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
