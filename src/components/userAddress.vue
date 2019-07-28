<style>
	.add{
		float:right;

	}
	.addressList{
		border: 1px #dcdee2 solid;
		width: 30%;
		display: inline-block;
		margin-left: 20px;
		margin-bottom: 20px;
		padding: 5px;
		height: 115px;
	}
	.operation{
		display: inline-block;
		font-size: 10px;
		margin-left: 5px;
		cursor: pointer;
	}
	.addressList-header{
		display: inline-block;
	}
	.addressList-content{
		margin:10px;
		width:230px;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;

	}
	.addressList:hover{
		border: 1px #2d8cf0 solid;
		.operation{
			color: #2d8cf0;
		}
	}

</style>
<template>
	<div class="address">
		<Card shadow style="width:auto;min-height:850px;height:auto!important;" shadow>
	        <p slot="title">
	            我的收货信息
	        </p>
	        <a href="#" slot="extra" @click.prevent="createAddress('formValidate')">
            	添加新地址
        	</a>
	        <div class="addressList" v-for="item in loadAddressList">
	        	<div class="addressList-content">
	        		<div class="addressList-header">
	        			<Icon type="md-person" size="20"/>{{ item.personName }}
	        		</div>&nbsp;&nbsp;
	        		<div class="addressList-header">{{ item.label }}</div>
	        		<div class="addressList-header" style="float:right">
	        			<div class="operation" @click="modiflieAdderss(item)">修改</div>
	        			<div class="operation"  @click="del(item)">删除</div>
	        		</div>
	        	</div>
	        	<div class="addressList-content" :title="item.address">
	        		<Icon type="ios-paper-plane" size="20"/>
	        		{{ item.address }}
	        	</div>
	        	<div class="addressList-content">
	        		<Icon type="md-call" size="20"/>{{ item.phoneNumber }}
	        	</div>
	        </div>
	        <div v-show="!loadAddressList.length">还未添加收货地址</div>
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
		    <Modal v-model="modal3" width="360">
		        <p slot="header" style="color:#f60;text-align:center">
		            <Icon type="ios-information-circle"></Icon>
		            <span>删除收货地址</span>
		        </p>
		        <div style="text-align:center">
		            <p>确认删除此条收货地址?</p>
		        </div>
		        <div slot="footer">
		            <Button type="error" size="large" long :loading="modal_loading" @click="deleteAddress">Delete</Button>
		        </div>
		    </Modal>
	    </Card>
    </div>
</template>
<script>
 const param = {};
	export default {
		 computed:{
		 	loadAddressList() {
               return this.$store.state.addressList;
		 	}
		 },
    	 data () {
            return {
            	res_s: [],
            	modal_loading: false,
            	cityData: [],
                modal2: false,
                modal3: false,
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
                    if (res.data.message == 'SUCCESS') {
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
            del(arg) {
            	this.formValidate.id = arg.id;
            	this.modal3 = true;
            },
            deleteAddress() {
            	this.modal_loading = true;
            	this.axios.delete('/user/delivery',{
            		params:{
                		deliveryId: this.formValidate.id
                	}
                	}).then(res =>{
                		if (res.data.message == "SUCCESS") {
                			this.modal_loading = false;
                    		this.modal3 = false;
                			this.$Message.success('Successfully delete');
                			this.$store.dispatch('getAddressList',param); 
                		}
                });
            }
        },
        mounted () {
           this.$store.dispatch('getAddressList',param); 
        }
    }
</script>