<template>
    <div class="container">
        <div class="box">
            <div class="left"></div>
            <div class="right">
                <div class="right-container">
                    <div class="info">
                        <div>shuttle</div>
                        <el-divider>校园服务平台</el-divider>
                    </div>
                    <div class="input">
                        <el-input style="margin: 10px 0;" v-model="login_from.account" prefix-icon="el-icon-user"
                                  placeholder="手机号/昵称"/>
                        <el-input prefix-icon="el-icon-key" v-model="login_from.password" placeholder="密码"
                                  type="password"/>
                        <el-button style="width: 100%;margin: 10px 0" type="primary" @click="sign">登录</el-button>
                    </div>
                    <div class="expired">
                        <div class="expired-text"><i class="el-icon-time"></i> 登录过期时间</div>
                        <div class="radio">
                            <el-radio v-model="login_from.expired" :label="60">1小时</el-radio>
                            <el-radio v-model="login_from.expired" :label="60 * 24">1天</el-radio>
                            <el-radio v-model="login_from.expired" :label="60 * 24 * 7">1周</el-radio>
                        </div>
                    </div>
                </div>
                <div class="expand">
                    <div class="expand-container">
                        <div class="forget" @click="$router.push('/forget')"><i class="el-icon-question"
                                                                                @click="$router.push('/forget')"></i>
                            忘记密码
                        </div>
                        <div>
                            <span>还没有注册？ </span>
                            <span @click="$router.push('/register')">立即注册</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Login} from "@/utils/api/user";

    export default {
        name: "login",
        data() {
            return {
                login_from: {
                    account: null,
                    password: null,
                    expired: 60
                }
            }
        },
        methods: {
            sign() {
                if (!Object.values(this.login_from).every(v => !!v)) {
                    this.$message.error('请输手机号/昵称/密码')
                } else {
                    Login(this.login_from).then(res => {
                        if (res.code === 1) {
                            this.$message.success("登录成功！");
                            let user = res.data.user;
                            localStorage.setItem('token', res.data.token);
                            localStorage.setItem('userInfo', JSON.stringify(user));
                            this.$router.push('/')
                        }
                    })
                }
            },
        }
    }
</script>

<style scoped>

    .container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url("../assets/login-background.jpg");
        background-size: cover;
        background-position: center;
    }

    .box {
        width: 40%;
        height: 60%;
        display: flex;
    }

    .left {
        background-image: url("../assets/login-left.jpg");
        background-size: cover;
        width: 35%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .right {
        background-color: white;
        width: 65%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .right-container {
        width: 100%;
        height: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .info {
        margin: 0 20px;
        width: 75%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .input {
        width: 75%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .expired {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 5px;
    }

    .expand {
        background-color: #dcdfe6;
        width: 100%;
    }

    .expand-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #606266;
        font-size: 5px;
        padding: 10px;
    }

    .radio {
        display: flex;
    }

    .expired-text {
        font-size: 10px;
        margin: 10px;
    }
</style>