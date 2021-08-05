import { faDAndD } from "@fortawesome/free-brands-svg-icons"

export default {
  fetchAllWarrants ({ commit }, profileIdObj) {
    return this.$axios
      .get('warrants/fetch-all')
      .then((response) => {
        const { data } = response.data
        return data
        // commit('setTransactionsDetail', data)
      })
  },

  updateWarrantStatus ({ commit }, requestData) {
    console.log(requestData)
    return this.$axios
      .post('warrants/update-status', requestData)
      .then((data) => {
        this.$showToastMessage(['Saved Successfully!'])
      })
  },

  addWarrant ({ commit }, requestData) {
    return this.$axios
      .post('warrants/add', requestData)
      .then((response) => {
        this.$showToastMessage(['Saved Successfully!'])
        const { data } = response.data
        return data
      })
  },


  


  generateWarrantRejectPopup ({ commit }, generateData) {
    commit('setRejectWarrantId', generateData.warrantId)
    commit('setIsWarrantRejectPopupOpen', true)
    commit('setRefreshWarrantList', false)
  },
  
  generateWarrantAcceptPopup ({ commit }, generateData) {
    commit('setAcceptWarrantId', generateData.warrantId)
    commit('setIsWarrantAcceptPopupOpen', true)
    commit('setRefreshWarrantList', false)
  },

  generateWarrantDetailPopup ({ commit }, generateData) {
    commit('setDetailWarrantId', generateData.warrantId)
    commit('setIsWarrantDetailPopupOpen', true)
    commit('setRefreshWarrantList', false)
    commit('setDetailWarrantDetail', generateData.warrantDetail)
  },

}
