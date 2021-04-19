<template>
    <div id="heard">
        <div id="heard-container">
            <div id="heard-info">
                <div id="title" @click="house">
                    <div id="name">shuttle</div>
                    <div id="description">校园服务平台</div>
                </div>
                <div id="pages">
                    <div class="page" @click="$router.push('/order')"><i class="el-icon-tickets"></i> 订单</div>
                    <div class="page" @click="$router.push('/receive')"><i class="el-icon-sell"></i> 接单</div>
                    <div class="page" @click="$router.push('/add')"><i class="el-icon-circle-plus-outline"></i> 新增</div>
                    <div class="page" v-if="this.userInfo.admin" @click="openAdminWeb"><i class="el-icon-data-analysis"></i> 管理</div>
                    <el-badge :value="$store.getters.getCount">
                        <div class="page" @click="$router.push('/cart')"><i class="el-icon-shopping-cart-2"></i> 购物车
                        </div>
                    </el-badge>
                </div>
            </div>
            <div id="heard-functions">
                <div id="search" @click="$router.push('/search')"><i class="el-icon-search"></i></div>
                <div id="user">
                    <el-avatar :src="avatarUrl" @click.native="$router.push('/user')" :size="35"/>
                </div>
            </div>
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
                }
            }
        },
        created() {
            this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
        },
        computed: {
            avatarUrl: function () {
                if(this.userInfo.name === null){
                    return `https://api.multiavatar.com/null.png`;
                }
                return `https://api.multiavatar.com/${this.userInfo.name}.png`;
            },
        },
        methods: {
            house() {
                if (this.$route.path !== '/') {
                    this.$router.push('/')
                }
            },
            openAdminWeb() {
                window.open(process.env.VUE_APP_ADMIN + 'login/' + localStorage.getItem('token'));
            }
        }
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