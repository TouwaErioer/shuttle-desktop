<template>
    <div class="card">
        <el-avatar
                :src="avatarUrl"
                @click.native="$router.push('/user')"
                :size="50"
        />
        <div v-text="userInfo.name" style="color: #e6a23c;margin: 10px;font-size: 18px;"/>
        <div class="count">
            <div class="count-item">
                <div class="count-item-num" v-text="this.userInfo.score"/>
                <div class="count-item-name">剩余点数</div>
            </div>
            <div class="count-item">
                <div class="count-item-num" v-text="this.userPerfect ? '已完善' : '未完善'"/>
                <div class="count-item-name">个人信息</div>
            </div>
            <div class="count-item">
                <div class="count-item-num" v-text="this.userInfo.address === null ? '无' : this.userInfo.address"/>
                <div class="count-item-name">详细地址</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "summary-card",
        data() {
            return {
                userInfo: {},
                countItems: null,
            };
        },
        created() {
            this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
            this.countItems = [
                {name: "剩余点数", count: this.userInfo.score},
                {name: "个人信息", count: this.userPerfect ? '已完善' : '未完善'},
            ]
        },
        computed: {
            avatarUrl: function () {
                if (this.userInfo.name === null) {
                    return `https://api.multiavatar.com/null.png`;
                }
                return `https://api.multiavatar.com/${this.userInfo.name}.png`;
            },
            userPerfect: function () {
                return this.userInfo.phone !== null && this.userInfo.address !== null && this.userInfo.name !== null;
            }
        },
    };
</script>

<style scoped lang="scss">
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 16px 0;
        justify-content: center;
    }

    .count {
        display: flex;
        justify-content: space-around;
        align-self: normal;
        margin: 16px 0;

        > .count-item {
            > .count-item-num {
                color: #409eff;
                text-align: center;
                font-weight: bolder;
            }
            > .count-item-name{
                color: #999;
            }
        }
    }
</style>