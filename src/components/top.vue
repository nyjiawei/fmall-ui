<!-- 顶部通用组件 -->
<style scoped>
    .user {
        float:right;
    }
    .logo{
        width: 100px;
        height: 30px;
        float: left;
        /* left: 20px; */
    }
    .layout-nav{
        width: auto;
        margin: auto;
        /* style="position: fixed;" */
       /*  margin-right: 20px; */
    }
   .top{
       /* position: fixed; */
       width:100%;
   } 
   .fristTop{
        background: #dcdee2;
        width: 100%;
        height: 27px;
    }
    .userTop a{
        font-size: 12px;
    }
  .header-menu-cart{
        color: #515a6e;
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
    <div class="Top">
        <Menu mode="horizontal" :theme="theme" active-name="1" class="top" @on-select="to"> 
            <div class="container">
            <Row>
                <Col span="3">
                <div class="logo">
                    <img src="../images/logo.png" height="30px" width="30px">
                </div>
                 </Col>
                <Col span="10">
                    <div class="layout-nav">
                        <MenuItem name="index">
                            首页
                        </MenuItem>
                        <MenuItem name="well-chosen">
                            精选
                        </MenuItem>
                        <Submenu name="classify">
                            <template slot="title">
                                分类
                            </template>
                            <MenuGroup title="分类查看">
                                <MenuItem name="3-1">数码电子</MenuItem>
                                <MenuItem name="3-2">手机</MenuItem>
                                <MenuItem name="3-3">外设&配件</MenuItem>
                            </MenuGroup>
                        </Submenu>
                        <MenuItem name="all">
                            所有商品
                        </MenuItem>
                    </div>
                </Col>
                <Col span="5">
                <div>
                     <AutoComplete
                        v-model="search"
                        icon="ios-search"
                        :data="searchData"
                        :filter-method="filterMethod"
                        placeholder="请输入..."
                        >
                    </AutoComplete>
                </div>
                </Col>
                <Col span="3">
                    <div class="user">
                        <router-link to="/icart" class="header-menu-cart" style="color: #515a6e;text-decoration:none;">
                            购物车 <Icon type="ios-cart" size="26"/> 
                            <span v-if="cartList.length">{{ cartList.length }}</span>
                        </router-link>
                    </div>
                </Col>
                <Col span="3">
                    <div class="user">
                        <Dropdown trigger="click" @on-click="to" v-show="logined">
                               <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                            <DropdownMenu slot="list">
                                <DropdownItem name="username">{{username}}</DropdownItem>
                                <DropdownItem name="userCenter">
                                    个人中心
                                </DropdownItem>
                                <DropdownItem name="safety">安全设置</DropdownItem>
                                <DropdownItem  divided name="loginOut"><Icon type="ios-close-circle"/>
                                    注销
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <div class="login" v-show="notLogin">
                            <a href="/login" style="color:#464c5b">登录</a>
                            <Divider type="vertical" />
                            <a href="/register" style="color:#464c5b">注册</a>
                        </div>
                    </div>
                </Col>
            </Row>
            </div>
        </Menu>
    </div>
</template>
<script>
    export default {
        computed: {
            cartList () {
                return this.$store.state.cartList;
            }
        },
        data () {
            return {
                username: localStorage.username,
                logined: localStorage.accessToken,
                notLogin: !localStorage.accessToken,
                value2: 0,
                theme: 'light',
                search: '',
                searchData: ['Steve Jobs', 'Stephen Gary Wozniak', 'Jonathan Paul Ive']
            }
        },
        methods: {
            loginOut(){
                 console.log("loginOut");
                 localStorage.clear();
                 this.$Message.success('您已经成功注销!');
                 this.$router.push({path:'/'});

             },
            filterMethod (value, option) {
                return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
            },
            to(name){
                switch (name) {
                    case 'username' :
                        this.$router.push({path:'/user/order'});
                        break;
                    case 'userCenter' :
                        this.$router.push({path:'/user/order'});
                        break;
                     case 'safety' :
                          this.$router.push({path:'/user/safety'});
                          break;
                    case 'loginOut' :
                          this.loginOut();
                          break;
                    case 'index' :
                          this.$router.push({path:'/'});
                          break;
                    case 'well-chosen' :
                          this.$router.push({path:'/well-chosen'});
                          break;
                    case 'all' :
                          this.$router.push({path:'/product'});
                          break;
                }
            }
        }
    }
</script>
