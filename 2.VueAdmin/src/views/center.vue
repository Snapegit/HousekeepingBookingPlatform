<template>
  <div :style='{"width":"calc(100% - 60px)","padding":"30px","margin":"0 30px","background":"#fff"}'>
    <el-form
	  :style='{"padding":"30px","boxShadow":"0 0px 0px rgba(64, 158, 255, .3)","borderRadius":"6px","flexWrap":"wrap","display":"flex"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      label-width="80px"
    >  
     <el-row>
        <el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-if="flag=='jiazhengrenyuan'" label="公司名称" prop="gongsimingcheng">
          <el-select  @change="jiazhengrenyuangongsimingchengChange"  v-model="ruleForm.gongsimingcheng" placeholder="请选择公司名称">
            <el-option
                v-for="(item,index) in jiazhengrenyuangongsimingchengOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}'   v-if="flag=='jiazhengrenyuan'"  label="公司地址" prop="gongsidizhi">
          <el-input v-model="ruleForm.gongsidizhi"               placeholder="公司地址" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}'   v-if="flag=='jiazhengrenyuan'"  label="负责人" prop="fuzeren">
          <el-input v-model="ruleForm.fuzeren"               placeholder="负责人" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}'   v-if="flag=='jiazhengrenyuan'"  label="家政账号" prop="jiazhengzhanghao">
          <el-input v-model="ruleForm.jiazhengzhanghao" readonly              placeholder="家政账号" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}'   v-if="flag=='jiazhengrenyuan'"  label="家政姓名" prop="jiazhengxingming">
          <el-input v-model="ruleForm.jiazhengxingming"               placeholder="家政姓名" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-if="flag=='jiazhengrenyuan'" label="头像" prop="touxiang">
          <file-upload
          tip="点击上传头像"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
          @change="jiazhengrenyuantouxiangUploadChange"
          ></file-upload>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-if="flag=='jiazhengrenyuan'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie"  placeholder="请选择性别">
            <el-option
                v-for="(item,index) in jiazhengrenyuanxingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}'   v-if="flag=='jiazhengrenyuan'"  label="联系电话" prop="lianxidianhua">
          <el-input v-model="ruleForm.lianxidianhua"               placeholder="联系电话" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-if="flag=='jiazhengrenyuan'"  label="服务类型" prop="fuwuleixing">
          <el-select v-model="ruleForm.fuwuleixing"  placeholder="请选择服务类型">
            <el-option
                v-for="(item,index) in jiazhengrenyuanfuwuleixingOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-if="flag=='jiazhengrenyuan'"  label="等级" prop="dengji">
          <el-select v-model="ruleForm.dengji"  placeholder="请选择等级">
            <el-option
                v-for="(item,index) in jiazhengrenyuandengjiOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}'   v-if="flag=='fangzhu'"  label="房主账号" prop="fangzhuzhanghao">
          <el-input v-model="ruleForm.fangzhuzhanghao" readonly              placeholder="房主账号" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-if="flag=='fangzhu'" label="头像" prop="touxiang">
          <file-upload
          tip="点击上传头像"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
          @change="fangzhutouxiangUploadChange"
          ></file-upload>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}'   v-if="flag=='fangzhu'"  label="房主姓名" prop="fangzhuxingming">
          <el-input v-model="ruleForm.fangzhuxingming"               placeholder="房主姓名" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-if="flag=='fangzhu'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie"  placeholder="请选择性别">
            <el-option
                v-for="(item,index) in fangzhuxingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}'   v-if="flag=='fangzhu'"  label="手机号码" prop="shoujihaoma">
          <el-input v-model="ruleForm.shoujihaoma"               placeholder="手机号码" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}'   v-if="flag=='fangzhu'"  label="地址" prop="dizhi">
          <el-input v-model="ruleForm.dizhi"               placeholder="地址" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}'   v-if="flag=='jiazhenggongsi'"  label="公司账号" prop="gongsizhanghao">
          <el-input v-model="ruleForm.gongsizhanghao" readonly              placeholder="公司账号" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}'   v-if="flag=='jiazhenggongsi'"  label="公司名称" prop="gongsimingcheng">
          <el-input v-model="ruleForm.gongsimingcheng"               placeholder="公司名称" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}'   v-if="flag=='jiazhenggongsi'"  label="负责人" prop="fuzeren">
          <el-input v-model="ruleForm.fuzeren"               placeholder="负责人" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-if="flag=='jiazhenggongsi'" label="封面" prop="fengmian">
          <file-upload
          tip="点击上传封面"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.fengmian?ruleForm.fengmian:''"
          @change="jiazhenggongsifengmianUploadChange"
          ></file-upload>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}'   v-if="flag=='jiazhenggongsi'"  label="公司地址" prop="gongsidizhi">
          <el-input v-model="ruleForm.gongsidizhi"               placeholder="公司地址" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}'   v-if="flag=='jiazhenggongsi'"  label="服务电话" prop="fuwudianhua">
          <el-input v-model="ruleForm.fuwudianhua"               placeholder="服务电话" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}'  v-if="flag=='jiazhenggongsi'" label="注册时间" prop="zhuceshijian">
            <el-date-picker
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                v-model="ruleForm.zhuceshijian" 
                type="date"
                placeholder="注册时间">
            </el-date-picker> 
        </el-form-item>
		<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-if="flag=='jiazhenggongsi'" label="公司介绍" prop="gongsijieshao">
		  <editor
		  	style="min-width: 200px; max-width: 600px;"
			 :style='{"width":"600px","boxShadow":"0 0 6px #C8C8C8","height":"auto"}'
		  	v-model="ruleForm.gongsijieshao" 
		  	class="editor" 
		  	action="file/upload">
		  </editor>
		</el-form-item>
		<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-if="flag=='users'" label="用户名" prop="username">
			<el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
		</el-form-item>
		<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-if="flag=='users'" label="头像" prop="image">
		  <file-upload
		  tip="点击上传头像"
		  action="file/upload"
		  :limit="1"
		  :multiple="false"
		  :fileUrls="ruleForm.image?ruleForm.image:''"
		  @change="usersimageUploadChange"
		  ></file-upload>
		</el-form-item>
		<el-form-item :style='{"width":"100%","padding":"0","margin":"0"}'>
			<el-button class="btn3" :style='{"border":"0","cursor":"pointer","padding":"0 14px","margin":"4px","outline":"none","color":"#fff","borderRadius":"5px","background":"#0E9BD3","width":"auto","fontSize":"14px","height":"40px"}' type="primary" @click="onUpdateHandler">
				<span class="icon iconfont icon-tijiao04" :style='{"margin":"0 2px","fontSize":"14px","color":"#fff","height":"40px"}'></span>
				确定
			</el-button>
		</el-form-item>
      </el-row>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isMobile,isPhone,isURL,checkIdCard } from "@/utils/validate";

export default {
  data() {
    return {
      ruleForm: {},
      flag: '',
      usersFlag: false,
      jiazhengrenyuangongsimingchengOptions: [],
      jiazhengrenyuanxingbieOptions: [],
      jiazhengrenyuanfuwuleixingOptions: [],
      jiazhengrenyuandengjiOptions: [],
      fangzhuxingbieOptions: [],
    };
  },
  mounted() {
    var table = this.$storage.get("sessionTable");
    this.flag = table;
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.ruleForm = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.$http({
      url: `option/jiazhenggongsi/gongsimingcheng`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.jiazhengrenyuangongsimingchengOptions = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.jiazhengrenyuanxingbieOptions = "男,女".split(',')
    this.$http({
      url: `option/fuwuleixing/fuwuleixing`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.jiazhengrenyuanfuwuleixingOptions = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.jiazhengrenyuandengjiOptions = "金牌,银牌,铜牌".split(',')
    this.fangzhuxingbieOptions = "男,女".split(',')
  },
  methods: {
    // 下二随
    jiazhengrenyuangongsimingchengChange () {
      this.$http({
        url: `follow/jiazhenggongsi/gongsimingcheng?columnValue=`+ this.ruleForm.gongsimingcheng,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
              if(data.data.gongsidizhi){
                this.ruleForm.gongsidizhi = data.data.gongsidizhi
              }
              if(data.data.fuzeren){
                this.ruleForm.fuzeren = data.data.fuzeren
              }
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    jiazhengrenyuantouxiangUploadChange(fileUrls) {
        this.ruleForm.touxiang = fileUrls;
    },
    fangzhutouxiangUploadChange(fileUrls) {
        this.ruleForm.touxiang = fileUrls;
    },
    jiazhenggongsifengmianUploadChange(fileUrls) {
        this.ruleForm.fengmian = fileUrls;
    },
	usersimageUploadChange(fileUrls) {
		this.ruleForm.image = fileUrls;
	},
    onUpdateHandler() {






      if((!this.ruleForm.jiazhengzhanghao)&& 'jiazhengrenyuan'==this.flag){
        this.$message.error('家政账号不能为空');
        return
      }


      if((!this.ruleForm.mima)&& 'jiazhengrenyuan'==this.flag){
        this.$message.error('密码不能为空');
        return
      }


      if((!this.ruleForm.jiazhengxingming)&& 'jiazhengrenyuan'==this.flag){
        this.$message.error('家政姓名不能为空');
        return
      }




        if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
        }




      if( 'jiazhengrenyuan' ==this.flag && this.ruleForm.lianxidianhua&&(!isMobile(this.ruleForm.lianxidianhua))){
        this.$message.error(`联系电话应输入手机格式`);
        return
      }






      if( 'jiazhengrenyuan' ==this.flag && this.ruleForm.discussnum&&(!isIntNumer(this.ruleForm.discussnum))){
       this.$message.error(`评论数应输入整数`);
        return
      }


      if( 'jiazhengrenyuan' ==this.flag && this.ruleForm.storeupnum&&(!isIntNumer(this.ruleForm.storeupnum))){
       this.$message.error(`收藏数应输入整数`);
        return
      }
      if((!this.ruleForm.fangzhuzhanghao)&& 'fangzhu'==this.flag){
        this.$message.error('房主账号不能为空');
        return
      }


      if((!this.ruleForm.mima)&& 'fangzhu'==this.flag){
        this.$message.error('密码不能为空');
        return
      }




        if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
        }
      if((!this.ruleForm.fangzhuxingming)&& 'fangzhu'==this.flag){
        this.$message.error('房主姓名不能为空');
        return
      }






      if( 'fangzhu' ==this.flag && this.ruleForm.shoujihaoma&&(!isMobile(this.ruleForm.shoujihaoma))){
        this.$message.error(`手机号码应输入手机格式`);
        return
      }


      if((!this.ruleForm.gongsizhanghao)&& 'jiazhenggongsi'==this.flag){
        this.$message.error('公司账号不能为空');
        return
      }


      if((!this.ruleForm.mima)&& 'jiazhenggongsi'==this.flag){
        this.$message.error('密码不能为空');
        return
      }








        if(this.ruleForm.fengmian!=null) {
                this.ruleForm.fengmian = this.ruleForm.fengmian.replace(new RegExp(this.$base.url,"g"),"");
        }




      if( 'jiazhenggongsi' ==this.flag && this.ruleForm.fuwudianhua&&(!isMobile(this.ruleForm.fuwudianhua))){
        this.$message.error(`服务电话应输入手机格式`);
        return
      }






      if( 'jiazhenggongsi' ==this.flag && this.ruleForm.discussnum&&(!isIntNumer(this.ruleForm.discussnum))){
       this.$message.error(`评论数应输入整数`);
        return
      }


      if( 'jiazhenggongsi' ==this.flag && this.ruleForm.storeupnum&&(!isIntNumer(this.ruleForm.storeupnum))){
       this.$message.error(`收藏数应输入整数`);
        return
      }
      if('users'==this.flag && this.ruleForm.username.trim().length<1) {
	this.$message.error(`用户名不能为空`);
        return	
      }
	  if(this.flag=='users'){
	  	this.ruleForm.image = this.ruleForm.image.replace(new RegExp(this.$base.url,"g"),"")
	  }
      this.$http({
        url: `${this.$storage.get("sessionTable")}/update`,
        method: "post",
        data: this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "修改信息成功",
            type: "success",
            duration: 1500,
            onClose: () => {
				if(this.flag=='users'){
					this.$storage.set('headportrait',this.ruleForm.image)
				}
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item ::v-deep .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #9E9E9E;
	  	  font-weight: 500;
	  	  width: 80px;
	  	  font-size: 14px;
	  	  line-height: 40px;
	  	  text-align: center;
	  	}
	
	.add-update-preview .el-form-item ::v-deep .el-form-item__content {
	  margin-left: 80px;
	}
	
	.add-update-preview .el-input ::v-deep .el-input__inner {
	  	  border: 2px dashed #C8C8C8;
	  	  border-radius: 0;
	  	  padding: 0 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-select ::v-deep .el-input__inner {
	  	  border: 2px dashed #C8C8C8;
	  	  border-radius: 0;
	  	  padding: 0 10px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-date-editor ::v-deep .el-input__inner {
	  	  border: 2px dashed #C8C8C8;
	  	  border-radius: 0;
	  	  padding: 0 10px 0 30px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview ::v-deep .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview ::v-deep .el-upload-list .el-upload-list__item {
	  	  border: 2px dashed #C8C8C8;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #C8C8C8;
	  	  width: 60px;
	  	  font-size: 32px;
	  	  line-height: 60px;
	  	  text-align: center;
	  	  height: 60px;
	  	}
	
	.add-update-preview ::v-deep .el-upload .el-icon-plus {
	  	  border: 2px dashed #C8C8C8;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #C8C8C8;
	  	  width: 60px;
	  	  font-size: 32px;
	  	  line-height: 60px;
	  	  text-align: center;
	  	  height: 60px;
	  	}
	
	.add-update-preview .el-textarea ::v-deep .el-textarea__inner {
	  	  border: 2px dashed #C8C8C8;
	  	  border-radius: 0;
	  	  padding: 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 120px;
	  	}
	
	.add-update-preview .btn3 {
				border: 0;
				cursor: pointer;
				border-radius: 5px;
				padding: 0 14px;
				margin: 4px;
				outline: none;
				color: #fff;
				background: #0E9BD3;
				width: auto;
				font-size: 14px;
				height: 40px;
			}
	
	.add-update-preview .btn3:hover {
				opacity: 0.5;
			}
	
	.editor>.avatar-uploader {
		line-height: 0;
		height: 0;
	}
</style>
