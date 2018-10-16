<template>
    <div>
         <!--在线留言-->
    <el-row>
      <el-col :span="24">

        <div class="cta_words">
          <div class="ppw">
            <div class="sec_title">
              <div class="ch transy dly_1 tranShow"> 在线留言</div>
              <div class="sec-Ttxt transy tranShow"><h4> online message</h4>
                <p><span>——————</span> 我们的工作人员会尽快与您取得联系 <span>——————</span></p></div>
            </div>
            <div class="words">

              <form id="news_form" name="news_form" url="/plugins/submit/client_submitajax.ashx?action=submit_add">
                <input
                  name="field_control_company_name" class="company s-input Validform_error" v-model="company" placeholder='公司名称:' type="text" >
                   <input
                name="field_control_email"  class="mail s-input" placeholder="邮箱 :" type="text" v-model.lazy="email" >
                 <input
                  name="field_control_tel" id="field_control_tel" class="phone s-input"  placeholder="* 电话：" v-model.lazy="tel" type="text">
                <input
                  name="field_control_contact" id="field_control_contact" class="name s-input" placeholder="* 联系人:" v-model='name'
                  type="text">
                <textarea class="s-textarea s-input" name="field_control_demand"
                          id="field_control_demand" placeholder="* 请输入您的需求" v-model="message"></textarea>
                <div style="width:100px;"><el-button round @click="actionForm">确 认</el-button></div>
                <p>带*号的为必需填写的内容</p>
              </form>
            </div>
          </div>

        </div>


      </el-col>
    </el-row>
    </div>
    
</template>
<script>
import axios from "axios";

export default {
    data(){
        return{
              company: "",
      email: "",
      tel: "",
      name: "",
      message: ""
        }
    },
    methods: {
    actionForm() {
      this.checkForm() && this.axiosActionMessage();
    },
    axiosActionMessage() {
      axios({
        url: "http://test.my/indexapi?api=mes",
        method: "post",
        data:
          "name=" +
          this.name +
          "&tel=" +
          this.tel +
          "&company=" +
          this.company +
          "&email=" +
          this.email +
          "&message=" +
          this.message
      })
        .then(response => {
          console.log(response);
          if (response.data.code == 200) {
             this.$alert("请交成功，我们将会尽快联系您", "友情提示", {
              confirmButtonText: "确定"
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    checkForm() {
      console.log("checkform");
      var regEmail = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
      var regTel = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
      if (!this.tel) {
        this.$alert("电话不能为空，请重新输入", "友情提示", {
          confirmButtonText: "确定"
        });
        return false;
      }
      if (!regTel.test(this.tel)) {
        this.$alert("电话或手机有误 ，请重新输入", "友情提示", {
          confirmButtonText: "确定"
        });
        return false;
      }

      if (!regEmail.test(this.email) && this.email) {
        this.$alert("邮箱地址错误 ，请重新输入", "友情提示", {
          confirmButtonText: "确定"
        });
        return false;
      }
      if (!this.name) {
        this.$alert("联系人不能为空，请重新输入", "友情提示", {
          confirmButtonText: "确定"
        });
        return false;
      }
      if (!this.message) {
        this.$alert("留言不能为空，请重新输入", "友情提示", {
          confirmButtonText: "确定"
        });
        return false;
      }
      return true;
    }
  },
  watch: {
    email: function(val) {
      this.email = val;
      var reg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
      if (!reg.test(this.email))
        this.$alert("邮箱错误 ，请重新输入", "友情提示", {
          confirmButtonText: "确定"
        });
    },
    tel: function(val) {
      this.tel = val;
      var reg = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
      if (!reg.test(this.tel))
        this.$alert("电话或手机有误 ，请重新输入", "友情提示", {
          confirmButtonText: "确定"
        });
    }
  },
}
</script>
