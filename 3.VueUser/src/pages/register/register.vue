<template>
	<div>

	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20231014/825464b6febd4bf2946d4b4b656195e3.jpg)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
		<el-form class='rgs-form' v-if="pageFlag=='register'" :style='{"padding":"50px 0 20px","boxShadow":"0px 26px 26px -30px #999","margin":"120px auto 60px","borderRadius":"12px","background":"radial-gradient(circle, rgba(245,245,245,1) 0%, rgba(255,255,255,1) 50%, rgba(245,245,245,1) 100%)","width":"35vw","position":"relative","height":"auto"}' ref="registerForm" :model="registerForm" :rules="rules">
			<div v-if="false" :style='{"width":"100%","margin":"0 0 10px 0","lineHeight":"44px","fontSize":"20px","color":"rgba(64, 158, 255, 1)","textAlign":"center"}'>USER / REGISTER</div>
			<div v-if="true" :style='{"margin":"20px auto 10px","color":"#333","top":"-90px","textAlign":"center","width":"100%","letterSpacing":"4px","lineHeight":"44px","fontSize":"30px","position":"absolute"}'>家政预约平台的设计与实现注册</p></div>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiazhengrenyuan'" prop="jiazhengzhanghao">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('jiazhengzhanghao')?'required':''">家政账号：</div>
				<el-input v-model="registerForm.jiazhengzhanghao"  placeholder="请输入家政账号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiazhengrenyuan'" prop="mima">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiazhengrenyuan'" prop="mima2">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiazhengrenyuan'" prop="jiazhengxingming">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('jiazhengxingming')?'required':''">家政姓名：</div>
				<el-input v-model="registerForm.jiazhengxingming"  placeholder="请输入家政姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiazhengrenyuan'" prop="touxiang">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="jiazhengrenyuantouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiazhengrenyuan'" prop="xingbie">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in jiazhengrenyuanxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiazhengrenyuan'" prop="lianxidianhua">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('lianxidianhua')?'required':''">联系电话：</div>
				<el-input v-model="registerForm.lianxidianhua"  placeholder="请输入联系电话" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='fangzhu'" prop="fangzhuzhanghao">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('fangzhuzhanghao')?'required':''">房主账号：</div>
				<el-input v-model="registerForm.fangzhuzhanghao"  placeholder="请输入房主账号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='fangzhu'" prop="mima">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='fangzhu'" prop="mima2">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='fangzhu'" prop="touxiang">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="fangzhutouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='fangzhu'" prop="fangzhuxingming">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('fangzhuxingming')?'required':''">房主姓名：</div>
				<el-input v-model="registerForm.fangzhuxingming"  placeholder="请输入房主姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='fangzhu'" prop="xingbie">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in fangzhuxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='fangzhu'" prop="shoujihaoma">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('shoujihaoma')?'required':''">手机号码：</div>
				<el-input v-model="registerForm.shoujihaoma"  placeholder="请输入手机号码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiazhenggongsi'" prop="gongsizhanghao">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('gongsizhanghao')?'required':''">公司账号：</div>
				<el-input v-model="registerForm.gongsizhanghao"  placeholder="请输入公司账号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiazhenggongsi'" prop="mima">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiazhenggongsi'" prop="mima2">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiazhenggongsi'" prop="gongsimingcheng">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('gongsimingcheng')?'required':''">公司名称：</div>
				<el-input v-model="registerForm.gongsimingcheng"  placeholder="请输入公司名称" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiazhenggongsi'" prop="fuzeren">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('fuzeren')?'required':''">负责人：</div>
				<el-input v-model="registerForm.fuzeren"  placeholder="请输入负责人" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiazhenggongsi'" prop="fengmian">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('fengmian')?'required':''">封面：</div>
                <file-upload
					tip="点击上传封面"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.fengmian?registerForm.fengmian:''"
					@change="jiazhenggongsifengmianUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiazhenggongsi'" prop="fuwudianhua">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('fuwudianhua')?'required':''">服务电话：</div>
				<el-input v-model="registerForm.fuwudianhua"  placeholder="请输入服务电话" />
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"20px 0px 0 8vw","outline":"none","color":"#fff","borderRadius":"4px","background":"#ff3d00","display":"inline-block","width":"350px","fontSize":"16px","height":"44px"}' type="primary" @click="submitForm('registerForm')">注册</el-button>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0px auto 0px","color":"#666","textAlign":"right","display":"none","outline":"none","borderRadius":"4px","background":"none","width":"auto","fontSize":"16px","height":"44px"}' @click="resetForm('registerForm')">重置</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0 20px","margin":"20px 0 20px","color":"#999","textAlign":"center","display":"inline-block","width":"100%","lineHeight":"1","fontSize":"14px","textDecoration":"none"}' to="/login">已有账户登录</router-link>
			<div class="idea1" :style='{"top":"-19px","left":"0","background":"url() no-repeat center top","display":"none","width":"40vw","position":"absolute","height":"66px"}'></div>
			<div class="idea2" :style='{"width":"100%","background":"blue","display":"none","height":"40px"}'></div>
		</el-form>
    </div>
  </div>
</div>
</template>

<script>

export default {
    //数据集合
    data() {
		return {
            pageFlag : '',
			tableName: '',
			registerForm: {},
			forgetForm: {},
			rules: {},
			requiredRules: {},
            jiazhengrenyuangongsimingchengOptions: [],
            jiazhengrenyuanxingbieOptions: [],
            jiazhengrenyuanfuwuleixingOptions: [],
            jiazhengrenyuandengjiOptions: [],
            fangzhuxingbieOptions: [],
		}
    },
	mounted() {
		if(this.$route.query.pageFlag=='register'){
			this.tableName = this.$route.query.role;
			if(this.tableName=='jiazhengrenyuan'){
				this.registerForm = {
					gongsimingcheng: '',
					gongsidizhi: '',
					fuzeren: '',
					jiazhengzhanghao: '',
					mima: '',
					mima2: '',
					jiazhengxingming: '',
					touxiang: '',
					xingbie: '',
					lianxidianhua: '',
					fuwuleixing: '',
					dengji: '',
					discussnum: '',
					storeupnum: '',
				}
			}
			if(this.tableName=='fangzhu'){
				this.registerForm = {
					fangzhuzhanghao: '',
					mima: '',
					mima2: '',
					touxiang: '',
					fangzhuxingming: '',
					xingbie: '',
					shoujihaoma: '',
					dizhi: '',
				}
			}
			if(this.tableName=='jiazhenggongsi'){
				this.registerForm = {
					gongsizhanghao: '',
					mima: '',
					mima2: '',
					gongsimingcheng: '',
					fuzeren: '',
					fengmian: '',
					gongsidizhi: '',
					fuwudianhua: '',
					zhuceshijian: '',
					gongsijieshao: '',
					discussnum: '',
					storeupnum: '',
				}
			}
			if ('jiazhengrenyuan' == this.tableName) {
				this.requiredRules.jiazhengzhanghao = [{ required: true, message: '请输入家政账号', trigger: 'blur' }]
			}
			if ('jiazhengrenyuan' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('jiazhengrenyuan' == this.tableName) {
				this.requiredRules.jiazhengxingming = [{ required: true, message: '请输入家政姓名', trigger: 'blur' }]
			}
			if ('fangzhu' == this.tableName) {
				this.requiredRules.fangzhuzhanghao = [{ required: true, message: '请输入房主账号', trigger: 'blur' }]
			}
			if ('fangzhu' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('fangzhu' == this.tableName) {
				this.requiredRules.fangzhuxingming = [{ required: true, message: '请输入房主姓名', trigger: 'blur' }]
			}
			if ('jiazhenggongsi' == this.tableName) {
				this.requiredRules.gongsizhanghao = [{ required: true, message: '请输入公司账号', trigger: 'blur' }]
			}
			if ('jiazhenggongsi' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
		}
	},
    created() {
		this.pageFlag = this.$route.query.pageFlag;
		if(this.$route.query.pageFlag=='register'){
			this.$http({
			  url: `option/jiazhenggongsi/gongsimingcheng`,
			  method: "get",
			  params: {}
			}).then(({ data }) => {
			  if (data && data.code === 0) {
				  this.jiazhengrenyuangongsimingchengOptions = data.data;
			  }
			});
		  if ('jiazhengrenyuan' == this.tableName) {
			this.rules.jiazhengzhanghao = [{ required: true, message: '请输入家政账号', trigger: 'blur' }];
		  }
		  if ('jiazhengrenyuan' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
		  if ('jiazhengrenyuan' == this.tableName) {
			this.rules.jiazhengxingming = [{ required: true, message: '请输入家政姓名', trigger: 'blur' }];
		  }
			this.jiazhengrenyuanxingbieOptions = "男,女".split(',');
		  if ('jiazhengrenyuan' == this.tableName) {
			this.rules.lianxidianhua = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
		  }
			this.$http({
			  url: `option/fuwuleixing/fuwuleixing`,
			  method: "get",
			  params: {}
			}).then(({ data }) => {
			  if (data && data.code === 0) {
				  this.jiazhengrenyuanfuwuleixingOptions = data.data;
			  }
			});
			this.jiazhengrenyuandengjiOptions = "金牌,银牌,铜牌".split(',');
		  if ('jiazhengrenyuan' == this.tableName) {
			this.rules.discussnum = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
		  }
		  if ('jiazhengrenyuan' == this.tableName) {
			this.rules.storeupnum = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
		  }
		  if ('fangzhu' == this.tableName) {
			this.rules.fangzhuzhanghao = [{ required: true, message: '请输入房主账号', trigger: 'blur' }];
		  }
		  if ('fangzhu' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
		  if ('fangzhu' == this.tableName) {
			this.rules.fangzhuxingming = [{ required: true, message: '请输入房主姓名', trigger: 'blur' }];
		  }
			this.fangzhuxingbieOptions = "男,女".split(',');
		  if ('fangzhu' == this.tableName) {
			this.rules.shoujihaoma = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
		  }
		  if ('jiazhenggongsi' == this.tableName) {
			this.rules.gongsizhanghao = [{ required: true, message: '请输入公司账号', trigger: 'blur' }];
		  }
		  if ('jiazhenggongsi' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
		  if ('jiazhenggongsi' == this.tableName) {
			this.rules.fuwudianhua = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
		  }
		  if ('jiazhenggongsi' == this.tableName) {
			this.rules.discussnum = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
		  }
		  if ('jiazhenggongsi' == this.tableName) {
			this.rules.storeupnum = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
		  }
		}
    },
    //方法集合
    methods: {
		changeRules(name){
			if(this.requiredRules[name]){
				return true
			}
			return false
		},
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
        // 下二随
        jiazhengrenyuangongsimingchengChange () {
          this.$http({
            url: `follow/jiazhenggongsi/gongsimingcheng?columnValue=`+ this.registerForm.gongsimingcheng,
            method: "get",
            params: {}
          }).then(({ data }) => {
            if (data && data.code === 0) {
            if(data.data.gongsidizhi){
              this.registerForm.gongsidizhi = data.data.gongsidizhi
            }
            if(data.data.fuzeren){
              this.registerForm.fuzeren = data.data.fuzeren
            }
            }
          });
        },
      jiazhengrenyuantouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      fangzhutouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      jiazhenggongsifengmianUploadChange(fileUrls) {
          this.registerForm.fengmian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },

        // 多级联动参数


      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url=this.tableName+"/register";
				if((!this.registerForm.jiazhengzhanghao) && `jiazhengrenyuan` == this.tableName){
					this.$message.error(`家政账号不能为空`);
					return
				}
               if(`jiazhengrenyuan` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `jiazhengrenyuan` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
				if((!this.registerForm.jiazhengxingming) && `jiazhengrenyuan` == this.tableName){
					this.$message.error(`家政姓名不能为空`);
					return
				}
					if(`jiazhengrenyuan` == this.tableName && this.registerForm.lianxidianhua &&(!this.$validate.isMobile2(this.registerForm.lianxidianhua))){
						this.$message.error(`联系电话应输入手机格式`);
						return
					}
				if((!this.registerForm.fangzhuzhanghao) && `fangzhu` == this.tableName){
					this.$message.error(`房主账号不能为空`);
					return
				}
               if(`fangzhu` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `fangzhu` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
				if((!this.registerForm.fangzhuxingming) && `fangzhu` == this.tableName){
					this.$message.error(`房主姓名不能为空`);
					return
				}
					if(`fangzhu` == this.tableName && this.registerForm.shoujihaoma &&(!this.$validate.isMobile2(this.registerForm.shoujihaoma))){
						this.$message.error(`手机号码应输入手机格式`);
						return
					}
				if((!this.registerForm.gongsizhanghao) && `jiazhenggongsi` == this.tableName){
					this.$message.error(`公司账号不能为空`);
					return
				}
               if(`jiazhenggongsi` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `jiazhenggongsi` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
					if(`jiazhenggongsi` == this.tableName && this.registerForm.fuwudianhua &&(!this.$validate.isMobile2(this.registerForm.fuwudianhua))){
						this.$message.error(`服务电话应输入手机格式`);
						return
					}
            this.$http.post(url, this.registerForm).then(res => {
              if (res.data.code === 0) {
                this.$message({
                  message: '注册成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.$router.push('/login');
                  }
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20231014/825464b6febd4bf2946d4b4b656195e3.jpg);
		
		.el-input {
		  width: auto;
		}
		
		.el-date-editor.el-input {
			width: auto;
		}
		
		.el-form-item ::v-deep .el-form-item__content {
						display: flex;
						width: 100%;
						flex-wrap: wrap;
					}
		
		.rgs-form .el-input ::v-deep .el-input__inner {
						border-radius: 4px;
						padding: 0 10px;
						outline: none;
						color: #666;
						background: #fff;
						width: 300px;
						font-size: 14px;
						border-color: #ddd;
						border-width: 1px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-select ::v-deep .el-input__inner {
						border-radius: 4px;
						padding: 0 10px;
						outline: none;
						color: #666;
						background: #fff;
						width: auto;
						font-size: 14px;
						border-color: #ddd;
						border-width: 1px;
						border-style: solid;
						min-width: 300px;
						height: 40px;
					}
		
		.rgs-form .el-date-editor ::v-deep .el-input__inner {
						border-radius: 4px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #666;
						background: #fff;
						width: auto;
						font-size: 14px;
						border-color: #ddd;
						border-width: 1px;
						border-style: solid;
						min-width: 300px;
						height: 40px;
					}
		
		.rgs-form .el-date-editor ::v-deep .el-input__inner {
						border-radius: 4px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #666;
						background: #fff;
						width: auto;
						font-size: 14px;
						border-color: #ddd;
						border-width: 1px;
						border-style: solid;
						min-width: 300px;
						height: 40px;
					}
		
		.rgs-form ::v-deep .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form ::v-deep .upload .upload-img {
		  		  cursor: pointer;
		  		  border-radius: 4px;
		  		  color: #ddd;
		  		  background: #fff;
		  		  width: 150px;
		  		  font-size: 32px;
		  		  border-color: #ddd;
		  		  border-width: 1px;
		  		  line-height: 60px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 60px;
		  		}
		
		.rgs-form ::v-deep .el-upload-list .el-upload-list__item {
		  		  cursor: pointer;
		  		  border-radius: 4px;
		  		  color: #ddd;
		  		  background: #fff;
		  		  width: 150px;
		  		  font-size: 32px;
		  		  border-color: #ddd;
		  		  border-width: 1px;
		  		  line-height: 60px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 60px;
		  		}
		
		.rgs-form ::v-deep .el-upload .el-icon-plus {
		  		  cursor: pointer;
		  		  border-radius: 4px;
		  		  color: #ddd;
		  		  background: #fff;
		  		  width: 150px;
		  		  font-size: 32px;
		  		  border-color: #ddd;
		  		  border-width: 1px;
		  		  line-height: 60px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 60px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				left: 78px;
				position: absolute;
				content: "*";
				order: 2;
			}
</style>
