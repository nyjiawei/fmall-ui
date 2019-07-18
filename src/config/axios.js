import axios from 'axios'
import {Message} from 'iview';//iview的信息提示框
import Router from '../router';

axios.defaults.baseURL = 'http://127.0.0.1:9001';
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers['XPS-Version'] = '1.0.0';
axios.defaults.headers['x-user-name'] = 'jiawei';
axios.defaults.withCredentials = true;

// http request 拦截器
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    if (localStorage.accessToken) { //判断token是否存在
        config.headers.accessToken = localStorage.accessToken;  //将token设置成请求头
    }  
    return config
    }, function (error) {
    // Do something with request error
    Message.error({
    message: '请求错误：' + error.message
    })
    return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
// console.log('response')
// Do something with response data
// console.log(response)
//返回参数是noLogin时，返回首页
if (response.data.code === 401) {
    localStorage.setItem('accessToken', null);
    Router.push({path:'/login'});
    Message.warning('当前会话过期,请重新登录');
}
return response
}, function (error) {
// Do something with response error
    let msg = error.message
    if (error.response.status === 401) {
        msg = '当前会话已过期。'
        Router.push('/login')
    }
    Message.error('响应错误：' + msg)
    return Promise.reject(error)
})

export default axios