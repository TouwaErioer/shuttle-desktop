<template>
    <Page>
        <el-scrollbar slot="center">
            <div id="background"></div>
            <div class="center-box">
                <div class="center-container">
                    <div class="service">
                        <Service v-for="service in services" :key="service.id" :item="service"/>
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
    import Page from "@/layout/page";
    import {findAllService} from "@/utils/api/service";
    import {findPopularProduct} from "@/utils/api/product";
    import {findPopularStore} from "@/utils/api/store";

    export default {
        name: "home",
        components: {Page, PopularItem, Service},
        data() {
            return {
                rank: 'store',
                popularProduct: [],
                popularStore: [],
                services: []
            }
        },
        created() {
            let services = sessionStorage.getItem('services');
            if(services === null) this.getService();
            else this.services = JSON.parse(services);
            this.getPopular();
        },
        methods: {
            getService() {
                findAllService().then(res => {
                    if (res.code === 1) {
                        this.services = res.data.list;
                        sessionStorage.setItem('services', JSON.stringify(this.services));
                    }
                });
            },
            getPopular(){
                findPopularProduct().then(res => {
                    if(res.code === 1){
                        this.popularProduct = res.data;
                    }
                });
                findPopularStore().then(res => {
                    if(res.code === 1){
                        this.popularStore = res.data;
                    }
                });
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
        width: 75%;
        height: 100%;
        display: flex;
    }

    .service {
        width: 80%;
        height: 100%;
    }

    .rank {
        width: 25%;
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