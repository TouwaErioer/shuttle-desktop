<template>
    <div class="container">
        <div class="content">
            <el-row>
                <el-col :span="4" v-for="product in products" :key="product.id">
                    <el-card :body-style="{ padding: '0px' }" style="margin: 10px;" shadow="hover">
                        <div style="display: flex;justify-content: center;align-items: center">
                            <el-image :src="product.image"
                                 class="image" style="height: 150px;width: 150px;" fit="cover"/>
                        </div>
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
                                <el-button size="mini" type="primary" style="width: 100%;" slot="btn">加入购物车</el-button>
                            </ProductDialog>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <div class="more">
                <el-pagination layout="prev, pager, next" :page-size="pageSize" :total="total"
                               @current-change="pageCurrent"/>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductDialog from "@/components/product-dialog";
    import common from "@/utils/common";

    export default {
        name: "product",
        components: {ProductDialog},
        props: {products: Array, pageNo: Number, pageSize: Number, total: Number},
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

    .image {
        width: 100%;
        display: block;
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
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .info-text {
        font-size: 10px;
    }
</style>