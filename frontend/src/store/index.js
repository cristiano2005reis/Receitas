import Vue from 'vue'
import Vuex from 'vuex'
import baseAPI from '@/http'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    logado: false,
    usuario: {},
    token: null
  },
  mutations: {
    SET_USUARIO (state, payload) {
      state.usuario = payload
      localStorage.setItem('usuario', payload)
    },
    SET_LOADING (state, payload) {
      state.loading = payload
    },
    SET_TOKEN (state, payload) {
      state.token = payload
      state.logado = true
      localStorage.setItem('token', payload)
    },
    LOGOUT: (state) => {
      state.logado = false

      delete state.token
      localStorage.removeItem('token')

      delete state.usuario
      localStorage.removeItem('usuario')
      delete baseAPI.defaults.headers.common.Authorization
    }
  },
  actions: {
    setLoading ({ commit }, payload) {
      commit('SET_LOADING', payload)
    },
    setToken ({ commit }, payload) {
      commit('SET_TOKEN', payload)
    },
    setUsuario ({ commit }, payload) {
      commit('SET_USUARIO', payload)
    }
  },
  modules: {
    loading: state => state.loading,
    logado: state => state.logado,
    usuario: state => state.usuario,
    token: state => state.token
  }
})
