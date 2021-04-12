<template>
    <div class="container">
        <div class="heard">
            <div class="title">
                <i :class="icon"></i>
                <span v-text="' ' + title"></span>
            </div>
            <div class="more">
                <el-pagination layout="prev, pager, next" :page-size="8" :total="10">
                </el-pagination>
            </div>
        </div>
        <div class="content">
            <el-row>
                <el-col :span="6" v-for="o in 8" :key="o">
                    <el-card :body-style="{ padding: '0px' }" style="margin: 10px;" shadow="hover"
                             @click.native="$router.push('/store')">
                        <img src="https://4.bp.blogspot.com/-lDiaVQQFlVw/Xqi2HiN-F7I/AAAAAAABS5Y/xCUQqqnp6dk2bhR_mY-HSmP5cEG3vvlLQCNcBGAsYHQ/w1200-h630-p-k-no-nu/krabby-patty-spongebob-squarepants-nickelodeon-nick-sbsp-animated-gif.gif"
                             class="image" style="height: 170px">
                        <div class="store-info">
                            <div class="store-title">
                                <span> 蟹黄堡 </span>
                            </div>
                            <div class="info-text"><i class="el-icon-medal"></i> 销量：1</div>
                            <div class="info-text"><i class="el-icon-price-tag"></i> 价格：10</div>
                            <el-rate v-model="value" disabled show-score text-color="#ff9900"></el-rate>
                            <el-button size="mini">加入购物车</el-button>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "product",
        props: {title: String, icon: String},
        data() {
            return {
                value: 3,
                filter: false,
                category: '全部',
                sort: '最新',
                advanced: '正序'
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

    .store-info > div{
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