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
	.userHead{
		width: 70px;
		height:70px;
		border-radius:70px;
	}
</style>
<template>
	<div class="userCenter" style="background: #f8f8f9;">
		<!-- 头部组件 -->
		<Top></Top>
        <br>
        <!-- 内容 -->
        <div class="container content">
        	<Card style="width:auto;height:auto;">
				<Row style="text-align: center">
					<Col span="9">
						<Row>
							<Col span="12">
		                         <div class="userHead">
		                         	<img src="../images/user2.jpg" width="100%" height="100%">
		                         </div>
		                    </Col>
	                        <Col span="12">
	                     		 <p>username</p>
	                     		 <p>等级:</p>
	                     		 <Rate value:5/>
	                        </Col>
		                       
	                     </Row>
	                </Col>
	                <Col span="5">
	                     <div class="panel-heading">
	                     	<p>可用优惠券</p>
	                     	<h4 style="color: #19be6b">6</h4>
	                     </div>
	                     <a href="" style="font-size:10px">去领券</a>
	                </Col>
	                <Col span="5">
	                     <div class="panel-heading">
	                     	 <p>待完成订单</p>
	                     	<h4 style="color: #ed4014">0</h4>
	                     </div>
	                     <a href="" style="font-size:10px">去看看</a>
	                </Col>
	                <Col span="5">
	                     <div class="panel-heading">
	                     	<p>我的余额</p>
	                     	<h4 style="color: #ff9900">0.00￥</h4>
	                     </div>
	                     <a href="" style="font-size:10px">充值</a>      
	                </Col>
	            </Row>
	            
	        </Card>
	       
        	<br>
        	<Row>
        		<Col span="5">
        			 <Card shadow :style="height">
			            <CellGroup>
			                <Cell title="个人中心" to="/user/order" selected/>
			                <Cell title="我的订单"/>
			                <Cell title="近三个月订单" to="/user/order"/>
			                <Cell title="地址管理" to="/user/address" />
			                <Cell icon="ios-card" title="我的资产" to="" />
			                <Cell title="我的优惠券" to="" />
			                <Cell title="账户余额" to="" />
			                <Cell title="我的金币" to="" />
			                <Cell title="安全设置" to="" />
			                <Cell title="个人资料" to="" />
			                <Cell title="我的收藏" to="" />
			            </CellGroup>
			        </Card>
        		</Col>
        		<Col span="19">
					<div ref="myheight">
        				<router-view></router-view>
        			</div>
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
    import order from '../components/order.vue';
    import userAddress from '../components/userAddress.vue';
    export default {
        components:{
            Top,foot,order,userAddress
        },
        data () {
           return {
               switchValue: true,
               height: ''
        	}
        },
        methods: {
           
        },
        mounted () {
           this.height= 'height:'+this.$refs.myheight.offsetHeight+'px';
        }
    }
</script>