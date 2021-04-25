<template>
    <Page>
        <div slot="center" class="user-container">
            <div class="content">
                <div class="box">
                    <div class="radio">
                        <el-radio-group v-model="radio">
                            <el-radio-button label="商店"></el-radio-button>
                            <el-radio-button label="产品"></el-radio-button>
                        </el-radio-group>
                    </div>
                    <div class="data">
                        <Service :stores="stores" :span="4" v-if="radio === '商店'"/>
                        <Product :products="products" :pageNo="pageNo"
                                 :pageSize="pageSize" :total="total" v-if="products.length !== 0 && radio === '产品'"/>
                    </div>
                </div>
            </div>
        </div>
    </Page>
</template>

<script>

    import Service from "@/components/service";
    import Product from "@/components/product";
    export default {
        name: "star",
        components: {Product, Service},
        data() {
            return {
                radio: '商店',
                pageNo: 1,
                stores: [],
                products: [],
                pageSize: 8,
                total: 0
            }
        },
        created(){
            this.getData();
        },
        methods:{
            getStores() {
                this.stores = this.$store.getters.getStoresBySid(1);
            },
            getProducts() {
                this.products = this.$store.getters.getProducts(1);
            },
            getData(){
                if (this.radio === '商店'){
                    this.getStores();
                }else if(this.radio === '产品'){
                    this.getProducts();
                }
            }
        },
        watch:{
            radio:function () {
                this.getData();
            }
        }
    }
</script>

<style scoped>

    .user-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
    }

    .content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .box {
        height: 100%;
        width: 75%;
        background-color: white;
        display: flex;
        margin: 20px;
        box-shadow: 0 10px 40px -10px rgb(0 64 128 / 20%);
        border-radius: 6px;
        flex-direction: column;
        align-items: center;
    }

    .radio{
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .data{
        width: 100%;
        height: 100%;
    }
</style>