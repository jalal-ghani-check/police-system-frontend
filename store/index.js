import axios from 'axios'
export const state = () => ({
  errors: [],
  messages: [],
  notificationClass: 'error',
  activeTab: 'dashboard',
  roles: [],
  departments: [],
  ranks: []
})

export const mutations = {
  setError (state, msg) {
    state.errors = msg
  },
  setMessage (state, msg) {
    state.messages = msg
  },
  setNotificationClass (state, notificationClass) {
    state.notificationClass = notificationClass
  },
  setActiveTab: (state, tab) => {
    state.activeTab = tab
  },
  setKeyValueInState: (state, keyValuePair) => {
    state[keyValuePair.key] = keyValuePair.value
  },
}

export const getters = {
  hasErrors: (state) => {
    return !!state.errors.length
  },
  hasMessages: (state) => {
    return !!state.messages.length
  },
  getNotificationClass: (state) => {
    return state.notificationClass
  },
  getActiveTab: (state) => {
    return state.activeTab
  },
  getRoles: (state) => {
    return state.roles
  },
  getRanks: (state) => {
    return state.ranks
  },
  getDepartments: (state) => {
    return state.departments
  },
}
export const actions = {
  async nuxtServerInit ({ commit, dispatch }, { redirect, $axios }) {
    const { data } = await axios.get(
      process.env.BASE_URL + 'meta-data'
    )
    if (data) {
      commit('setKeyValueInState', { key: 'roles', value: data.data.roles })
      commit('setKeyValueInState', { key: 'ranks', value: data.data.ranks })
      commit('setKeyValueInState', { key: 'departments', value: data.data.departments })
    }
    const token = this.$cookies.get('Pb-Token')
    if (token) {
      try {
        const response = await axios.get(
          process.env.BASE_URL + 'users/fetch-data',
          {
            headers: {
              'Pb-Token': token
            }
          }
        )
        commit('auth/setUserData', response.data.data)
        commit('dashboard/setShowPendingWarrantModalOnDashboard', true)
        if (response.headers['Pb-Token']) {
          await dispatch('auth/saveToken', {
            token: response.headers['Pb-Token']
          })
        }
      } catch (e) {
        // redirect to auth path
        dispatch('auth/logoutUser').then(() => redirect('/auth'))
      }
    }
  },
  setErrorInNotificationBar ({ commit }, errorArr) {
    commit('setError', errorArr)
    commit('setMessage', [])
    commit('setNotificationClass', 'error')
  },
  setSuccessInNotificationBar ({ commit }, successArr) {
    commit('setError', [])
    commit('setMessage', successArr)
    commit('setNotificationClass', 'success')
  },
  setWarningInNotificationBar ({ commit }, successArr) {
    commit('setError', [])
    commit('setMessage', successArr)
    commit('setNotificationClass', 'warning')
  },
  clearNotificationBar ({ commit }) {
    commit('setError', [])
    commit('setMessage', [])
    commit('setNotificationClass', 'error')
  }
}
