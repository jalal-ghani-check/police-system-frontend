export default ({ store, redirect }) => {
  if (!store.getters['auth/isAllowedToViewWarrants']) {
    redirect('dashboard')
  }
}
