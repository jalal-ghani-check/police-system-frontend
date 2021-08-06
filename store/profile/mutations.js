export default {
  setAllProfiles (state, data) {
    state.allProfiles = data
  },
  pushNewSearchprofile (state, profile) {
    state.profileSearches.push(profile)
  }
}
