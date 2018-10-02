<!-- 顶部通用组件 -->
<style>
    .user {
       
        float:right;
    }
    .userTop{
       
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
        <div class="fristTop">
            <div class="container">
                <div class="userTop">
                        <a href="/login" style="color:#464c5b">登录</a>
                        <Divider type="vertical" />
                        <a href="/register" style="color:#464c5b">免费注册</a>
                        <Divider type="vertical" />
                        <a href="/register" style="color:#464c5b">客服服务</a>
                        <Divider type="vertical" />
                        <Badge dot>
                            <a href="" >
                                <Icon type="ios-notifications-outline" size="20"></Icon>
                            </a>
                        </Badge>
                        
                        <Divider type="vertical" />
                        <a href="/login" style="color:#464c5b">我的订单</a>
                        <Dropdown trigger="click" @on-click="to" transfer>
                            <Divider type="vertical" />
                            <a href="javascript:void(0)">
                                username
                                <Icon type="ios-arrow-down"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem name="userCenter">
                                    个人中心
                                </DropdownItem>
                                <DropdownItem >安全设置</DropdownItem>
                                <DropdownItem  divided><Icon type="ios-close-circle"/>
                                    注销
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                </div>
            </div>
        </div>
        <Menu mode="horizontal" :theme="theme1" active-name="1" class="top"> 
            <div class="container">
            <Row>
                <Col span="3"></Col>
                <div class="logo">
                    <img src="../images/logo.png" width="80%" height="80%">
                </div>
                <Col span="11">
                <div class="layout-nav">
                    <MenuItem name="1" to="/">
                        <Icon type="ios-home" />
                        首页
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="ios-bonfire" />
                        精选
                    </MenuItem>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-apps" />
                            分类
                        </template>
                        <MenuGroup title="分类查看">
                            <MenuItem name="3-1">数码电子</MenuItem>
                            <MenuItem name="3-2">手机</MenuItem>
                            <MenuItem name="3-3">外设&配件</MenuItem>
                        </MenuGroup>
                    </Submenu>
                    <MenuItem name="4" to="/product">
                        <Icon type="ios-paper" />
                        所有商品
                    </MenuItem>

                </div>
                </Col>
                <Col span="6">
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
                <Col span="4">
                    <div class="user">
                        <router-link to="/icart" class="header-menu-cart" style="color: #515a6e;">
                           <Icon type="ios-cart" size="26"/> 购物车
                            <span v-if="cartList.length">{{ cartList.length }}</span>
                        </router-link>
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
                value2: 0,
                theme1: 'light',
                search: '',
                searchData: ['Steve Jobs', 'Stephen Gary Wozniak', 'Jonathan Paul Ive']
            }
        },
        methods: {
            filterMethod (value, option) {
                return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
            },
            to(name){
                this.$router.push({path:'/user/userCenter'});
            }
        }
    }
</script>
