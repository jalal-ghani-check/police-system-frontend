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
        this.$toast.global.post_success()
        const { data } = response.data
        return data
      })
  },
}
