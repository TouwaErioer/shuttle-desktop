import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('@/pages/home')
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
    },
    {
        path: '/order',
        component: () => import('@/pages/order')
    },
    {
        path: '/receive',
        component: () => import('@/pages/receive')
    },
    {
        path: '/add',
        component: () => import('@/pages/add')
    }
];

const routers = new VueRouter({
    mode: 'history',
    routes
});

export default routers