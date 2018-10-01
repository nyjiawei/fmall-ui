<style scoped lang="less">
    
</style>
<template>
    <div class="index" style="background: #f8f8f9;">
        <Top></Top>
        <br>
        <br>
        <br>
        <div class="container">
            <Row style="margin-bottom: 20px;">
            <Carousel autoplay v-model="value2" autoplay-speed=4000 loop>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img src="../images/iphonexmax.jpg" width="100%" height="100%">
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img src="../images/watch.jpg" width="100%" height="100%">
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img src="../images/iPhonexr.jpg" width="100%" height="100%">
                    </div>
                </CarouselItem>
            </Carousel>
            </Row>

            <Divider><h4>每日精选</h4></Divider>
            <Row :gutter="16" style="text-align:center;">
                <Col span="6">
                    <Card style="width:auto;height:280px;">
                        <div style="text-align:center">
                            <img src="../images/logo.png" width="30%" height="30%">
                            <h4>1</h4>
                        </div>
                    </Card>
                </Col>
                <Col span="6">
                    <Card style="width:auto;height:280px;">
                        <div style="text-align:center">
                            <img src="../images/logo.png" width="30%" height="30%">
                            <h4>2</h4>
                        </div>
                    </Card>
                </Col>
                <Col span="6">
                    <Card style="width:auto;height:280px;">
                        <div style="text-align:center">
                            <img src="../images/logo.png" width="30%" height="30%">
                            <h4>3</h4>
                        </div>
                    </Card>
                </Col>
                <Col span="6">
                   <Card style="width:auto;height:280px;">
                        <div style="text-align:center">
                            <img src="../images/logo.png" width="30%" height="30%">
                            <h4>4</h4>
                        </div>
                    </Card> 
                </Col>
            </Row>
            <br>
            <Row>
                <Card style="width:auto;height:150px;">
                        <div style="text-align:center">
                            <h4>这里放张图片</h4>
                        </div>
                    </Card> 
                </Col>
            </Row>
            <br>
            <Row :gutter="16"  style="text-align:center">
                <Col span="12">
                   <Card style="width:auto;height:350px;">
                        <div style="text-align:center">
                            <img src="../images/logo.png" width="30%" height="30%">
                            <h4>4</h4>
                        </div>
                    </Card> 
                </Col>
                <Col span="12">
                   <Card style="width:auto;height:350px;">
                        <div style="text-align:center">
                            <img src="../images/logo.png" width="30%"我的消息 height="30%">
                            <h4>4</h4>
                        </div>
                    </Card> 
                </Col>
            </Row>
            <br>
            <Row :gutter="16"  style="text-align:center">
                <Col span="8">
                   <Card style="width:auto;height:350px;">
                        <div style="text-align:center">
                            <img src="../images/logo.png" width="30%" height="30%">
                            <h4>4</h4>
                        </div>
                    </Card> 
                </Col>
                <Col span="8">
                   <Card style="width:auto;height:350px;">
                        <div style="text-align:center">
                            <img src="../images/logo.png" width="30%" height="30%">
                            <h4>4</h4>
                        </div>
                    </Card> 
                </Col>
                <Col span="8">
                   <Card style="width:auto;height:350px;">
                        <div style="text-align:center">
                            <img src="../images/logo.png" width="30%" height="30%">
                            <h4>4</h4>
                        </div>
                    </Card> 
                </Col>
            </Row>
            <br>
        </div>
        
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
    export default {
        components:{
            Top,
            foot
        },
        data(){
            return{
                
            }
        },
        methods: {
            
        }
    }
</script>
