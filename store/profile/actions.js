export default {
  fetchProfileRecord ({ commit }, profileIdObj) {
    const url = `/profile/fetch/${profileIdObj.profileId}`
    return this.$axios
      .get(url)
      .then((response) => {
        const { data } = response.data
        return data
        // commit('setTransactionsDetail', data)
      })
  },
  
  saveProfileSettings ({ commit }, requestData) {
    return this.$axios
      .post('profile/save-settings', requestData)
      .then((data) => {
        this.$toast.global.post_success()
      })
  },

}
