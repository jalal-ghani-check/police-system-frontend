export default {


  // Police report getters
  
  getIsMedicalReportPopupOpen: (state) => {
    return state.isMedicalReportPopupOpen
  },

  getSelectedMedicalReportObject: (state) => {
    return state.selectedMedicalReport
  },


  // Medical report getters

  getIsPoliceReportPopupOpen: (state) => {
    return state.isPoliceReportPopupOpen
  },

  getSelectedPoliceReportObject: (state) => {
    return state.selectedPoliceReport
  },

  getIsDeleteReportPopupOpen: (state) => {
    return state.isDeleteReportPopupOpen
  },

  getDeleteReportId: (state) => {
    return state.deleteReportId
  },
  getDeleteReportType: (state) => {
    return state.deleteReportType
  },



}