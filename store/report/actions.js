export default {
  fetchAllReports ({ commit }, requestData) {
    return this.$axios
      .get('reports/fetch-all')
      .then((response) => {
        return response.data.data
      })
  },

  // Police report actions

  fetchPoliceReportByReportId ({ commit }, requestData) {
    return this.$axios
      .get(`police-report/fetch/${requestData.report_id}`)
      .then((response) => {
        commit('setSelectedPoliceReport', response.data.data)
      })
  },

  createPoliceReport ({ dispatch , commit }, data) {
    return this.$axios.$post('police-report/save-settings', data)
  },

  // Medical report actions

  fetchMedicalReportByReportId ({ commit }, requestData) {
    return this.$axios
      .get(`medical-report/fetch/${requestData.report_id}`)
      .then((response) => {
        commit('setSelectedMedicalReport', response.data.data)
      })
  },

  createMedicalReport ({ dispatch , commit }, data) {
    return this.$axios.$post('medical-report/save-settings', data)
  }
}
