export const routes = [
  {
    path: '/usuario',
    component: () => import(/* webpackChunkName: "usuario" */ './components/Listar')
  },
  {
    path: '/usuario/:id',
    component: () => import(/* webpackChunkName: "usuario" */ './components/Editar')
  }
]
