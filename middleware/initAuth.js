export default ({ store, req }) => {
  store.dispatch('clearNotificationBar')
  store.dispatch('auth/initAuth', req)
}
