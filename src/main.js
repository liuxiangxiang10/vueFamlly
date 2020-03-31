// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import './base'
import './sass/comm.scss'

Vue.config.productionTip = false
Vue.use(VueResource);
/* eslint-disable no-new */

Vue.http.interceptors.push(function(request, next) {
  console.log('>>>>>>>>>>>>>>>>>>>.', 'httpIntercept', '网络请求开始拦截');
  request.method = 'POST';
  request.headers.set('chnflg', 'h5');
  next(function(response, a, b) { // 在响应之后传给then之前对response进行修改和逻辑判断。对于token时候已过期的判断，就添加在此处，页面中任何一次http请求都会先调用此处方法
      console.log('response>>>', response)
      return response;
  });
});



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
