import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import aboutus from '@/views/modules/aboutus/list'
    import fuwuxinxi from '@/views/modules/fuwuxinxi/list'
    import jiedanxinxi from '@/views/modules/jiedanxinxi/list'
    import pingjiafangzhu from '@/views/modules/pingjiafangzhu/list'
    import discussjiazhengrenyuan from '@/views/modules/discussjiazhengrenyuan/list'
    import syslog from '@/views/modules/syslog/list'
    import jiazhengqianyue from '@/views/modules/jiazhengqianyue/list'
    import fuwuleixing from '@/views/modules/fuwuleixing/list'
    import jiazhenggongsi from '@/views/modules/jiazhenggongsi/list'
    import tousufankui from '@/views/modules/tousufankui/list'
    import fangzhu from '@/views/modules/fangzhu/list'
    import fuwupaidan from '@/views/modules/fuwupaidan/list'
    import xinzixinxi from '@/views/modules/xinzixinxi/list'
    import systemintro from '@/views/modules/systemintro/list'
    import chat from '@/views/modules/chat/list'
    import tousuchufa from '@/views/modules/tousuchufa/list'
    import config from '@/views/modules/config/list'
    import jiedanfankui from '@/views/modules/jiedanfankui/list'
    import pingjiajiazhengrenyuan from '@/views/modules/pingjiajiazhengrenyuan/list'
    import jiazhengrenyuan from '@/views/modules/jiazhengrenyuan/list'
    import discussjiazhenggongsi from '@/views/modules/discussjiazhenggongsi/list'
    import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/fuwuxinxi',
        name: '服务信息',
        component: fuwuxinxi
      }
      ,{
	path: '/jiedanxinxi',
        name: '接单信息',
        component: jiedanxinxi
      }
      ,{
	path: '/pingjiafangzhu',
        name: '评价房主',
        component: pingjiafangzhu
      }
      ,{
	path: '/discussjiazhengrenyuan',
        name: '家政人员评论',
        component: discussjiazhengrenyuan
      }
      ,{
	path: '/syslog',
        name: '系统日志',
        component: syslog
      }
      ,{
	path: '/jiazhengqianyue',
        name: '家政签约',
        component: jiazhengqianyue
      }
      ,{
	path: '/fuwuleixing',
        name: '服务类型',
        component: fuwuleixing
      }
      ,{
	path: '/jiazhenggongsi',
        name: '家政公司',
        component: jiazhenggongsi
      }
      ,{
	path: '/tousufankui',
        name: '投诉反馈',
        component: tousufankui
      }
      ,{
	path: '/fangzhu',
        name: '房主',
        component: fangzhu
      }
      ,{
	path: '/fuwupaidan',
        name: '服务派单',
        component: fuwupaidan
      }
      ,{
	path: '/xinzixinxi',
        name: '薪资信息',
        component: xinzixinxi
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/chat',
        name: '联系客服',
        component: chat
      }
      ,{
	path: '/tousuchufa',
        name: '投诉处罚',
        component: tousuchufa
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/jiedanfankui',
        name: '接单反馈',
        component: jiedanfankui
      }
      ,{
	path: '/pingjiajiazhengrenyuan',
        name: '评价家政人员',
        component: pingjiajiazhengrenyuan
      }
      ,{
	path: '/jiazhengrenyuan',
        name: '家政人员',
        component: jiazhengrenyuan
      }
      ,{
	path: '/discussjiazhenggongsi',
        name: '家政公司评论',
        component: discussjiazhenggongsi
      }
      ,{
	path: '/newstype',
        name: '公告信息分类',
        component: newstype
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
