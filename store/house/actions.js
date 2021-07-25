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
      .post('houses/unlink', requestData)
      .then((response) => {
        this.$toast.global.post_success()
      })
  },

  linkHouseToProfile ({ commit }, requestData) {
    return this.$axios
      .post('houses/link', requestData)
      .then((response) => {
        this.$toast.global.post_success()
      })
  },

  manageHouse ({ commit }, requestData) {
    return this.$axios
      .post(`houses/manage`, requestData)
      .then((response) => {
        this.$toast.global.post_success()
      })
  },

  deleteHouse ({ commit }, requestData) {
    return this.$axios
      .delete(`houses/delete/${requestData.house_id}`)
      .then((response) => {
        this.$toast.global.post_success()
      })
  },
}
