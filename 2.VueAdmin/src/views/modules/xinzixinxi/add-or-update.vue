<template>
	<div class="addEdit-block" :style='{"padding":"30px","margin":"0 30px","background":"#fff"}'>
		<el-form
			:style='{"padding":"30px","boxShadow":"0 0px 0px rgba(64, 158, 255, .3)","borderRadius":"6px","flexWrap":"wrap","display":"flex"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="80px"
		>
			<template >
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="select" v-if="type!='info'"  label="工资月份" prop="gongziyuefen">
					<el-select :disabled="ro.gongziyuefen" v-model="ruleForm.gongziyuefen" placeholder="请选择工资月份" >
						<el-option
							v-for="(item,index) in gongziyuefenOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="工资月份" prop="gongziyuefen">
					<el-input v-model="ruleForm.gongziyuefen"
						placeholder="工资月份" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="select" v-if="type!='info'" label="家政账号" prop="jiazhengzhanghao">
					<el-select :disabled="ro.jiazhengzhanghao" @change="jiazhengzhanghaoChange" v-model="ruleForm.jiazhengzhanghao" placeholder="请选择家政账号">
						<el-option
							v-for="(item,index) in jiazhengzhanghaoOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-else-if="ruleForm.jiazhengzhanghao" label="家政账号" prop="jiazhengzhanghao">
					<el-input v-model="ruleForm.jiazhengzhanghao" placeholder="家政账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="家政姓名" prop="jiazhengxingming">
					<el-input v-model="ruleForm.jiazhengxingming" placeholder="家政姓名" clearable  :readonly="ro.jiazhengxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="家政姓名" prop="jiazhengxingming">
					<el-input v-model="ruleForm.jiazhengxingming" placeholder="家政姓名" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="基本工资" prop="jibengongzi">
					<el-input-number v-model="ruleForm.jibengongzi" placeholder="基本工资" :readonly="ro.jibengongzi"></el-input-number>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="基本工资" prop="jibengongzi">
					<el-input v-model="ruleForm.jibengongzi" placeholder="基本工资" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="加班奖金" prop="jiabanjiangjin">
					<el-input-number v-model="ruleForm.jiabanjiangjin" placeholder="加班奖金" :readonly="ro.jiabanjiangjin"></el-input-number>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="加班奖金" prop="jiabanjiangjin">
					<el-input v-model="ruleForm.jiabanjiangjin" placeholder="加班奖金" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="绩效奖励" prop="jixiaojiangli">
					<el-input-number v-model="ruleForm.jixiaojiangli" placeholder="绩效奖励" :readonly="ro.jixiaojiangli"></el-input-number>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="绩效奖励" prop="jixiaojiangli">
					<el-input v-model="ruleForm.jixiaojiangli" placeholder="绩效奖励" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="全勤奖励" prop="quanqinjiangli">
					<el-input-number v-model="ruleForm.quanqinjiangli" placeholder="全勤奖励" :readonly="ro.quanqinjiangli"></el-input-number>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="全勤奖励" prop="quanqinjiangli">
					<el-input v-model="ruleForm.quanqinjiangli" placeholder="全勤奖励" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="五险一金" prop="wuxianyijin">
					<el-input-number v-model="ruleForm.wuxianyijin" placeholder="五险一金" :readonly="ro.wuxianyijin"></el-input-number>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="五险一金" prop="wuxianyijin">
					<el-input v-model="ruleForm.wuxianyijin" placeholder="五险一金" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="扣款金额" prop="koukuanjine">
					<el-input-number v-model="ruleForm.koukuanjine" placeholder="扣款金额" :readonly="ro.koukuanjine"></el-input-number>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="扣款金额" prop="koukuanjine">
					<el-input v-model="ruleForm.koukuanjine" placeholder="扣款金额" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'" label="实发工资" prop="shifagongzi">
					<el-input v-model="shifagongzi" placeholder="实发工资" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-else-if="ruleForm.shifagongzi" label="实发工资" prop="shifagongzi">
					<el-input v-model="ruleForm.shifagongzi" placeholder="实发工资" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="备注" prop="beizhu">
					<el-input v-model="ruleForm.beizhu" placeholder="备注" clearable  :readonly="ro.beizhu"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="备注" prop="beizhu">
					<el-input v-model="ruleForm.beizhu" placeholder="备注" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="公司账号" prop="gongsizhanghao">
					<el-input v-model="ruleForm.gongsizhanghao" placeholder="公司账号" clearable  :readonly="ro.gongsizhanghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="公司账号" prop="gongsizhanghao">
					<el-input v-model="ruleForm.gongsizhanghao" placeholder="公司账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="公司名称" prop="gongsimingcheng">
					<el-input v-model="ruleForm.gongsimingcheng" placeholder="公司名称" clearable  :readonly="ro.gongsimingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="公司名称" prop="gongsimingcheng">
					<el-input v-model="ruleForm.gongsimingcheng" placeholder="公司名称" readonly></el-input>
				</el-form-item>
			</template>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0"}' class="btn">
				<el-button class="btn3"  v-if="type!='info'" type="success" @click="onSubmit">
					<span class="icon iconfont icon-tijiao04" :style='{"margin":"0 2px","fontSize":"14px","color":"#fff","height":"40px"}'></span>
					确定
				</el-button>
				<el-button class="btn4" v-if="type!='info'" type="success" @click="back()">
					<span class="icon iconfont icon-quxiao19" :style='{"margin":"0 2px","fontSize":"14px","color":"#fff","height":"40px"}'></span>
					取消
				</el-button>
				<el-button class="btn5" v-if="type=='info'" type="success" @click="back()">
					<span class="icon iconfont icon-fanhui" :style='{"margin":"0 2px","fontSize":"14px","color":"#fff","height":"40px"}'></span>
					返回
				</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				gongziyuefen : false,
				jiazhengzhanghao : false,
				jiazhengxingming : false,
				jibengongzi : false,
				jiabanjiangjin : false,
				jixiaojiangli : false,
				quanqinjiangli : false,
				wuxianyijin : false,
				koukuanjine : false,
				shifagongzi : false,
				beizhu : false,
				gongsizhanghao : false,
				gongsimingcheng : false,
			},
			
			
			ruleForm: {
				gongziyuefen: '',
				jiazhengzhanghao: '',
				jiazhengxingming: '',
				jibengongzi: '',
				jiabanjiangjin: '',
				jixiaojiangli: '',
				quanqinjiangli: '',
				wuxianyijin: '',
				koukuanjine: '',
				shifagongzi: '',
				beizhu: '',
				gongsizhanghao: '',
				gongsimingcheng: '',
			},
		
			gongziyuefenOptions: [],
			jiazhengzhanghaoOptions: [],

			
			rules: {
				gongziyuefen: [
				],
				jiazhengzhanghao: [
				],
				jiazhengxingming: [
				],
				jibengongzi: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				jiabanjiangjin: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				jixiaojiangli: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				quanqinjiangli: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				wuxianyijin: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				koukuanjine: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				shifagongzi: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				beizhu: [
				],
				gongsizhanghao: [
				],
				gongsimingcheng: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {
		shifagongzi: {
			get: function () {
				return 0+parseFloat(this.ruleForm.jibengongzi==""?0:this.ruleForm.jibengongzi)+parseFloat(this.ruleForm.jiabanjiangjin==""?0:this.ruleForm.jiabanjiangjin)+parseFloat(this.ruleForm.jixiaojiangli==""?0:this.ruleForm.jixiaojiangli)+parseFloat(this.ruleForm.quanqinjiangli==""?0:this.ruleForm.quanqinjiangli)-parseFloat(this.ruleForm.wuxianyijin==""?0:this.ruleForm.wuxianyijin)-parseFloat(this.ruleForm.koukuanjine==""?0:this.ruleForm.koukuanjine) || 0
			}
		},



	},
    components: {
    },
	created() {
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='gongziyuefen'){
							this.ruleForm.gongziyuefen = obj[o];
							this.ro.gongziyuefen = true;
							continue;
						}
						if(o=='jiazhengzhanghao'){
							this.ruleForm.jiazhengzhanghao = obj[o];
							this.ro.jiazhengzhanghao = true;
							continue;
						}
						if(o=='jiazhengxingming'){
							this.ruleForm.jiazhengxingming = obj[o];
							this.ro.jiazhengxingming = true;
							continue;
						}
						if(o=='jibengongzi'){
							this.ruleForm.jibengongzi = obj[o];
							this.ro.jibengongzi = true;
							continue;
						}
						if(o=='jiabanjiangjin'){
							this.ruleForm.jiabanjiangjin = obj[o];
							this.ro.jiabanjiangjin = true;
							continue;
						}
						if(o=='jixiaojiangli'){
							this.ruleForm.jixiaojiangli = obj[o];
							this.ro.jixiaojiangli = true;
							continue;
						}
						if(o=='quanqinjiangli'){
							this.ruleForm.quanqinjiangli = obj[o];
							this.ro.quanqinjiangli = true;
							continue;
						}
						if(o=='wuxianyijin'){
							this.ruleForm.wuxianyijin = obj[o];
							this.ro.wuxianyijin = true;
							continue;
						}
						if(o=='koukuanjine'){
							this.ruleForm.koukuanjine = obj[o];
							this.ro.koukuanjine = true;
							continue;
						}
						if(o=='shifagongzi'){
							this.ruleForm.shifagongzi = obj[o];
							this.ro.shifagongzi = true;
							continue;
						}
						if(o=='beizhu'){
							this.ruleForm.beizhu = obj[o];
							this.ro.beizhu = true;
							continue;
						}
						if(o=='gongsizhanghao'){
							this.ruleForm.gongsizhanghao = obj[o];
							this.ro.gongsizhanghao = true;
							continue;
						}
						if(o=='gongsimingcheng'){
							this.ruleForm.gongsimingcheng = obj[o];
							this.ro.gongsimingcheng = true;
							continue;
						}
				}
			}
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					var json = data.data;
					if(((json.gongsizhanghao!=''&&json.gongsizhanghao) || json.gongsizhanghao==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.gongsizhanghao = json.gongsizhanghao
						this.ro.gongsizhanghao = true;
					}
					if(((json.gongsimingcheng!=''&&json.gongsimingcheng) || json.gongsimingcheng==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.gongsimingcheng = json.gongsimingcheng
						this.ro.gongsimingcheng = true;
					}
				} else {
					this.$message.error(data.msg);
				}
			});
            this.gongziyuefenOptions = "一月,二月,三月,四月,五月,六月,七月,八月,九月,十月,十一月,十二月".split(',')
            this.$http({
				url: `option/jiazhengrenyuan/jiazhengzhanghao`,
				method: "get"
            }).then(({ data }) => {
				if (data && data.code === 0) {
					this.jiazhengzhanghaoOptions = data.data;
				} else {
					this.$message.error(data.msg);
				}
            });
			
		},
			// 下二随
			jiazhengzhanghaoChange () {
				this.$http({
					url: `follow/jiazhengrenyuan/jiazhengzhanghao?columnValue=`+ this.ruleForm.jiazhengzhanghao,
					method: "get"
				}).then(({ data }) => {
					if (data && data.code === 0) {
						if(data.data.jiazhengxingming){
							this.ruleForm.jiazhengxingming = data.data.jiazhengxingming
						}
					} else {
						this.$message.error(data.msg);
					}
				});
			},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `xinzixinxi/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {
        this.ruleForm.shifagongzi = this.shifagongzi
var objcross = this.$storage.getObj('crossObj');
      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
		this.$refs["ruleForm"].validate(valid => {
			if (valid) {
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid = crossuserid;
					this.ruleForm.crossrefid = crossrefid;
					let params = { 
						page: 1, 
						limit: 10, 
						crossuserid:this.ruleForm.crossuserid,
						crossrefid:this.ruleForm.crossrefid,
					} 
				this.$http({ 
					url: "xinzixinxi/page", 
					method: "get", 
					params: params 
				}).then(({ 
					data 
				}) => { 
					if (data && data.code === 0) { 
						if(data.data.total>=crossoptnum) {
							this.$message.error(this.$storage.get('tips'));
							return false;
						} else {
							this.$http({
								url: `xinzixinxi/${!this.ruleForm.id ? "save" : "update"}`,
								method: "post",
								data: this.ruleForm
							}).then(({ data }) => {
								if (data && data.code === 0) {
									this.$message({
										message: "操作成功",
										type: "success",
										duration: 1500,
										onClose: () => {
											this.parent.showFlag = true;
											this.parent.addOrUpdateFlag = false;
											this.parent.xinzixinxiCrossAddOrUpdateFlag = false;
											this.parent.search();
											this.parent.contentStyleChange();
										}
									});
								} else {
									this.$message.error(data.msg);
								}
							});

						}
					} else { 
				} 
			});
		} else {
			this.$http({
				url: `xinzixinxi/${!this.ruleForm.id ? "save" : "update"}`,
				method: "post",
			   data: this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "操作成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.parent.showFlag = true;
							this.parent.addOrUpdateFlag = false;
							this.parent.xinzixinxiCrossAddOrUpdateFlag = false;
							this.parent.search();
							this.parent.contentStyleChange();
						}
					});
				} else {
					this.$message.error(data.msg);
			   }
			});
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.xinzixinxiCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
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
	.add-update-preview .el-input-number ::v-deep .el-input__inner {
		text-align: left;
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
	.add-update-preview .el-input-number ::v-deep .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number ::v-deep .el-input-number__increase {
		display: none;
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
	
	.add-update-preview ::v-deep .upload .upload-img {
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
	
	.add-update-preview .btn .btn1 {
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
	
	.add-update-preview .btn .btn1:hover {
				opacity: 0.5;
			}
	
	.add-update-preview .btn .btn2 {
				border: 0;
				cursor: pointer;
				border-radius: 5px;
				padding: 0 14px;
				margin: 4px;
				outline: none;
				color: #fff;
				background: #000000;
				width: auto;
				font-size: 14px;
				height: 40px;
			}
	
	.add-update-preview .btn .btn2:hover {
				opacity: 0.5;
			}
	
	.add-update-preview .btn .btn3 {
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
	
	.add-update-preview .btn .btn3:hover {
				opacity: 0.5;
			}
	
	.add-update-preview .btn .btn4 {
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
	
	.add-update-preview .btn .btn4:hover {
				opacity: 0.5;
			}
	
	.add-update-preview .btn .btn5 {
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
	
	.add-update-preview .btn .btn5:hover {
				opacity: 0.5;
			}
</style>
