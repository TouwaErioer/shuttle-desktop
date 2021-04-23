<template>
    <div class="header-container">
        <div id="heard">
            <div id="heard-container">
                <div style="display:flex;justify-content: center;align-items: center">
                    <div id="title">
                        <div id="name">shuttle</div>
                        <div id="description">校园服务平台</div>
                    </div>
                    <el-menu
                            :default-active="activeIndex"
                            class="el-menu-demo"
                            mode="horizontal"
                            background-color="#fff"
                            text-color="#000"
                            active-text-color="#ffd04b"
                            @select="handleSelect">
                        <el-menu-item index="/">首页</el-menu-item>
                        <el-menu-item index="/order">订单</el-menu-item>
                        <el-menu-item index="/receive">接单</el-menu-item>
                        <el-menu-item index="/admin">管理</el-menu-item>
                        <el-menu-item index="/search">搜索</el-menu-item>
                        <el-menu-item index="/cart">购物车
                            <div class="el-badge__content" v-text="$store.getters.getCount" v-if="$store.getters.getCount > 0"/>
                        </el-menu-item>
                    </el-menu>
                </div>
                <div id="heard-functions">
<!--                    <div id="search" @click="$router.push('/search')"><i class="el-icon-search"></i></div>-->
                    <div id="user">
                        <el-avatar :src="avatarUrl" @click.native="$router.push('/user')" :size="35"/>
                    </div>
                </div>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "page-header",
        data() {
            return {
                userInfo: {
                    address: null,
                    admin: false,
                    id: 0,
                    name: null,
                    password: null,
                    phone: null,
                    score: 0
                },
                activeIndex: '/'
            }
        },
        created() {
            this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
        },
        computed: {
            avatarUrl: function () {
                if (this.userInfo.name === null) {
                    return `https://api.multiavatar.com/null.png`;
                }
                return `https://api.multiavatar.com/${this.userInfo.name}.png`;
            },
        },
        methods: {
            openAdminWeb() {
                window.open(process.env.VUE_APP_ADMIN + 'login/' + localStorage.getItem('token'));
            },
            handleSelect(key) {
                if (key === '/admin') {
                    this.openAdminWeb();
                } else {
                    this.$router.push(key);
                }
            }
        }
    }
</script>

<style scoped>

    .header-container {
        width: 100%;
        height: 100%;
        overflow-y: hidden;
    }

    #heard {
        width: 100%;
        height: 60px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        box-shadow: 0 5px 10px 0 rgb(0 64 128 / 5%);
    }

    #heard-container {
        width: 75%;
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
        color: #000;
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

    /*.el-badge__content {*/
    /*    background-color: #F56C6C;*/
    /*    border-radius: 10px;*/
    /*    color: #FFF;*/
    /*    display: inline-block;*/
    /*    font-size: 12px;*/
    /*    height: 18px;*/
    /*    line-height: 18px;*/
    /*    padding: 0 6px;*/
    /*    text-align: center;*/
    /*    white-space: nowrap;*/
    /*    border: 1px solid #FFF;*/
    /*}*/
</style>