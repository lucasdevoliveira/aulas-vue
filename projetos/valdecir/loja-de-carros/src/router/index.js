import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home/home.vue'
import Contato from '../pages/contato/contato.vue'
import Carros from '../pages/carros/carros.vue' 

Vue.use(VueRouter)




const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/contato',
        name: 'contato',
        component: Contato
    },
    {
        path: '/carros',
        name: 'carros',
        component: Carros
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
 })

export default router