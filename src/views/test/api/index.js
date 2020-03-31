import Vue from 'vue'

export default {
    // 校验手机号
    check: params => {
        console.log('params>>>', params)
        return Vue.http.post(Vue.$SERVICE_BASE_URL + '/anfbao/account/registry/validate.htm', params)
    }
}
