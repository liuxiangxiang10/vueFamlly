export default [{
  path: '/login',
  meta: {
    title: '登录'
  },
  component: r => require.ensure([], () => r(require('./login')), 'login')
  }
]

