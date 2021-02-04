import baseAPI from '@/http'

const router = 'api/categoria'

export const categoriaAPI = {
  create: (categoria) => baseAPI.post(router, categoria),
  update: (categoria) => baseAPI.put(router, categoria),
  delete: (id) => baseAPI.delete(`${router}/${id}`),
  list: () => baseAPI.get(router),
  get: (id) => baseAPI.get(`${router}/${id}`)
}
