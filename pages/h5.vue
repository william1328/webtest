<template>
    <div>
   <!-- 广告 -->
 <add-box></add-box>
            <!-- 三维展厅 -->
             <div class="main">
                <div class="sec_title">
                  <div class="sec-Ttxt transy tranShow">
                        <h4>三维展厅</h4>
                        <p>
                            <span>——————</span> 全方位展示 360天网上展厅 <span>——————</span>                        </p>
                  </div>
              </div>
               
            
             <ul class="lifeList clearfix">
                        <li>
                            <a href="http://112.124.41.23:12345/hzc/index.html" target="bank">
                            <div class="img"><img src="~static/image/qjcase1.jpg" border="0" /></div>
                            <div class="con">
                               广州天河红专厂全景展示</div>
                          </a>    
                      </li>
                        <li>
                            <a href="http://112.124.41.23:12345/roma/index.html" target="bank">
                            <div class="img">
                                 <img src="~static/image/qjcase2.jpg" border="0" />                            </div>
                            <div class="con">
                                罗马利奥磁砖展厅展示
                            </div>
                          </a>
                      </li>
                        <li>
                            <a href="http://360.353d.com/putout/vrpano2/" target="bank">
                            <div class="img">
                                <img src="~static/image/qjcase3.jpg" border="0" />                            </div>
                            <div class="con">
                                通用电气广州三维全景拍摄</div>
                          </a>
                      </li>
                    </ul>
            
        </div>
        <!-- h5广告 -->


<div class="main">
                <div class="sec_title">
                  <div class="sec-Ttxt transy tranShow">
                        <h4>H5广告展示</h4>
                        <p>
                            <span>——————</span> 全方位展示 360天网上展厅 <span>——————</span>                        </p>
                  </div>
              </div>
               
            
             <ul class="lifeList clearfix">
                        <li>
                           <a href="http://3d.awmt.com.cn/" target="bank">
                            <div class="img"><img src="~static/image/awmt.jpg" border="0" /></div>
                            <div class="con">
                             奥姆特AWMT  </div>
                          </a>    
                      </li>
                        <li>
                            <a href="http://www.applepump.cn/" target="bank">
                            <div class="img">
                                 <img src="~static/image/applepump.jpg" border="0" />                            </div>
                            <div class="con">
                                苹果泵AppluePump
                            </div>
                          </a>
                      </li>
                        <li>
                            <a href="http://120.76.223.73/case/sczx/" target="bank">
                            <div class="img">
                                <img src="~static/image/sczx.jpg" border="0" />                            </div>
                            <div class="con">
                                山川咨询</div>
                          </a>
                      </li>
                    </ul>
            
        </div>














 <div class="main" style="margin-top:20px;">
                <div class="sec_title">
                  <div class="sec-Ttxt transy tranShow">
                      
                        
                  </div>
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
  watch:{
     $route(to,from){
      console.log('h5',to.path);
  }
  }
};
</script>
