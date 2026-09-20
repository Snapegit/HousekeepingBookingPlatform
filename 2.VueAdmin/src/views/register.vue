<template>
	<div>
		<div class="container" :style='{"minHeight":"100vh","alignItems":"flex-end","background":"url(http://codegen.caihongy.cn/20231023/8f75706230fc4c828c43aae9e1f76edf.png)","display":"flex","width":"100%","backgroundSize":"100% 100%","backgroundPosition":"center bottom","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
			<el-form v-if="pageFlag=='register'" :style='{"padding":"40px 24%","boxShadow":"0 0px 0px rgba(64, 158, 255, .8)","margin":"0","borderRadius":"0px","alignItems":"flex-end","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","height":"auto"}' ref="rgsForm" class="rgs-form" :model="rgsForm" :rules="rules">
				<div v-if="true" :style='{"margin":"0 0 10px 0","color":"#fff","top":"12%","textAlign":"center","left":"0","width":"100%","lineHeight":"44px","fontSize":"48px","position":"fixed","textShadow":"none"}' class="title">家政预约平台的设计与实现注册</div>
				<el-form-item :style='{"width":"40%","padding":"0","margin":"0 auto 15px","height":"auto"}' class="list-item" v-if="tableName=='jiazhengrenyuan'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","position":"relative","color":"rgba(64, 158, 255, 1)"}' class="lable" :class="changeRules('jiazhengzhanghao')?'required':''">家政账号：</div>
					<el-input  v-model="ruleForm.jiazhengzhanghao"  autocomplete="off" placeholder="家政账号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"40%","padding":"0","margin":"0 auto 15px","height":"auto"}' class="list-item" v-if="tableName=='jiazhengrenyuan'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","position":"relative","color":"rgba(64, 158, 255, 1)"}' class="lable" :class="changeRules('mima')?'required':''">密码：</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"width":"40%","padding":"0","margin":"0 auto 15px","height":"auto"}' class="list-item" v-if="tableName=='jiazhengrenyuan'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","position":"relative","color":"rgba(64, 158, 255, 1)"}' class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"width":"40%","padding":"0","margin":"0 auto 15px","height":"auto"}' class="list-item" v-if="tableName=='jiazhengrenyuan'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","position":"relative","color":"rgba(64, 158, 255, 1)"}' class="lable" :class="changeRules('jiazhengxingming')?'required':''">家政姓名：</div>
					<el-input  v-model="ruleForm.jiazhengxingming"  autocomplete="off" placeholder="家政姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"40%","padding":"0","margin":"0 auto 15px","height":"auto"}' class="list-item" v-if="tableName=='jiazhengrenyuan'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","position":"relative","color":"rgba(64, 158, 255, 1)"}' class="lable" :class="changeRules('touxiang')?'required':''">头像：</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="jiazhengrenyuantouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"40%","padding":"0","margin":"0 auto 15px","height":"auto"}' class="list-item" v-if="tableName=='jiazhengrenyuan'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","position":"relative","color":"rgba(64, 158, 255, 1)"}' class="lable" :class="changeRules('xingbie')?'required':''">性别：</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in jiazhengrenyuanxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"width":"40%","padding":"0","margin":"0 auto 15px","height":"auto"}' class="list-item" v-if="tableName=='jiazhengrenyuan'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","position":"relative","color":"rgba(64, 158, 255, 1)"}' class="lable" :class="changeRules('lianxidianhua')?'required':''">联系电话：</div>
					<el-input  v-model="ruleForm.lianxidianhua"  autocomplete="off" placeholder="联系电话"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"40%","padding":"0","margin":"0 auto 15px","height":"auto"}' class="list-item" v-if="tableName=='fangzhu'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","position":"relative","color":"rgba(64, 158, 255, 1)"}' class="lable" :class="changeRules('fangzhuzhanghao')?'required':''">房主账号：</div>
					<el-input  v-model="ruleForm.fangzhuzhanghao"  autocomplete="off" placeholder="房主账号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"40%","padding":"0","margin":"0 auto 15px","height":"auto"}' class="list-item" v-if="tableName=='fangzhu'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","position":"relative","color":"rgba(64, 158, 255, 1)"}' class="lable" :class="changeRules('mima')?'required':''">密码：</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"width":"40%","padding":"0","margin":"0 auto 15px","height":"auto"}' class="list-item" v-if="tableName=='fangzhu'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","position":"relative","color":"rgba(64, 158, 255, 1)"}' class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"width":"40%","padding":"0","margin":"0 auto 15px","height":"auto"}' class="list-item" v-if="tableName=='fangzhu'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","position":"relative","color":"rgba(64, 158, 255, 1)"}' class="lable" :class="changeRules('touxiang')?'required':''">头像：</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="fangzhutouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"40%","padding":"0","margin":"0 auto 15px","height":"auto"}' class="list-item" v-if="tableName=='fangzhu'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","position":"relative","color":"rgba(64, 158, 255, 1)"}' class="lable" :class="changeRules('fangzhuxingming')?'required':''">房主姓名：</div>
					<el-input  v-model="ruleForm.fangzhuxingming"  autocomplete="off" placeholder="房主姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"40%","padding":"0","margin":"0 auto 15px","height":"auto"}' class="list-item" v-if="tableName=='fangzhu'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","position":"relative","color":"rgba(64, 158, 255, 1)"}' class="lable" :class="changeRules('xingbie')?'required':''">性别：</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in fangzhuxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"width":"40%","padding":"0","margin":"0 auto 15px","height":"auto"}' class="list-item" v-if="tableName=='fangzhu'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","position":"relative","color":"rgba(64, 158, 255, 1)"}' class="lable" :class="changeRules('shoujihaoma')?'required':''">手机号码：</div>
					<el-input  v-model="ruleForm.shoujihaoma"  autocomplete="off" placeholder="手机号码"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"40%","padding":"0","margin":"0 auto 15px","height":"auto"}' class="list-item" v-if="tableName=='jiazhenggongsi'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","position":"relative","color":"rgba(64, 158, 255, 1)"}' class="lable" :class="changeRules('gongsizhanghao')?'required':''">公司账号：</div>
					<el-input  v-model="ruleForm.gongsizhanghao"  autocomplete="off" placeholder="公司账号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"40%","padding":"0","margin":"0 auto 15px","height":"auto"}' class="list-item" v-if="tableName=='jiazhenggongsi'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","position":"relative","color":"rgba(64, 158, 255, 1)"}' class="lable" :class="changeRules('mima')?'required':''">密码：</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"width":"40%","padding":"0","margin":"0 auto 15px","height":"auto"}' class="list-item" v-if="tableName=='jiazhenggongsi'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","position":"relative","color":"rgba(64, 158, 255, 1)"}' class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"width":"40%","padding":"0","margin":"0 auto 15px","height":"auto"}' class="list-item" v-if="tableName=='jiazhenggongsi'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","position":"relative","color":"rgba(64, 158, 255, 1)"}' class="lable" :class="changeRules('gongsimingcheng')?'required':''">公司名称：</div>
					<el-input  v-model="ruleForm.gongsimingcheng"  autocomplete="off" placeholder="公司名称"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"40%","padding":"0","margin":"0 auto 15px","height":"auto"}' class="list-item" v-if="tableName=='jiazhenggongsi'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","position":"relative","color":"rgba(64, 158, 255, 1)"}' class="lable" :class="changeRules('fuzeren')?'required':''">负责人：</div>
					<el-input  v-model="ruleForm.fuzeren"  autocomplete="off" placeholder="负责人"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"40%","padding":"0","margin":"0 auto 15px","height":"auto"}' class="list-item" v-if="tableName=='jiazhenggongsi'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","position":"relative","color":"rgba(64, 158, 255, 1)"}' class="lable" :class="changeRules('fengmian')?'required':''">封面：</div>
                    <file-upload
                        tip="点击上传封面"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.fengmian?ruleForm.fengmian:''"
                        @change="jiazhenggongsifengmianUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"40%","padding":"0","margin":"0 auto 15px","height":"auto"}' class="list-item" v-if="tableName=='jiazhenggongsi'">
					<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","position":"relative","color":"rgba(64, 158, 255, 1)"}' class="lable" :class="changeRules('fuwudianhua')?'required':''">服务电话：</div>
					<el-input  v-model="ruleForm.fuwudianhua"  autocomplete="off" placeholder="服务电话"  type="text"  />
				</el-form-item>
				<button :style='{"border":"0px solid #0E9BD3","cursor":"pointer","padding":"0","margin":"0px auto","color":"#0E9BD3","display":"block","borderRadius":"0","background":"transparent","borderWidth":"0 0 0px","width":"100%","fontSize":"24px","fontWeight":"bold","height":"44px"}' type="button" class="r-btn" @click="login()">注册</button>
				<div :style='{"cursor":"pointer","margin":"10px auto","color":"#999","textAlign":"center","display":"block","width":"80%","fontSize":"14px"}' class="r-login" @click="close()">已有账号，直接登录</div>
			</el-form>
			
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ruleForm: {
			},
			forgetForm: {},
            pageFlag : '',
			tableName:"",
			rules: {},
            jiazhengrenyuangongsimingchengOptions: [],
            jiazhengrenyuanxingbieOptions: [],
            jiazhengrenyuanfuwuleixingOptions: [],
            jiazhengrenyuandengjiOptions: [],
            fangzhuxingbieOptions: [],
		};
	},
	mounted(){
		this.pageFlag = this.$route.query.pageFlag
		if(this.$route.query.pageFlag=='register'){
			
			let table = this.$storage.get("loginTable");
			this.tableName = table;
			if(this.tableName=='jiazhengrenyuan'){
				this.ruleForm = {
					gongsimingcheng: '',
					gongsidizhi: '',
					fuzeren: '',
					jiazhengzhanghao: '',
					mima: '',
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
				this.ruleForm = {
					fangzhuzhanghao: '',
					mima: '',
					touxiang: '',
					fangzhuxingming: '',
					xingbie: '',
					shoujihaoma: '',
					dizhi: '',
				}
			}
			if(this.tableName=='jiazhenggongsi'){
				this.ruleForm = {
					gongsizhanghao: '',
					mima: '',
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
				this.rules.jiazhengzhanghao = [{ required: true, message: '请输入家政账号', trigger: 'blur' }]
			}
			if ('jiazhengrenyuan' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('jiazhengrenyuan' == this.tableName) {
				this.rules.jiazhengxingming = [{ required: true, message: '请输入家政姓名', trigger: 'blur' }]
			}
			if ('fangzhu' == this.tableName) {
				this.rules.fangzhuzhanghao = [{ required: true, message: '请输入房主账号', trigger: 'blur' }]
			}
			if ('fangzhu' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('fangzhu' == this.tableName) {
				this.rules.fangzhuxingming = [{ required: true, message: '请输入房主姓名', trigger: 'blur' }]
			}
			if ('jiazhenggongsi' == this.tableName) {
				this.rules.gongsizhanghao = [{ required: true, message: '请输入公司账号', trigger: 'blur' }]
			}
			if ('jiazhenggongsi' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
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
		}
	},
	created() {
	},
	destroyed() {
		  	},
	methods: {
		changeRules(name){
			if(this.rules[name]){
				return true
			}
			return false
		},
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		close(){
			this.$router.push({ path: "/login" });
		},
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

        // 多级联动参数


		// 注册
		login() {
			var url=this.tableName+"/register";
					if((!this.ruleForm.jiazhengzhanghao) && `jiazhengrenyuan` == this.tableName){
						this.$message.error(`家政账号不能为空`);
						return
					}
					if((!this.ruleForm.mima) && `jiazhengrenyuan` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `jiazhengrenyuan` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.jiazhengxingming) && `jiazhengrenyuan` == this.tableName){
						this.$message.error(`家政姓名不能为空`);
						return
					}
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
					if(`jiazhengrenyuan` == this.tableName && this.ruleForm.lianxidianhua &&(!this.$validate.isMobile(this.ruleForm.lianxidianhua))){
						this.$message.error(`联系电话应输入手机格式`);
						return
					}
					if((!this.ruleForm.fangzhuzhanghao) && `fangzhu` == this.tableName){
						this.$message.error(`房主账号不能为空`);
						return
					}
					if((!this.ruleForm.mima) && `fangzhu` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `fangzhu` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
					if((!this.ruleForm.fangzhuxingming) && `fangzhu` == this.tableName){
						this.$message.error(`房主姓名不能为空`);
						return
					}
					if(`fangzhu` == this.tableName && this.ruleForm.shoujihaoma &&(!this.$validate.isMobile(this.ruleForm.shoujihaoma))){
						this.$message.error(`手机号码应输入手机格式`);
						return
					}
					if((!this.ruleForm.gongsizhanghao) && `jiazhenggongsi` == this.tableName){
						this.$message.error(`公司账号不能为空`);
						return
					}
					if((!this.ruleForm.mima) && `jiazhenggongsi` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `jiazhenggongsi` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
            if(this.ruleForm.fengmian!=null) {
                this.ruleForm.fengmian = this.ruleForm.fengmian.replace(new RegExp(this.$base.url,"g"),"");
            }
					if(`jiazhenggongsi` == this.tableName && this.ruleForm.fuwudianhua &&(!this.$validate.isMobile(this.ruleForm.fuwudianhua))){
						this.$message.error(`服务电话应输入手机格式`);
						return
					}
			this.$http({
				url: url,
				method: "post",
				data:this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "注册成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.$router.replace({ path: "/login" });
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
	.container {
	  position: relative;
	  background: url(http://codegen.caihongy.cn/20231023/8f75706230fc4c828c43aae9e1f76edf.png);

		.el-date-editor.el-input {
		  width: 100%;
		}
		
		.rgs-form .el-input ::v-deep .el-input__inner {
						border: 4px solid #9B9B9B;
						border-radius: 10px;
						padding: 0 10px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						color: #000;
						width: 100%;
						font-size: 14px;
						height: 48px;
					}
		
		.rgs-form .el-select ::v-deep .el-input__inner {
						border: 4px solid #9B9B9B;
						border-radius: 10px;
						padding: 0 10px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #000;
						width: 100%;
						font-size: 14px;
						height: 48px;
					}
		
		.rgs-form .el-date-editor ::v-deep .el-input__inner {
						border: 4px solid #9B9B9B;
						border-radius: 10px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #000;
						width: 100%;
						font-size: 14px;
						height: 48px;
					}
		
		.rgs-form .el-date-editor ::v-deep .el-input__inner {
						border: 4px solid #9B9B9B;
						border-radius: 10px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #000;
						width: 100%;
						font-size: 14px;
						height: 48px;
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
		  		  border: 4px solid #9B9B9B;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #9B9B9B;
		  		  width: 100px;
		  		  font-size: 32px;
		  		  line-height: 50px;
		  		  text-align: center;
		  		  height: 50px;
		  		}
		
		.rgs-form ::v-deep .el-upload-list .el-upload-list__item {
		  		  border: 4px solid #9B9B9B;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #9B9B9B;
		  		  width: 100px;
		  		  font-size: 32px;
		  		  line-height: 50px;
		  		  text-align: center;
		  		  height: 50px;
		  		}
		
		.rgs-form ::v-deep .el-upload .el-icon-plus {
		  		  border: 4px solid #9B9B9B;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #9B9B9B;
		  		  width: 100px;
		  		  font-size: 32px;
		  		  line-height: 50px;
		  		  text-align: center;
		  		  height: 50px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				left: -10px;
				position: absolute;
				content: "*";
			}
	.editor>.avatar-uploader {
		line-height: 0;
		height: 0;
	}
</style>
