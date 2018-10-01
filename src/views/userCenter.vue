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
	.orderNo{
		margin-left: 15px;
	}
	.productImg{
		width: 30px;
		height: 60px;
		margin-left: 10px;
	}
	.order{
		border: 1px #e8eaec solid; 
		font-size: 10px;

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
        		<Col span="21">
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
		                         		 <Rate value="5"/>
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
                    <Card style="width:auto;height:auto;">
                         <Tabs>
						    <TabPane label="最近订单">
						    	<div class="" style="font-size:">
						    		<Row :gutter="3">
						    			<Col span="12">
						    				<p style="margin-left:15px">订单详情</p>
						    			</Col>
						    			<Col span="3">
						    				<p>收货人</p>
						    			</Col>
						    			<Col span="3">
						    				<p>金额</p>
						    			</Col>
						    			<Col span="3">
						    				<p>状态</p>
						    			</Col>
						    			<Col span="3">
						    				<p>操作</p>
						    			</Col>
						    		</Row>

						    		<!-- 订单列表 -->
									<div class="order">
						    			<Row>
						    				<Col span="24" style="background:#e8eaec;padding:3px">
						    					<Row>
							    					<Col span="6">
							    						<div class="orderNo">2018-09-06 00:21:09</div>
							    					</Col>
							    					<Col span="16">
							    						<div class="orderNo">订单号：77674671228</div>
							    					</Col>
							    					<Col span="2">
							    						<Icon type="ios-trash-outline" size="25"/>
							    					</Col>
							    				</Row>	
						    				</Col>
						    				<Col span="24" style="padding:5px">
						    					<Col span="12">
						    						<Row :gutter="6">
						    							<Col span="7">
						    								<div class="productImg">
						    									<img src="../images/sumsong.jpg" width="100px" height="100%">
						    								</div>
						    							</Col>
						    							<Col span="10">
						    								<a href="" style="font-size:10px;color:#515a6e">
																三星（SAMSUNG）27英寸2K/QHD高分 1800R曲率量子点技术 HDMI/DP全高清接口 
						    								</a>
						    							</Col>
						    							<Col span="7">
								    						<P style="margin-left:30px">X 1</P>
								    					</Col>
						    						</Row>
						    					</Col>
						    					<Col span="3">
						    						<P>奉家伟</P>
						    					</Col>
						    					<Col span="3"><P>2999.00</P></Col>
						    					<Col span="3"><P>已完成</P></Col>
						    					<Col span="3"><P>评价</P></Col>
						    				</Col>
						    			</Row>
						    		</div>
						    		<br>
						    		<!-- 订单列表end -->

						    		<!-- 订单列表 -->
									<div class="order">
						    			<Row>
						    				<Col span="24" style="background:#e8eaec;padding:3px">
						    					<Row>
							    					<Col span="6">
							    						<div class="orderNo">2018-09-06 00:21:09</div>
							    					</Col>
							    					<Col span="16">
							    						<div class="orderNo">订单号：77674671228</div>
							    					</Col>
							    					<Col span="2">
							    						<Icon type="ios-trash-outline" size="25"/>
							    					</Col>
							    				</Row>	
						    				</Col>
						    				<Col span="24" style="padding:5px">
						    					<Col span="12">
						    						<!-- 这里开始循环 -->
						    						<Row :gutter="6">
						    							<Col span="7">
						    								<div class="productImg">
						    									<img src="../images/sumsong.jpg" width="100px" height="100%">
						    								</div>
						    							</Col>
						    							<Col span="10">
						    								<a href="" style="font-size:10px;color:#515a6e">
																三星（SAMSUNG）27英寸2K/QHD高分 1800R曲率量子点技术 HDMI/DP全高清接口 
						    								</a>
						    							</Col>
						    							<Col span="7">
								    						<P style="margin-left:30px">X 1</P>
								    					</Col>
						    						</Row>
						    						<hr>
													<!-- 循环结束 -->
													<Row :gutter="6">
						    							<Col span="7">
						    								<div class="productImg">
						    									<img src="../images/sumsong.jpg" width="100px" height="100%">
						    								</div>
						    							</Col>
						    							<Col span="10">
						    								<a href="" style="font-size:10px;color:#515a6e">
																三星（SAMSUNG）27英寸2K/QHD高分 1800R曲率量子点技术 HDMI/DP全高清接口 
						    								</a>
						    							</Col>
						    							<Col span="7">
								    						<P style="margin-left:30px">X 1</P>
								    					</Col>
						    						</Row>
						    					</Col>
						    					<Col span="3">
						    						<P>奉家伟</P>
						    					</Col>
						    					<Col span="3"><P>2999.00</P></Col>
						    					<Col span="3"><P>已完成</P></Col>
						    					<Col span="3"><P>评价</P></Col>
						    				</Col>
						    			</Row>
						    		</div>
						    		<!-- 订单列表end -->
						    	</div>
						    </TabPane>
						    <TabPane label="全部订单">全部订单</TabPane>
						</Tabs>
                    </Card>
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
    export default {
        components:{
            Top,
            foot
        },
        data () {
           return {
           	 
        	}
        },
        methods: {
            
        }
    }
</script>