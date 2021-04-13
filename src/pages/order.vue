<template>
    <Page>
        <PageHeader slot="header"/>

        <div slot="center">order</div>
    </Page>
</template>

<script>

    import PageHeader from "@/components/page-header";
    import Page from "@/layout/page";
    export default {
        name: "order",
        components: {Page, PageHeader},
    }
</script>

<style scoped>

</style>