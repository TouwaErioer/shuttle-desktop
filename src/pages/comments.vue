<template>
    <Page>
        <PageHeader slot="header"/>

        <div slot="center" class="add-container">
            <div class="box shadow">
                <Comment :store-id="storeId"/>
            </div>
        </div>
    </Page>
</template>

<script>

    import PageHeader from "@/components/page-header";
    import Page from "@/layout/page";
    import Comment from "@/components/comment";

    export default {
        name: "comments",
        components: {Comment, Page, PageHeader},
        props: {storeId: Number}
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
        width: 75%;
        margin: 30px 0;
    }

</style>