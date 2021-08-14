export default ({ store, redirect }) => {
  if (!store.getters['auth/isAllowedToViewHousesPage']) {
    redirect('/dashboard')
  }
}
