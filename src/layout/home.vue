<template>
    <div id="container">
        <div id="heard">
            <div id="heard-container">
                <div id="heard-info">
                    <div id="title">
                        <div id="name">shuttle</div>
                        <div id="description">校园服务平台</div>
                    </div>
                    <div id="pages">
                        <div class="page"><i class="el-icon-house"></i> 首页</div>
                        <div class="page"><i class="el-icon-tickets"></i> 订单</div>
                        <div class="page"><i class="el-icon-sell"></i> 接单</div>
                        <div class="page"><i class="el-icon-circle-plus-outline"></i> 新增</div>
                        <div class="page"><i class="el-icon-data-analysis"></i> 管理</div>
                        <div class="page"><i class="el-icon-shopping-cart-2"></i> 购物车</div>
                    </div>
                </div>
                <div id="heard-functions">
                    <div id="search" @click="$router.push('/search')"><i class="el-icon-search"></i></div>
                    <div id="user">
                        <el-button size="mini" type="primary" @click="$router.push('/login')">登录</el-button>
                        <el-button size="mini" type="success" @click="$router.push('/register')">注册</el-button>
                    </div>
                </div>
            </div>
        </div>
        <div id="center">
            <el-scrollbar>
                <div id="background"></div>
                <div class="center-box">
                    <div class="center-container">
                        <div class="service">
                            <Service title="外卖" icon="el-icon-shopping-bag-2"/>
                        </div>
                        <div class="rank">
                            <div class="rank-title"><i class="el-icon-medal"></i> 排行榜</div>
                            <el-tabs v-model="rank" :stretch="true">
                                <el-tab-pane label="商店" name="store">
                                    <PopularItem :item="item" v-for="item in popularStore" :key="item.id"/>
                                </el-tab-pane>
                                <el-tab-pane label="产品" name="product">
                                    <PopularItem :item="item" v-for="item in popularProduct" :key="item.id"/>
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                    </div>
                </div>
            </el-scrollbar>
        </div>
    </div>
</template>

<script>
    import Service from "@/components/service";
    import PopularItem from "@/components/popular-item";
    export default {
        name: "home",
        components: {PopularItem, Service},
        data(){
            return{
                rank: 'store',
                popularProduct: [
                    {
                        id: 1,
                        image: 'https://images.nomadguide.cn/2021/4/2QF5sQd0pAyu8sT73gAra3cjZTygbDEc.jpeg',
                        name: '汉堡',
                        rate: 3,
                        price: 5,
                        sales: 1
                    }
                ],
                popularStore: [
                    {
                        id: 1,
                        image: 'https://images.nomadguide.cn/2021/4/2QF5sQd0pAyu8sT73gAra3cjZTygbDEc.jpeg',
                        name: '汉堡',
                        rate: 3,
                        sales: 1
                    }
                ]
            }
        }
    }
</script>

<style scoped>

    #container {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    #heard {
        width: 100%;
        height: 50px;
        background-color: #606266;
        display: flex;
        justify-content: center;
    }

    #center {
        flex: 1;
        overflow-y: scroll;
    }

    #center::-webkit-scrollbar {
        width: 0 !important
    }

    #heard-container {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #heard-info {
        height: 100%;
        display: flex;
        align-items: center;
    }

    #title {
        margin: 0 15px;
        color: white;
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    #description {
        font-size: 3px;
    }

    #pages {
        height: 100%;
        display: flex;
        color: white;
        align-items: center;
    }

    .page {
        margin: 0 8px;
    }

    #heard-functions {
        display: flex;
        color: white;
    }

    #search {
        margin: 0 30px;
        display: flex;
        align-items: center;
    }

    #user {

    }

    #background {
        background-image: url("../assets/background.jpg");
        width: 100%;
        height: 400px;
        background-size: cover;
        background-position: center;
    }

    .center-box{
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: aliceblue;
    }
    .center-container {
        width: 80%;
        height: 100%;
        display: flex;
    }

    .service {
        width: 80%;
        height: 100%;
    }

    .rank {
        width: 20%;
        height: 100%;
        background-color: white;
        margin-top: 20px;
    }

    .rank-title{
        text-align: center;
        padding-top: 10px;
    }
</style>