<template>
<div class="center-preview" :style='{"border":"0px solid #ddd","padding":"0px 0 0","margin":"20px auto","flexWrap":"wrap","background":"#fff","display":"block","width":"80%","position":"relative","justifyContent":"space-between"}'>
	<div class="title" :style='{"padding":"0 24px","margin":"0 0 20px","borderColor":"#fb3f52","color":"#fb3f52","textAlign":"left","background":"url(http://codegen.caihongy.cn/20231014/d40a8eadb6374590871ad91a8ca19cfc.png) no-repeat left bottom","borderWidth":"0 0 0px","width":"100%","fontSize":"22px","lineHeight":"44px","borderStyle":"solid","fontWeight":"600","height":"48px"}'>{{ title }}</div>
	
	<div class="info" :style='{"padding":"0px 20px","boxShadow":"0 0px 0px rgba(0, 0, 0, 0.3)","margin":"40px 0 0 5%","borderColor":"#28890b20","alignItems":"flex-start","display":"flex","float":"right","justifyContent":"space-between","borderRadius":"0px","flexWrap":"wrap","background":"none","borderWidth":"0px","width":"30%","borderStyle":"solid","height":"auto","order":"2"}'>
		<div :style='{"padding":"0px 20px","borderColor":"#eee","margin":"0 0 10px","color":"#333","textAlign":"left","letterSpacing":"3px","borderWidth":"0px","background":"linear-gradient(180deg, rgba(218,254,234,1) 0%, rgba(180,235,204,1) 100%),#b4ebcc","width":"50%","lineHeight":"60px","fontSize":"16px","borderStyle":"solid","fontWeight":"600","height":"60px"}'>个人信息</div>
		<div :style='{"border":"0px solid #eee","borderColor":"#1abc9e20","margin":"0 0 10px","borderWidth":"0 0 0px 0","background":"linear-gradient(180deg, rgba(218,254,234,1) 0%, rgba(180,235,204,1) 100%),#b4ebcc","width":"50%","fontSize":0,"borderStyle":"solid","height":"60px"}' v-if="userTableName=='jiazhengrenyuan'">
			<el-image :style='{"margin":"6px auto","borderColor":"#efefef","objectFit":"cover","borderRadius":"100%","borderWidth":"0 0 1px 0","display":"none","width":"48px","borderStyle":"solid","height":"48px"}' :src="sessionForm.touxiang?baseUrl + sessionForm.touxiang:require('@/assets/avator.png')" fit="cover"></el-image>
		</div>
		<div :style='{"border":"0px solid #eee","borderColor":"#1abc9e20","margin":"0 0 10px","borderWidth":"0 0 0px 0","background":"linear-gradient(180deg, rgba(218,254,234,1) 0%, rgba(180,235,204,1) 100%),#b4ebcc","width":"50%","fontSize":0,"borderStyle":"solid","height":"60px"}' v-if="userTableName=='fangzhu'">
			<el-image :style='{"margin":"6px auto","borderColor":"#efefef","objectFit":"cover","borderRadius":"100%","borderWidth":"0 0 1px 0","display":"none","width":"48px","borderStyle":"solid","height":"48px"}' :src="sessionForm.touxiang?baseUrl + sessionForm.touxiang:require('@/assets/avator.png')" fit="cover"></el-image>
		</div>
		<div :style='{"border":"0px solid #eee","borderColor":"#1abc9e20","margin":"0 0 10px","borderWidth":"0 0 0px 0","background":"linear-gradient(180deg, rgba(218,254,234,1) 0%, rgba(180,235,204,1) 100%),#b4ebcc","width":"50%","fontSize":0,"borderStyle":"solid","height":"60px"}' v-if="userTableName=='jiazhenggongsi'">
			<el-image :style='{"margin":"6px auto","borderColor":"#efefef","objectFit":"cover","borderRadius":"100%","borderWidth":"0 0 1px 0","display":"none","width":"48px","borderStyle":"solid","height":"48px"}' :src="sessionForm.fengmian?baseUrl + sessionForm.fengmian:require('@/assets/avator.png')" fit="cover"></el-image>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#1abc9e20","margin":"0 auto","borderWidth":"0 0 0px 0","display":"flex","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiazhengrenyuan'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"margin":"0 10px 0 0","fontSize":"14px","color":"#333","fontWeight":"600"}'>公司名称</div>
			<div :style='{"fontSize":"14px","color":"#999","textAlign":"left","flex":1}'>{{sessionForm.gongsimingcheng}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#1abc9e20","margin":"0 auto","borderWidth":"0 0 0px 0","display":"flex","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiazhengrenyuan'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"margin":"0 10px 0 0","fontSize":"14px","color":"#333","fontWeight":"600"}'>公司地址</div>
			<div :style='{"fontSize":"14px","color":"#999","textAlign":"left","flex":1}'>{{sessionForm.gongsidizhi}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#1abc9e20","margin":"0 auto","borderWidth":"0 0 0px 0","display":"flex","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiazhengrenyuan'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"margin":"0 10px 0 0","fontSize":"14px","color":"#333","fontWeight":"600"}'>负责人</div>
			<div :style='{"fontSize":"14px","color":"#999","textAlign":"left","flex":1}'>{{sessionForm.fuzeren}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#1abc9e20","margin":"0 auto","borderWidth":"0 0 0px 0","display":"flex","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiazhengrenyuan'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"margin":"0 10px 0 0","fontSize":"14px","color":"#333","fontWeight":"600"}'>家政账号</div>
			<div :style='{"fontSize":"14px","color":"#999","textAlign":"left","flex":1}'>{{sessionForm.jiazhengzhanghao}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#1abc9e20","margin":"0 auto","borderWidth":"0 0 0px 0","display":"flex","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiazhengrenyuan'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"margin":"0 10px 0 0","fontSize":"14px","color":"#333","fontWeight":"600"}'>家政姓名</div>
			<div :style='{"fontSize":"14px","color":"#999","textAlign":"left","flex":1}'>{{sessionForm.jiazhengxingming}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#1abc9e20","margin":"0 auto","borderWidth":"0 0 0px 0","display":"flex","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiazhengrenyuan'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"margin":"0 10px 0 0","fontSize":"14px","color":"#333","fontWeight":"600"}'>性别</div>
			<div :style='{"fontSize":"14px","color":"#999","textAlign":"left","flex":1}'>{{sessionForm.xingbie}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#1abc9e20","margin":"0 auto","borderWidth":"0 0 0px 0","display":"flex","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='fangzhu'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"margin":"0 10px 0 0","fontSize":"14px","color":"#333","fontWeight":"600"}'>房主账号</div>
			<div :style='{"fontSize":"14px","color":"#999","textAlign":"left","flex":1}'>{{sessionForm.fangzhuzhanghao}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#1abc9e20","margin":"0 auto","borderWidth":"0 0 0px 0","display":"flex","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='fangzhu'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"margin":"0 10px 0 0","fontSize":"14px","color":"#333","fontWeight":"600"}'>房主姓名</div>
			<div :style='{"fontSize":"14px","color":"#999","textAlign":"left","flex":1}'>{{sessionForm.fangzhuxingming}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#1abc9e20","margin":"0 auto","borderWidth":"0 0 0px 0","display":"flex","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='fangzhu'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"margin":"0 10px 0 0","fontSize":"14px","color":"#333","fontWeight":"600"}'>性别</div>
			<div :style='{"fontSize":"14px","color":"#999","textAlign":"left","flex":1}'>{{sessionForm.xingbie}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#1abc9e20","margin":"0 auto","borderWidth":"0 0 0px 0","display":"flex","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='fangzhu'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"margin":"0 10px 0 0","fontSize":"14px","color":"#333","fontWeight":"600"}'>手机号码</div>
			<div :style='{"fontSize":"14px","color":"#999","textAlign":"left","flex":1}'>{{sessionForm.shoujihaoma}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#1abc9e20","margin":"0 auto","borderWidth":"0 0 0px 0","display":"flex","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='fangzhu'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"margin":"0 10px 0 0","fontSize":"14px","color":"#333","fontWeight":"600"}'>地址</div>
			<div :style='{"fontSize":"14px","color":"#999","textAlign":"left","flex":1}'>{{sessionForm.dizhi}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#1abc9e20","margin":"0 auto","borderWidth":"0 0 0px 0","display":"flex","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiazhenggongsi'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"margin":"0 10px 0 0","fontSize":"14px","color":"#333","fontWeight":"600"}'>公司账号</div>
			<div :style='{"fontSize":"14px","color":"#999","textAlign":"left","flex":1}'>{{sessionForm.gongsizhanghao}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#1abc9e20","margin":"0 auto","borderWidth":"0 0 0px 0","display":"flex","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiazhenggongsi'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"margin":"0 10px 0 0","fontSize":"14px","color":"#333","fontWeight":"600"}'>公司名称</div>
			<div :style='{"fontSize":"14px","color":"#999","textAlign":"left","flex":1}'>{{sessionForm.gongsimingcheng}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#1abc9e20","margin":"0 auto","borderWidth":"0 0 0px 0","display":"flex","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiazhenggongsi'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"margin":"0 10px 0 0","fontSize":"14px","color":"#333","fontWeight":"600"}'>负责人</div>
			<div :style='{"fontSize":"14px","color":"#999","textAlign":"left","flex":1}'>{{sessionForm.fuzeren}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#1abc9e20","margin":"0 auto","borderWidth":"0 0 0px 0","display":"flex","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiazhenggongsi'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"margin":"0 10px 0 0","fontSize":"14px","color":"#333","fontWeight":"600"}'>公司地址</div>
			<div :style='{"fontSize":"14px","color":"#999","textAlign":"left","flex":1}'>{{sessionForm.gongsidizhi}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#1abc9e20","margin":"0 auto","borderWidth":"0 0 0px 0","display":"flex","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiazhenggongsi'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"margin":"0 10px 0 0","fontSize":"14px","color":"#333","fontWeight":"600"}'>服务电话</div>
			<div :style='{"fontSize":"14px","color":"#999","textAlign":"left","flex":1}'>{{sessionForm.fuwudianhua}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#1abc9e20","margin":"0 auto","borderWidth":"0 0 0px 0","display":"flex","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiazhenggongsi'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"margin":"0 10px 0 0","fontSize":"14px","color":"#333","fontWeight":"600"}'>注册时间</div>
			<div :style='{"fontSize":"14px","color":"#999","textAlign":"left","flex":1}'>{{sessionForm.zhuceshijian}}</div>
		</div>
		
	</div>
	
    <el-tabs tab-position="left" :style='{"padding":"0 20px 40px","margin":"40px 0 0","flexWrap":"wrap","background":"#fff","flex":"1","display":"flex","width":"65%","float":"left","order":"1"}' @tab-click="handleClick">
      <el-tab-pane label="个人中心">
        <el-form class="center-preview-pv" ref="sessionForm" :model="sessionForm" :rules="rules" label-width="100px">
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' v-if="userTableName=='jiazhengrenyuan'" label="公司名称" prop="gongsimingcheng">
            <el-select v-model="sessionForm.gongsimingcheng" placeholder="请选择公司名称"  @change="jiazhengrenyuangongsimingchengChange" >
              <el-option v-for="(item, index) in dynamicProp.gongsimingcheng" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' v-if="userTableName=='jiazhengrenyuan'" label="公司地址" prop="gongsidizhi">
            <el-input v-model="sessionForm.gongsidizhi" placeholder="公司地址" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' v-if="userTableName=='jiazhengrenyuan'" label="负责人" prop="fuzeren">
            <el-input v-model="sessionForm.fuzeren" placeholder="负责人" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' v-if="userTableName=='jiazhengrenyuan'" label="家政账号" prop="jiazhengzhanghao">
            <el-input v-model="sessionForm.jiazhengzhanghao" placeholder="家政账号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' v-if="userTableName=='jiazhengrenyuan'" label="家政姓名" prop="jiazhengxingming">
            <el-input v-model="sessionForm.jiazhengxingming" placeholder="家政姓名" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' v-if="userTableName=='jiazhengrenyuan'" label="头像" prop="touxiang">
			<file-upload
			tip="点击上传头像"
			action="file/upload"
			:limit="1"
			:multiple="true"
			:fileUrls="sessionForm.touxiang?sessionForm.touxiang:''"
			@change="jiazhengrenyuantouxiangHandleAvatarSuccess"
			></file-upload>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' v-if="userTableName=='jiazhengrenyuan'" label="性别" prop="xingbie">
            <el-select v-model="sessionForm.xingbie" placeholder="请选择性别" >
              <el-option v-for="(item, index) in dynamicProp.xingbie" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' v-if="userTableName=='jiazhengrenyuan'" label="联系电话" prop="lianxidianhua">
            <el-input v-model="sessionForm.lianxidianhua" placeholder="联系电话" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' v-if="userTableName=='jiazhengrenyuan'" label="服务类型" prop="fuwuleixing">
            <el-select v-model="sessionForm.fuwuleixing" placeholder="请选择服务类型" >
              <el-option v-for="(item, index) in dynamicProp.fuwuleixing" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' v-if="userTableName=='jiazhengrenyuan'" label="等级" prop="dengji">
            <el-select v-model="sessionForm.dengji" placeholder="请选择等级" >
              <el-option v-for="(item, index) in dynamicProp.dengji" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' v-if="userTableName=='fangzhu'" label="房主账号" prop="fangzhuzhanghao">
            <el-input v-model="sessionForm.fangzhuzhanghao" placeholder="房主账号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' v-if="userTableName=='fangzhu'" label="头像" prop="touxiang">
			<file-upload
			tip="点击上传头像"
			action="file/upload"
			:limit="1"
			:multiple="true"
			:fileUrls="sessionForm.touxiang?sessionForm.touxiang:''"
			@change="fangzhutouxiangHandleAvatarSuccess"
			></file-upload>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' v-if="userTableName=='fangzhu'" label="房主姓名" prop="fangzhuxingming">
            <el-input v-model="sessionForm.fangzhuxingming" placeholder="房主姓名" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' v-if="userTableName=='fangzhu'" label="性别" prop="xingbie">
            <el-select v-model="sessionForm.xingbie" placeholder="请选择性别" >
              <el-option v-for="(item, index) in dynamicProp.xingbie" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' v-if="userTableName=='fangzhu'" label="手机号码" prop="shoujihaoma">
            <el-input v-model="sessionForm.shoujihaoma" placeholder="手机号码" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' v-if="userTableName=='fangzhu'" label="地址" prop="dizhi">
            <el-input v-model="sessionForm.dizhi" placeholder="地址" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' v-if="userTableName=='jiazhenggongsi'" label="公司账号" prop="gongsizhanghao">
            <el-input v-model="sessionForm.gongsizhanghao" placeholder="公司账号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' v-if="userTableName=='jiazhenggongsi'" label="公司名称" prop="gongsimingcheng">
            <el-input v-model="sessionForm.gongsimingcheng" placeholder="公司名称" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' v-if="userTableName=='jiazhenggongsi'" label="负责人" prop="fuzeren">
            <el-input v-model="sessionForm.fuzeren" placeholder="负责人" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' v-if="userTableName=='jiazhenggongsi'" label="封面" prop="fengmian">
			<file-upload
			tip="点击上传封面"
			action="file/upload"
			:limit="1"
			:multiple="true"
			:fileUrls="sessionForm.fengmian?sessionForm.fengmian:''"
			@change="jiazhenggongsifengmianHandleAvatarSuccess"
			></file-upload>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' v-if="userTableName=='jiazhenggongsi'" label="公司地址" prop="gongsidizhi">
            <el-input v-model="sessionForm.gongsidizhi" placeholder="公司地址" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' v-if="userTableName=='jiazhenggongsi'" label="服务电话" prop="fuwudianhua">
            <el-input v-model="sessionForm.fuwudianhua" placeholder="服务电话" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' v-if="userTableName=='jiazhenggongsi'" label="注册时间" prop="zhuceshijian">
            <el-date-picker
              v-model="sessionForm.zhuceshijian"
              type="date"
              placeholder="注册时间" >
            </el-date-picker>
          </el-form-item>
		  <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' v-if="userTableName=='jiazhenggongsi'" label="公司介绍">
		    <editor
		        :style='{"minHeight":"250px","border":"1px solid #eee","outline":"none","color":"#333","borderRadius":"4px","width":"100%","lineHeight":"32px","fontSize":"14px"}'
		        v-model="sessionForm.gongsijieshao" 
		        class="editor" 
		        action="file/upload">
		    </editor>
		  </el-form-item>
          <el-form-item :style='{"padding":"0","margin":"0"}'>
            <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"#333","borderRadius":"0px","background":"#b4ebcc","width":"100px","lineHeight":"36px","fontSize":"14px","height":"36px"}' type="primary" @click="onSubmit('sessionForm')">更新信息</el-button>
            <el-button :style='{"border":"1px solid #eee","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#333","borderRadius":"0px","background":"none","width":"100px","lineHeight":"36px","fontSize":"14px","height":"36px"}' type="danger" @click="logout">退出登录</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
	  <el-tab-pane label="修改密码">
		<el-form class="center-preview-pv" ref="passwordForm" :model="passwordForm" :rules="passwordRules" label-width="100px">
			<el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' label="原密码" prop="password">
			  <el-input type="password" v-model="passwordForm.password" placeholder="原密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' label="新密码" prop="newpassword">
			  <el-input type="password" v-model="passwordForm.newpassword" placeholder="新密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"#fff","display":"inline-block"}' label="确认密码" prop="repassword">
			  <el-input type="password" v-model="passwordForm.repassword" placeholder="确认密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"padding":"0","margin":"0"}'>
			  <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"#333","borderRadius":"0px","background":"#b4ebcc","width":"100px","lineHeight":"36px","fontSize":"14px","height":"36px"}' type="primary" @click="updatePassword">修改密码</el-button>
			</el-form-item>
		</el-form>
	  </el-tab-pane>
		<el-tab-pane v-for="(item,index) in menuList" :key="index" v-if="hasBack(item.menu)" :label="item.child[0].menu" :name="item.child[0].tableName"></el-tab-pane>
      <el-tab-pane label="我的收藏"></el-tab-pane>
    </el-tabs>

</div>
</template>

<script>
  import config from '@/config/config'
  import menu from '@/config/menu'
  import Vue from 'vue'
  export default {
    //数据集合
    data() {
      return {
        title: '个人中心',
        baseUrl: config.baseUrl,
        sessionForm: {},
		passwordForm: {},
		passwordRules: {
			password: [
				{
					required: true,
					message: "密码不能为空",
					trigger: "blur"
				}
			],
			newpassword: [
				{
					required: true,
					message: "新密码不能为空",
					trigger: "blur"
				}
			],
			repassword: [
				{
					required: true,
					message: "确认密码不能为空",
					trigger: "blur"
				}
			]
		},
        rules: {},
		menuList: [],
        disabled: false,
        uploadUrl: config.baseUrl + 'file/upload',
        imageUrl: '',
        headers: {Token: localStorage.getItem('frontToken')},
        userTableName: localStorage.getItem('UserTableName'),
        dynamicProp: {},
      }
    },
    created() {
		let menus = menu.list()
		for(let x in menus){
			if(menus[x].tableName == this.userTableName){
				this.menuList = menus[x].backMenu
			}
		}
		if ('jiazhengrenyuan' == this.userTableName) {
			this.$set(this.sessionForm, 'gongsimingcheng', null);
		}
		if ('jiazhengrenyuan' == this.userTableName) {
			this.$set(this.sessionForm, 'gongsidizhi', null);
		}
		if ('jiazhengrenyuan' == this.userTableName) {
			this.$set(this.sessionForm, 'fuzeren', null);
		}
		if ('jiazhengrenyuan' == this.userTableName) {
			this.$set(this.sessionForm, 'jiazhengzhanghao', null);
		}
		if ('jiazhengrenyuan' == this.userTableName) {
			this.$set(this.sessionForm, 'mima', null);
		}
		if ('jiazhengrenyuan' == this.userTableName) {
			this.$set(this.sessionForm, 'jiazhengxingming', null);
		}
		if ('jiazhengrenyuan' == this.userTableName) {
			this.$set(this.sessionForm, 'touxiang', null);
		}
		if ('jiazhengrenyuan' == this.userTableName) {
			this.$set(this.sessionForm, 'xingbie', null);
		}
		if ('jiazhengrenyuan' == this.userTableName) {
			this.$set(this.sessionForm, 'lianxidianhua', null);
		}
		if ('jiazhengrenyuan' == this.userTableName) {
			this.$set(this.sessionForm, 'fuwuleixing', null);
		}
		if ('jiazhengrenyuan' == this.userTableName) {
			this.$set(this.sessionForm, 'dengji', null);
		}
		if ('jiazhengrenyuan' == this.userTableName) {
			this.$set(this.sessionForm, 'discussnum', null);
		}
		if ('jiazhengrenyuan' == this.userTableName) {
			this.$set(this.sessionForm, 'storeupnum', null);
		}
		if ('fangzhu' == this.userTableName) {
			this.$set(this.sessionForm, 'fangzhuzhanghao', null);
		}
		if ('fangzhu' == this.userTableName) {
			this.$set(this.sessionForm, 'mima', null);
		}
		if ('fangzhu' == this.userTableName) {
			this.$set(this.sessionForm, 'touxiang', null);
		}
		if ('fangzhu' == this.userTableName) {
			this.$set(this.sessionForm, 'fangzhuxingming', null);
		}
		if ('fangzhu' == this.userTableName) {
			this.$set(this.sessionForm, 'xingbie', null);
		}
		if ('fangzhu' == this.userTableName) {
			this.$set(this.sessionForm, 'shoujihaoma', null);
		}
		if ('fangzhu' == this.userTableName) {
			this.$set(this.sessionForm, 'dizhi', null);
		}
		if ('jiazhenggongsi' == this.userTableName) {
			this.$set(this.sessionForm, 'gongsizhanghao', null);
		}
		if ('jiazhenggongsi' == this.userTableName) {
			this.$set(this.sessionForm, 'mima', null);
		}
		if ('jiazhenggongsi' == this.userTableName) {
			this.$set(this.sessionForm, 'gongsimingcheng', null);
		}
		if ('jiazhenggongsi' == this.userTableName) {
			this.$set(this.sessionForm, 'fuzeren', null);
		}
		if ('jiazhenggongsi' == this.userTableName) {
			this.$set(this.sessionForm, 'fengmian', null);
		}
		if ('jiazhenggongsi' == this.userTableName) {
			this.$set(this.sessionForm, 'gongsidizhi', null);
		}
		if ('jiazhenggongsi' == this.userTableName) {
			this.$set(this.sessionForm, 'fuwudianhua', null);
		}
		if ('jiazhenggongsi' == this.userTableName) {
			this.$set(this.sessionForm, 'zhuceshijian', null);
		}
		if ('jiazhenggongsi' == this.userTableName) {
			this.$set(this.sessionForm, 'gongsijieshao', null);
		}
		if ('jiazhenggongsi' == this.userTableName) {
			this.$set(this.sessionForm, 'discussnum', null);
		}
		if ('jiazhenggongsi' == this.userTableName) {
			this.$set(this.sessionForm, 'storeupnum', null);
		}

		if ('jiazhengrenyuan' == this.userTableName&&this.rules['jiazhengzhanghao']){
			this.rules['jiazhengzhanghao'].push({ required: true, message: '请输入家政账号', trigger: 'blur' })
		}else if('jiazhengrenyuan' == this.userTableName&&!this.rules['jiazhengzhanghao']) {
			this.$set(this.rules, 'jiazhengzhanghao', [{ required: true, message: '请输入家政账号', trigger: 'blur' }]);
		}
		if ('jiazhengrenyuan' == this.userTableName&&this.rules['mima']){
			this.rules['mima'].push({ required: true, message: '请输入密码', trigger: 'blur' })
		}else if('jiazhengrenyuan' == this.userTableName&&!this.rules['mima']) {
			this.$set(this.rules, 'mima', [{ required: true, message: '请输入密码', trigger: 'blur' }]);
		}
		if ('jiazhengrenyuan' == this.userTableName&&this.rules['jiazhengxingming']){
			this.rules['jiazhengxingming'].push({ required: true, message: '请输入家政姓名', trigger: 'blur' })
		}else if('jiazhengrenyuan' == this.userTableName&&!this.rules['jiazhengxingming']) {
			this.$set(this.rules, 'jiazhengxingming', [{ required: true, message: '请输入家政姓名', trigger: 'blur' }]);
		}
		if ('jiazhengrenyuan' == this.userTableName) {
			this.$set(this.rules, 'lianxidianhua', [{ required: false, validator: this.$validate.isMobile, trigger: 'blur' }]);
		}
		if ('jiazhengrenyuan' == this.userTableName) {
			this.$set(this.rules, 'discussnum', [{ required: false, validator: this.$validate.isIntNumer, trigger: 'blur' }]);
		}
		if ('jiazhengrenyuan' == this.userTableName) {
			this.$set(this.rules, 'storeupnum', [{ required: false, validator: this.$validate.isIntNumer, trigger: 'blur' }]);
		}
		if ('fangzhu' == this.userTableName&&this.rules['fangzhuzhanghao']){
			this.rules['fangzhuzhanghao'].push({ required: true, message: '请输入房主账号', trigger: 'blur' })
		}else if('fangzhu' == this.userTableName&&!this.rules['fangzhuzhanghao']) {
			this.$set(this.rules, 'fangzhuzhanghao', [{ required: true, message: '请输入房主账号', trigger: 'blur' }]);
		}
		if ('fangzhu' == this.userTableName&&this.rules['mima']){
			this.rules['mima'].push({ required: true, message: '请输入密码', trigger: 'blur' })
		}else if('fangzhu' == this.userTableName&&!this.rules['mima']) {
			this.$set(this.rules, 'mima', [{ required: true, message: '请输入密码', trigger: 'blur' }]);
		}
		if ('fangzhu' == this.userTableName&&this.rules['fangzhuxingming']){
			this.rules['fangzhuxingming'].push({ required: true, message: '请输入房主姓名', trigger: 'blur' })
		}else if('fangzhu' == this.userTableName&&!this.rules['fangzhuxingming']) {
			this.$set(this.rules, 'fangzhuxingming', [{ required: true, message: '请输入房主姓名', trigger: 'blur' }]);
		}
		if ('fangzhu' == this.userTableName) {
			this.$set(this.rules, 'shoujihaoma', [{ required: false, validator: this.$validate.isMobile, trigger: 'blur' }]);
		}
		if ('jiazhenggongsi' == this.userTableName&&this.rules['gongsizhanghao']){
			this.rules['gongsizhanghao'].push({ required: true, message: '请输入公司账号', trigger: 'blur' })
		}else if('jiazhenggongsi' == this.userTableName&&!this.rules['gongsizhanghao']) {
			this.$set(this.rules, 'gongsizhanghao', [{ required: true, message: '请输入公司账号', trigger: 'blur' }]);
		}
		if ('jiazhenggongsi' == this.userTableName&&this.rules['mima']){
			this.rules['mima'].push({ required: true, message: '请输入密码', trigger: 'blur' })
		}else if('jiazhenggongsi' == this.userTableName&&!this.rules['mima']) {
			this.$set(this.rules, 'mima', [{ required: true, message: '请输入密码', trigger: 'blur' }]);
		}
		if ('jiazhenggongsi' == this.userTableName) {
			this.$set(this.rules, 'fuwudianhua', [{ required: false, validator: this.$validate.isMobile, trigger: 'blur' }]);
		}
		if ('jiazhenggongsi' == this.userTableName) {
			this.$set(this.rules, 'discussnum', [{ required: false, validator: this.$validate.isIntNumer, trigger: 'blur' }]);
		}
		if ('jiazhenggongsi' == this.userTableName) {
			this.$set(this.rules, 'storeupnum', [{ required: false, validator: this.$validate.isIntNumer, trigger: 'blur' }]);
		}

      this.init();
      this.sessionForm = JSON.parse(localStorage.getItem('sessionForm'))
    },
    //方法集合
    methods: {
      init() {
				if ('jiazhengrenyuan' == this.userTableName) {
          this.$http.get('option/jiazhenggongsi/gongsimingcheng', {emulateJSON: true}).then(res => {
            if (res.data.code == 0) {
              this.dynamicProp.gongsimingcheng = res.data.data;
			  this.$forceUpdate()
            }
          });
        }    
        if ('jiazhengrenyuan' == this.userTableName) {
          this.dynamicProp.xingbie = '男,女'.split(',');
        }
        if ('jiazhengrenyuan' == this.userTableName) {
          this.$http.get('option/fuwuleixing/fuwuleixing', {emulateJSON: true}).then(res => {
            if (res.data.code == 0) {
              this.dynamicProp.fuwuleixing = res.data.data;
			  this.$forceUpdate()
            }
          });
        }
        if ('jiazhengrenyuan' == this.userTableName) {
          this.dynamicProp.dengji = '金牌,银牌,铜牌'.split(',');
        }
        if ('fangzhu' == this.userTableName) {
          this.dynamicProp.xingbie = '男,女'.split(',');
        }
      },
	  setSession(){
		  localStorage.setItem('sessionForm',JSON.stringify(this.sessionForm))
	  },
      jiazhengrenyuangongsimingchengChange(value) {
        this.$http.get('follow/jiazhenggongsi/gongsimingcheng', {params: {columnValue: value}}).then(res => {
          if (res.data.code == 0) {
            this.sessionForm.gongsidizhi = res.data.data.gongsidizhi;
            this.sessionForm.fuzeren = res.data.data.fuzeren;
          }
        });
      },
      onSubmit(formName) {
		if(`jiazhengrenyuan` == this.userTableName && this.sessionForm.touxiang!=null){
			this.sessionForm.touxiang = this.sessionForm.touxiang.replace(new RegExp(this.$config.baseUrl,"g"),"");
		}
		if(`fangzhu` == this.userTableName && this.sessionForm.touxiang!=null){
			this.sessionForm.touxiang = this.sessionForm.touxiang.replace(new RegExp(this.$config.baseUrl,"g"),"");
		}
		if(`jiazhenggongsi` == this.userTableName && this.sessionForm.fengmian!=null){
			this.sessionForm.fengmian = this.sessionForm.fengmian.replace(new RegExp(this.$config.baseUrl,"g"),"");
		}
        this.$refs[formName].validate((valid) => {
			if (valid) {
				this.$http.post(this.userTableName + '/update', this.sessionForm).then(res => {
					if (res.data.code == 0) {
						this.setSession()
						this.$message({
							message: '更新成功',
							type: 'success',
							duration: 1500
						});
					}
				});
			} else {
				return false;
			}
        });
      },
      jiazhengrenyuantouxiangHandleAvatarSuccess(fileUrls) {
        this.sessionForm.touxiang = fileUrls;
      },
      fangzhutouxiangHandleAvatarSuccess(fileUrls) {
        this.sessionForm.touxiang = fileUrls;
      },
      jiazhenggongsifengmianHandleAvatarSuccess(fileUrls) {
        this.sessionForm.fengmian = fileUrls;
      },
      handleClick(tab, event) {
        switch(event.target.outerText) {
          case '个人中心':
            tab.$router.push('/index/center');
            break;
          case '修改密码':
            this.passwordForm = {
				password: '',
				newpassword: '',
				repassword: '',
			}
			this.$forceUpdate()
            break;
          case '我的收藏':
            localStorage.setItem('storeupType', 1);
            tab.$router.push('/index/storeup');
            break;
		  default:
		  	tab.$router.push(`/index/${tab.name}?centerType=1`);
        }

        this.title = event.target.outerText;
      },
	  async updatePassword(){
			this.$refs["passwordForm"].validate(async valid => {
				if (valid) {
					var password = "";
					if (this.sessionForm.mima) {
						password = this.sessionForm.mima;
					} else if (this.sessionForm.password) {
						password = this.sessionForm.password;
					}
					if (this.passwordForm.password != password) {
						this.$message.error("原密码错误");
						return;
					}
					if (this.passwordForm.newpassword != this.passwordForm.repassword) {
						this.$message.error("两次密码输入不一致");
						return;
					}
					if (this.passwordForm.newpassword == this.passwordForm.password) {
						this.$message.error("新密码与原密码相同！");
						return;
					}
					if (this.userTableName == 'fangzhu') {
					}
					this.sessionForm.password = this.passwordForm.newpassword;
					this.sessionForm.mima = this.passwordForm.newpassword;
					this.$http.post(`${this.userTableName}/update`,this.sessionForm).then(({data})=>{
						if (data && data.code === 0) {
							this.$message({
								message: "修改密码成功,下次登录系统生效",
								type: "success",
								duration: 1500,
								onClose: () => {
								}
							});
							this.setSession()
						} else {
							this.$message.error(data.msg);
						}
					});
				}
			})
	  },
      logout() {
        localStorage.clear();
        Vue.http.headers.common['Token'] = "";
        this.$router.push('/index/home');
        this.activeIndex = '0'
        localStorage.setItem('keyPath', this.activeIndex)
        this.$forceUpdate()
        this.$message({
            message: '登出成功',
            type: 'success',
            duration: 1500,
        });
      },
	  hasBack(name){
		  switch(name){
			case '我的收藏管理':
				return false
				break;
			default:
				return true
		  }
	  }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .center-preview {
  
    .el-tabs {
      & ::v-deep .el-tabs__header {
		.el-tabs__nav{
			overflow: auto;
		}
		::-webkit-scrollbar {
		  -webkit-appearance: none;
		  width: 6px;
		  height: 6px;
		}
		::-webkit-scrollbar-track {
		  background: rgba(0, 0, 0, 0.1);
		  border-radius: 0;
		}
		::-webkit-scrollbar-thumb {
		  cursor: pointer;
		  border-radius: 5px;
		  background: rgba(0, 0, 0, 0.15);
		  transition: color 0.2s ease;
		}
		::-webkit-scrollbar-thumb:hover {
		  background: rgba(0, 0, 0, 0.3);
		}
        .el-tabs__nav-wrap {
          margin: 0;
  
          &::after {
            content: none;
          }
        }
  
        .el-tabs__active-bar {
          display: none !important;
        }
      }
  
      .center-preview-pv {
        .el-date-editor.el-input {
          width: auto;
        }
  
        .balance {
          .el-input {
            width: auto;
          }
        }
      }
    }
  }
  
  .center-preview .el-tabs ::v-deep .el-tabs__header {
	padding: 0;
	margin: 0;
	background: #fff;
	width: 100%;
	border-color: #ea0012;
	border-width: 0 0 0px;
	position: relative;
	float: left;
	border-style: solid;
	height: auto;
  }
  
  .center-preview .el-tabs ::v-deep .el-tabs__header .el-tabs__item {
  	padding: 0 16px;
  	margin: 0;
  	color: #666;
  	font-weight: 500;
  	display: block;
  	font-size: 16px;
  	border-color: #fff;
  	line-height: 44px;
  	float: left;
  	background: none;
  	width: auto;
  	border-width: 0 0 4px;
  	position: relative;
  	border-style: solid;
  	text-align: center;
  	height: 48px;
  }
  
  .center-preview .el-tabs ::v-deep .el-tabs__header .el-tabs__item:hover {
  	padding: 0 16px;
  	color: #fb3f52;
  	background: none;
  	font-weight: 500;
  	font-size: 16px;
  	border-color: #fb3f52;
  	border-width: 0 0 4px;
  	line-height: 44px;
  	position: relative;
  	border-style: solid;
  	text-align: center;
  	height: 48px;
  }
  
  .center-preview .el-tabs ::v-deep .el-tabs__header .el-tabs__item.is-active {
  	padding: 0 16px;
  	margin: 0;
  	color: #e60012;
  	font-weight: 500;
  	display: block;
  	font-size: 16px;
  	border-color: #fb3f52;
  	line-height: 44px;
  	float: left;
  	background: none;
  	width: auto;
  	border-width: 0 0 4px;
  	position: relative;
  	border-style: solid;
  	text-align: center;
  	height: 48px;
  }
  
  .center-preview .el-tabs ::v-deep .el-tabs__content {
  	padding: 0px;
  	margin: 40px 0 0;
  	background: #fff;
  	width: 100%;
  }
  .center-preview .el-tabs ::v-deep .el-tabs__content .el-tab-pane {
  }
  
  .center-preview-pv .el-form-item ::v-deep .el-form-item__label {
  	padding: 0 10px 0 0;
  	color: #666;
  	font-weight: 500;
  	width: 100px;
  	font-size: 14px;
  	line-height: 40px;
  	text-align: right;
  }
  
  .center-preview-pv .el-form-item .el-form-item__content {
    margin-left: 100px;
  }
  
  .center-preview-pv .el-input ::v-deep .el-input__inner {
  	border-radius: 0px;
  	padding: 0 12px;
  	box-shadow: 0 0 0px rgba(64, 158, 255, .5);
  	outline: none;
  	color: #666;
  	width: auto;
  	font-size: 14px;
  	border-color: #ddd;
  	border-width: 0 0 1px;
  	border-style: solid;
  	min-width: 150px;
  	height: 40px;
  }
  
  .center-preview-pv .el-select ::v-deep .el-input__inner {
  	border-radius: 0px;
  	padding: 0 12px;
  	box-shadow: 0 0 0px rgba(64, 158, 255, .5);
  	outline: none;
  	color: #666;
  	width: auto;
  	font-size: 14px;
  	border-color: #ddd;
  	border-width: 0 0 1px;
  	border-style: solid;
  	min-width: 150px;
  	height: 40px;
  }
  
  .center-preview-pv .el-date-editor ::v-deep .el-input__inner {
  	border-radius: 0px;
  	padding: 0 10px 0 30px;
  	box-shadow: 0 0 0px rgba(64, 158, 255, .5);
  	outline: none;
  	color: #666;
  	width: 200px;
  	font-size: 14px;
  	border-color: #ddd;
  	border-width: 0 0 1px;
  	border-style: solid;
  	height: 40px;
  }
  
  .center-preview-pv ::v-deep .avatar-uploader-icon {
  	cursor: pointer;
  	border-radius: 2px;
  	color: #999;
  	width: 150px;
  	font-size: 24px;
  	border-color: #ddd;
  	border-width: 0 0 1px;
  	line-height: 44px;
  	border-style: solid;
  	text-align: center;
  	height: 44px;
  }
  
  .center-preview-pv .el-form-item.balance ::v-deep .el-input__inner {
  	border-radius: 0px;
  	padding: 0 12px;
  	color: #666;
  	display: inline-block;
  	width: 200px;
  	font-size: 14px;
  	border-color: #ddd;
  	border-width: 0 0 1px;
  	border-style: solid;
  	height: 36px;
  }
</style>
