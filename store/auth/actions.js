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
  authenticateUser ({ dispatch , commit }, authData) {
    return this.$axios.$post('auth/login', authData).then(({ data }) => {
      dispatch('saveToken', { token: data.api_token, isLocal: true })
      if(data.isTherePendingWarrants) {
        commit('dashboard/setShowPendingWarrantModalOnDashboard', true, { root: true })
      }
      commit('setUserData',data)

      // return dispatch('fetchUserData', null)
    })
  },
  registerUser ({ dispatch, commit }, authData) {
    return this.$axios.$post('auth/register', authData).then(({ data }) => {
      dispatch('saveToken', { token: data.api_token, isLocal: true })
      commit('setUserData',data)
      // return dispatch('fetchUserData', null)
    })
  },
  logoutUserBackend ({ dispatch }, authData) {
    return this.$axios.$post('auth/logout', authData).then(({ data }) => {
      return data
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
    // return dispatch('logoutUserBackend', {})
    //   .then((data) => {
    //     // commit('investor/kyc/emptyProfileData', null, { root: true })
    //     this.$cookies.removeAll()
    //     if (process.client) {
    //       localStorage.removeItem('Pb-Token')
    //     }
    //     commit('setToken', null)
    //     return data
    //   })
    //   .catch(() => {})
    return new Promise((resolve, reject) => {
      commit('emptyUserData', null)
      this.$cookies.removeAll()
      if (process.client) {
        localStorage.removeItem('Pb-Token')
      }
      commit('setToken', null)
      return resolve(true)
    })
  },

  fetchAllUsers ({ commit }, profileIdObj) {
    return this.$axios
      .get('users/fetch-all')
      .then((response) => {
        const { data } = response.data
        return data
        // commit('setTransactionsDetail', data)
      })
  },

  fetchUserData ({ commit }, profileIdObj) {
    return this.$axios
      .get('users/fetch-data')
      .then((response) => {
        const { data } = response.data
        commit('setUserData',data)
        return data
        // commit('setTransactionsDetail', data)
      })
  },


  updateUserInfo ({ commit }, requestData) {
    return this.$axios
      .post('users/update', requestData)
      .then((response) => {
        this.$showToastMessage(['Saved Successfully!'])
        this.$showToastMessage(['Saved Successfully!'])
        const { data } = response.data
        return data
      })
  },

  deleteUser ({ commit }, requestData) {
    return this.$axios
      .post('users/delete', requestData)
      .then((response) => {
        this.$showToastMessage(['Saved Successfully!'])
        const { data } = response.data
        return data
      })
  },

  addUser ({ commit }, requestData) {
    return this.$axios
      .post('users/add', requestData)
      .then((response) => {
        this.$showToastMessage(['Saved Successfully!'])
        const { data } = response.data
        return data
      })
  },

  

  

  


}
