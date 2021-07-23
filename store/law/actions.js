export default {
  fetchAllLaws ({ commit }, profileIdObj) {
    return this.$axios
      .get('laws/fetch-all')
      .then((response) => {
        const { data } = response.data
        return data
      })
  },
}
