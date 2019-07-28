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
		display:inline-block;
		margin:5px auto;
		width:70px;
		height:70px;
		border-radius:70px;
		-webkit-border-radius:70px;
		-moz-border-radius:70px;
		border:2px solid #fff;
		box-shadow:0 0 4px #ccc;
		overflow:hidden;
	}
	.userHead img{
		width:100%;
		min-height:100%;
	}
</style>
<template>
	<div class="userCenter">
		<!-- 头部组件 -->
		<Top></Top>
        <br>
        <!-- 内容 -->
        <div class="container content">
        	<Card style="width:auto;height:auto;">
				<Row style="text-align: center">
					<Col span="9">
						<div class="userHead">
							<img src="../images/user2.jpg">
						</div>
						<p>{{ username }}</p>
						<p>等级:</p>
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
			<Card >
				<Row>
					<Col span="4">
						<Menu :theme="theme" active-name="myself" mode="vertical" width="auto" @on-select="selected">
							<MenuItem name="myself">
								个人中心
							</MenuItem>
							<MenuItem name="myOrder">
								我的订单
							</MenuItem>
							<MenuItem name="addressManger">
								地址管理
							</MenuItem>
							<MenuItem name="3">
								我的资产
							</MenuItem>
							<MenuItem name="4">
								我的金币
							</MenuItem>
							<MenuItem name="safety">
								安全设置
							</MenuItem>
							<MenuItem name="4">
								个人资料
							</MenuItem>
							<MenuItem name="4">
								我的收藏
							</MenuItem>
						</Menu>
					</Col>
					<Col span="20">
						<div ref="myheight">
							<router-view></router-view>
						</div>
					</Col>
				</Row>
			</Card>
        </div>
		<Footer style="background:#F2F2F2">
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
			   username: localStorage.username,
               switchValue: true,
			   height: '',
			   theme:'light'
        	}
        },
        methods: {
           selected (name){
			    switch (name) {
                    case 'myself' :
                        this.$router.push({path:'/user/myself'});
                        break;
                    case 'myOrder' :
                        this.$router.push({path:'/user/order'});
                        break;
                    case 'safety' :
                          this.$router.push({path:'/user/safety'});
                          break;
                    case 'addressManger' :
                          this.$router.push({path:'/user/address'});
                          break;
                    case 'well-chosen' :
                          this.$router.push({path:'/well-chosen'});
                          break;
                    case 'all' :
                          this.$router.push({path:'/product'});
                          break;
                }
		   }
        },
        mounted () {
           this.height= 'height:'+this.$refs.myheight.offsetHeight+'px';
        }
    }
</script>