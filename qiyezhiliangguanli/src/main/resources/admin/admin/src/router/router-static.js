import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import chengpinjianyan from '@/views/modules/chengpinjianyan/list'
    import chouyangbiaozhun from '@/views/modules/chouyangbiaozhun/list'
    import chuhuojianyan from '@/views/modules/chuhuojianyan/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gonggao from '@/views/modules/gonggao/list'
    import gongzuorenyuan from '@/views/modules/gongzuorenyuan/list'
    import kongzhituchushihua from '@/views/modules/kongzhituchushihua/list'
    import lailiaojianyan from '@/views/modules/lailiaojianyan/list'
    import lifangtu from '@/views/modules/lifangtu/list'
    import zhichengjianyan from '@/views/modules/zhichengjianyan/list'
    import zhifangtu from '@/views/modules/zhifangtu/list'
    import dictionaryChengpinjianyan from '@/views/modules/dictionaryChengpinjianyan/list'
    import dictionaryChouyangbiaozhun from '@/views/modules/dictionaryChouyangbiaozhun/list'
    import dictionaryChuhuojianyan from '@/views/modules/dictionaryChuhuojianyan/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryJianyangongzhong from '@/views/modules/dictionaryJianyangongzhong/list'
    import dictionaryJianyanxiangmu from '@/views/modules/dictionaryJianyanxiangmu/list'
    import dictionaryJianyanyiqi from '@/views/modules/dictionaryJianyanyiqi/list'
    import dictionaryJianyanzhongxin from '@/views/modules/dictionaryJianyanzhongxin/list'
    import dictionaryJieguo from '@/views/modules/dictionaryJieguo/list'
    import dictionaryJinyong from '@/views/modules/dictionaryJinyong/list'
    import dictionaryKongzhituchushihua from '@/views/modules/dictionaryKongzhituchushihua/list'
    import dictionaryLailiaojianyan from '@/views/modules/dictionaryLailiaojianyan/list'
    import dictionaryLifangtu from '@/views/modules/dictionaryLifangtu/list'
    import dictionaryQuexiandengji from '@/views/modules/dictionaryQuexiandengji/list'
    import dictionaryQuexianyuanyin from '@/views/modules/dictionaryQuexianyuanyin/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryZhichengjianyan from '@/views/modules/dictionaryZhichengjianyan/list'
    import dictionaryZhifangtu from '@/views/modules/dictionaryZhifangtu/list'
    import dictionaryZhiliangdengji from '@/views/modules/dictionaryZhiliangdengji/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
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
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryChengpinjianyan',
        name: '成品检验类型',
        component: dictionaryChengpinjianyan
    }
    ,{
        path: '/dictionaryChouyangbiaozhun',
        name: '抽样标准类型',
        component: dictionaryChouyangbiaozhun
    }
    ,{
        path: '/dictionaryChuhuojianyan',
        name: '出货检验类型',
        component: dictionaryChuhuojianyan
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryJianyangongzhong',
        name: '检验工种',
        component: dictionaryJianyangongzhong
    }
    ,{
        path: '/dictionaryJianyanxiangmu',
        name: '检验项目',
        component: dictionaryJianyanxiangmu
    }
    ,{
        path: '/dictionaryJianyanyiqi',
        name: '检验仪器',
        component: dictionaryJianyanyiqi
    }
    ,{
        path: '/dictionaryJianyanzhongxin',
        name: '检验中心',
        component: dictionaryJianyanzhongxin
    }
    ,{
        path: '/dictionaryJieguo',
        name: '检测结果',
        component: dictionaryJieguo
    }
    ,{
        path: '/dictionaryJinyong',
        name: '账户状态',
        component: dictionaryJinyong
    }
    ,{
        path: '/dictionaryKongzhituchushihua',
        name: '控制图初始化类型',
        component: dictionaryKongzhituchushihua
    }
    ,{
        path: '/dictionaryLailiaojianyan',
        name: '来料检验类型',
        component: dictionaryLailiaojianyan
    }
    ,{
        path: '/dictionaryLifangtu',
        name: '立方图输出类型',
        component: dictionaryLifangtu
    }
    ,{
        path: '/dictionaryQuexiandengji',
        name: '缺陷等级',
        component: dictionaryQuexiandengji
    }
    ,{
        path: '/dictionaryQuexianyuanyin',
        name: '缺陷原因类型',
        component: dictionaryQuexianyuanyin
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryZhichengjianyan',
        name: '制成检验类型',
        component: dictionaryZhichengjianyan
    }
    ,{
        path: '/dictionaryZhifangtu',
        name: '直方图输出类型',
        component: dictionaryZhifangtu
    }
    ,{
        path: '/dictionaryZhiliangdengji',
        name: '质量等级',
        component: dictionaryZhiliangdengji
    }


    ,{
        path: '/chengpinjianyan',
        name: '成品检验',
        component: chengpinjianyan
      }
    ,{
        path: '/chouyangbiaozhun',
        name: '抽样标准',
        component: chouyangbiaozhun
      }
    ,{
        path: '/chuhuojianyan',
        name: '出货检验',
        component: chuhuojianyan
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告',
        component: gonggao
      }
    ,{
        path: '/gongzuorenyuan',
        name: '工作人员',
        component: gongzuorenyuan
      }
    ,{
        path: '/kongzhituchushihua',
        name: '控制图初始化',
        component: kongzhituchushihua
      }
    ,{
        path: '/lailiaojianyan',
        name: '来料检验',
        component: lailiaojianyan
      }
    ,{
        path: '/lifangtu',
        name: '输出立方图',
        component: lifangtu
      }
    ,{
        path: '/zhichengjianyan',
        name: '制成检验',
        component: zhichengjianyan
      }
    ,{
        path: '/zhifangtu',
        name: '输出直方图',
        component: zhifangtu
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
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
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

export default router;
