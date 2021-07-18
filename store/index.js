// import axios from 'axios'
export const state = () => ({
  errors: [],
  messages: [],
  notificationClass: 'error',

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
  }

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
  
}
export const actions = {
  async nuxtServerInit ({ commit, dispatch }, { redirect, $axios }) {
    // const { data } = await axios.get(
    //   process.env.BASE_URL + 'investor/meta-data'
    // )
    // if (data) {
    //   commit('setKeyValueInState', { key: 'annualIncome', value: data.data.preferences.annual_income.metadata })
    //   commit('setKeyValueInState', { key: 'investPerOpp', value: data.data.preferences.invest_per_opp.metadata })
    //   commit('setKeyValueInState', { key: 'investPerYear', value: data.data.preferences.invest_per_year.metadata })
    //   commit('setKeyValueInState', { key: 'countries', value: data.data.countries })
    //   commit('setKeyValueInState', { key: 'professionalDocs', value: data.data.documents.individual_professional })
    //   commit('setKeyValueInState', { key: 'qualifiedCompanyDocs', value: data.data.documents.qualified_company })
    //   commit('setKeyValueInState', { key: 'qualifiedNonProfitOrganizationDocs', value: data.data.documents.qualified_non_profit_organization })
    // }
    // const token = this.$cookies.get('Pb-Token')
    // if (token) {
    //   try {
    //     const response = await axios.get(
    //       process.env.BASE_URL + 'investor/profile-data',
    //       {
    //         headers: {
    //           'Pb-Token': token
    //         }
    //       }
    //     )
    //     commit('investor/kyc/setProfileData', response.data.data)
    //     if (response.headers['Pb-Token']) {
    //       await dispatch('auth/saveToken', {
    //         token: response.headers['Pb-Token']
    //       })
    //     }
    //   } catch (e) {
    //     // redirect to auth path
    //     dispatch('auth/logoutUser').then(() => redirect('/auth'))
    //   }
    // }
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
