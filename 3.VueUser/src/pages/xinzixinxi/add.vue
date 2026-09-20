<template>
<div :style='{"width":"100%","padding":"30px 10% 40px","margin":"0px auto","position":"relative","background":"#fff"}'>
    <el-form
	  :style='{"border":"0px solid #e9e9e9","width":"100%","padding":"0px","margin":"0px 0","position":"relative","background":"#fff"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
    >
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}'  label="工资月份" prop="gongziyuefen">
            <el-select v-model="ruleForm.gongziyuefen" placeholder="请选择工资月份" :disabled=" false  ||ro.gongziyuefen" >
              <el-option
                  v-for="(item,index) in gongziyuefenOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="家政账号" prop="jiazhengzhanghao">
            <el-select  @change="jiazhengzhanghaoChange" v-model="ruleForm.jiazhengzhanghao" placeholder="请选择家政账号">
              <el-option
                  v-for="(item,index) in jiazhengzhanghaoOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="家政姓名" prop="jiazhengxingming">
            <el-input v-model="ruleForm.jiazhengxingming" 
                placeholder="家政姓名" clearable :disabled=" false  ||ro.jiazhengxingming"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="基本工资" prop="jibengongzi">
			<el-input-number v-model="ruleForm.jibengongzi" placeholder="基本工资" :disabled="ro.jibengongzi"></el-input-number>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="加班奖金" prop="jiabanjiangjin">
			<el-input-number v-model="ruleForm.jiabanjiangjin" placeholder="加班奖金" :disabled="ro.jiabanjiangjin"></el-input-number>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="绩效奖励" prop="jixiaojiangli">
			<el-input-number v-model="ruleForm.jixiaojiangli" placeholder="绩效奖励" :disabled="ro.jixiaojiangli"></el-input-number>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="全勤奖励" prop="quanqinjiangli">
			<el-input-number v-model="ruleForm.quanqinjiangli" placeholder="全勤奖励" :disabled="ro.quanqinjiangli"></el-input-number>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="五险一金" prop="wuxianyijin">
			<el-input-number v-model="ruleForm.wuxianyijin" placeholder="五险一金" :disabled="ro.wuxianyijin"></el-input-number>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="扣款金额" prop="koukuanjine">
			<el-input-number v-model="ruleForm.koukuanjine" placeholder="扣款金额" :disabled="ro.koukuanjine"></el-input-number>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="实发工资" prop="shifagongzi">
              <el-input v-model="shifagongzi" placeholder="实发工资" disabled></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="备注" prop="beizhu">
            <el-input v-model="ruleForm.beizhu" 
                placeholder="备注" clearable :disabled=" false  ||ro.beizhu"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="公司账号" prop="gongsizhanghao">
            <el-input v-model="ruleForm.gongsizhanghao" 
                placeholder="公司账号" clearable :disabled=" false  ||ro.gongsizhanghao"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="公司名称" prop="gongsimingcheng">
            <el-input v-model="ruleForm.gongsimingcheng" 
                placeholder="公司名称" clearable :disabled=" false  ||ro.gongsimingcheng"></el-input>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"#333","borderRadius":"0px","background":"#b4ebcc","width":"100px","lineHeight":"36px","fontSize":"14px","height":"36px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"1px solid #eee","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#333","borderRadius":"0px","background":"none","width":"100px","lineHeight":"36px","fontSize":"14px","height":"36px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
	  let self = this
      return {
        id: '',
        baseUrl: '',
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
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
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
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          jiabanjiangjin: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          jixiaojiangli: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          quanqinjiangli: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          wuxianyijin: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          koukuanjine: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          shifagongzi: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          beizhu: [
          ],
          gongsizhanghao: [
          ],
          gongsimingcheng: [
          ],
        },
		centerType: false,
      };
    },
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
		if(this.$route.query.centerType){
			this.centerType = true
		}
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
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
        }else if(type=='edit'){
			this.info()
		}
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
            if((json.gongsizhanghao!=''&&json.gongsizhanghao) || json.gongsizhanghao==0){
                this.ruleForm.gongsizhanghao = json.gongsizhanghao;
				this.ro.gongsizhanghao = true;
            }
            if((json.gongsimingcheng!=''&&json.gongsimingcheng) || json.gongsimingcheng==0){
                this.ruleForm.gongsimingcheng = json.gongsimingcheng;
				this.ro.gongsimingcheng = true;
            }
          }
        });
        this.gongziyuefenOptions = "一月,二月,三月,四月,五月,六月,七月,八月,九月,十月,十一月,十二月".split(',')
        this.$http.get('option/jiazhengrenyuan/jiazhengzhanghao', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.jiazhengzhanghaoOptions = res.data.data;
          }
        });

		if (localStorage.getItem('raffleType') && localStorage.getItem('raffleType') != null) {
			localStorage.removeItem('raffleType')
			setTimeout(() => {
				this.onSubmit()
			}, 300)
		}
      },
      // 下二随
      jiazhengzhanghaoChange () {
        this.$http.get('follow/jiazhengrenyuan/jiazhengzhanghao?columnValue=' + this.ruleForm.jiazhengzhanghao, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            if(res.data.data.jiazhengxingming){
              this.ruleForm.jiazhengxingming = res.data.data.jiazhengxingming
            }
          }
        });
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`xinzixinxi/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {
			this.ruleForm.shifagongzi = this.shifagongzi
			//更新跨表属性
			var crossuserid;
			var crossrefid;
			var crossoptnum;
			this.$refs["ruleForm"].validate(valid => {
				if(valid) {
					if(this.type=='cross'){
						var statusColumnName = localStorage.getItem('statusColumnName');
						var statusColumnValue = localStorage.getItem('statusColumnValue');
						if(statusColumnName && statusColumnName!='') {
							var obj = JSON.parse(localStorage.getItem('crossObj'));
							if(!statusColumnName.startsWith("[")) {
								for (var o in obj){
									if(o==statusColumnName){
										obj[o] = statusColumnValue;
									}
								}
								var table = localStorage.getItem('crossTable');
								this.$http.post(table+'/update', obj).then(res => {});
							} else {
								crossuserid=Number(localStorage.getItem('frontUserid'));
								crossrefid=obj['id'];
								crossoptnum=localStorage.getItem('statusColumnName');
								crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
							}
						}
					}
					if(crossrefid && crossuserid) {
						this.ruleForm.crossuserid=crossuserid;
						this.ruleForm.crossrefid=crossrefid;
						var params = {
							page: 1,
							limit: 10,
							crossuserid:crossuserid,
							crossrefid:crossrefid,
						}
						this.$http.get('xinzixinxi/list', {
							params: params
						}).then(res => {
							if(res.data.data.total>=crossoptnum) {
								this.$message({
									message: localStorage.getItem('tips'),
									type: 'error',
									duration: 1500,
								});
								return false;
							} else {
								// 跨表计算


								this.$http.post(`xinzixinxi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
									if (res.data.code == 0) {
										this.$message({
											message: '操作成功',
											type: 'success',
											duration: 1500,
											onClose: () => {
												this.$router.go(-1);
											}
										});
									} else {
										this.$message({
											message: res.data.msg,
											type: 'error',
											duration: 1500
										});
									}
								});
							}
						});
					} else {


						this.$http.post(`xinzixinxi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
							if (res.data.code == 0) {
								this.$message({
									message: '操作成功',
									type: 'success',
									duration: 1500,
									onClose: () => {
										this.$router.go(-1);
									}
								});
							} else {
								this.$message({
									message: res.data.msg,
									type: 'error',
									duration: 1500
								});
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
			this.$router.go(-1);
		},
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item ::v-deep .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 120px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item ::v-deep .el-form-item__content {
	  margin-left: 120px;
	}
	
	.add-update-preview .el-input ::v-deep .el-input__inner {
	  padding: 0 12px;
	  color: #666;
	  font-size: 14px;
	  border-color: #ddd;
	  border-radius: 0px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  background: none;
	  width: auto;
	  border-width: 0 0 1px;
	  border-style: solid;
	  min-width: 300px;
	  height: 40px;
	}
	.add-update-preview .el-input-number ::v-deep .el-input__inner {
		text-align: left;
	  padding: 0 12px;
	  color: #666;
	  font-size: 14px;
	  border-color: #ddd;
	  border-radius: 0px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  background: none;
	  width: auto;
	  border-width: 0 0 1px;
	  border-style: solid;
	  min-width: 300px;
	  height: 40px;
	}
	.add-update-preview .el-input-number ::v-deep .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number ::v-deep .el-input-number__increase {
		display: none;
	}
	
	.add-update-preview .el-select ::v-deep .el-input__inner {
	  border-radius: 0px;
	  padding: 0 10px;
	  color: #666;
	  background: none;
	  width: auto;
	  font-size: 14px;
	  border-color: #ddd;
	  border-width: 0 0 1px;
	  border-style: solid;
	  min-width: 300px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor ::v-deep .el-input__inner {
	  border-radius: 0px;
	  padding: 0 10px 0 30px;
	  color: #666;
	  background: none;
	  width: auto;
	  font-size: 14px;
	  border-color: #ddd;
	  border-width: 0 0 1px;
	  border-style: solid;
	  min-width: 300px;
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
	  cursor: pointer;
	  color: #999;
	  font-size: 24px;
	  border-color: #ddd;
	  line-height: 54px;
	  border-radius: 2px;
	  background: none;
	  width: auto;
	  border-width: 0 0 1px;
	  border-style: solid;
	  text-align: center;
	  min-width: 300px;
	  height: 54px;
	}
	
	.add-update-preview ::v-deep .el-upload-list .el-upload-list__item {
	  cursor: pointer;
	  color: #999;
	  font-size: 24px;
	  border-color: #ddd;
	  line-height: 54px;
	  border-radius: 2px;
	  background: none;
	  width: auto;
	  border-width: 0 0 1px;
	  border-style: solid;
	  text-align: center;
	  min-width: 300px;
	  height: 54px;
	}
	
	.add-update-preview ::v-deep .el-upload .el-icon-plus {
	  cursor: pointer;
	  color: #999;
	  font-size: 24px;
	  border-color: #ddd;
	  line-height: 54px;
	  border-radius: 2px;
	  background: none;
	  width: auto;
	  border-width: 0 0 1px;
	  border-style: solid;
	  text-align: center;
	  min-width: 300px;
	  height: 54px;
	}
	
	.add-update-preview .el-textarea ::v-deep .el-textarea__inner {
	  border: 1px solid #ddd;
	  border-radius: 0px;
	  padding: 12px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  color: #666;
	  background: none;
	  width: 600px;
	  font-size: 14px;
	  height: 120px;
	}
</style>
