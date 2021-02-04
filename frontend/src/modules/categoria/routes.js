export const routes = [
  {
    path: '/categoria',
    component: () => import(/* webpackChunkName: "categoria" */ './components/Listar')
  },
  {
    path: '/categoria/:id',
    component: () => import(/* webpackChunkName: "categoria" */ './components/Editar')
  }
]
