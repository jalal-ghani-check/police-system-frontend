export default ({ store, redirect }) => {
  if (!store.getters['auth/isAllowedToViewReports']) {
    redirect('/dashboard')
  }
}
