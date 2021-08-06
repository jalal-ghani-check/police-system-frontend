export default {
  getAllProfiles: (state) => {
    return state.allProfiles
  },

  getLatestProfileSearches: (state) => {
    const  arrLength = state.profileSearches.length
    return state.profileSearches.slice(Math.max(arrLength - 5, 0)).reverse()

  }
}
