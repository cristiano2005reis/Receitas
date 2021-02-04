import baseAPI from '@/http'

const router = 'api/usuario'

export const usuarioAPI = {
  create: (usuario) => baseAPI.post(router, usuario),
  update: (usuario) => baseAPI.put(router, usuario),
  delete: (id) => baseAPI.delete(`${router}/${id}`),
  list: () => baseAPI.get(router),
  get: (id) => baseAPI.get(`${router}/${id}`)
}
