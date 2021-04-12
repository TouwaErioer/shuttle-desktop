<template>
    <transition name="custom-classes-transition" :enter-active-class="enterTransitionName">
        <router-view/>
    </transition>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                enterTransitionName: null,
            }
        },
        watch: {
            '$route'(to) {
                this.enterTransitionName = to.path === '/search' ? 'animated slideInDown' : null;
            }
        }
    }
</script>

<style>
    @import "../src/style/cover.css";

    @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
</style>
