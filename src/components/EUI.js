export default {
    install: Vue => {
        Vue.component('Button', () => import('./button'))
        Vue.component('Header', () => import('./header'))
        Vue.component('Container', () => import('./container'))
        Vue.component('Sidebar', () => import('./sidebar'))
    }
}