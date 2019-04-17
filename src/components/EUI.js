export default {
    install: Vue => {
        Vue.component('Button', () => import('./Button'))
    }
}