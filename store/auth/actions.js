export default {
  saveToken ({ commit }, { token, isLocal }) {
    return new Promise((resolve, reject) => {
      this.$cookies.set('Pb-Token', token)
      if (isLocal) {
        localStorage.setItem('Pb-Token', token)
      }
      commit('setToken', token)
      return resolve(true)
    })
  },
  authenticateUser ({ dispatch }, authData) {
    return this.$axios.$post('auth/login', authData).then(({ data }) => {
      dispatch('saveToken', { token: data.api_token, isLocal: true })
      // return dispatch('investor/kyc/profileData', null, { root: true })
    })
  },
  registerUser ({ dispatch }, authData) {
    return this.$axios.$post('auth/register', authData).then(({ data }) => {
      dispatch('saveToken', { token: data.api_token, isLocal: true })
      return dispatch('investor/kyc/profileData', null, { root: true })
    })
  },
  initAuth ({ state, dispatch }, req) {
    let token = null
    if (req) {
      if (req.headers.cookie) {
        token = this.$cookies.get('Pb-Token')
        if (!process.env.rotateToken) {
          return dispatch('saveToken', { token, isLocal: false })
        }
      }
    } else if (process.client && req !== false) {
      token = state.token || localStorage.getItem('Pb-Token')
      if (token) {
        return dispatch('saveToken', { token, isLocal: true })
      }
    } else {
      return dispatch('saveToken', { token })
    }
  },
  logoutUser ({ dispatch, commit, state }, req) {
    return new Promise((resolve, reject) => {
      commit('investor/kyc/emptyProfileData', null, { root: true })
      this.$cookies.removeAll()
      if (process.client) {
        localStorage.removeItem('Pb-Token')
      }
      commit('setToken', null)
      return resolve(true)
    })
  }
}
