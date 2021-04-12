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
                <i :class="filter ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="filter = !filter"></i>
            </div>
        </div>
        <div class="content">
            <el-collapse-transition>
                <div class="filter" v-if="filter">
                    <div class="item">
                        <el-button-group>
                            <el-radio-group v-model="category">
                                <el-radio-button label="全部"></el-radio-button>
                                <el-radio-button label="一食堂"></el-radio-button>
                                <el-radio-button label="二食堂"></el-radio-button>
                                <el-radio-button label="三食堂"></el-radio-button>
                            </el-radio-group>
                        </el-button-group>
                    </div>
                    <div class="item">
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
                        <el-radio-group v-model="advanced">
                            <el-radio-button label="正序"></el-radio-button>
                            <el-radio-button label="倒序"></el-radio-button>
                        </el-radio-group>
                    </div>
                    <el-button class="item">应用</el-button>
                </div>
            </el-collapse-transition>
            <el-row>
                <el-col :span="6" v-for="o in 8" :key="o">
                    <el-card :body-style="{ padding: '0px' }" style="margin: 10px;" shadow="hover">
                        <img src="https://images.nomadguide.cn/2021/4/2QF5sQd0pAyu8sT73gAra3cjZTygbDEc.jpeg"
                             class="image" style="height: 170px">
                        <div class="store-info">
                            <div class="store-title">
                                <span> 好吃的汉堡 </span>
                                <el-tag size="mini" effect="dark">一食堂</el-tag>
                            </div>
                            <el-rate v-model="value" disabled show-score text-color="#ff9900"></el-rate>
                            <div class="sales"><i class="el-icon-medal"></i> 销量：1</div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "service",
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
        align-items: center;
    }

    .more {
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sales {
        font-size: 10px;
    }

    .filter {
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .item {
        margin: 3px 0;
    }
</style>