<style lang="scss" src="./css/login.scss" scoped></style>
<template>
	<div>
		<div class="login" @touchmove.prevent>
			<div class="go-back"></div>
			<section>
				<h2>{{ title }}</h2>
				<p class="mobile gray-font" v-if="isNo">手机号码</p>
				<p class="telcode" v-else>我们向 {{ tel }} 发送了一个验证码。请输入该验证码。</p>
				<div class="init" v-if="isNo">
					<em>+86</em><input type="tel" ref="userInit" maxlength="11" oninput="value=value.replace(/[^\d]/g,'')" placeholder="请输入手机号" v-model="tel"><i class="iclose" v-if="tel" @click="tel = ''"></i>
				</div>
				<div class="init" v-else>
					<input class="code" maxlength="6" oninput="value=value.replace(/[^\d]/g,'')" type="tel" placeholder="- - - - - -" v-model="smsCode">
					<span v-if="Time">{{ downTime }} 后重新发送</span>
					<span v-else class="sms">重新发送</span>
				</div>
				<div class="line"></div>
				<p class="tip gray-font" v-if="isNo">登录即创建账户</p>
			</section>
			<button v-if="isNo" class="button" :class="{'next': !isTel, 'send': isTel, 'over': isTel && isOver}" @click="sendCode"></button>
			<button v-else class="button" :class="{'next': !isTel, 'send': isTel, 'loading': isLoading}"  @click="userLogin"><img src="./i/loading01.png" v-if="isLoading"></button>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'login',
		data() {
			return {
				tel: '',
				isNo: true,
				isOver: false,
				title: '请输入您的手机号码',
				smsCode: '',
				isLoading: false,
				Time: 60,
				downTime: '00:60'

			}
		},
		mounted () {
		},
		methods: {
			sendCode() {
				// 发送短信
			},
			userLogin() {
				// 登陆
			}
		},
		computed: {
			isTel() {
				if (!this.isNo) {
					if (this.smsCode.length > 5) {
						return true
					} else {
						return false
					}
				}
			}
		}
	}
</script>
<style lang="scss">
@charset "utf-8";
.bg{
	background-color: rgba(#000, 0.4);
	height: 100vh;
	width: 100vw;
	top: 0;
	position: absolute;
}
.loginModal {
	.modal-inner{
		background: #fff;
	}
	.modal-text{
		color: #000;
		p{
			font-size: .24rem;
			color: #999;
			padding: .3rem 0 0;
		}
	}
	.modal-button{
		color: #999;
		background: #fff;
	}
	.modal-button:first-child:last-child, .modal-button:last-child {
		color: #FF4A4A;
		background: #fff;
		border-radius: 0;
	}
}
</style>


