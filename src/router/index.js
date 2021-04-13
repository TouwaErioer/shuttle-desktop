import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('@/layout/home')
    },
    {
        path: '/login',
        component: () => import('@/pages/login')
    },
    {
        path: '/register',
        component: () => import('@/pages/register')
    },
    {
        path: '/forget',
        component: () => import('@/pages/forget')
    },
    {
        path: '/search',
        component: () => import('@/pages/search')
    },
    {
        path: '/store',
        component: () => import('@/pages/store')
    },
    {
        path: '/cart',
        component: () => import('@/pages/cart')
    }
];

const routers = new VueRouter({
    mode: 'history',
    routes
});

export default routers