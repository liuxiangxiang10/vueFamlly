import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

// history模式需要nigex

// # 项目部署在服务器/test目录下（访问地址：http://www.a.com/test）

// location ^~/test {
//      alias   D:/project/card-web/code/dist/;
//      try_files  $uri $uri/ @card;
//      access_log  logs/card_web.access.log ;
//      error_log  logs/card_web.error.log ;
//  }

//  location @card {
//      rewrite ^/(test)/(.+)$ /$1/index.html last;
//  }

//  # 项目部署在服务器/下（访问地址：http://www.a.com）
//  location / {
//      root   D:/project/card-web/code/dist/;
//      index  index.html index.htm;
//      try_files $uri $uri/ /index.html;
//  }

const baseRoute = [
  {
    path: '/'
  }
]

const notFoundRoute = [
  {
    path: '*',
    meta: {
      title: '页面丢失了404'
    },
    component: HelloWorld
  }
]

const router = new Router({
  mode: 'history', // 默认hash
  base: '/lxx/',
  routes: (r => {
    // let route = r.keys().map(key => r(key).default)
    let route = []
    r.keys().forEach(key => {
      let arr = r(key).default
      console.log('arr>>>', arr)
      if (Array.isArray(arr)) {
        for (let tempData of arr) {
          route.push(tempData)
        }
      } else {
        route.push(arr)
      }
    });
    if (process.env.NODE_ENV !== 'production') {
      let routeDatas = [...baseRoute, ...route, ...notFoundRoute]
      console.log('routeDatas>>>', routeDatas)
      let tempArr = []
      for (let item of routeDatas) {
        if (item) {
          console.log('item>>', item.path)
          tempArr.push({
            path: item.path,
            title: (item.meta && item.meta.title) ? item.meta.title : '无title'
          })
        }
      }
    }
    return [...baseRoute, ...route, ...notFoundRoute]
  })(require.context('../views', true, /^\.\/((?!\/)[\s\S])+\/route\.js$/)),
})

router.beforeEach((r, from, next) => { // beforeEach是router的钩子函数，在进入路由前执行
  console.log('beforeEach>>>', r)
  if (r.meta.title) { // 判断是否有标题
    document.title = r.meta.title
  }
  next() // 执行进入路由，如果不写就不会进入目标页
})

export default router
