import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);

const routes = [
    {
        path: '',
        component: () => import('@/components/page-header'),
        redirect: 'home',
        children: [
            {
                path: '/home',
                component: () => import('@/pages/home'),
                meta: {
                    title: '首页'
                }
            },
            {
                path: '/store/:id',
                component: () => import('@/pages/store'),
                props: true,
                meta: {
                    title: '商店详情'
                }
            },
            {
                path: '/cart',
                component: () => import('@/pages/cart'),
                meta: {
                    title: '购物车'
                }
            },
            {
                path: '/order',
                component: () => import('@/pages/order'),
                meta: {
                    title: '订单'
                }
            },
            {
                path: '/receive',
                component: () => import('@/pages/receive'),
                meta: {
                    title: '接单'
                }
            },
            {
                path: '/approve',
                component: () => import('@/pages/approve'),
                meta: {
                    title: '审批'
                }
            },
            {
                path: '/user',
                component: () => import('@/pages/user'),
                meta: {
                    title: '用户'
                }
            },
            {
                path: '/star',
                component: () => import('@/pages/star'),
                meta: {
                    title: '收藏'
                }
            },
            {
                path: '/return/:status',
                component: () => import('@/pages/result'),
                props: true,
                meta: {
                    title: '充值结果'
                }
            },
            {
                path: '/chat',
                component: () => import('@/pages/chat'),
                meta: {
                    title: '客服'
                }
            }, {
                path: '/comments/:storeId',
                component: () => import('@/pages/comments'),
                props: true,
                meta: {
                    title: '评论详情'
                }
            }
        ]
    },
    {
        path: '/login',
        component: () => import('@/pages/login'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/register',
        component: () => import('@/pages/register'),
        meta: {
            title: '注册'
        }
    },
    {
        path: '/forget',
        component: () => import('@/pages/forget'),
        meta: {
            title: '忘记密码'
        }
    }, {
        path: '/search',
        component: () => import('@/pages/search'),
        meta: {
            title: '搜索'
        }
    }
];

const routers = new VueRouter({
    mode: 'history',
    routes,
});

routers.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
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
