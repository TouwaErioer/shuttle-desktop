<template>
    <Page>
        <div slot="center" class="user-container">
            <div class="box">
                <div class="left">
                    <div class="cells">
                        <div class="cell" @click="showRight('name')">
                            <div class="cell-content">
                                <div><i class="el-icon-user"> 昵称</i></div>
                                <div v-text="userInfo.name" class="cell-text"></div>
                            </div>

                            <div>
                                <div class="spinner-in" v-if="showName">
                                    <div class="double-bounce1-in"></div>
                                </div>
                            </div>
                        </div>
                        <div class="cell" @click="showRight('phone')">
                            <div class="cell-content">
                                <div><i class="el-icon-mobile-phone"> 电话</i></div>
                                <div v-text="userInfo.phone" class="cell-text"></div>
                            </div>
                            <div>
                                <div class="spinner-in" v-if="showPhone">
                                    <div class="double-bounce1-in"></div>
                                </div>
                            </div>
                        </div>
                        <div class="cell" @click="showRight('address')">
                            <div class="cell-content">
                                <div><i class="el-icon-location-information"> 地址</i></div>
                                <div v-text="userInfo.address" class="cell-text"></div>
                            </div>
                            <div>
                                <div class="spinner-in" v-if="showAddress">
                                    <div class="double-bounce1-in"></div>
                                </div>
                            </div>
                        </div>
                        <div class="cell" @click="showRight('resetPassword')">
                            <div class="cell-content">
                                <div><i class="el-icon-lock"> 修改密码</i></div>
                            </div>
                            <div>
                                <div class="spinner-in" v-if="showResetPassword">
                                    <div class="double-bounce1-in"></div>
                                </div>
                            </div>
                        </div>
                        <div class="cell" @click="exit()">
                            <div class="cell-content">
                                <div><i class="el-icon-switch-button"> 退出登录</i></div>
                            </div>
                            <div>
                                <div class="spinner-in" v-if="showExit">
                                    <div class="double-bounce1-in"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="right-container" v-if="showName">
                        <img src="../assets/undraw_Profile_data_re_v81r.svg" class="svg">
                        <el-input style="width: 300px;" v-model="inputValue.name" placeholder="输入昵称，回车以保存"
                                  @change="updateUserInfo"/>
                    </div>
                    <div class="right-container" v-if="showPhone">
                        <img src="../assets/undraw_phone_call_grmk.svg" class="svg">
                        <el-input style="width: 300px;" v-model="inputValue.phone" placeholder="请输入手机号，回车以保存"
                                  @change="updateUserInfo"/>
                    </div>
                    <div class="right-container" v-if="showAddress">
                        <img src="../assets/undraw_delivery_address_03n0.svg" class="svg">
                        <el-input style="width: 300px;" v-model="inputValue.address" placeholder="请输入地址，回车以保存"
                                  @change="updateUserInfo"/>
                    </div>
                    <div class="right-container" v-if="showResetPassword">
                        <img src="../assets/undraw_secure_login_pdn4.svg" class="svg">
                        <el-input style="width: 300px;" v-model="resetPassword" placeholder="请输入新密码" type="password"/>
                        <el-input style="width: 300px;margin-top: 20px" v-model="reResetPassword"
                                  placeholder="请再次输入新密码，回车以修改" @change="reset" type="password"/>
                    </div>
                </div>
            </div>
        </div>
    </Page>
</template>

<script>

    import Page from "@/layout/page";
    import {reset, update} from "@/utils/api/user";

    export default {
        components: {Page,},
        name: "edit",
        data() {
            return {
                userInfo: {
                    name: null,
                    phone: null,
                    address: null,
                },
                resetPassword: null,
                reResetPassword: null,
                showName: true,
                showPhone: false,
                showAddress: false,
                showResetPassword: false,
                inputValue: {
                    name: null,
                    phone: null,
                    address: null
                },
                showExit: false
            };
        },
        created() {
            this.getUserInfo()
        },
        methods: {
            getUserInfo() {
                this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
            },
            setName: function (res) {
                this.userInfo.name = res;
                this.updateUserInfo()
            },
            setPhone: function (res) {
                this.userInfo.phone = res;
                this.updateUserInfo()
            },
            setLocal: function (res) {
                this.userInfo.address = res;
                this.updateUserInfo()
            },
            updateUserInfo() {
                let value = this.inputValue;
                value.id = this.userInfo.id;
                if (this.inputValue.name === null) {
                    value.name = this.userInfo.name;
                }
                if (this.inputValue.phone === null) {
                    value.phone = this.userInfo.phone;
                }
                if (this.inputValue.address === null) {
                    value.address = this.userInfo.address;
                }
                update(value).then(res => {
                    if (res.code === 1) {
                        this.$message.success('更新成功!');
                        let userInfo = JSON.parse(localStorage.getItem('userInfo'));
                        userInfo.phone = value.phone;
                        userInfo.address = value.address;
                        userInfo.name = value.name;
                        localStorage.setItem('userInfo', JSON.stringify(userInfo));
                        this.getUserInfo()
                    }
                })
            },
            reset() {
                if (this.resetPassword === null || this.reResetPassword === null) this.$message.error('密码不能为空');
                else if (this.resetPassword === this.reResetPassword) {
                    reset({
                        id: this.userInfo.id,
                        password: this.resetPassword
                    }).then(res => {
                        if (res.code === 1) {
                            this.$message.success('修改成功！');
                            this.dialogResetPasswordVisible = false;
                        }
                    })
                } else this.$message.error('两次密码不一致')
            },
            clickAvatar() {
                this.$confirm('头像根据昵称改变', '提示', {
                    type: 'info'
                }).then(() => {
                }).catch(() => {
                });
            },
            changeInput(value) {
                if (value === '') this.disabled = true;
                else this.disabled = false;
            },
            showRight(action) {
                if (action === 'name') {
                    this.showName = !this.showName;
                    this.showPhone = false;
                    this.showAddress = false;
                    this.showResetPassword = false;
                    this.showExit = false;
                } else if (action === 'phone') {
                    this.showName = false;
                    this.showPhone = !this.showPhone;
                    this.showAddress = false;
                    this.showResetPassword = false;
                    this.showExit = false;
                } else if (action === 'address') {
                    this.showName = false;
                    this.showPhone = false;
                    this.showAddress = !this.showAddress;
                    this.showResetPassword = false;
                    this.showExit = false;
                } else if (action === 'resetPassword') {
                    this.showName = false;
                    this.showPhone = false;
                    this.showAddress = false;
                    this.showResetPassword = !this.showResetPassword;
                    this.showExit = false;
                } else if (action === 'exit') {
                    this.showName = false;
                    this.showPhone = false;
                    this.showAddress = false;
                    this.showResetPassword = false;
                    this.showExit = !this.showResetPassword;
                }
            },
            exit() {
                this.showRight('exit');
                this.$confirm('确定退出当前账户？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(() => {
                    localStorage.removeItem('userInfo');
                    localStorage.removeItem('token');
                    this.$router.push('/login');
                }).catch(() => {
                });
            },
        },
        computed: {
            avatarUrl: function () {
                return `https://api.multiavatar.com/${this.userInfo.name}.png`;
            },
        },
    }
</script>

<style scoped>

    @import "../style/spinner.css";

    .user-container {
        width: 100%;
        height: 100%;
        background-color: #e4e7ed;
        display: flex;
        justify-content: center;
    }

    .box {
        width: 80%;
        background-color: white;
        display: flex;
    }

    .left {
        width: 100%;
        height: 100%;
        background-color: #f8f8f8;
    }

    .right {
        width: 100%;
        height: 100%;
        background-color: #f8f8f8;
        border-left: 1px rgba(0, 0, 0, .1) solid;
    }

    .right-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #f8f8f8;
    }

    .right-div {
        margin: 20px 0;
    }


    .cells {
        padding: 0 10px;
        background-color: white;
    }

    .cell {
        height: 50px;
        border-bottom: 1px rgba(0, 0, 0, .1) solid;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


    .cell-text {
        color: gray;
    }

    .cell-content {
        display: flex;
    }

    .cell-content > div {
        margin: 5px;
    }

    .svg {
        margin-bottom: 10px;
        width: 200px;
    }
</style>