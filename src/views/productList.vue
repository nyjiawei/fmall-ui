<style scoped lang="less">
    .product-header{
       /*  padding: 5px 10px; */
        background: #dcdee2;
        display: inline-block;
    }
    .product-content{
        width: 100%;
        display: inline-block;
    }
    a{
        text-decoration: none;
    }
    .index{
        display: inline-block;
    }
    .product-not-found{
        text-align: center;
    }
    .filtrater{
        border: 1px solid #dddee1;
        height: 50px;
        font-size:12px;
        color:#9ea7b4;
        background: white;

    }
    .filtrated{
        text-align: center;
        float: left;
        line-height: 50px;
    }
    .sortRule{
        text-align: center;
        float: right;
        line-height: 50px;
    }
    .title{
      width: 300px;
      position: absolute;
      top: 230px;
    }
    .title-img{
     float: right;

    }
    .classs{
        height: 320px;
        width: 980px;
        margin:0 auto;
        position: relative;
        top:0;
    }
    p{
      font-weight:normal;  
    }
</style>
<template>
    <div class="product">
        <!-- 头部组件 -->
        <Top></Top>
       <Row style="background-color: #FAFAFA;top:0px;">
          <div class="classs">
             <div class="title">
                <h2 >耳机与扬声器</h2>
             </div>
            <div class="title-img">
                <img src="../images/headphones-speakers-accessories-201810.png">
            </div>
          </div>
        </Row>
        <Row>
            <Affix>
                <div class="filtrater">
                    <div class="container">
                        <Col span="12">
                        <div class="filtrated">
                            <span><Icon type="ios-list" size='15'/>筛选</span>
                        </div>
                        </Col>
                        <Col span="12">
                        <div class="sortRule">
                            <span>排序方式：</span>
                            <Dropdown trigger="click" style="margin-left: 20px">
                                <a href="javascript:void(0)" style="color:#9ea7b4">
                                    精选<Icon type="ios-arrow-down"></Icon>
                                </a>
                                <DropdownMenu slot="list">
                                    <DropdownItem>精选</DropdownItem>
                                    <DropdownItem divided>最新</DropdownItem>
                                    <DropdownItem divided>价格：由高到低</DropdownItem>
                                    <DropdownItem divided>价格：由低到高</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                        </Col>
                    </div>
                </div>
            </Affix>
        </Row>
        <!-- 内容 -->
        <div class="container content">
            <Row>
        		<Col span="4">
                    <Affix :offset-top="50">
                        <Collapse simple style="padding-right:30px;font-size:12px;color:#464c5b;font-weight:bold;padding-bottom:0px">
                            <Panel name="1">
                                产品类型
                                <p slot="content">耳机 </p>
                                <p slot="content">扬声器 </p>
                                <p slot="content">相机 </p>
                            </Panel>
                            <Panel name="2">
                                品牌
                                <p slot="content">Apogee </p>
                                <p slot="content">Apple </p>
                                <p slot="content">Bang & Olufsen </p>
                                <p slot="content">Beats </p>
                                <p slot="content">JayBird </p>
                                <p slot="content">Libratone </p>
                                <p slot="content">Logitech </p>
                                <p slot="content">Pioneer </p>
                            </Panel>
                            <Panel name="3">
                                颜色
                                <p slot="content">红黄蓝</p>
                            </Panel>
                            <Panel name="4">
                                耳机样式
                                <p slot="content">贴耳式耳机</p>
                                <p slot="content">头戴式耳机</p>
                                <p slot="content">运动</p>
                            </Panel>
                            <Panel name="5">
                                功能
                                <p slot="content">主动降噪</p>
                                <p slot="content">防水</p>
                            </Panel>
                            <Panel name="6">
                                外设连接
                                <p slot="content">隔空播放</p>
                                <p slot="content">蓝牙</p>
                                <p slot="content">无线</p>
                            </Panel>
                            <Panel name="7">
                                无人机
                                <p slot="content">Dji</p>
                            </Panel>
                            <Panel name="8">
                                相机
                                <p slot="content">运动相机</p>
                                <p slot="content">手持云台</p>
                            </Panel>
                        </Collapse>
                    </Affix>
        		</Col>
        		<Col span="20">
					<div class="product-content">
                        <product v-for="item in loadProductList" :info="item" :key="item.id"></product>
                        <div class="product-not-found" v-show="!loadProductList.length">
                            暂无相关商品
                        </div>
                    </div>
        		</Col>
        	</Row>
            
            <br>
            <br>
            <Page :total="totalCount" :current="pageNo" :page-size="pageSize" 
            @on-change="handlePage" @on-page-size-change="handlePageSize"
            show-total show-elevator show-sizer style="text-align: center;font-size:10px"/>
        </div>
        <!-- 内容结束 -->
        <br>
        <br>
        <Footer style="background:#F2F2F2">
           <foot></foot> 
        </Footer>
        <!-- 回到到顶部组件 -->
        <BackTop></BackTop>
    </div>
</template>
<script>
    import Top from '../components/top.vue';
    import foot from '../components/footer.vue';
    import product from '../components/product.vue';
    //定义全局过滤参数
    const params = {
        filterName: '',
        sortKey: '',
        sortDir: '',
        brand: '',
        pageNo : 1,
        pageSize : 10
    };
    export default {
         components:{
            Top,foot,product
        },
        computed:{
            loadProductList() {
                this.totalCount = this.$store.state.productCount;
                return this.$store.state.productList;
            }
        },
        data () {
            return {
               totalCount: 0,
               pageNo: 1,
               pageSize: 10
            }
        },
        methods: {
             handlePage(value) {
                  this.pageNo = value;
                  params.pageNo = value;
                  this.$store.dispatch('getProductList',params); 
                },
            handlePageSize(value) {
              this.pageSize = value;
              params.pageSize = value;
              this.$store.dispatch('getProductList',params); 
            },
            test () {
                alert(this.$store.state.cartList.length);
                alert(this.$store.state.productList.length);
            }
        },
        mounted () {
            this.$store.dispatch('getProductList',params); 
        }
    }
</script>
