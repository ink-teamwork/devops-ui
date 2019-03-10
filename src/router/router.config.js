
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
    }
]

export default routes;
