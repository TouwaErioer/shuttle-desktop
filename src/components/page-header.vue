<template>
    <div class="header-container">
        <div id="heard">
            <div id="heard-container">
                <div style="display:flex;justify-content: center;align-items: center">
                    <el-menu
                            :default-active="activeIndex"
                            class="el-menu-demo"
                            background-color="#fff"
                            text-color="#000"
                            active-text-color="#409EFF"
                            @select="handleSelect">
                        <el-menu-item index="/"><i class="el-icon-house"></i>首页</el-menu-item>
                        <el-menu-item index="/order"><i class="el-icon-tickets"></i>订单</el-menu-item>
                        <el-menu-item index="/receive"><i class="el-icon-sell"></i>接单</el-menu-item>
                        <el-menu-item index="/admin"><i class="el-icon-data-analysis"></i>管理</el-menu-item>
                        <el-menu-item index="/search"><i class="el-icon-search"></i>搜索</el-menu-item>
                        <el-menu-item index="/star"><i class="el-icon-star-off"></i>收藏</el-menu-item>
                        <el-menu-item index="/luck"><i class="el-icon-orange"></i>随机</el-menu-item>
                    </el-menu>
                </div>
            </div>
        </div>
        <router-view/>
        <div class="helper">
            <el-button type="warning" @click="$router.push('/cart')" plain>
                <i class="el-icon-shopping-cart-1" v-if="$store.getters.getCount === 0"></i>
                <div v-text="$store.getters.getCount" v-if="$store.getters.getCount > 0"/>
            </el-button>
            <el-button icon="el-icon-service" type="primary" plain/>
            <el-button icon="el-icon-arrow-up"/>
        </div>
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
        background-color: #fff;
        display: flex;
        position: fixed;
        top: 25%;
        left: 3%;
        z-index: 10;
        box-shadow: 0 10px 40px -10px rgb(0 64 128 / 20%);
        border-radius: 6px;
    }

    #heard-container {
        width: 75%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .helper {
        position: fixed;
        top: 65%;
        right: 5%;
        display: flex;
        flex-direction: column;
    }

    .helper > .el-button {
        margin: 5px 0;
    }
</style>