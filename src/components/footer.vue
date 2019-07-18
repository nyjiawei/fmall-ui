<!-- 底部通用组件 -->
<style scoped lang="less">
    ul{
        list-style:none;
    } 
    p{
        color:#464c5b;
        font-size:12px;
        font-weight: bolder;
    }
    a{
        color:#464c5b;
        font-size:12px;
    }

    
</style>
<template> 
    <div class="container">
        <Breadcrumb separator=">">
            <BreadcrumbItem to="/">首页</BreadcrumbItem>
            <BreadcrumbItem to="/components/breadcrumb">分类</BreadcrumbItem>
            <BreadcrumbItem>当前页</BreadcrumbItem>
        </Breadcrumb>
        <br>
        <div class="row">
            <div class="col-md-3 shop">
                <p>购物指南</p>
                <ul>
                    <li><a href="#">购物流程</a></li>
                    <li><a href="#">会员介绍</a></li>
                    <li><a href="#">生活旅行</a></li>
                    <li><a href="#">常见问题</a></li>
                    <li><a href="#">联系客服</a></li>
                    <li><a href="#">关于我们</a></li>
                </ul>
            </div>
            <div class="col-md-3 shop">
                <p>配送方式</p>
                <ul>
                    <li><a href="#">上门自提</a></li>
                    <li><a href="#">配送服务查询</a></li>
                    <li><a href="#">配送费收取标准</a></li>
                    <li><a href="#">海外配送</a></li>
                    <li><a href="#">911限时达</a></li>
                </ul>
            </div>
            <div class="col-md-3 shop">
                <p>支付方式</p>
                <ul>
                    <li><a href="#">货到付款</a></li>
                    <li><a href="#">在线支付</a></li>
                    <li><a href="#">分期付款</a></li>
                    <li><a href="#">公司转账</a></li>
                </ul>
            </div>
            <div class="col-md-3 shop">
                <p>售后服务</p>
                <ul>
                    <li><a href="#">售后政策</a></li>
                    <li><a href="#">价格保护</a></li>
                    <li><a href="#">退款说明</a></li>
                    <li><a href="#">返修/退换货</a></li>
                    <li><a href="#">取消订单</a></li>
                </ul>
            </div>        
        </div>
        
        <div class="row" style="text-align: center;">
            <div class="col-md-12 shop">
                <a>Copyright &copy; 2014.Design by jiawei All rights reserved</a>
            </div>
        </div>
       
    </div>
</template>
<script>
    export default {
        
    }
</script>