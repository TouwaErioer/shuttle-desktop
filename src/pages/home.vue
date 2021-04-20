<template>
    <Page>
        <el-scrollbar slot="center">
            <div class="center-box">
                <div class="center-container" style="padding-top: 30px;margin-top: 30px;">
                    <el-carousel :interval="3000" type="card" height="200px" style="width: 100%;margin: 0 20px;">
                        <el-carousel-item v-for="ad in ads" :key="ad.id">
                            <el-image :src="ad.image" @click="$router.push('/store/' + ad.storeId)"/>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <div class="center-box">
                <div class="center-container">
                    <div class="service">
                        <div style="width: 100%;display: flex;justify-content: space-between">
                            <el-radio-group v-model="radio" style="padding-left: 20px">
                                <el-radio-button v-for="service in services" :key="service.id" :label="service.id">
                                    <i :class="service.icon"></i> <span v-text="service.name"></span>
                                </el-radio-button>
                            </el-radio-group>
                            <el-button icon="el-icon-setting" @click="option = true">选项</el-button>
                        </div>
                        <Service :stores="stores"/>
                        <el-pagination layout="prev, pager, next" :page-size="pageSize" :total="total"
                                       @current-change="pageCurrent" v-if="total !== 0"
                                       style="width: 100%;display: flex;justify-content: center">
                        </el-pagination>
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
                    <el-dialog
                            title="选项" width="30%"
                            :visible.sync="option"
                            :center="true">
                        <template slot="title"><i class="el-icon-setting"> 选项</i></template>
                        <div class="filter">
                            <div class="item">
                                <span>分类：</span>
                                <el-button-group>
                                    <el-radio-group v-model="category">
                                        <el-radio-button label="全部"></el-radio-button>
                                        <el-radio-button v-for="category in categories" :key="category.id"
                                                         :label="category.name"/>
                                    </el-radio-group>
                                </el-button-group>
                            </div>
                            <div class="item">
                                <span>排序：</span>
                                <el-button-group>
                                    <el-radio-group v-model="sort">
                                        <el-radio-button label="最新"></el-radio-button>
                                        <el-radio-button label="评分"></el-radio-button>
                                        <el-radio-button label="销量"></el-radio-button>
                                        <el-radio-button label="价格"></el-radio-button>
                                    </el-radio-group>
                                </el-button-group>
                            </div>
                            <div class="item">
                                <span>高级：</span>
                                <el-radio-group v-model="advanced">
                                    <el-radio-button label="正序"></el-radio-button>
                                    <el-radio-button label="倒序"></el-radio-button>
                                </el-radio-group>
                            </div>
                            <el-button class="item" style="margin-top: 20px" @click="filer">应用</el-button>
                        </div>
                    </el-dialog>
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
    import {findPopularStore, findStoreByServiceId} from "@/utils/api/store";
    import {findAllAds} from "@/utils/api/ads";
    import {findCategoryByServiceId} from "@/utils/api/category";

    export default {
        name: "home",
        components: {Page, PopularItem, Service},
        data() {
            return {
                rank: 'store',
                popularProduct: [],
                popularStore: [],
                services: [],
                ads: [],
                radio: '1',
                pageSize: 8,
                pageNo: 1,
                total: null,
                stores: [],
                option: false,
                category: '全部',
                sort: '最新',
                advanced: '正序',
                categories: []
            }
        },
        created() {
            let services = sessionStorage.getItem('services');
            if (services === null) this.getService();
            else this.services = JSON.parse(services);
            this.getPopular();
            this.getAds();
            this.getStores(this.pageNo, this.pageSize);
            this.getCategory();
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
            getPopular() {
                findPopularProduct().then(res => {
                    if (res.code === 1) {
                        this.popularProduct = res.data;
                    }
                });
                findPopularStore().then(res => {
                    if (res.code === 1) {
                        this.popularStore = res.data;
                    }
                });
            },
            getAds() {
                let ads = JSON.parse(sessionStorage.getItem('ads'));
                if (ads === null) {
                    findAllAds().then(res => {
                        if (res.code === 1) {
                            const ads = res.data;
                            this.ads = ads;
                            sessionStorage.setItem('ads', JSON.stringify(ads));
                        }
                    });
                }else{
                    this.ads = ads;
                }
            },
            getStores(pageNo, pageSize) {
                if (this.$store.getters.storesCache(parseInt(this.radio))) {
                    this.stores = this.$store.getters.getStoresBySid(parseInt(this.radio));
                    this.total = this.stores.length;
                } else {
                    findStoreByServiceId(parseInt(this.radio), pageNo, pageSize).then(res => {
                        if (res.code === 1) {
                            this.stores = res.data.list;
                            this.total = res.data.total;
                            this.$store.commit('setStores', this.stores);
                        }
                    });
                }
            },
            pageCurrent(current) {
                this.getStores(current, this.pageSize);
            },
            getCategory() {
                if (this.$store.getters.categoriesCache(parseInt(this.radio))) {
                    this.categories = this.$store.getters.getCategories(parseInt(this.radio));
                } else {
                    findCategoryByServiceId(this.radio).then(res => {
                        if (res.code === 1) {
                            this.categories = res.data;
                            this.$store.commit('setCategories', this.categories);
                        }
                    });
                }
            },
            filer() {
                this.option = false;
            }
        },
        watch: {
            radio: function () {
                if (this.$store.getters.storesCache(parseInt(this.radio))) {
                    this.stores = this.$store.getters.getStoresBySid(parseInt(this.radio));
                    this.total = this.stores.length;
                } else this.getStores(this.pageNo, this.pageSize);
                this.getCategory();
            }
        }
    }
</script>

<style scoped>

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
        padding-top: 15px;
    }

    .service {
        width: 80%;
        height: 100%;
        padding-right: 20px;
    }

    .rank {
        width: 25%;
        height: 100%;
        background-color: white;
        padding: 0 15px;
        border-left: 1px #dddddd solid;
    }

    .rank-title {
        text-align: center;
        padding-top: 10px;
    }

    .filter {
        padding: 10px;
        display: flex;
        flex-direction: column;
    }

    .item {
        margin: 3px 0;
    }
</style>