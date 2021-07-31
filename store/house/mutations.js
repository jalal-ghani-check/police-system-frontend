export default {
  setIsEditHousePopupOpen (state, data) {
    state.isEditHousePopupOpen = data.isEditHousePopupOpen
    state.selectedHouseObj = data.selectedHouseObj
    state.selectedindex = data.selectedindex

  },
  
  setIsAddHousePopupOpen (state, isAddHousePopupOpen) {
    state.isAddHousePopupOpen = isAddHousePopupOpen
  },

  setIsDeleteHousePopupOpen (state, data) {
    state.isDeleteHousePopupOpen = data.isDeleteHousePopupOpen
    state.selectedHouseObj = data.selectedHouseObj
  },

  setIsLinkHouseToProfilePopupOpen (state, data) {
    state.isLinkHouseToProfilePopupOpen = data.isLinkHouseToProfilePopupOpen
    state.selectedHouseObj = data.selectedHouseObj
  },

  setIsUnlinkHouseToProfilePopupOpen: (state, data) => {
    state.isUnlinkHouseToProfilePopupOpen = data.isUnlinkHouseToProfilePopupOpen
    state.selectedHouseObj = data.selectedHouseObj
  },

  updateHousesList: (state, data) => {
    state.housesList = data
  },

  updateHouseSingle: (state, data) => {
    var index = data.selectedindex
    var house = state.housesList[index]
    house.house_name = data.house_name
    house.price = data.price
    house.image = data.image
    state.housesList[index] = house
  }

}