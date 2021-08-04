export default {
  fetchAllVehicles ({ commit }, requestData) {
    return this.$axios
      .get('vehicles/fetch-all')
      .then((response) => {
        return response.data.data
      })
  },


  manageVehicle ({ commit }, requestData) {
    return this.$axios
      .post(`vehicles/manage`, requestData)
      .then((response) => {
        this.$showToastMessage(['Saved Successfully!'])
        return response.data.data
      })
  },

  deleteVehicle ({ commit }, requestData) {
    return this.$axios
      .delete(`vehicles/delete/${requestData.vehicle_id_to_delete}`)
      .then((response) => {
        this.$showToastMessage(['Saved Successfully!'])
      })
  },
}
