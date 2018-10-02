<style>
	.add{
		float:right;

	}
</style>
<template>
	<div class="address">
		<Card style="width:auto;height:auto;">
	        <!-- <p slot="title">我的收货信息</p>
	        <div class="add" slot="title">
	        	<Icon  type="md-add" @click="modal1 = true" size="23" style/>
	        </div> -->
	        <p slot="title">
	            我的收货信息
	        </p>
	        <a href="#" slot="extra" @click.prevent="modal1 = true">
	            <Icon  type="md-add" size="23"/>
	        </a>
	        <Button  @click="modal1 = true">新增收货信息</Button>
	        <Modal width="700px"
		        v-model="modal1"
		        title="新增收货信息"
		        @on-ok="ok"
		        @on-cancel="cancel">
		         <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
			        <FormItem label="收货人姓名" prop="name">
			            <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
			        </FormItem>
			        <FormItem label="手机号码" prop="mail">
			            <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
			        </FormItem>
			        <FormItem label="寄送地址" prop="city">
			            <al-selector v-model="res_s"/>
			        </FormItem>
			        <FormItem label="详细地址" prop="desc">
			            <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
			        </FormItem>
			        <FormItem label="设为默认" prop="gender">
			            <RadioGroup v-model="formValidate.gender">
			                <Radio label="male">是</Radio>
			                <Radio label="female">否</Radio>
			            </RadioGroup>
			        </FormItem>
			        <FormItem label="标签" prop="interest">
			            <CheckboxGroup v-model="formValidate.interest">
			                <Checkbox label="家"></Checkbox>
			                <Checkbox label="公司"></Checkbox>
			                <Checkbox label="其他"></Checkbox>
			            </CheckboxGroup>
			        </FormItem>
			        
			    </Form>
    		</Modal>
	    </Card>
    </div>
</template>
<script>
	export default {
    	 data () {
            return {
            	res_s: [],
                modal1: false,
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '请输入收货人姓名', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: '收货人手机号', trigger: 'blur' },
                        { type: 'phone', message: '不合法的手机号码', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: '请选择正确的地址', trigger: 'change' }
                    ],
                    gender: [
                        { required: false, message: 'Please select gender', trigger: 'change' }
                    ],
                    interest: [
                        { required: false, type: 'array', min: 1, message: '为此地址添加一个标签', trigger: 'change' },
                        { type: 'array', max: 2, message: '只能选择一个', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写详细收货地址', trigger: 'blur' },
                        { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                    ]
                }
            }
            
        },
        methods: {
            ok () {
                this.$Message.info('添加成功！');
                alert(this.res_s);
            },
            cancel () {
                this.$Message.info('已取消！');
            }
        }
    }
</script>