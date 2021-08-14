export default ({ store, redirect }) => {
  if (!store.getters['auth/isAllowedToViewPoliceReports'] && !store.getters['auth/isAllowedToViewMedicalReports']) {
    redirect('dashboard')
  }
}