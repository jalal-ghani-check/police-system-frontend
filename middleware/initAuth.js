export default ({ store, req }) => {
  store.dispatch('clearNotificationBar')
  store.dispatch('clearToastMessage')
  store.dispatch('auth/initAuth', req)
}
