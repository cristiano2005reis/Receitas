import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes as auth } from '@/modules/auth'
import { routes as categoria } from '@/modules/categoria'
import { routes as receita } from '@/modules/receita'
import { routes as usuario } from '@/modules/usuario'

Vue.use(VueRouter)

const routes = [
  ...auth,
  ...categoria,
  ...receita,
  ...usuario
]

const router = new VueRouter({
  routes
})

export default router
