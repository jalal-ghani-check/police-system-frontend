export default {
  fetchChannel ({ commit }, requestData) {
    return this.$axios
      .post(`chat/channels/fetch-one`, requestData)
      .then((response) => {
        return response.data.data
      })
  },

  fetchChatMessages ({ commit }, channelId) {
    return this.$axios
      .get(`chat/messages/fetch/${channelId}`)
      .then((response) => {
        return response.data.data
      })
  },

  sendMessage ({ commit }, requestData) {
    return this.$axios
      .post(`chat/messages/add-new`, requestData)
      .then((response) => {

      })
  },

  
  fetchAllChatUsers ({ commit }) {
    return this.$axios
      .get(`chat/users/fetch-all`)
      .then((response) => {
        return response.data.data
      })
  },
}
