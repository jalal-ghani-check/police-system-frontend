export default {
  setIsLawDetailPopupOpen (state, isLawDetailPopupOpen) {
    state.isLawDetailPopupOpen = isLawDetailPopupOpen
  },
  setDetailLawId (state, detailLawId) {
    state.detailLawId = detailLawId
  },
  setDetailLawDetail (state, LawDetail) {
    state.lawDetail = LawDetail
  },
  setIsLawDeletePopupOpen: (state, flag) => {
    state.isLawDeletePopupOpen = flag
  },
  setSelectedLaw: (state, data) => {
    state.selectedLaw = data
  } 

}
