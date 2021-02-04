import baseAPI from '@/http'

const router = 'api/autenticacao'

export const autenticacaoAPI = {
  login: (usuario) => baseAPI.post(router, usuario)
}
