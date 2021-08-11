export default {
  isAuthenticated: (state) => {
    return state.token != null && state.token !== ''
  },
  getUserData: (state) => {
    return state.userData
  },
  getUserFullName: (state) => {
    return state.userData.full_name
  },
  getUserProfilePicture: (state) => {
    return state.userData.profile_picture
  },
  getUserEncryptedId: (state) => {
    return state.userData.enc_user_id
  },
  isLoggedInUserAdmin: (state) => {
    return state.userData.role_id == 1
  },
  isAdmin: (state) => {
    return state.userData.is_admin
  },
  isAllowedToApproveWarrants: (state) => {
    return state.userData.is_allowed_to_approve_warrants
  },
  isAllowedToCreateWarrants: (state) => {
    return state.userData.is_allowed_to_create_warrants
  },
  isAllowedToDeleteWarrants: (state) => {
    return state.userData.is_allowed_to_delete_warrants
  },
  isAllowedToEditWarrants: (state) => {
    return state.userData.is_allowed_to_edit_warrants
  },
  isAllowedToServeWarrants: (state) => {
    return state.userData.is_allowed_to_serve_warrants
  },
  isAllowedToViewWarrants: (state) => {
    return state.userData.is_allowed_to_view_warrants
  },

  isAllowedToCreateLaws: (state) => {
    return state.userData.is_allowed_to_create_laws
  },
  isAllowedToDeleteLaws: (state) => {
    return state.userData.is_allowed_to_delete_laws
  },
  isAllowedToEditLaws: (state) => {
    return state.userData.is_allowed_to_edit_laws
  },
  isAllowedToViewLaws: (state) => {
    return state.userData.is_allowed_to_view_laws
  },

  isAllowedToCreateProfile: (state) => {
    return state.userData.is_allowed_to_create_profile
  },
  isAllowedToEditProfile: (state) => {
    return state.userData.is_allowed_to_edit_profile
  },
  isAllowedToViewProfile: (state) => {
    return state.userData.is_allowed_to_view_profile
  },

  isAllowedToCreatePoliceReports: (state) => {
    return state.userData.is_allowed_to_create_police_reports
  },

  isAllowedToCreateMedicalReports: (state) => {
    return state.userData.is_allowed_to_create_medical_reports
  },

  isAllowedToDeletePoliceReports: (state) => {
    return state.userData.is_allowed_to_delete_police_reports
  },

  isAllowedToDeleteMedicalReports: (state) => {
    return state.userData.is_allowed_to_delete_medical_reports
  },

  isAllowedToEditPoliceReports: (state) => {
    return state.userData.is_allowed_to_edit_police_reports
  },

  isAllowedToEditMedicalReports: (state) => {
    return state.userData.is_allowed_to_edit_medical_reports
  },

  isAllowedToViewVehicles: (state) => {
    return state.userData.is_allowed_to_view_vehicles
  },
  
  isAllowedToCreateVehicles: (state) => {
    return state.userData.is_allowed_to_create_vehicles
  },
  
  isAllowedToDeleteVehicles: (state) => {
    return state.userData.is_allowed_to_delete_vehicles
  },
  
  isAllowedToEditVehicles: (state) => {
    return state.userData.is_allowed_to_edit_vehicles
  },



  isAllowedToViewPoliceReports: (state) => {
    return state.userData.is_allowed_to_view_police_reports
  },

  isAllowedToViewMedicalReports: (state) => {
    return state.userData.is_allowed_to_view_medical_reports
  },

  isAllowedToExpungeRecords: (state) => {
    return state.userData.is_allowed_to_expunge_records
  },

  isAllowedToHighCommand: (state) => {
    return state.userData.is_allowed_to_high_commands
  },

  isAllowedToViewails: (state) => {
    return state.userData.is_allowed_to_view_bails
  },

  isAllowedToViewCharges: (state) => {
    return state.userData.is_allowed_to_view_charges
  },

  isAllowedToViewHousesPage: (state) => {
    const deptId = state.userData.department_id
    return deptId == 4 || state.userData.is_admin
  }

}


