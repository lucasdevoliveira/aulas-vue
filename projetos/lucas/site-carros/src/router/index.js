import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home/home.vue'
import Contato from '../pages/contato/contato.vue'
import Carros from '../pages/carros/carros.vue'
import Carro from '../pages/carro/carro.vue' 

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
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
    },
    {
        path: '/carro/:id',
        name: 'carro',
        component: Carro
    },
    {
        path: '*',
        redirect: '/home'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
 })

export default router