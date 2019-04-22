
const routes = [
    {
        path: '/login',
        component: () => import('../pages/Login'),
    },
    {
        path: '/',
        meta: {
            requiresAuth: false
        },
        component: () => import('../layouts/BasicLayout'),
        children: [
            {
              path: '/',
              component: () => import('../pages/Dashboard'),
            },
        ]
    },
    {
        path: '/m',
        meta: {
            requiresAuth: false
        },
        component: () => import('../layouts/MobileLayout'),
        children: [
            {
                path: '/m',
                component: () => import('../pages/m/Index'),
            },
            {
                path: '/m/search',
                component: () => import('../pages/m/Search'),
            },
            {
                path: '/m/share',
                component: () => import('../pages/m/Share'),
            },
            {
                path: '/m/task',
                component: () => import('../pages/m/Task'),
            },
            {
                path: '/m/mine',
                component: () => import('../pages/m/Mine'),
            },
        ]
    }
]

export default routes;
