export const actions = {
    async nuxtClientInit({ commit, dispatch }) {
      const access_token = localStorage.getItem('access_token')

      if (access_token) {
        commit('user/setAccessToken', access_token)
      }
    }
}