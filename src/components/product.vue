<template>
    <div class="container">
        <div class="heard">
            <div class="title">
                <i :class="icon"></i>
                <span v-text="' ' + title"></span>
            </div>
            <div class="more">
                <el-pagination layout="prev, pager, next" :page-size="pageSize" :total="total"
                               @current-change="pageCurrent"/>
            </div>
        </div>
        <div class="content">
            <el-row>
                <el-col :span="6" v-for="product in products" :key="product.id">
                    <el-card :body-style="{ padding: '0px' }" style="margin: 10px;" shadow="hover">
                        <img :src="product.image"
                             class="image" style="height: 170px">
                        <div class="store-info">
                            <div class="store-title">
                                <span v-text="product.name"></span>
                            </div>
                            <div class="info-text"><i class="el-icon-medal"></i>
                                <span> 销量：</span>
                                <span v-text="product.sales"/>
                            </div>
                            <div class="info-text"><i class="el-icon-price-tag"></i>
                                <span> 价格：</span>
                                <span v-text="changePrice(product.price)"/>
                            </div>
                            <el-rate v-model="product.rate" disabled show-score text-color="#ff9900"></el-rate>
                            <ProductDialog :product="product" :value="value">
                                <el-button size="mini" style="width: 100%;" slot="btn">加入购物车</el-button>
                            </ProductDialog>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import ProductDialog from "@/components/product-dialog";
    import common from "@/utils/common";

    export default {
        name: "product",
        components: {ProductDialog},
        props: {title: String, icon: String, products: Array, pageNo: Number, pageSize: Number, total: Number},
        data() {
            return {
                filter: false,
                category: '全部',
                sort: '最新',
                advanced: '正序',
                value: null
            }
        },
        computed: {
            changePrice() {
                return (price) => {
                    return common.changePrice(price);
                }
            }
        },
        methods: {
            pageCurrent(current) {
                this.$parent.getProducts(current);
            }
        }
    }
</script>

<style scoped>

    .container {
        padding: 10px;
    }

    .heard {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .image {
        width: 100%;
        display: block;
    }

    .title {
        padding: 10px;
        font-size: 20px;
    }

    .store-info {
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .store-info > div {
        margin: 2px;
    }

    .more {
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .info-text {
        font-size: 10px;
    }
</style>