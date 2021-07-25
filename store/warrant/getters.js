export default {
  getIsWarrantRejectPopupOpen: (state) => {
    return state.isWarrantRejectPopupOpen
  },
  getRejectWarrantId: (state) => {
    return state.rejectWarrantId
  },
  getRefreshWarrantList: (state) => {
    return state.refreshWarrantList
  },
  getIsWarrantAcceptPopupOpen: (state) => {
    return state.isWarrantAcceptPopupOpen
  },
  getAcceptWarrantId: (state) => {
    return state.acceptWarrantId
  },
  getIsWarrantDetailPopupOpen: (state) => {
    return state.isWarrantDetailPopupOpen
  },
  getDetailWarrantId: (state) => {
    return state.detailWarrantId
  },
  getDetailWarrantDetail: (state) => {
    return state.warrantDetail
  }

}
