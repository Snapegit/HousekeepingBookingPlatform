import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import jiazhengrenyuanList from '../pages/jiazhengrenyuan/list'
import jiazhengrenyuanDetail from '../pages/jiazhengrenyuan/detail'
import jiazhengrenyuanAdd from '../pages/jiazhengrenyuan/add'
import fangzhuList from '../pages/fangzhu/list'
import fangzhuDetail from '../pages/fangzhu/detail'
import fangzhuAdd from '../pages/fangzhu/add'
import fuwuleixingList from '../pages/fuwuleixing/list'
import fuwuleixingDetail from '../pages/fuwuleixing/detail'
import fuwuleixingAdd from '../pages/fuwuleixing/add'
import jiazhenggongsiList from '../pages/jiazhenggongsi/list'
import jiazhenggongsiDetail from '../pages/jiazhenggongsi/detail'
import jiazhenggongsiAdd from '../pages/jiazhenggongsi/add'
import jiazhengqianyueList from '../pages/jiazhengqianyue/list'
import jiazhengqianyueDetail from '../pages/jiazhengqianyue/detail'
import jiazhengqianyueAdd from '../pages/jiazhengqianyue/add'
import fuwuxinxiList from '../pages/fuwuxinxi/list'
import fuwuxinxiDetail from '../pages/fuwuxinxi/detail'
import fuwuxinxiAdd from '../pages/fuwuxinxi/add'
import fuwupaidanList from '../pages/fuwupaidan/list'
import fuwupaidanDetail from '../pages/fuwupaidan/detail'
import fuwupaidanAdd from '../pages/fuwupaidan/add'
import jiedanxinxiList from '../pages/jiedanxinxi/list'
import jiedanxinxiDetail from '../pages/jiedanxinxi/detail'
import jiedanxinxiAdd from '../pages/jiedanxinxi/add'
import jiedanfankuiList from '../pages/jiedanfankui/list'
import jiedanfankuiDetail from '../pages/jiedanfankui/detail'
import jiedanfankuiAdd from '../pages/jiedanfankui/add'
import pingjiafangzhuList from '../pages/pingjiafangzhu/list'
import pingjiafangzhuDetail from '../pages/pingjiafangzhu/detail'
import pingjiafangzhuAdd from '../pages/pingjiafangzhu/add'
import pingjiajiazhengrenyuanList from '../pages/pingjiajiazhengrenyuan/list'
import pingjiajiazhengrenyuanDetail from '../pages/pingjiajiazhengrenyuan/detail'
import pingjiajiazhengrenyuanAdd from '../pages/pingjiajiazhengrenyuan/add'
import tousufankuiList from '../pages/tousufankui/list'
import tousufankuiDetail from '../pages/tousufankui/detail'
import tousufankuiAdd from '../pages/tousufankui/add'
import tousuchufaList from '../pages/tousuchufa/list'
import tousuchufaDetail from '../pages/tousuchufa/detail'
import tousuchufaAdd from '../pages/tousuchufa/add'
import xinzixinxiList from '../pages/xinzixinxi/list'
import xinzixinxiDetail from '../pages/xinzixinxi/detail'
import xinzixinxiAdd from '../pages/xinzixinxi/add'
import syslogList from '../pages/syslog/list'
import syslogDetail from '../pages/syslog/detail'
import syslogAdd from '../pages/syslog/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discussjiazhengrenyuanList from '../pages/discussjiazhengrenyuan/list'
import discussjiazhengrenyuanDetail from '../pages/discussjiazhengrenyuan/detail'
import discussjiazhengrenyuanAdd from '../pages/discussjiazhengrenyuan/add'
import discussjiazhenggongsiList from '../pages/discussjiazhenggongsi/list'
import discussjiazhenggongsiDetail from '../pages/discussjiazhenggongsi/detail'
import discussjiazhenggongsiAdd from '../pages/discussjiazhenggongsi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'jiazhengrenyuan',
					component: jiazhengrenyuanList
				},
				{
					path: 'jiazhengrenyuanDetail',
					component: jiazhengrenyuanDetail
				},
				{
					path: 'jiazhengrenyuanAdd',
					component: jiazhengrenyuanAdd
				},
				{
					path: 'fangzhu',
					component: fangzhuList
				},
				{
					path: 'fangzhuDetail',
					component: fangzhuDetail
				},
				{
					path: 'fangzhuAdd',
					component: fangzhuAdd
				},
				{
					path: 'fuwuleixing',
					component: fuwuleixingList
				},
				{
					path: 'fuwuleixingDetail',
					component: fuwuleixingDetail
				},
				{
					path: 'fuwuleixingAdd',
					component: fuwuleixingAdd
				},
				{
					path: 'jiazhenggongsi',
					component: jiazhenggongsiList
				},
				{
					path: 'jiazhenggongsiDetail',
					component: jiazhenggongsiDetail
				},
				{
					path: 'jiazhenggongsiAdd',
					component: jiazhenggongsiAdd
				},
				{
					path: 'jiazhengqianyue',
					component: jiazhengqianyueList
				},
				{
					path: 'jiazhengqianyueDetail',
					component: jiazhengqianyueDetail
				},
				{
					path: 'jiazhengqianyueAdd',
					component: jiazhengqianyueAdd
				},
				{
					path: 'fuwuxinxi',
					component: fuwuxinxiList
				},
				{
					path: 'fuwuxinxiDetail',
					component: fuwuxinxiDetail
				},
				{
					path: 'fuwuxinxiAdd',
					component: fuwuxinxiAdd
				},
				{
					path: 'fuwupaidan',
					component: fuwupaidanList
				},
				{
					path: 'fuwupaidanDetail',
					component: fuwupaidanDetail
				},
				{
					path: 'fuwupaidanAdd',
					component: fuwupaidanAdd
				},
				{
					path: 'jiedanxinxi',
					component: jiedanxinxiList
				},
				{
					path: 'jiedanxinxiDetail',
					component: jiedanxinxiDetail
				},
				{
					path: 'jiedanxinxiAdd',
					component: jiedanxinxiAdd
				},
				{
					path: 'jiedanfankui',
					component: jiedanfankuiList
				},
				{
					path: 'jiedanfankuiDetail',
					component: jiedanfankuiDetail
				},
				{
					path: 'jiedanfankuiAdd',
					component: jiedanfankuiAdd
				},
				{
					path: 'pingjiafangzhu',
					component: pingjiafangzhuList
				},
				{
					path: 'pingjiafangzhuDetail',
					component: pingjiafangzhuDetail
				},
				{
					path: 'pingjiafangzhuAdd',
					component: pingjiafangzhuAdd
				},
				{
					path: 'pingjiajiazhengrenyuan',
					component: pingjiajiazhengrenyuanList
				},
				{
					path: 'pingjiajiazhengrenyuanDetail',
					component: pingjiajiazhengrenyuanDetail
				},
				{
					path: 'pingjiajiazhengrenyuanAdd',
					component: pingjiajiazhengrenyuanAdd
				},
				{
					path: 'tousufankui',
					component: tousufankuiList
				},
				{
					path: 'tousufankuiDetail',
					component: tousufankuiDetail
				},
				{
					path: 'tousufankuiAdd',
					component: tousufankuiAdd
				},
				{
					path: 'tousuchufa',
					component: tousuchufaList
				},
				{
					path: 'tousuchufaDetail',
					component: tousuchufaDetail
				},
				{
					path: 'tousuchufaAdd',
					component: tousuchufaAdd
				},
				{
					path: 'xinzixinxi',
					component: xinzixinxiList
				},
				{
					path: 'xinzixinxiDetail',
					component: xinzixinxiDetail
				},
				{
					path: 'xinzixinxiAdd',
					component: xinzixinxiAdd
				},
				{
					path: 'syslog',
					component: syslogList
				},
				{
					path: 'syslogDetail',
					component: syslogDetail
				},
				{
					path: 'syslogAdd',
					component: syslogAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discussjiazhengrenyuan',
					component: discussjiazhengrenyuanList
				},
				{
					path: 'discussjiazhengrenyuanDetail',
					component: discussjiazhengrenyuanDetail
				},
				{
					path: 'discussjiazhengrenyuanAdd',
					component: discussjiazhengrenyuanAdd
				},
				{
					path: 'discussjiazhenggongsi',
					component: discussjiazhenggongsiList
				},
				{
					path: 'discussjiazhenggongsiDetail',
					component: discussjiazhenggongsiDetail
				},
				{
					path: 'discussjiazhenggongsiAdd',
					component: discussjiazhenggongsiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
