export default {
  getIsAddHousePopupOpen: (state) => {
    return state.isAddHousePopupOpen
  },
  
  getIsEditHousePopupOpen: (state) => {
    return state.isEditHousePopupOpen
  },

  getIsDeleteHousePopupOpen: (state) => {
    return state.isDeleteHousePopupOpen
  },

  getIsLinkHouseToProfilePopupOpen: (state) => {
    return state.isLinkHouseToProfilePopupOpen
  },

  getIsUnlinkHouseToProfilePopupOpen: (state) => {
    return state.isUnlinkHouseToProfilePopupOpen
  },

  getAllHouses: (state) => {
    return state.housesList
  }

}