import VueRouter from "vue-router";
import routes from './router.config'


const router = new VueRouter({
    routes // short for `routes: routes`
});

router.beforeEach((to, from, next) => {
    const auth = JSON.parse(sessionStorage.getItem("auth"));
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!auth.loggedIn) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    }
    next()
})

export default router;