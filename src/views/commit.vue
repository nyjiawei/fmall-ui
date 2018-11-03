<style>
	.modifly{
		display: none;
	}
	.userAddress:hover{
		border: 1px solid #2d8cf0;
		cursor: pointer;
		.modifly{
		display: block;
		float:right;
		}
	}
	.userAddress{
		padding: 5px;
		border: 1px solid #dcdee2;
		margin-top: 10px;
		font-size: 15px;

	}
	.header{
		height: 100px;
		box-shadow: 0px 0px 5px #888888;
	}
	.address-header-content{
		display: inline-block;
		font-size: 14px;

	}
	.address-header{
		margin-top: 20px;
		padding: 5px;
		border-bottom: 3px solid #dddee1;
	}
	.address-content{
		border: 1px solid red;
	}
	
	.cart{
        background: #fff;
        min-height:500px;
    }
    .cart-header-main{
        padding: 8px 32px;
        overflow: hidden;
        border-bottom: 3px solid #dddee1;
        overflow: hidden;
    }
    .cart-empty{
        text-align: center;
        padding: 32px;
    }
    .cart-header-main div{
        text-align: center;
        float: left;
        font-size: 14px;
    }
    div.cart-info{
        width: 60%;
        text-align: left;
    }
    .cart-price{
        width: 10%;
    }
    .cart-count{
        width: 10%;
    }
    .cart-cost{
        width: 10%;
    }
    .cart-delete {
        width: 10%;
    }
    .cart-content-main{
        padding: 0 32px;
        height: 80px;
        line-height: 80px;
        text-align: center;
        border-bottom: 1.5px dashed #e9eaec;
        overflow: hidden;
    }
    .cart-content-main div{
        float: left;
    }
    .cart-content-main img{
        width: 80px;
        height: 80px;
        position: relative;
    }
    .cart-content-main span{
        font-size: 15px;
    }
    .cart-control-minus,
    .cart-control-add{
        display: inline-block;
        margin: 0 4px;
        width: 24px;
        height: 24px;
        line-height: 22px;
        text-align: center;
        background: #f8f8f9;
        border-radius: 50%;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        cursor: pointer;
    }
    .cart-control-delete{
        cursor: pointer;
        color: #2d8cf0;
    }
    .cart-promotion{
        padding: 16px 32px;
        
    }
    .cart-promotion span{
    	font-size: 15px;
    }
    .cart-control-promotion,
    .cart-control-order{
        display: inline-block;
        padding: 8px 32px;
        border-radius: 6px;
        background: #2d8cf0;
        color: #fff;
        cursor: pointer;
    }
    .cart-control-promotion{
        padding: 2px 6px;
        font-size: 12px;
        border-radius: 3px;
    }
    .cart-footer{
        padding: 32px;
        text-align: right;
    }
    .cart-footer-desc{
        display: inline-block;
        padding: 0 16px;
    }
    .cart-footer-desc span{
        color: #f2352e;
        font-size: 20px;
    } 
    a{
        text-decoration: none;
    }
    .header-menu-cart{
    color: #fff;
    }
    .header-menu-cart span{
        display: inline-block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        border-radius: 50%;
        background: #ff5500;
        color: #fff;
        font-size: 12px;
    }
</style>
<template>
	<div class="commit">
		<div class="header">

			<div class="container">
				<Row>
					username
				</Row>
				<Row>
					<Col span="12">
						<h2>结算页</h2>
					</Col>
					<Col span="12">
						<Steps :current="1">
					        <Step title="我的购物车"></Step>
					        <Step title="填写核对订单信息"></Step>
					        <Step title="成功提交订单"></Step>
					    </Steps>
					</Col>
				</Row>
			</div>
		</div>
		<div class="container">
			<br/>
		    <Breadcrumb>
                <BreadcrumbItem to="/">首页</BreadcrumbItem>
                <BreadcrumbItem to="/icart">我的购物车</BreadcrumbItem>
                <BreadcrumbItem>提交订单</BreadcrumbItem>
            </Breadcrumb>
			<div class="address">
				<div class="address-header">
					<div class="address-header-content">收货地址</div>
					<div class="address-header-content" style="float:right">
						<a href="#" slot="extra" @click.prevent="createAddress('formValidate')">
			            	添加新地址
			        	</a>
					</div>
				</div>
				<Modal v-model="modal2" width="700">
			        <p slot="header" style="text-align:center">
			            <Icon type="ios-information-circle"></Icon>
			            <span>新增收货信息</span>
			        </p>
			        <div>
			            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
					        <FormItem label="收货人姓名" prop="name">
					            <Input v-model="formValidate.name" placeholder="收货人姓名"></Input>
					        </FormItem>
					        <FormItem label="手机号码" prop="phone">
					            <Input v-model="formValidate.phone" placeholder="手机号码"></Input>
					        </FormItem>
					        <FormItem label="寄送地址" prop="city">
					            <al-selector v-model="res_s" value="cityData" data-type="name"/>
					        </FormItem>
					        <FormItem label="详细地址" prop="desc">
					            <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="详细地址..."></Input>
					        </FormItem>
					        <FormItem label="设为默认" prop="gender">
					            <RadioGroup v-model="formValidate.gender">
					                <Radio label="true">是</Radio>
					                <Radio label="false">否</Radio>
					            </RadioGroup>
					        </FormItem>
					        <FormItem label="标签" prop="totile">
					            <RadioGroup v-model="formValidate.totile">
					                <Radio label="家"></Radio>
					                <Radio label="公司"></Radio>
					                <Radio label="其他"></Radio>
					            </RadioGroup>
					        </FormItem>
				    	</Form>
			        </div>
			        <div slot="footer">
			            <Button type="primary" size="large" shape="circle" @click="ok('formValidate')">提交</Button>
			        </div>
			    </Modal>
				<div class="userAddress" v-for="item in loadAddressList">
					<div class="userAddress-content" @click="selectAddress(item)">
						<Icon type="ios-flag-outline" size="30"/>
						<span>{{ item.label }}</span>&nbsp;
						<span>{{ item.personName }}</span>&nbsp;
						<span>{{ item.address }}</span>&nbsp;
						<span>{{ item.phoneNumber }}</span>
						<a href="" @click.prevent="modiflieAdderss(item)" class="modifly">修改</a>
					</div>
				</div>
				<a href="" @click.prevent=""  v-show="loadAddressList.length>1">
					收起列表
				</a>
				<a href="" @click.prevent=""  v-show="loadAddressList.length==1">
					展开列表
				</a>
				<div class="userAddress" v-show="!loadAddressList.length">
					<div class="userAddress-content">
						您还没有收货地址
						<a href="#" slot="extra" @click.prevent="createAddress('formValidate')">
			            	添加新地址
			        	</a>
					</div>
				</div>
				<br/>
				<br/>
				
				<div class="cart">
	                <div class="cart-header">
	                    <div class="cart-header-main">
	                        <div class="cart-info">商品信息</div>
	                        <div class="cart-price">单价</div>
	                        <div class="cart-count">数量</div>
	                        <div class="cart-cost">小计</div>
	                        <div class="cart-delete">操作</div>
	                    </div>
	                </div>
	                <div class="cart-content">
	                    <div class="cart-content-main" v-for="(item, index) in cartList">
	                        <div class="cart-info">
	                                <img :src="productDictList[item.id].images">
	                                 <span>{{ productDictList[item.id].name }}</span>
	                        </div>
	                        <div class="cart-price">¥ {{ productDictList[item.id].price }}</div>
	                        <div class="cart-count">
	                            x{{ item.count }}
	                        </div>
	                        <div class="cart-cost">¥ {{ productDictList[item.id].price * item.count }}</div>
	                        <div class="cart-delete">
	                            <Button shape="circle" icon="md-close" size="small" @click="handleDelete(index)"></Button>
	                        </div>
	                    </div>
	                    <div class="cart-empty" v-if="!cartList.length">商品为空！</div>
	                </div>
	                <div class="cart-promotion" v-show="cartList.length">
	                    <span>使用优惠码：</span>
	                    <input type="text" v-model="promotionCode">
	                    <span class="cart-control-promotion" @click="handleCheckCode">验证</span>
	                    <br>
	                    <span>寄送至：{{ userAddress }}</span>
	                </div>
	               
	                <div class="cart-footer" v-show="cartList.length">
	                    <div class="cart-footer-desc">
	                        共计 <span>{{ countAll }}</span> 件商品
	                    </div>
	                    <div class="cart-footer-desc">
	                        应付总额 <span>¥ {{ costAll - promotion }}</span>
	                        <br>
	                        <template v-if="promotion">
	                            （优惠 <span>¥ {{ promotion }}</span>）
	                        </template>

	                    </div>
	                    <div class="cart-footer-desc">
	                        <div class="cart-control-order" @click="handleOrder">提交订单</div>
	                    </div>
	                </div>
	            </div>

			</div>
	    </div>
	    <!-- 内容结束 -->
	    <Footer style="background:#515a6e">
	       <foot></foot> 
	    </Footer>
	    <!-- 回到到顶部组件 -->
	    <BackTop></BackTop>
    </div>
</template>
<script>
	const param = {
		
	};
	import foot from '../components/footer.vue';
    export default {
    	 components:{
            foot
        },
        computed: {
            cartList () {
                return this.$store.state.cartList;
            },
            productDictList () {
                const dict = {};
                this.productList.forEach(item => {
                    dict[item.id] = item;
                });
                return dict;
            },
            countAll () {
                let count = 0;
                this.cartList.forEach(item => {
                    count += item.count;
                });
                return count;
            },
            costAll () {
                let price = 0;
                this.cartList.forEach(item => {
                    price += this.productDictList[item.id].price * item.count;
                });
                return price;
            },
            loadAddressList() {
               return this.$store.state.addressList;
		 	}
        },
        data () {
            return {
                person: '',
            	userAddress: '',
            	phone: 0,
                productList: this.$store.state.productList,
                promotionCode: '',
                promotion: 0,
                vertical: '2',
                res_s: [],
            	modal_loading: false,
            	cityData: [],
                modal2: false,
                formValidate: {
                	id: '',
                    name: '',
                    phone: '',
                    city: [],
                    gender: '',
                    totile: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '请输入收货人姓名', trigger: 'blur' }
                    ],
                    phone: [
                        { required: true, message: '收货人手机号', trigger: 'blur' },
                        { type: 'string', message: '不合法的手机号码', trigger: 'blur' }
                    ],
                   
                    gender: [
                        { required: false, message: 'Please select gender', trigger: 'change' }
                    ],
                    totile: [
                        { required: false, message: '为此地址添加一个标签', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写详细收货地址', trigger: 'blur' },
                        { type: 'string', min: 3, message: 'Introduce no less than 20 words', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleCount (index, count) {
                if (count < 0 && this.cartList[index].count === 1) return;
                this.$store.commit('editCartCount', {
                    id: this.cartList[index].id,
                    count: count
                });
            },
            handleDelete (index) {
                this.$store.commit('deleteCart', this.cartList[index].id);
            },
            handleCheckCode () {
                if (this.promotionCode === '') {
                    window.alert('请输入优惠码');
                    return;
                }
                if (this.promotionCode !== 'Vue.js') {
                    window.alert('优惠码验证失败');
                } else {
                    this.promotion = 500;
                }
            },
            handleOrder () {
                this.axios.post('user/orders',{
                        person: this.person,
                        phoneNumber: this.phone,
                        totalPrices: this.costAll,
                		address: this.userAddress,
                        productList: this.getProduct(),
                        cartList:this.cartList
                    }).then(res => {
                    if (res.data.message == 'success') {
                        this.$Message.success('下单成功!');
                    } else{
                         this.$Message.error(res.data.message);
                    }
                });
            },
            getProduct () {
                const product = [];
                this.cartList.forEach(item => {
                    product[item.id]=this.productDictList[item.id];
                });
                return product;
            },
            submit (){
                this.axios.post('/user/delivery',{
                		id: this.formValidate.id,
                        name: this.formValidate.name,
                        phone: this.formValidate.phone,
                        city: this.cityData,
                        gender: this.formValidate.gender,
                        totile: this.formValidate.totile,
                        desc: this.formValidate.desc
                    }).then(res => {
                    if (res.data.message == 'success') {
                    	this.modal_loading = false;
                    	this.modal2 = false;
                        this.$Message.success('添加成功!');
                        this.$store.dispatch('getAddressList',param); 
                    } else{
                         this.$Message.error(res.data.message);
                    }
                });
            
            },
            ok (name) {
               this.$refs[name].validate((valid) => {
                    if (valid) {
                    	this.cityData = this.res_s;
                        this.submit();
                    } else {
                        this.$Message.error('请正确填写收货信息!');
                    }
                })
            },
            modiflieAdderss(arg) {
            	this.formValidate.id = arg.id;
                this.formValidate.name = arg.personName;
                this.formValidate.phone = arg.phoneNumber;
                this.formValidate.gender = arg.isDefault.toString();
                this.formValidate.totile = arg.label;
                this.modal2 = true;
            },
            createAddress(name) {
            	this.$refs[name].resetFields();
            	this.formValidate.id = '';
            	this.modal2 = true;
            },
            selectAddress(object) {
                this.phone = object.phoneNumber;
            	this.person = object.personName;
            	this.userAddress = object.address;
            	alert(this.addressId);
            }

        },
        mounted () {
           this.$store.dispatch('getAddressList',param); 
        }
    }
</script>