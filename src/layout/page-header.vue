<template>
    <div id="heard">
        <div id="heard-container">
            <div id="heard-info">
                <div id="title" @click="$router.push('/')">
                    <div id="name">shuttle</div>
                    <div id="description">校园服务平台</div>
                </div>
                <div id="pages">
                    <div class="page"><i class="el-icon-tickets"></i> 订单</div>
                    <div class="page"><i class="el-icon-sell"></i> 接单</div>
                    <div class="page"><i class="el-icon-circle-plus-outline"></i> 新增</div>
                    <div class="page"><i class="el-icon-data-analysis"></i> 管理</div>
                    <el-badge :value="$store.getters.getCount">
                        <div class="page" @click="$router.push('/cart')"><i class="el-icon-shopping-cart-2"></i> 购物车</div>
                    </el-badge>
                </div>
            </div>
            <div id="heard-functions">
                <div id="search" @click="$router.push('/search')"><i class="el-icon-search"></i></div>
                <div id="user">
                    <el-button size="mini" type="primary" @click="$router.push('/login')">登录</el-button>
                    <el-button size="mini" type="success" @click="$router.push('/register')">注册</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page-header"
    }
</script>

<style scoped>

    #heard {
        width: 100%;
        height: 50px;
        background-color: #606266;
        display: flex;
        justify-content: center;
    }

    #heard-container {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #heard-info {
        height: 100%;
        display: flex;
        align-items: center;
    }

    #title {
        margin: 0 15px;
        color: white;
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    #description {
        font-size: 3px;
    }

    #pages {
        height: 100%;
        display: flex;
        color: white;
        align-items: center;
    }

    .page {
        margin: 0 8px;
    }

    #heard-functions {
        display: flex;
        color: white;
    }

    #search {
        margin: 0 30px;
        display: flex;
        align-items: center;
    }

    #user {

    }
</style>