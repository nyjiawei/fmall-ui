<style scoped lang="less">
    .login{
        padding: 150px;
        text-align: center;
        
    }
    p{
        font-size:20px;
    }
</style>
<template>
    <div class="login">
        <Card style="width: 350px;margin: auto;">
            <Form ref="formInline" :model="formInline" :rules="ruleInline">
                <h1><Icon type="ios-contact"/></h1>
                <br>
                <FormItem prop="user">
                    <Input type="text" v-model="formInline.user" placeholder="用户名" size="large" @keyup.enter.native="handleSubmit('formInline')">
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="密码" size="large" @keyup.enter.native="handleSubmit('formInline')">
                    </Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formInline')" long shape="circle">登录</Button>
                </FormItem>
                <FormItem>
                    <span>还没有账号？<a href="/register">去注册</a></span><br>
                    <a href="/passwordHelp">忘记账号或密码？</a>
                </FormItem>
            </Form>
        </Card>
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
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
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
                                localStorage.setItem('accessToken', res.data.data);
                                localStorage.setItem('username', 'jiawei');
                                this.$Message.success('登录成功!');
                                //判断路由来源是否有query，处理不是目的跳转的情况
                                console.log(this.$router);
                                let query = this.$router.history.current.query;
                                if(Object.keys(query).length === 0){       
                                    this.$router.push({path:'/'});
                                }
                                else{
                                    let redirectUrl = query.redirect;
                                    //跳转到目的路由
                                    this.$router.push({path:redirectUrl})
                                }
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
