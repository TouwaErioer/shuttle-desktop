<template>
    <div class="container">
        <div class="search">

            <el-input suffix-icon="el-icon-search" placeholder="搜索你感兴趣的内容"/>
        </div>
        <div class="close"><i class="el-icon-close" style="font-size: 35px"
        @click="$router.back()"></i></div>
    </div>
</template>

<script>
    export default {
        name: "search"
    }
</script>

<style scoped>

    .container{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .search{
        width: 35%;
        height: 70%;
    }

    .close{
        position: absolute;
        top: 15px;
        right: 15px;
    }
</style>