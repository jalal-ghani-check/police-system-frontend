export default {
  
  // Police report setters
  
  setIsPoliceReportPopupOpen (state, data) {
    state.isPoliceReportPopupOpen = data
  },

  setSelectedPoliceReport (state, data) {
    state.selectedPoliceReport = data
  },

  // Medical report setters

  setIsMedicalReportPopupOpen (state, data) {
    state.isMedicalReportPopupOpen = data
  },

  setSelectedMedicalReport (state, data) {
    state.selectedMedicalReport = data
  },

  setIsDeleteReportPopupOpen: (state, data) => {
    state.isDeleteReportPopupOpen  = data
  },

  setDeleteReportId: (state, data) => {
    state.deleteReportId  = data
  },
  setDeleteReportType: (state, data) => {
    state.deleteReportType = data
  },

}