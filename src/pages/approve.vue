<template>
    <Page>
        <PageHeader slot="header"/>

        <div slot="center" class="add-container">
            <div class="box shadow">
                <div class="radio">
                    <el-page-header @back="$router.back()"
                                    style="display: flex;padding: 10px 20px;;align-items: center">
                        <el-breadcrumb slot="content" separator="/"
                                       style="height: 35px;width: 100%;display: flex;justify-content: center;align-items: center">
                            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item>添加</el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-page-header>
                    <el-radio-group v-model="radio">
                        <el-radio-button label="商店"></el-radio-button>
                        <el-radio-button label="产品"></el-radio-button>
                    </el-radio-group>
                    <div style="width: 192px;padding-right: 20px"><i class="el-icon-question" style="float: right"
                                                                    @click="help"></i></div>
                </div>
                <div class="content">
                    <div class="store" v-if="radio === '商店'">
                        <h2 style="text-align: center;color:#606266">用户添加商店</h2>
                        <el-input v-model="store.name" prefix-icon="el-icon-s-shop" placeholder="请输入商店名称"></el-input>
                        <el-input v-model="store.image" prefix-icon="el-icon-picture"
                                  placeholder="请输入商店图片图床链接"></el-input>
                        <div>
                            <span>服务 </span>
                            <el-tag
                                    :key="service.id"
                                    v-for="service in services"
                                    closable
                                    :disable-transitions="false"
                                    v-text="service.name"
                                    effect="dark"
                                    @click="select.service = {id :service.id,name:service.name}"
                                    :color="service.color" :style="'border-color: ' + service.color">
                            </el-tag>
                        </div>
                        <div>
                            <span>类别 </span>
                            <el-tag
                                    :key="category.id"
                                    v-for="category in categories"
                                    closable
                                    :disable-transitions="false"
                                    :type="category.id === 0 ? 'success' : ''"
                                    v-text="category.name"
                                    effect="dark"
                                    @click="select.category = {id:category.id,name:category.name}">
                            </el-tag>
                            <el-input
                                    class="input-new-tag"
                                    v-if="inputVisible"
                                    v-model="inputValue"
                                    ref="saveTagInput"
                                    size="small"
                                    @keyup.enter.native="handleInputConfirm"
                                    @blur="handleInputConfirm"
                            >
                            </el-input>
                            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加类别
                            </el-button>
                        </div>
                        <div class="select">
                            <div>
                                <span>已选服务 </span>
                                <span v-if="select.service === null"
                                      class="select-txt">未选择</span>
                                <el-tag v-else v-text="select.service.name"/>
                            </div>
                            <div>
                                <span>已选类别 </span>
                                <span v-if="select.category === null"
                                      class="select-txt">未选择</span>
                                <el-tag v-else v-text="select.category.name"/>
                            </div>
                        </div>
                        <div class="btn">
                            <el-button @click="addStore">添加商店</el-button>
                        </div>
                    </div>
                    <div class="store" v-if="radio === '产品'">
                        <h2 style="text-align: center;color:#606266">用户添加产品</h2>
                        <el-input v-model="product.name" prefix-icon="el-icon-goods" placeholder="请输入产品名称"></el-input>
                        <el-input v-model="product.image" prefix-icon="el-icon-picture"
                                  placeholder="请输入产品图片图床链接"></el-input>
                        <el-input v-model="product.price" prefix-icon="el-icon-price-tag" placeholder="请输入产品价格"
                                  type="number"></el-input>
                        <el-select v-model="storeName" :placeholder="stores.length === 0 ? '当前用户暂无商店' : '请选择'"
                                   :disabled="stores.length === 0">
                            <el-option
                                    v-for="store in stores"
                                    :key="store.name"
                                    :label="store.name"
                                    :value="store.name">
                            </el-option>
                        </el-select>
                        <div class="btn">
                            <el-button @click="addProduct">添加产品</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Page>
</template>

<script>

    import PageHeader from "@/components/page-header";
    import Page from "@/layout/page";
    import {findAllService} from "@/utils/api/service";
    import {findAllCategories} from "@/utils/api/category";
    import {findStoreByUserId, insertProduct, insertStore} from "@/utils/api/approve";
    import common from "@/utils/common";

    export default {
        name: "approve",
        components: {Page, PageHeader},
        data() {
            return {
                radio: '商店',
                store: {
                    name: null,
                    image: null,
                },
                services: [],
                inputVisible: false,
                inputValue: '',
                categories: [],
                select: {
                    service: null,
                    category: null
                },
                product: {
                    name: null,
                    image: null,
                    price: null
                },
                stores: [],
                storeName: null
            }
        },
        created() {
            this.getService();
            this.getCategories();
            this.findStoreByUserId();
        },
        computed: {
            getUserInfo: function () {
                return common.getUserInfo()
            }
        },
        methods: {
            getService() {
                findAllService().then(res => {
                    if (res.code === 1) {
                        this.services = res.data.list;
                    }
                });
            },
            showInput() {
                this.inputVisible = true;
            },

            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                    this.categories.push({
                        id: 0,
                        name: inputValue
                    });
                }
                this.inputVisible = false;
                this.inputValue = '';
            },
            getCategories() {
                findAllCategories().then(res => {
                    if (res.code === 1) {
                        this.categories = res.data.list;
                    }
                })
            },
            help() {
                let content = '用户添加商店、产品，添加后会发送到后台审核';
                this.$confirm(content, '帮助', {
                    type: 'warning'
                }).then(() => {
                }).catch(() => {
                });
            },
            addProduct() {
                if (this.stores.length === 0) {
                    this.$notify({
                        title: '当前用户暂无商店',
                        message: '跳转到添加商店',
                        type: 'warning'
                    });
                    this.radio = '商店';
                } else if (!Object.values(this.product).every(v => !!v)) {
                    this.$notify({
                        title: '输入格式有误',
                        message: '必填项未填',
                        type: 'warning'
                    });
                } else {
                    const userId = this.getUserInfo.id;
                    insertProduct({
                        uid: userId,
                        name: this.product.name,
                        image: this.product.image,
                        price: this.product.price,
                        storeName: this.storeName
                    }).then(res => {
                        if (res.code === 1) {
                            this.$notify({
                                title: '添加产品成功！',
                                message: '已交由后台批准，通过将发送邮件提示',
                                type: 'success'
                            })
                        }
                    })
                }
            },
            findStoreByUserId() {
                const userId = common.getUserInfo().id;
                findStoreByUserId(userId).then(res => {
                    if (res.code === 1) {
                        this.stores = res.data;
                    }
                })
            },
            addStore() {
                const userId = this.getUserInfo.id;
                if (!Object.values(this.stores).every(v => !!v) || !Object.values(this.select).every(v => !!v)) {
                    this.$notify({
                        title: '输入格式有误',
                        message: '必填项未填',
                        type: 'warning'
                    });
                } else {
                    insertStore({
                        uid: userId,
                        name: this.store.name,
                        image: this.store.image,
                        serviceId: this.select.service.id,
                        categoryId: this.select.category.id,
                        categoryName: this.select.category.name
                    }).then(res => {
                        if (res.code === 1) {
                            this.$notify({
                                title: '添加商店成功！',
                                message: '已交由后台批准，通过将发送邮件提示',
                                type: 'success'
                            })
                        }
                    });
                }
            }
        }
    }
</script>

<style scoped>

    .add-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
    }

    .box {
        margin: 30px 0;
        display: flex;
        flex-direction: column;
        width: 75%;
    }

    .radio {
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        align-items: center;
    }

    .el-tag + .el-tag {
        margin-left: 10px;
    }

    .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
    }

    .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
    }

    .store {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .store > div {
        margin: 5px;
    }

    .btn {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .select-txt {
        color: gray;
        font-size: 12px;
    }

    .select {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .select > div {
        margin: 10px 5px;
    }
</style>