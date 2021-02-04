export const routes = [
  {
    path: '/receita',
    component: () => import(/* webpackChunkName: "receita" */ './components/Listar')
  },
  {
    path: '/receita/:id',
    component: () => import(/* webpackChunkName: "receita" */ './components/Editar')
  }
]
