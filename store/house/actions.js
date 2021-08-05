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
        this.$showToastMessage(['Saved Successfully!'])
      })
  },

  linkHouseToProfile ({ commit }, requestData) {
    return this.$axios
      .post('houses/link', requestData)
      .then((response) => {
        this.$showToastMessage(['Saved Successfully!'])
      })
  },

  manageHouse ({ commit }, requestData) {
    return this.$axios
      .post(`houses/manage`, requestData)
      .then((response) => {
        if(requestData.house_id !== ""){
          commit('updateHouseSingle',{...requestData, ...response.data.data}) 
        }
        this.$showToastMessage(['Saved Successfully!'])
      })
  },

  deleteHouse ({ commit }, requestData) {
    return this.$axios
      .delete(`houses/delete/${requestData.house_id}`)
      .then((response) => {
        this.$showToastMessage(['Saved Successfully!'])
      })
  },
}
