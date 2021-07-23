import state from "./state"

export default {
  setToken: (state, token) => {
    state.token = token
  },
  setUserData: (state, data) => {
    state.userData = { ...state.userData, ...data }
    
  },
  emptyUserData: (state) => {
    state.userData = {}
  },
  setUserDataKey: (state, keyValuePair) => {
    state.userData[keyValuePair.key] = keyValuePair.value
  }
}
