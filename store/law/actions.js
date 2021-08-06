export default {
  fetchAllLaws ({ commit }, profileIdObj) {
    return this.$axios
      .get('laws/fetch-all')
      .then((response) => {
        const { data } = response.data
        return data
      })
  },
  addLaw ({ commit }, requestData) {
    return this.$axios
      .post('laws/add', requestData)
      .then((response) => {
        this.$showToastMessage(['Saved Successfully!'])
        const { data } = response.data
        return data
      })
  },
  deleteLaw ({ commit }, data) {
    return this.$axios
      .delete(`laws/delete/${data.law_id}`)
      .then((response) => {
        this.$showToastMessage(['Saved Successfully!'])
      })
  },
}
