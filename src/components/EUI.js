import {library} from '@fortawesome/fontawesome-svg-core'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/fontawesome-free-regular'
import {faTachometerAlt} from '@fortawesome/fontawesome-free-solid'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faCoffee)
library.add(faTachometerAlt)
library.add(faUser)

export default {
    install: Vue => {
        Vue.component('Icon', FontAwesomeIcon)
        Vue.component('Button', () => import('./button'))
        Vue.component('Header', () => import('./header'))
        Vue.component('Container', () => import('./container'))
        Vue.component('Sidebar', () => import('./sidebar'))
        Vue.component('Menu', () => import('./menu'))
        Vue.component('Item', () => import('./menu-item'))

    }
}