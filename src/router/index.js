/**
 * Created by Shery丶Lee on 2019/5/13.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

//声明使用插件
Vue.use(VueRouter)


export default new VueRouter({
  //所有路由
  routes:[
    {
      path:'/msite',
      component:Msite,
      meta:{
        showfooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showfooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showfooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showfooter:true
      }
    },
    {
      path:'/',
      redirect:'/miste'
    },
    {
      path:'/login',
      component:Login
    }
  ]
})
