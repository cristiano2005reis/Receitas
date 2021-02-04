import baseAPI from '@/http'

const router = 'api/receita'

export const receitaAPI = {
  create: (receita) => baseAPI.post(router, receita),
  update: (receita) => baseAPI.put(router, receita),
  delete: (id) => baseAPI.delete(`${router}/${id}`),
  list: () => baseAPI.get(router),
  get: (id) => baseAPI.get(`${router}/${id}`)
}
