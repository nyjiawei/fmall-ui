const routers = [
    {
        path: '/',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },

    {
        path: '/register',
        meta: {
            title: '用户注册'
        },
        component: (resolve) => require(['./views/reg.vue'], resolve)
    },

    {
        path: '/login',
        meta: {
            title: '登录'
        },
        component: (resolve) => require(['./views/login.vue'], resolve)
    },

    {
        path: '/user/userCenter',
        meta: {
            title: '个人中心'
        },
        component: (resolve) => require(['./views/userCenter.vue'], resolve)
    },

    {
        path: '/icart',
        meta: {
            title: '我的购物车'
        },
        component: (resolve) => require(['./views/icart.vue'], resolve)
    },

    {
        path: '/product',
        meta: {
            title: '产品'
        },
        component: (resolve) => require(['./views/productList.vue'], resolve)
    },

];
export default routers;