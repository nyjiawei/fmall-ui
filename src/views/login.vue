<style scoped lang="less">
    .login{
        width: 350px;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        margin-top: 100px;
        text-align: center;
    }
    p{
        font-size:20px;
    }
</style>
<template style="backgound:#fff">
    
    <div class="login">
        
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
            <div class="logo">
                <img src="../images/logo.png" width="26%" height="26%"> 
                <br>
               
            </div>
             <p>Sign in to Mall</p>
            <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="用户名" size="large">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="密码" size="large">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formInline')" long>登录</Button>
            </FormItem>
            <FormItem>
                <span>还没有账号？<a href="/register">去注册</a></span>
            </FormItem>
        </Form>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submit(){
                this.axios({
                            method: 'post',
                            url: '/login',
                            data: {
                                userName: this.formInline.user,
                                passWord: this.formInline.password
                            }
                        }).then(res => {
                             if (res.data.code == 200) {
                                //this.$store.dispatch('changeLogin',res.data.data);
                                localStorage.setItem('accessToken', res.data.data);
                                this.$Message.success('登录成功!');
                                this.$router.push({path:'/'});
                            }else{
                             this.$Message.error(res.data.message);
                            }
                        });
                       
            },
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.submit();
                    } else {
                        this.$Message.error('请正确填写用户名和密码!');
                    }
                })
            },
            saveToken(){
                
            }
        }
    }
</script>
