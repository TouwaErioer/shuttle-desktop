<template>
    <Page>
        <PageHeader slot="header"/>
        <el-scrollbar slot="center">
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
    </Page>
</template>

<script>
    import Service from "@/components/service";
    import PopularItem from "@/components/popular-item";
    import PageHeader from "@/layout/page-header";
    import Page from "@/layout/page";

    export default {
        name: "home",
        components: {Page, PageHeader, PopularItem, Service},
        data() {
            return {
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

    #background {
        background-image: url("../assets/background.jpg");
        width: 100%;
        height: 400px;
        background-size: cover;
        background-position: center;
    }

    .center-box {
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: #e4e7ed;
    }

    .center-container {
        background-color: white;
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
        padding: 0 15px;
    }

    .rank-title {
        text-align: center;
        padding-top: 10px;
    }
</style>