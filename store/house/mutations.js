export default {
  setIsEditHousePopupOpen (state, isEditHousePopupOpen) {
    state.isEditHousePopupOpen = isEditHousePopupOpen
  },
  
  setIsAddHousePopupOpen (state, isAddHousePopupOpen) {
    state.isAddHousePopupOpen = isAddHousePopupOpen
  },

  setIsDeleteHousePopupOpen (state, isDeleteHousePopupOpen) {
    state.isDeleteHousePopupOpen = isDeleteHousePopupOpen
  },

  setIsUnlinkHouseToProfilePopupOpen: (state, data) => {
    state.isUnlinkHouseToProfilePopupOpen = data.isUnlinkHouseToProfilePopupOpen
    state.selectedHouseObj = data.selectedHouseObj
  },

  updateHousesList: (state, data) => {
    state.housesList = data
  }

}