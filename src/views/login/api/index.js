import Vue from 'vue'

export default {
    // 滑块校验发送短信
    sliderValidateSendSmsCode: params => {
        return Vue.http.post(Vue.$SERVICE_BASE_URL + '/customize/jn/sliderValidateSendSmsCode.htm', params)
    },
    // 绑定登录
    registerAndLoginWithThirdPartyUidByCode: params => {
        return Vue.http.post(Vue.$SERVICE_BASE_URL + '/baseinfo/jn/registerAndLoginWithThirdPartyUidByCode.htm', params)
    },
    // 短信登录
    mobileVerCodeLogin: params => {
        return Vue.http.post(Vue.$SERVICE_BASE_URL + '/baseinfo/jn/loginWithSmsCode.htm', params)
    },
    // 校验手机号是否存在
    checkPhoneUnique: params => {
        return Vue.http.post(Vue.$SERVICE_BASE_URL + '/anfbao/account/registry/validate.htm', params);
    },
    // 普通发送短信
    sendSMSCode: params => {
        return Vue.http.post(Vue.$SERVICE_BASE_URL + '/baseinfo/jn/sendRegisterOrLoginValidateCodeMessage.htm', params);
    },
    // 发送语音
    sendAudio: params => {
        return Vue.http.post(Vue.$SERVICE_BASE_URL + '/memberVoiceIC/memberVoiceIdentifyCode.htm', params);
    }
}
