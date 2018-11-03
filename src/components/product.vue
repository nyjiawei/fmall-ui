<style scoped>
    a{
        text-decoration:none;
    }
   .product{
        width: 25%;
        float: left;
        margin:0px;
    }
    .product-main{
        display: block;
        margin: 5px;
        padding: 0px;
        border: 1px solid #dddee1;
        border-radius: 6px;
        overflow: hidden;
        background: #fff;
        text-align: center;
        position: relative;
    }
    .product-main img{
        width: 100%;
    }
    h4{
        color: #222;
        font-size: 17px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .product-main:hover h4{
        color: #0070c9;
    }
    .product-color{
        display: block;
        width: 16px;
        height: 16px;
        border: 1px solid #dddee1;
        border-radius: 50%;
        margin: 6px auto;
    }
    .product-cost{
        color: #de4037;
        margin-top: 6px;
    }
    .product-add-cart{
        display: none;
        background: white;
        padding: 4px 8px;
        font-size: 12px;
        border-radius: 3px;
        cursor: pointer;
        position: absolute;
        bottom: 5px;
        right: 5px;
    }
    .product-add-enjoy{
        display: none;
        background: white;
        padding: 4px 8px;
        font-size: 12px;
        border-radius: 3px;
        cursor: pointer;
        position: absolute;
        bottom: 5px;
        left: 5px;
    }
    .product-main:hover .product-add-cart,{
        display: inline-block;
    }
    .product-main:hover .product-add-enjoy{
        display: inline-block;
    }
</style>
<template>
    <div class="product">
        <router-link :to="'/product/' + info.id" class="product-main" style="text-decoration: none;">
            <img :src="info.images">
            <h4>{{ info.name }}</h4>
            <div class="product-color" :style="{ background: colors[info.color]}"></div>
            <div class="product-cost">¥ {{info.price}}</div>
            <div class="product-add-cart" @click.prevent="handleCart">
                <Icon type="ios-cart-outline" size="30"/>
            </div>
            <div class="product-add-enjoy" @click.prevent="ienjoy">
                <Icon type="md-heart-outline" size="30"/>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            info: Object
        },
        data () {
            return {
                colors: {
                    '白色': '#ffffff',
                    '金色': '#dac272',
                    '蓝色': '#233472',
                    '红色': '#f2352e'
                }
            }
        },
        methods: {
            handleCart () {
                this.$store.commit('addCart', this.info.id);
                this.$Message.success('成功添加到购物车!');
            },
            ienjoy (){
                
            }
        }
    }
</script>

