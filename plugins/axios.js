export default function ({ $axios, store, redirect, req }) {
  $axios.onError((error) => {
    store._vm.$nuxt.$loading.finish()
    if (
      (error.response && error.response.status === 403) ||
      (error.response && error.response.status === 401)
    ) {
      store.dispatch('auth/logoutUser', req).then(() => {
        redirect('/auth')
      })
    }
    if (error.response && error.response.status !== 500) {
      if (!error.response.config.url.includes('verify-sms') && !error.response.config.url.includes('verify-email-code')) {
        if (typeof error.response.data.error === 'string') {
          store.commit('setError', [
            {
              key: 'server error',
              value: error.response.data.error
            }
          ])
          store.commit('setNotificationClass', 'error')
        } else {
          store.commit('setError', error.response.data.error)
          store.commit('setNotificationClass', 'error')
        }
        window.scrollTo(0, 0)
      }
    } else {
      store.commit('setError', [
        {
          key: 'server error',
          value: 'something went wrong'
        }
      ])
      store.commit('setNotificationClass', 'error')
    }
  })

  $axios.onRequest((config) => {
    if (store.state.auth.token != null) {
      $axios.setHeader('Pb-Token', store.state.auth.token)
    }
    store.commit('setError', [])
    store.commit('setMessage', [])
    store.commit('setNotificationClass', 'error')
    if (
      !config.url.includes('download-document') &&
      !config.url.includes('live-opportunities') &&
      !config.url.includes('investment/portfolio') &&
      !config.url.includes('closed-opportunities') &&
      !config.url.includes('details') &&
      !config.url.includes('opportunity-card') &&
      !config.url.includes('investor/dashboard') &&
      !config.url.includes('fetch-profile-image')
    ) {
      store._vm.$nuxt.$loading.start()
    }
  })

  $axios.onResponse((response) => {
    store._vm.$nuxt.$loading.finish()
    if (response.headers['Pb-Token']) {
      store.dispatch('auth/saveToken', {
        token: response.headers['Pb-Token'],
        isLocal: true
      })
    }
  })
}
