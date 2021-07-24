export default {
  fetchAllHouses ({ commit }, requestData) {
    return this.$axios
      .get('houses/fetch-all')
      .then((response) => {
        commit('updateHousesList', response.data.data)
      })
  },

  unlinkHouse ({ commit }, requestData) {
    return this.$axios
      .post('houses/unlink-house', requestData)
      .then((response) => {
        this.$toast.global.post_success()
      })
  },
}
