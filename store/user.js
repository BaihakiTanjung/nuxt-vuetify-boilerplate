import ResponseHelper from '@/helpers/ResponseHelper'
import CustomError from '@/helpers/CustomError'

export const state = () => ({
  access_token: null,
  user: null
})

export const getters = {
  access_token(state) {
    return state.access_token
  },

  loggedIn(state) {
    return state.access_token
  },

  user(state) {
    return state.user
  }
}

export const mutations = {
  setAccessToken (state, access_token) {
    if (!access_token) {
      localStorage.removeItem('access_token')
      state.access_token = null
    } else {
      localStorage.setItem('access_token', access_token)
      state.access_token = access_token  
    }
  },

  setUser (state, user) {
    state.user = user
  }
}

export const actions = {
}
