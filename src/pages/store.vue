<template>
    <Page>
        <el-scrollbar slot="center">
            <div class="center-container">
                <div class="box">
                    <div class="store-box">
                        <div style="width: 100%;display: flex;flex-direction: column">
                            <div class="product">
                                <el-page-header @back="$router.back()"
                                                style="display: flex;padding: 10px 20px;;align-items: center">
                                    <el-breadcrumb slot="content" separator="/"
                                                   style="height: 35px;width: 100%;display: flex;justify-content: center;align-items: center">
                                        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                                        <el-breadcrumb-item>商店详情</el-breadcrumb-item>
                                    </el-breadcrumb>
                                </el-page-header>
                                <Product :products="products" :pageNo="pageNo"
                                         :pageSize="pageSize" :total="total" v-if="products.length !== 0"/>
                            </div>
                            <Empty :description="'该商店暂无产品'" :svg="require('@/assets/undraw_empty_xct9.svg')"
                                   class="product" v-if="products.length === 0" style="height: unset;"/>
                        </div>
                        <div class="store-info" v-if="store !== null">
                            <div class="info">
                                <div class="image">
                                    <el-image :src="store.image" :preview-src-list="[store.image]"
                                              style="width: 200px;height: 150px;"/>
                                </div>
                                <div class="title" v-text="store.name"/>
                                <div class="tag">
                                    <el-tag size="mini" effect="dark" v-text="store.services.name"
                                            :style="'border-color:' + store.services.color"
                                            :color="store.services.color"/>
                                </div>
                                <div class="sales">
                                    <i class="el-icon-medal"></i> 销量：{{store.sales}}
                                </div>
                                <div class="rate">
                                    <el-rate v-model="value" disabled show-score text-color="#ff9900"></el-rate>
                                </div>
<!--                                <div class="operate">-->
<!--                                    <el-button icon="el-icon-circle-check" type="warning">评分</el-button>-->
<!--                                    <el-button icon="el-icon-star-off" type="success">收藏</el-button>-->
<!--                                </div>-->
                            </div>
                        </div>
                    </div>
                    <div class="comment-container">
                        <div class="comment">
                            <Comment :store-id="id"/>
                        </div>
                    </div>
                </div>
            </div>
        </el-scrollbar>
    </Page>
</template>

<script>
    import Page from "@/layout/page";
    import Product from "@/components/product";
    import Comment from "@/components/comment";
    import Empty from "@/components/empty";
    import {findProductsByStoreIdByPagination} from "@/utils/api/product";
    import {findStoreById} from "@/utils/api/store";

    export default {
        name: "store",
        components: {Empty, Comment, Product, Page},
        props: ['id'],
        data() {
            return {
                value: 3,
                products: [],
                store: null,
                pageNo: 1,
                pageSize: 8,
                total: 0
            }
        },
        created() {
            this.getProducts(this.pageNo);
            let storeList = this.$store.getters.getStoreById(parseInt(this.id));
            if (storeList.length === 0) {
                findStoreById(this.id).then(res => {
                    if (res.code === 1) {
                        this.store = res.data[0];
                    }
                });
            } else this.store = storeList[0];
        },
        methods: {
            getProducts(pageNo) {
                findProductsByStoreIdByPagination(this.id, pageNo, this.pageSize).then(res => {
                    if (res.code === 1) {
                        this.products = res.data.list;
                    }
                })
            }
        }
    }
</script>

<style scoped>

    .center-container {
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: #e4e7ed;
    }

    .box {
        margin: 30px 0;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .store-box {
        flex: 0.8;
        width: 100%;
        display: flex;
    }

    .product {
        height: 100%;
        background-color: white;
    }

    .store-info {
        width: 20%;
        flex: 1;
        background-color: white;
    }

    .info {
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .info > div {
        margin: 5px 0;
    }

    .operate {
        display: flex;
    }

    .comment-container {
        background-color: white;
        width: 100%;
        flex: 0.2;
    }

    .comment {
        margin-top: 30px;
        width: 80%;
    }

</style>