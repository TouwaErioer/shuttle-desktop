<template>
    <div id="container">
        <div id="heard">
            <div id="heard-container">
                <div id="heard-info">
                    <div id="title">
                        <div id="name">shuttle</div>
                        <div id="description">校园服务平台</div>
                    </div>
                    <div id="pages">
                        <div class="page">订单</div>
                        <div class="page">接单</div>
                        <div class="page">购物车</div>
                        <div class="page">管理</div>
                        <div class="page">新增</div>
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
        <div id="center">
            <el-scrollbar>
                <div id="background"></div>
            </el-scrollbar>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>

    #container {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    #heard {
        width: 100%;
        height: 50px;
        background-color: #2e97bd;
        display: flex;
        justify-content: center;
    }

    #center {
        flex: 1;
        overflow-y: scroll;
    }

    #center::-webkit-scrollbar { width: 0 !important }

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

    #background {
        background-image: url("../assets/background.jpg");
        width: 100%;
        height: 400px;
        background-size: cover;
        background-position: center;
    }
</style>