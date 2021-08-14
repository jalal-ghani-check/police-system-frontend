export default ({ store, redirect , router }) => {
  if (!store.getters['auth/isAllowedToViewHousesPage']) {
    redirect('dashboard')
    // router.push('dashboard')
  }
}
