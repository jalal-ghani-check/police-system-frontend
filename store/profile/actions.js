export default {
  fetchAllProfileRecords () {
    return this.$axios
      .get('/profile/fetch-all')
      .then((response) => {
        return response.data.data
      })
  },
  
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
  expungeProfileRecord ({ commit }, requestData) {
    return this.$axios
      .post('profile/delete', requestData)
      .then((data) => {
        this.$toast.global.post_success()
      })
  },
  

}
