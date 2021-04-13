<template>
    <Page>
        <PageHeader slot="header"/>

        <div slot="center">receive</div>
    </Page>
</template>

<script>

    import PageHeader from "@/components/page-header";
    import Page from "@/layout/page";
    export default {
        name: "receive",
        components: {Page, PageHeader},
    }
</script>

<style scoped>

</style>