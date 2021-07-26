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
  }

}