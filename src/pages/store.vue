<template>
    <Page>
        <PageHeader slot="header"/>
        <el-scrollbar slot="center">
            <div class="background"></div>
            <div class="center-container">
                <div class="box">
                    <div class="store-box">
                        <div class="product">
                            <Product title="产品" icon="el-icon-goods"/>
                        </div>
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
                    <div class="comment">
                        <Comment/>
                    </div>
                </div>
            </div>
        </el-scrollbar>
    </Page>
</template>

<script>
    import PageHeader from "@/layout/page-header";
    import Page from "@/layout/page";
    import Product from "@/components/product";
    import Comment from "@/components/comment";

    export default {
        name: "store",
        components: {Comment, Product, Page, PageHeader},
        data() {
            return {
                value: 3
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
        background-color: aliceblue;
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
        background-color: aliceblue;
    }

    .store-info {
        width: 20%;
        height: 100%;
        background-color: white;
    }

    .info {
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .info > div{
        margin: 5px 0;
    }

    .operate{
        display: flex;
    }

    .comment {
        width: 100%;
        flex: 0.2;
    }

</style>