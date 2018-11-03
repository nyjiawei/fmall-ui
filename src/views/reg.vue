<style>
    Form{
         margin-top:20px;
    
    } 
    .reg{
        width: 500px;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        /* text-align: center; */
    }
    .header{
        height: 100px;
        box-shadow: 0px 0px 5px #888888;
    }
</style>
<template>
    <div class="">
        <div class="header">
            <div class="container">
                <Row>
                    username
                </Row>
                <Row>
                    <Col span="12">
                        <h2>注册</h2>
                    </Col>
                    <Col span="12">
                        <Steps :current="1">
                            <Step title="欢迎"></Step>
                            <Step title="注册"></Step>
                            <Step title="购物"></Step>
                        </Steps>
                    </Col>
                </Row>
            </div>
        </div>
        <br>
        <div class="reg">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="用户名" prop="name">
                <Input v-model="formValidate.name" placeholder="请输入您的用户名" size="large"></Input>
            </FormItem>
            <FormItem label="密码" prop="password">
                <Input type="password" v-model="formValidate.password" placeholder="请输入您的密码" size="large">
                </Input>
            </FormItem>
            <FormItem label="再次确认" prop="again">
                <Input type="password" v-model="formValidate.again" placeholder="再次输入您的密码" size="large"></Input>
            </FormItem>
            <FormItem label="邮箱" prop="email">
                <Input v-model="formValidate.email" placeholder="请输入您的邮箱" size="large"></Input>
            </FormItem>
            <FormItem label="验证码" prop="code">
                <Row>
                    <Col span="19">
                         <Input type="text" v-model="formValidate.code" placeholder="请输入验证码" size="large">
                        </Input>
                    </Col>
                    <Col span="5">
                        <img :src="img_src"/>
                    </Col>
                </Row>
                 <a href="javacript:void(0);" @click="pushCode ()" style="float:right">看不清？换一张</a>
            </FormItem>
           
            <FormItem>
                <Button type="primary" @click="handleSubmit('formValidate')" long>提交</Button>
            </FormItem>
        </Form>
    </div>
    </div>

</template>
<script>
    export default {
        data () {
            return {
                formValidate: {
                    name: '',
                    password: '',
                    again: '',
                    email: '',
                    code: ''
                },
                img_src: 'http://127.0.0.1:9001/verification',
                ruleValidate: {
                    name: [
                        { required: true, message: '用户名不能为空', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' }
                    ],
                    again: [
                        { required: true, message: '请再次确认密码', trigger: 'blur' },
                        { type: '', message: '与前一次密码不一致', trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: '邮箱不能为空', trigger: 'blur' },
                        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                    ],
                    code: [
                        { required: true, message: '验证码不能为空', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submit (){
                this.axios.post('/register',{
                        userName: this.formValidate.name,
                        passWord: this.formValidate.password,
                        email: this.formValidate.email,
                        code: this.formValidate.code
                    }).then(res => {
                    if (res.data.status == 'success') {
                        this.$Message.success('注册成功!');
                        this.$router.push({path:'/login'});
                    } else{
                         this.$Message.error(res.data.message);
                         this.pushCode();
                    }
                });
            
            },
            pushCode () {
              this.img_src = 'http://127.0.0.1:9001/verification?a=' + Math.random();
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.submit();
                    } else {
                        this.$Message.error('请正确填写注册信息!');
                    }
                })
            }
        }
    }
</script>

