<template>
    <div class="container">
        <div class="header">
            <slot name="header"/>
        </div>
        <div class="center">
            <slot name="center"/>
        </div>
        <div class="footer">
            <slot name="footer"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page"
    }
</script>

<style scoped>

    .container {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .center {
        margin-bottom: 60px;
        flex: 1;
        overflow-y: scroll;
    }

    .center::-webkit-scrollbar {
        width: 0 !important
    }
</style>