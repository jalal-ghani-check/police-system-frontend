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
  isLoggedInUserAdmin: (state) => {
    return state.userData.role_id == 1
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

  isAllowedToCreateReports: (state) => {
    return state.userData.is_allowed_to_create_reports
  },
  isAllowedToDeleteReports: (state) => {
    return state.userData.is_allowed_to_delete_reports
  },
  isAllowedToEditReports: (state) => {
    return state.userData.is_allowed_to_edit_reports
  },
  isAllowedToViewReports: (state) => {
    return state.userData.is_allowed_to_view_reports
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

}


