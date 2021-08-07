export default {
  getIsLawDetailPopupOpen: (state) => {
    return state.isLawDetailPopupOpen
  },
  getDetailLawId: (state) => {
    return state.detailLawId
  },
  getDetailLawDetail: (state) => {
    return state.lawDetail
  },
  getIsLawDeletePopupOpen: (state) => {
    return state.isLawDeletePopupOpen
  },
  getSelectedLaw: (state) => {
    return state.selectedLaw
  }

}
