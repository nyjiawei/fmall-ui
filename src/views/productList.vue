<style>
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
</style>
<template>
    <div class="product" style="background: #f8f8f9;">
        <!-- 头部组件 -->
        <Top></Top>
        <br>
        <br>
        <br>
        <!-- 内容 -->
        <div class="container content">
            <Breadcrumb>
                <BreadcrumbItem to="/">首页</BreadcrumbItem>
                <BreadcrumbItem to="/components/breadcrumb">全部结果</BreadcrumbItem>
            </Breadcrumb>
            <br>
             
            <div class="product-header">
                <div class="cart-info">综合</div>
                <div class="cart-price">销量</div>
                <div class="cart-count">评价</div>
                <div class="cart-cost">价格</div>
            </div>
            <div class="product-content">
                <product v-for="item in lodeProductList" :info="item" :key="item.id"></product>
                <div class="product-not-found" v-show="!lodeProductList.length">
                    暂无相关商品
                </div>
            </div>
            <br>
            <Page :total="totalCount" :current="pageNo" :page-size="pageSize" 
            @on-change="handlePage" @on-page-size-change="handlePageSize"
            show-total show-elevator show-sizer style="text-align: center;font-size:10px"/>
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
            lodeProductList() {
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
