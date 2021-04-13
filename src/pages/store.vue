<template>
    <Page>
        <PageHeader slot="header"/>
        <el-scrollbar slot="center">
            <div class="center-container">
                <div class="box">
                    <div class="store-box">
                        <div class="product" v-if="products.length !== 0">
                            <Product v-for="product in products" :key="product.id" title="产品" icon="el-icon-goods"
                                     :product="product"/>
                        </div>
                        <Empty :description="'该商店暂无产品'" :svg="require('@/assets/undraw_empty_xct9.svg')"
                               class="product" v-if="products.length === 0" style="height: unset;"/>
                        <div class="store-info">
                            <div class="info">
                                <div class="image">
                                    <el-image
                                            src="https://upload.wikimedia.org/wikipedia/zh/3/33/Krusty_Krab_230b.png"></el-image>
                                </div>
                                <div class="title">
                                    蟹堡王
                                </div>
                                <div class="tag">
                                    <el-tag size="mini" effect="dark">外卖</el-tag>
                                </div>
                                <div class="sales">
                                    <i class="el-icon-medal"></i> 销量：1
                                </div>
                                <div class="rate">
                                    <el-rate v-model="value" disabled show-score text-color="#ff9900"></el-rate>
                                </div>
                                <div class="operate">
                                    <el-button icon="el-icon-circle-check" type="warning">评分</el-button>
                                    <el-button icon="el-icon-star-off" type="success">收藏</el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="comment-container">
                        <div class="comment">
                            <Comment/>
                        </div>
                    </div>
                </div>
            </div>
        </el-scrollbar>
    </Page>
</template>

<script>
    import PageHeader from "@/components/page-header";
    import Page from "@/layout/page";
    import Product from "@/components/product";
    import Comment from "@/components/comment";
    import Empty from "@/components/empty";

    export default {
        name: "store",
        components: {Empty, Comment, Product, Page, PageHeader},
        data() {
            return {
                value: 3,
                products: [
                    {
                        'id': 1,
                        'image': 'https://4.bp.blogspot.com/-lDiaVQQFlVw/Xqi2HiN-F7I/AAAAAAABS5Y/xCUQqqnp6dk2bhR_mY-HSmP5cEG3vvlLQCNcBGAsYHQ/w1200-h630-p-k-no-nu/krabby-patty-spongebob-squarepants-nickelodeon-nick-sbsp-animated-gif.gif',
                        'name': '蟹黄堡',
                        'shop': '蟹堡王',
                        'rate': 3,
                        'sales': 1,
                        'price': 1000,
                        'store': {
                            'serviceId': 1,
                            'name': '蟹堡王',
                            'storeId': 1
                        }
                    }
                ],
            }
        }
    }
</script>

<style scoped>

    .background {
        background-image: url("../assets/login-background.jpg");
        width: 100%;
        height: 400px;
        background-size: cover;
        background-position: center;
    }

    .center-container {
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: #e4e7ed;
    }

    .box {
        height: 100%;
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
        width: 80%;
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