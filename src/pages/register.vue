<template>
    <div class="container">
        <div class="box">
            <div class="left"></div>
            <div class="right">
                <div class="right-container" style="flex: 1;width: 100%;height: 100%;">
                <div class="info">
                    <div>shuttle</div>
                    <el-divider>校园服务平台</el-divider>
                </div>
                <div class="input-container">
                    <el-input class="input" prefix-icon="el-icon-user" placeholder="手机号"/>
                    <el-input class="input" prefix-icon="el-icon-key" placeholder="密码"/>
                    <el-input class="input" prefix-icon="el-icon-key" placeholder="重复密码"/>
                    <el-button style="width: 100%;margin: 10px 0" type="success">注册</el-button>
                </div>
                <div class="expired">
                </div>
                </div>
                <div class="expand">
                    <div class="expand-container">
                        <div class="forget" @click="$router.push('/forget')"><i class="el-icon-question"></i> 忘记密码</div>
                        <div>
                            <span>已有账号？ </span>
                            <span @click="$router.push('/login')">立即登录</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "register"
    }
</script>

<style scoped>

    .container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url("../assets/register-background.jpg");
        background-size: cover;
        background-position: center;
    }

    .box {
        width: 40%;
        height: 60%;
        display: flex;
    }

    .left {
        background-image: url("../assets/register-left.png");
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

    .right-container{
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

    .input-container {
        width: 75%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .input{
        margin: 10px 0 0 0;
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