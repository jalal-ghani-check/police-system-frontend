export default {
  isAuthenticated: (state) => {
    return state.token != null && state.token !== ''
  },
  getUserData: (state) => {
    return state.userData
  },
  getUserFullName: (state) => {
    return state.userData.full_name
  }


}
