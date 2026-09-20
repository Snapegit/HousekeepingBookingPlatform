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
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="派单编号" prop="paidanbianhao">
              <el-input v-model="ruleForm.paidanbianhao" placeholder="派单编号" disabled></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="服务名称" prop="fuwumingcheng">
            <el-input v-model="ruleForm.fuwumingcheng" 
                placeholder="服务名称" clearable :disabled=" false  ||ro.fuwumingcheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="服务类型" prop="fuwuleixing">
            <el-input v-model="ruleForm.fuwuleixing" 
                placeholder="服务类型" clearable :disabled=" false  ||ro.fuwuleixing"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="服务时间" prop="fuwushijian">
            <el-input v-model="ruleForm.fuwushijian" 
                placeholder="服务时间" clearable :disabled=" false  ||ro.fuwushijian"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="封面" v-if="type!='cross' || (type=='cross' && !ro.fengmian)" prop="fengmian">
            <file-upload
            tip="点击上传封面"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.fengmian?ruleForm.fengmian:''"
            @change="fengmianUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' class="upload" v-else label="封面" prop="fengmian">
                <img v-if="ruleForm.fengmian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.fengmian.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.fengmian.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="小时价格" prop="xiaoshijiage">
			<el-input-number v-model="ruleForm.xiaoshijiage" placeholder="小时价格" :disabled="ro.xiaoshijiage"></el-input-number>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="服务时长" prop="fuwushizhang">
            <el-input v-model.number="ruleForm.fuwushizhang" 
                placeholder="服务时长" clearable :disabled=" false  ||ro.fuwushizhang"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="总金额" prop="zongjine">
              <el-input v-model="zongjine" placeholder="总金额" disabled></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="房主账号" prop="fangzhuzhanghao">
            <el-input v-model="ruleForm.fangzhuzhanghao" 
                placeholder="房主账号" clearable :disabled=" false  ||ro.fangzhuzhanghao"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="房主姓名" prop="fangzhuxingming">
            <el-input v-model="ruleForm.fangzhuxingming" 
                placeholder="房主姓名" clearable :disabled=" false  ||ro.fangzhuxingming"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="地址" prop="dizhi">
            <el-input v-model="ruleForm.dizhi" 
                placeholder="地址" clearable :disabled=" false  ||ro.dizhi"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="公司账号" prop="gongsizhanghao">
            <el-input v-model="ruleForm.gongsizhanghao" 
                placeholder="公司账号" clearable :disabled=" false  ||ro.gongsizhanghao"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="公司名称" prop="gongsimingcheng">
            <el-input v-model="ruleForm.gongsimingcheng" 
                placeholder="公司名称" clearable :disabled=" false  ||ro.gongsimingcheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="负责人" prop="fuzeren">
            <el-input v-model="ruleForm.fuzeren" 
                placeholder="负责人" clearable :disabled=" false  ||ro.fuzeren"></el-input>
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
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="派单时间" prop="paidanshijian">
              <el-date-picker
				  :disabled=" false  ||ro.paidanshijian"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  v-model="ruleForm.paidanshijian" 
                  type="datetime"
                  placeholder="派单时间">
              </el-date-picker>
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
				paidanbianhao : false,
				fuwumingcheng : false,
				fuwuleixing : false,
				fuwushijian : false,
				fengmian : false,
				xiaoshijiage : false,
				fuwushizhang : false,
				zongjine : false,
				fangzhuzhanghao : false,
				fangzhuxingming : false,
				dizhi : false,
				gongsizhanghao : false,
				gongsimingcheng : false,
				fuzeren : false,
				jiazhengzhanghao : false,
				jiazhengxingming : false,
				paidanshijian : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          paidanbianhao: this.getUUID(),
          fuwumingcheng: '',
          fuwuleixing: '',
          fuwushijian: '',
          fengmian: '',
          xiaoshijiage: '',
          fuwushizhang: '',
          zongjine: '',
          fangzhuzhanghao: '',
          fangzhuxingming: '',
          dizhi: '',
          gongsizhanghao: '',
          gongsimingcheng: '',
          fuzeren: '',
          jiazhengzhanghao: '',
          jiazhengxingming: '',
          paidanshijian: '',
        },
        jiazhengzhanghaoOptions: [],


        rules: {
          paidanbianhao: [
          ],
          fuwumingcheng: [
          ],
          fuwuleixing: [
          ],
          fuwushijian: [
          ],
          fengmian: [
          ],
          xiaoshijiage: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          fuwushizhang: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          zongjine: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          fangzhuzhanghao: [
          ],
          fangzhuxingming: [
          ],
          dizhi: [
            { required: true, message: '地址不能为空', trigger: 'blur' },
          ],
          gongsizhanghao: [
          ],
          gongsimingcheng: [
          ],
          fuzeren: [
          ],
          jiazhengzhanghao: [
          ],
          jiazhengxingming: [
          ],
          paidanshijian: [
          ],
        },
		centerType: false,
      };
    },
    computed: {


        zongjine:{
            get: function () {
                return 1*this.ruleForm.xiaoshijiage*this.ruleForm.fuwushizhang
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
            if(o=='paidanbianhao'){
              this.ruleForm.paidanbianhao = obj[o];
              this.ro.paidanbianhao = true;
              continue;
            }
            if(o=='fuwumingcheng'){
              this.ruleForm.fuwumingcheng = obj[o];
              this.ro.fuwumingcheng = true;
              continue;
            }
            if(o=='fuwuleixing'){
              this.ruleForm.fuwuleixing = obj[o];
              this.ro.fuwuleixing = true;
              continue;
            }
            if(o=='fuwushijian'){
              this.ruleForm.fuwushijian = obj[o];
              this.ro.fuwushijian = true;
              continue;
            }
            if(o=='fengmian'){
              this.ruleForm.fengmian = obj[o].split(",")[0];
              this.ro.fengmian = true;
              continue;
            }
            if(o=='xiaoshijiage'){
              this.ruleForm.xiaoshijiage = obj[o];
              this.ro.xiaoshijiage = true;
              continue;
            }
            if(o=='fuwushizhang'){
              this.ruleForm.fuwushizhang = obj[o];
              this.ro.fuwushizhang = true;
              continue;
            }
            if(o=='zongjine'){
              this.ruleForm.zongjine = obj[o];
              this.ro.zongjine = true;
              continue;
            }
            if(o=='fangzhuzhanghao'){
              this.ruleForm.fangzhuzhanghao = obj[o];
              this.ro.fangzhuzhanghao = true;
              continue;
            }
            if(o=='fangzhuxingming'){
              this.ruleForm.fangzhuxingming = obj[o];
              this.ro.fangzhuxingming = true;
              continue;
            }
            if(o=='dizhi'){
              this.ruleForm.dizhi = obj[o];
              this.ro.dizhi = true;
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
            if(o=='fuzeren'){
              this.ruleForm.fuzeren = obj[o];
              this.ro.fuzeren = true;
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
            if(o=='paidanshijian'){
              this.ruleForm.paidanshijian = obj[o];
              this.ro.paidanshijian = true;
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
            if((json.fuzeren!=''&&json.fuzeren) || json.fuzeren==0){
                this.ruleForm.fuzeren = json.fuzeren;
				this.ro.fuzeren = true;
            }
          }
        });
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
        this.$http.get(`fuwupaidan/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {
			if(this.ruleForm.paidanbianhao){
				this.ruleForm.paidanbianhao = String(this.ruleForm.paidanbianhao)
			}
			this.ruleForm.zongjine = this.zongjine
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
						this.$http.get('fuwupaidan/list', {
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


								this.$http.post(`fuwupaidan/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
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


						this.$http.post(`fuwupaidan/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
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
      fengmianUploadChange(fileUrls) {
          this.ruleForm.fengmian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
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
