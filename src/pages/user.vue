<template>
    <Page>
        <PageHeader slot="header"/>

        <div slot="center" class="user-container">
            <div class="box">
                user
            </div>
        </div>
    </Page>
</template>

<script>

    import PageHeader from "@/components/page-header";
    import Page from "@/layout/page";
    export default {
        name: "user",
        components: {Page, PageHeader},
    }
</script>

<style scoped>

    .user-container {
        width: 100%;
        height: 100%;
        background-color: #e4e7ed;
        display: flex;
        justify-content: center;
    }

    .box{
        width: 80%;
        background-color: white;
    }

</style>