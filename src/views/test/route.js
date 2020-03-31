export default [
    {
        path: '/test/routerTest',
        meta: {
            title: '路由测试',
        },
        component: r => require.ensure([], () => r(require('./routerTest')), 'routerTest')
    }
]
