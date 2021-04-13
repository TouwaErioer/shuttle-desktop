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
            <el-row v-if="stores.length !== 0">
                <el-col :span="6" v-for="store in stores" :key="store.id">
                    <el-card :body-style="{ padding: '0px' }" style="margin: 10px;" shadow="hover"
                             @click.native="$router.push('/store')">
                        <img :src="store.image"
                             class="image" style="height: 170px">
                        <div class="store-info">
                            <div class="store-title">
                                <span v-text="store.name"></span>
                                <el-tag size="mini" effect="dark">比奇堡</el-tag>
                            </div>
                            <el-rate v-model="store.rate" disabled show-score text-color="#ff9900"></el-rate>
                            <div class="sales"> 销量：<i class="el-icon-medal"></i><span v-text="store.sales"></span></div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <Empty :description="'该服务暂无商店'" :svg="require('@/assets/undraw_mpty_street.svg')"
                   style="height: unset;" v-if="stores.length === 0"/>
        </div>
    </div>
</template>

<script>
    import Empty from "@/components/empty";

    export default {
        name: "service",
        components: {Empty},
        props: {title: String, icon: String},
        data() {
            return {
                value: 3,
                filter: false,
                category: '全部',
                sort: '最新',
                advanced: '正序',
                stores: [
                    {
                        id: 1,
                        name: '蟹堡王',
                        image: 'https://upload.wikimedia.org/wikipedia/zh/3/33/Krusty_Krab_230b.png',
                        rate: 3,
                        sales: 1
                    }
                ]
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