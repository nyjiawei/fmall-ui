<style>
	
	.productImg{
		width: 60px;
		height: 60px;
		margin-left: 10px;
	}
	.order{
		border: 1px #e8eaec solid; 
		font-size: 10px;
		margin-bottom: 20px;
	}
	.order-header{
		background:#e8eaec;
		padding:5px;
		width: 100%;
	}
	.order-header-content{
		display: inline-block;
		margin-left: 20px;
	}
	.order-content{
		width: 100%;
	}
	.order-content div{
		display: inline-block;
	}
	.order-productList{
		width: 40%;
	}
	.order-person{
		width: 10%;
		text-align: center;
	}
	.userInfo{
		width: 55%;
		position: absolute;
		margin-top: 0;
	}
	.order-price{
		width: 20%;
		text-align: center;
		height: 100%;
	}
	.order-status{
		width: 20%;
		text-align: center;
	}
	.order-opertion{
		width: 20%;
		text-align: center;
	}
	.order-opertion a{
		text-align: center;
		color: #657180;
	}
	.order-delete{
		width: 20%;
		text-align: center;
	}
	.product{
		width: 100%;
	}
	.productImage{
		width: 25%;
	}
	.productName{
		width: 50%;
	}
	.amount{
		width: 10%;
		text-align: center;
	}
</style>
<template>
	<div class="">
        <Card style="width:auto;min-height:850px;height:auto!important;" shadow>
             <Tabs>
			    <TabPane label="最近订单">
		    		<!-- 订单列表 -->
					<div class="order" v-for="item in orderList">
						<div class="order-header">
							<div class="order-header-content">订单号：{{ item.id }}</div>
		    				<div class="order-header-content">{{ item.createTime }}</div>
						</div>
						<div class="order-content">
							<div class="order-productList">
								<div class="product" v-for="product in item.productList">
									<div class="productImage">
										<div class="productImg">
	    									<img :src="product.image" width="100%" height="100%">
	    								</div>
									</div>
    								<div class="productName">{{ product.name }}</div>
    								<div class="amount">x {{ product.amount }} </div>
								</div>
							</div>
							<div class="userInfo">
								<div class="order-person">
									<span><Icon type="ios-contact-outline" size="30"/></span>
									<br/>
									<span>{{ item.person }}</span>
								</div>
								<div class="order-price">￥{{ item.totalPrices }}</div>
								<div class="order-status">{{ item.status }}</div>
								<div class="order-opertion">
									<a href="">评价</a><br>
									<a href="">查看详细</a><br>
									<a href="">再次购买</a><br>
								</div>
								<div class="order-delete">
									<Button shape="circle" icon="md-close" size="small" @click="del(item)"></Button>
								</div>
							</div>
						</div>
		    		</div>
		    		<!-- 订单列表end -->
		    		<Modal v-model="modal3" width="360">
				        <p slot="header" style="color:#f60;text-align:center">
				            <Icon type="ios-information-circle"></Icon>
				            <span>删除订单</span>
				        </p>
				        <div style="text-align:center">
				            <p>确认删除?您稍后可以在回收站里找回</p>
				        </div>
				        <div slot="footer">
				            <Button type="error" size="large" long :loading="modal_loading" @click="deleteOrder()">Delete</Button>
				        </div>
				    </Modal>
			    </TabPane>
			    <TabPane label="全部订单">全部订单</TabPane>
			</Tabs>
        </Card>
    </div>
</template>
<script>
    export default {
    	computed:{
		 	loadOrderList() {
               return this.orderList;
		 	}
		},
		methods:{
			del(object) {
				this.orderId = object.id;
            	this.modal3 = true;
			},
			deleteOrder() {
            	this.modal_loading = true;
            	this.axios.delete('/user/orders',{
            		params:{
                		orderId: this.orderId
                	}
                	}).then(res =>{
                		if (res.data.message == "SUCCESS") {
                			this.modal_loading = false;
                    		this.modal3 = false;
                    		this.getOrderList();
                			this.$Message.success('Successfully delete');
                		}
                });
            },
            getOrderList () {
	           	this.axios.get('/user/orders',{
	           	    params:{
	                    status: '', 
	                    orderNo: ''
	                }
	            }).then(res => {
	                this.orderList = res.data.entities;
	            });
        	}
		},
		data () {
            return {
                orderList: [],
                modal3: false,
                modal_loading: false,
                orderId: 0
            }
        },
		mounted () {
           	this.axios.get('/user/orders',{
           	    params:{
                    status: '', 
                    orderNo: ''
                }
            }).then(res => {
                this.orderList = res.data.entities;
            });
        }
    }
</script>