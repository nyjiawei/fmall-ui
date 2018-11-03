<style>
	.userHead{
		width: 70px;
		height:70px;
		border-radius:70px;
	}
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
	.order-price{
		width: 10%;
		text-align: center;
	}
	.order-status{
		width: 10%;
		text-align: center;
	}
	.order-opertion{
		width: 15%;
		text-align: center;
	}
	.order-delete{
		width: 10%;
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
			    				<div class="order-person">{{ item.person }}</div>
			    				<div class="order-price">￥{{ item.totalPrices }}</div>
								<div class="order-status">{{ item.status }}</div>
								<div class="order-opertion">
									<P>评价</P>
								</div>
								<div class="order-delete">
									 <Button shape="circle" icon="md-close" size="small" @click="handleDelete(index)"></Button>
								</div>
							</div>
			    		</div>
			    		<!-- 订单列表end -->
			    		
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
			
		},
		data () {
            return {
                orderList: []
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