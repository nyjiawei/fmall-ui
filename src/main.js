import Vue from 'vue';
import Vuex from 'vuex';
import iView from 'iview';
import iviewArea from 'iview-area';
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import axios from 'axios';


Vue.use(VueRouter);
Vue.use(iView);
Vue.use(Vuex);
Vue.use(iviewArea);

//axios公共请求参数
Vue.prototype.axios = axios;
axios.defaults.baseURL = 'http://127.0.0.1:9001';
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers['XPS-Version'] = '1.0.0';
axios.defaults.headers['x-user-name'] = 'fengjiawei';
axios.defaults.withCredentials = true;

// 路由配置
const RouterConfig = {
    // 使用 HTML5 的 History 路由模式
    mode: 'history',
    routes: Routers
};

const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

const store = new Vuex.Store({
    state: {
        productList: [],
        cartList: [],
        productCount: 0
    },
    getters: {},
    mutations: {
        //添加商品列表
        setProductList (state, data) {
            state.productList = data;
        },
        //商品计数
        setProductCount (state, data) {
            state.productCount = data;
        },
        // 添加到购物车
        addCart (state, id) {
            // 先判断购物车是否已有，如果有，数量+1
            const isAdded = state.cartList.find(item => item.id === id);
            if (isAdded) {
                isAdded.count ++;
            } else {
                state.cartList.push({
                    id: id,
                    count: 1
                })
            }
        },
        // 修改商品数量
        editCartCount (state, payload) {
            const product = state.cartList.find(item => item.id === payload.id);
            product.count += payload.count;
        },
        // 删除商品
        deleteCart (state, id) {
            const index = state.cartList.findIndex(item => item.id === id);
            state.cartList.splice(index, 1);
        },
        // 清空购物车
        emptyCart (state) {
            state.cartList = [];
        }
    },
    actions: {
        // 请求商品列表
        getProductList (context,arg) {
            axios.get('/product',{
                params:{
                    pageNo: arg.pageNo, 
                    pageSize: arg.pageSize
                }
            }).then(res => {
                context.commit('setProductList',res.data.entities);
                 context.commit('setProductCount',res.data.total_count);
            });
        }
    }   
});

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});
