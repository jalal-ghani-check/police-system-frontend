export default {
  isAuthenticated: (state) => {
    return state.token != null && state.token !== ''
  },
  getUserData: (state) => {
    return state.userData
  }

}
