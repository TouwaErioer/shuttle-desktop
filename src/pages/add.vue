<template>
    <Page>
        <PageHeader slot="header"/>

        <div slot="center" class="add-container">
            <div class="box">
                add
            </div>
        </div>
    </Page>
</template>

<script>

    import PageHeader from "@/components/page-header";
    import Page from "@/layout/page";
    export default {
        name: "add",
        components: {Page, PageHeader},
    }
</script>

<style scoped>

    .add-container {
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