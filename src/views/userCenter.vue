<style>
    .panel-heading>p{
        font-weight: bolder;
     	color: #464c5b;	
    }
     .panel{
     	margin-top: 20px;
     }
	.panel-body{
		margin: 10px;
		margin-left: 30px;
	}
	.panel-body>a{
		color: #464c5b;	
		font-size: 14px;
	}
	
</style>
<template>
	<div class="userCenter" style="background: #f8f8f9;">
		<!-- 头部组件 -->
		<Top></Top>
        <br>
        <br>
        <br>
        <!-- 内容 -->
        <div class="container content">
			<br>
        	<Row>
        		<Col span="3">
        			<div class="panel panel-default">
					    <div class="panel-heading">
					    	
					        <p><Icon type="md-planet" size="20"/>&nbsp;个人中心</p>
					    </div>
					    
					</div>
					 
					<div class="panel panel-default">
					    <div class="panel-heading">
					    	
					        <p>
					        	<Icon type="ios-paper" size="20"/>&nbsp;
					            我的订单
					        </p>
					    </div>
					    <div class="panel-body">
					        <a href="">近三个月订单</a>
				    	</div>
					</div>
					<div class="panel panel-default">
					    <div class="panel-heading">
					    	
					        <p>
					        	<Icon type="md-card" size="20"/>&nbsp;
					            我的资产
					        </p>
					    </div>
					    <div class="panel-body">
					       <a href=""> 我的优惠券</a>
				    	</div>
				    	<div class="panel-body">
					        <a href="">账户余额</a>
				    	</div>
				    	<div class="panel-body">
					        <a href="">我的金币</a>
				    	</div>
					</div>

					<div class="panel panel-default">
					    <div class="panel-heading">
					        <p>
					        	<Icon type="md-person" size="20"/>&nbsp;
					            我的资料
					        </p>
					    </div>
					    <div class="panel-body">
					        <a href="">个人资料</a>
				    	</div>
				    	<div class="panel-body">
					        <a href="">地址管理</a>
				    	</div>
				    	<div class="panel-body">
					        <a href="">安全设置</a>
				    	</div>
					</div>
					<div class="panel panel-default">
					    <div class="panel-heading">
					    	
					        <p>
					        	<Icon type="md-star" size="20"/>&nbsp;
					            <a href="" style="color: #464c5b;">我的收藏</a>
					        </p>
					    </div>
					</div>
        		</Col>
        		<Col span="21" >
        			<userAddress></userAddress>
        			<br>
        		</Col>
        	</Row>
        </div>
		<Footer style="background:#515a6e">
           <foot></foot> 
        </Footer>
        <!-- 回到到顶部组件 -->
        <BackTop></BackTop>
	</div>
</template>
<script>
    import Top from '../components/top.vue';
    import foot from '../components/footer.vue';
    import defaultUser from '../components/defaultUser.vue';
    import userAddress from '../components/userAddress.vue';
    export default {
        components:{
            Top,foot,defaultUser,userAddress
        },
        data () {
           return {
           	 
        	}
        },
        methods: {
            
        }
    }
</script>