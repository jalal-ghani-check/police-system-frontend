export default ({ store, redirect }) => {
  if (!store.getters['auth/isAllowedToViewLaws']) {
    redirect('/dashboard')
  }
}
