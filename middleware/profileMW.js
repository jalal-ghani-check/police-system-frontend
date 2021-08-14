export default ({ store, redirect }) => {
  if (!store.getters['auth/isAllowedToViewProfile']) {
    redirect('dashboard')
  }
}
