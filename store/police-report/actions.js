export default {
  fetchAllPoliceReports ({ commit }, requestData) {
    return this.$axios
      .get('reports/fetch-all')
      .then((response) => {
        return response.data.data
      })
  },

  fetchPoliceReportByReportId ({ commit }, requestData) {
    return this.$axios
      .get(`police-report/fetch/${requestData.report_id}`)
      .then((response) => {
        commit('setSelectedPoliceReport', response.data.data)
      })
  }
}
