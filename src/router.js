
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

    {
        path: '/order/commit',
        meta: {
            title: '提交订单'
        },
        component: (resolve) => require(['./views/commit.vue'], resolve)
    },

    {
        path: '/user',
        meta: {
            title: '个人中心'
        },
        component: (resolve) => require(['./views/userCenter.vue'], resolve),
        children: [
            {
                path: 'order',
                component: (resolve) => require(['./components/order.vue'], resolve)
            },
            {
                path: 'address',
                component: (resolve) => require(['./components/userAddress.vue'], resolve)
            }
        ]
    }
    
];
export default routers;