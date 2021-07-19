export default {
  fetchProfileRecord ({ commit }, profileIdObj) {
    const url = `/profile/fetch/${profileIdObj.profileId}`
    return this.$axios
      .get(url)
      .then((response) => {
        const { data } = response.data
        console.log(data)
        return data
        // commit('setTransactionsDetail', data)
      })
  }

}
