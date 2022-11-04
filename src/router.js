import Vue from 'vue'
import VueRouter from 'vue-router'

// import IngresoGastos from './components/IngresoGastos.vue'
import MultipleChoice from './components/MultipleChoice.vue'
import IngresoGastos from './components/IngresoGastos'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/ingreso-gastos' },
        { path: '/ingreso-gastos', component: IngresoGastos },
        { path: '/multiple-choice', component: MultipleChoice }
    ]
})

