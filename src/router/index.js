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
    },
    {
        path: '/user',
        component: () => import('@/pages/user')
    }
];

const routers = new VueRouter({
    mode: 'history',
    routes
});

routers.beforeEach((to, from, next) => {
    if (to.path === '/register' || to.path === '/forget' || to.path === '/login') {
        next();
    } else {
        const token = localStorage.getItem('token');
        if (!token) {
            next({path: '/login'});
        } else {
            next();
        }
    }
});

export default routers