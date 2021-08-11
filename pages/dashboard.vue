<template>
  <div class="page-container">
    <div class="container">
      <div class="page-title-banner dashboard">
          <h2>Dashboard</h2>
      </div>
      <!-- <ProfileImageUploader
        profile-image="http://devlocal.police-system.co/api/v1/fetch-house-picture"
        @file-uploaded="fileUploaded"
      /> -->
      <div class="dashboard-page">
        <div class="row">
          <div class="col-md-9">
            <div class="section-heading red">
              <h4>Latest Reports</h4>
            </div>
            <div v-if="this.isAllowedToViewPoliceReports || this.isAllowedToViewMedicalReports" class="report-cards">
                <div v-if="policeReports.length > 0" class="row">
                  <div class="col-md-4 report-card-frontend"
                    v-for="(report, index) in policeReports" :key="index"
                    @click="openReportModalPopUp(report)" data-bs-dismiss='modal'
                  >
                      <div class="report-card" :class="{red: report.report_type === 'medical_report'}">
                          <div class="tag-no" v-if="report.report_type !== 'medical_report'">#{{ report.case_number }}</div>
                          <div class="tag-no" v-else>#{{ report.report_id_dec }}</div>
                          <h3>{{ report.report_title }} //{{ report.created_at }}</h3>
                          <h4>By: {{ report.written_by }}</h4>
                          <div v-if="report.report_type === 'medical_report'" class="tag">Medical Report</div>
                          <div v-else class="tag">Police Report</div>
                      </div>
                  </div>
                </div>
                <div v-else class="no-data">
                  <div>
                        <svg
                        width="33"
                        height="36"
                        viewBox="0 0 33 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.79722 2.3993V2.1993H9.59722H3.59896C3.22775 2.1993 2.87174 2.34677 2.60925 2.60925C2.34677 2.87174 2.1993 3.22775 2.1993 3.59896V20.3941C2.1993 20.7653 2.34677 21.1213 2.60925 21.3838L2.75068 21.2424L2.60925 21.3838C2.87174 21.6463 3.22775 21.7937 3.59896 21.7937H10.7969C11.062 21.7937 11.3163 21.8991 11.5037 22.0865C11.6912 22.274 11.7965 22.5283 11.7965 22.7934C11.7965 23.0585 11.6912 23.3128 11.5037 23.5003C11.3163 23.6877 11.062 23.793 10.7969 23.793H3.59896C2.6975 23.793 1.83296 23.4349 1.19553 22.7975C0.558104 22.1601 0.2 21.2955 0.2 20.3941V3.59896C0.2 2.6975 0.558104 1.83296 1.19553 1.19553C1.83296 0.558103 2.6975 0.2 3.59896 0.2H10.8489C10.9527 0.221827 11.0529 0.258293 11.1464 0.308329L11.2073 0.340861L11.2752 0.328966C11.2848 0.327293 11.2945 0.326568 11.3041 0.326791C11.3965 0.373295 11.4818 0.432813 11.5574 0.503564L18.7509 7.697C18.819 7.76982 18.8767 7.85165 18.9225 7.94015V8.00168V8.03441L18.9329 8.06543C18.9626 8.15373 18.9832 8.24481 18.9944 8.33727V8.39757V15.5955C18.9944 15.8606 18.8891 16.1149 18.7016 16.3023C18.5142 16.4898 18.2599 16.5951 17.9948 16.5951C17.7297 16.5951 17.4754 16.4898 17.2879 16.3023C17.1005 16.1149 16.9951 15.8606 16.9951 15.5955V9.59722V9.39722H16.7951H13.1962C12.2947 9.39722 11.4302 9.03911 10.7928 8.40169C10.1553 7.76426 9.79722 6.89972 9.79722 5.99826V2.3993ZM12.1379 3.94939L11.7965 3.60797V4.09081V5.99826C11.7965 6.36947 11.944 6.72548 12.2065 6.98796C12.469 7.25045 12.825 7.39791 13.1962 7.39791H15.1036H15.5865L15.245 7.05649L12.1379 3.94939ZM22.3035 17.2839L22.3047 17.285C22.3984 17.378 22.4727 17.4885 22.5235 17.6103C22.5742 17.7322 22.6004 17.8628 22.6004 17.9948C22.6004 18.1267 22.5742 18.2574 22.5235 18.3792C22.4727 18.501 22.3984 18.6116 22.3047 18.7045L22.3041 18.7051L17.5055 23.5037L17.5049 23.5043C17.412 23.598 17.3014 23.6724 17.1796 23.7231C17.0578 23.7739 16.9271 23.8 16.7951 23.8C16.6632 23.8 16.5325 23.7739 16.4107 23.7231C16.2889 23.6724 16.1783 23.598 16.0854 23.5043L16.0848 23.5037L13.6855 21.1044C13.5922 21.0111 13.5182 20.9004 13.4677 20.7785C13.4173 20.6566 13.3913 20.526 13.3913 20.3941C13.3913 20.2622 13.4173 20.1315 13.4677 20.0097C13.5182 19.8878 13.5922 19.777 13.6855 19.6838C13.7788 19.5905 13.8895 19.5165 14.0114 19.466C14.1333 19.4155 14.2639 19.3895 14.3958 19.3895C14.5278 19.3895 14.6584 19.4155 14.7803 19.466C14.902 19.5164 15.0127 19.5903 15.1059 19.6835C15.106 19.6836 15.1061 19.6837 15.1062 19.6838L16.6532 21.2428L16.7948 21.3855L16.9368 21.2431L20.8836 17.2842L20.884 17.2839C20.9769 17.1902 21.0875 17.1158 21.2093 17.0651C21.3311 17.0143 21.4618 16.9882 21.5937 16.9882C21.7257 16.9882 21.8564 17.0143 21.9782 17.0651C22.1 17.1158 22.2106 17.1902 22.3035 17.2839ZM5.2914 18.7016L5.14998 18.8431L5.2914 18.7016C5.10393 18.5142 4.99861 18.2599 4.99861 17.9948C4.99861 17.7297 5.10393 17.4754 5.2914 17.2879C5.47887 17.1005 5.73314 16.9951 5.99826 16.9951H10.7969C11.062 16.9951 11.3163 17.1005 11.5037 17.2879C11.6912 17.4754 11.7965 17.7297 11.7965 17.9948C11.7965 18.2599 11.6912 18.5142 11.5037 18.7016C11.3163 18.8891 11.062 18.9944 10.7969 18.9944H5.99826C5.73314 18.9944 5.47887 18.8891 5.2914 18.7016ZM13.1962 14.1958H5.99826C5.73314 14.1958 5.47887 14.0905 5.2914 13.903C5.10393 13.7156 4.99861 13.4613 4.99861 13.1962C4.99861 12.9311 5.10393 12.6768 5.2914 12.4893C5.47887 12.3018 5.73314 12.1965 5.99826 12.1965H13.1962C13.4613 12.1965 13.7156 12.3018 13.903 12.4893C14.0905 12.6768 14.1958 12.9311 14.1958 13.1962C14.1958 13.4613 14.0905 13.7156 13.903 13.903C13.7156 14.0905 13.4613 14.1958 13.1962 14.1958ZM7.19791 9.39722H5.99826C5.73314 9.39722 5.47887 9.2919 5.2914 9.10443C5.10393 8.91695 4.99861 8.66269 4.99861 8.39757C4.99861 8.13244 5.10393 7.87818 5.2914 7.6907C5.47887 7.50323 5.73314 7.39791 5.99826 7.39791H7.19791C7.46304 7.39791 7.7173 7.50323 7.90478 7.6907C8.09225 7.87818 8.19757 8.13244 8.19757 8.39757C8.19757 8.66269 8.09225 8.91695 7.90478 9.10443C7.7173 9.2919 7.46304 9.39722 7.19791 9.39722Z"
                          fill="white"
                        />
                      </svg>
                      <h4>No Reports</h4>
                  </div>
                </div>
            </div>
            <div v-else class="no-data">
              <div>
                    <svg
                    width="33"
                    height="36"
                    viewBox="0 0 33 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.79722 2.3993V2.1993H9.59722H3.59896C3.22775 2.1993 2.87174 2.34677 2.60925 2.60925C2.34677 2.87174 2.1993 3.22775 2.1993 3.59896V20.3941C2.1993 20.7653 2.34677 21.1213 2.60925 21.3838L2.75068 21.2424L2.60925 21.3838C2.87174 21.6463 3.22775 21.7937 3.59896 21.7937H10.7969C11.062 21.7937 11.3163 21.8991 11.5037 22.0865C11.6912 22.274 11.7965 22.5283 11.7965 22.7934C11.7965 23.0585 11.6912 23.3128 11.5037 23.5003C11.3163 23.6877 11.062 23.793 10.7969 23.793H3.59896C2.6975 23.793 1.83296 23.4349 1.19553 22.7975C0.558104 22.1601 0.2 21.2955 0.2 20.3941V3.59896C0.2 2.6975 0.558104 1.83296 1.19553 1.19553C1.83296 0.558103 2.6975 0.2 3.59896 0.2H10.8489C10.9527 0.221827 11.0529 0.258293 11.1464 0.308329L11.2073 0.340861L11.2752 0.328966C11.2848 0.327293 11.2945 0.326568 11.3041 0.326791C11.3965 0.373295 11.4818 0.432813 11.5574 0.503564L18.7509 7.697C18.819 7.76982 18.8767 7.85165 18.9225 7.94015V8.00168V8.03441L18.9329 8.06543C18.9626 8.15373 18.9832 8.24481 18.9944 8.33727V8.39757V15.5955C18.9944 15.8606 18.8891 16.1149 18.7016 16.3023C18.5142 16.4898 18.2599 16.5951 17.9948 16.5951C17.7297 16.5951 17.4754 16.4898 17.2879 16.3023C17.1005 16.1149 16.9951 15.8606 16.9951 15.5955V9.59722V9.39722H16.7951H13.1962C12.2947 9.39722 11.4302 9.03911 10.7928 8.40169C10.1553 7.76426 9.79722 6.89972 9.79722 5.99826V2.3993ZM12.1379 3.94939L11.7965 3.60797V4.09081V5.99826C11.7965 6.36947 11.944 6.72548 12.2065 6.98796C12.469 7.25045 12.825 7.39791 13.1962 7.39791H15.1036H15.5865L15.245 7.05649L12.1379 3.94939ZM22.3035 17.2839L22.3047 17.285C22.3984 17.378 22.4727 17.4885 22.5235 17.6103C22.5742 17.7322 22.6004 17.8628 22.6004 17.9948C22.6004 18.1267 22.5742 18.2574 22.5235 18.3792C22.4727 18.501 22.3984 18.6116 22.3047 18.7045L22.3041 18.7051L17.5055 23.5037L17.5049 23.5043C17.412 23.598 17.3014 23.6724 17.1796 23.7231C17.0578 23.7739 16.9271 23.8 16.7951 23.8C16.6632 23.8 16.5325 23.7739 16.4107 23.7231C16.2889 23.6724 16.1783 23.598 16.0854 23.5043L16.0848 23.5037L13.6855 21.1044C13.5922 21.0111 13.5182 20.9004 13.4677 20.7785C13.4173 20.6566 13.3913 20.526 13.3913 20.3941C13.3913 20.2622 13.4173 20.1315 13.4677 20.0097C13.5182 19.8878 13.5922 19.777 13.6855 19.6838C13.7788 19.5905 13.8895 19.5165 14.0114 19.466C14.1333 19.4155 14.2639 19.3895 14.3958 19.3895C14.5278 19.3895 14.6584 19.4155 14.7803 19.466C14.902 19.5164 15.0127 19.5903 15.1059 19.6835C15.106 19.6836 15.1061 19.6837 15.1062 19.6838L16.6532 21.2428L16.7948 21.3855L16.9368 21.2431L20.8836 17.2842L20.884 17.2839C20.9769 17.1902 21.0875 17.1158 21.2093 17.0651C21.3311 17.0143 21.4618 16.9882 21.5937 16.9882C21.7257 16.9882 21.8564 17.0143 21.9782 17.0651C22.1 17.1158 22.2106 17.1902 22.3035 17.2839ZM5.2914 18.7016L5.14998 18.8431L5.2914 18.7016C5.10393 18.5142 4.99861 18.2599 4.99861 17.9948C4.99861 17.7297 5.10393 17.4754 5.2914 17.2879C5.47887 17.1005 5.73314 16.9951 5.99826 16.9951H10.7969C11.062 16.9951 11.3163 17.1005 11.5037 17.2879C11.6912 17.4754 11.7965 17.7297 11.7965 17.9948C11.7965 18.2599 11.6912 18.5142 11.5037 18.7016C11.3163 18.8891 11.062 18.9944 10.7969 18.9944H5.99826C5.73314 18.9944 5.47887 18.8891 5.2914 18.7016ZM13.1962 14.1958H5.99826C5.73314 14.1958 5.47887 14.0905 5.2914 13.903C5.10393 13.7156 4.99861 13.4613 4.99861 13.1962C4.99861 12.9311 5.10393 12.6768 5.2914 12.4893C5.47887 12.3018 5.73314 12.1965 5.99826 12.1965H13.1962C13.4613 12.1965 13.7156 12.3018 13.903 12.4893C14.0905 12.6768 14.1958 12.9311 14.1958 13.1962C14.1958 13.4613 14.0905 13.7156 13.903 13.903C13.7156 14.0905 13.4613 14.1958 13.1962 14.1958ZM7.19791 9.39722H5.99826C5.73314 9.39722 5.47887 9.2919 5.2914 9.10443C5.10393 8.91695 4.99861 8.66269 4.99861 8.39757C4.99861 8.13244 5.10393 7.87818 5.2914 7.6907C5.47887 7.50323 5.73314 7.39791 5.99826 7.39791H7.19791C7.46304 7.39791 7.7173 7.50323 7.90478 7.6907C8.09225 7.87818 8.19757 8.13244 8.19757 8.39757C8.19757 8.66269 8.09225 8.91695 7.90478 9.10443C7.7173 9.2919 7.46304 9.39722 7.19791 9.39722Z"
                      fill="white"
                    />
                  </svg>
                  <h4>No rights to view Reports</h4>
              </div>
            </div>
          </div>
          <div class="col-md-3">
              <div class="section-heading small green">
                  <h4>Latest Searches</h4>
              </div>
              <div v-if="latestSearchListComputed.length > 0 && isAllowedToViewProfile" class="dashboard-sidebar">
                  <div v-for="(profile,index) in latestSearchListComputed" :key="index" >
                    <div  class="sidebar-card">
                        <h3>{{ profile.full_name }}</h3>
                        <h4>Citizen ID: {{ profile.citizen_id }}</h4>
                        <div class="lisence-no">
                            Weapon Lisence: <span v-if="profile.is_weapon_license_valid" >Yes</span><span v-else >Yes</span>
                        </div>
                    </div>
                  </div>

              </div>
              <div v-else class="no-data">
              <div>
                  <h4>{{ emptyLatestSearchMessage }}</h4>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <dashboard-pending-warrant-modal :show-modal="getShowPendingWarrantModalOnDashboard" @close="closePendingWarrantModal" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DashboardPendingWarrantModal from '~/components/DashboardPendingWarrantModal.vue'
export default {
  components: { DashboardPendingWarrantModal },
  name: 'Dashboard',
  layout: 'master',
  data () {
    return {
      policeReports: [],
      dummySearchList: [],
      latestSearchList: [],
    }
  },
  computed: {
    emptyLatestSearchMessage() {
      if(!this.isAllowedToViewProfile){
        return 'No Rights'
      }else {
        return 'No Latest Searches'
      }

    },
    latestSearchListComputed() {
      return this.latestSearchList
    },

    ...mapGetters({
      getShowPendingWarrantModalOnDashboard: 'dashboard/getShowPendingWarrantModalOnDashboard',
      isAllowedToViewPoliceReports: 'auth/isAllowedToViewPoliceReports',
      isAllowedToViewMedicalReports: 'auth/isAllowedToViewMedicalReports',
      getLatestProfileSearches: 'profile/getLatestProfileSearches',
      isAllowedToViewProfile: 'auth/isAllowedToViewProfile',
    })
  },
  mounted () {
    this.$store.commit('setActiveTab', 'dashboard')
    this.dummySearchList = []
    if(this.isAllowedToViewPoliceReports || this.isAllowedToViewMedicalReports) {
      this.fetchAllReports()
    }
    this.getLatestProfileSearches.forEach( (item) => {
      if(!this.dummySearchList.includes(item.citizen_id)){
        this.dummySearchList.push(item.citizen_id)
        this.latestSearchList.push(item)
      }
    })

  },
  methods: {
    closePendingWarrantModal() {
      this.$store.commit('dashboard/setShowPendingWarrantModalOnDashboard', false)
    },
    fileUploaded(files) {
    },
    openReportModalPopUp (report) {
      if(report.report_type === 'police_report') {
        this.fetchPoliceReportByReportId(report.report_id)
        this.$store.commit('report/setIsPoliceReportPopupOpen', true)
      } else {
        this.fetchMedicalReportByReportId(report.report_id)
        this.$store.commit('report/setIsMedicalReportPopupOpen', true)
      }
    },
    async fetchPoliceReportByReportId (reportId) {
      await this.$store.dispatch(
        'report/fetchPoliceReportByReportId',
        {
          report_id : reportId
        }
      )
    },
    async fetchMedicalReportByReportId (reportId) {
      await this.$store.dispatch(
        'report/fetchMedicalReportByReportId',
        {
          report_id : reportId
        }
      )
    },
    async fetchAllReports () {
      this.policeReports = await this.$store.dispatch(
        'report/fetchAllReports',
        {}
      )
    }
  }
}
</script>
<style lang="css">
  .page-title-banner.dashboard {
      background: url('~/assets/images/dashboard-banner.png') no-repeat;
      background-size: 100% !important;
  }
  .dashboard-card {
      background: #FAFCFF;
      border: 1px solid rgba(128, 186, 255, 0.5);
      box-sizing: border-box;
      padding: 15px 20px;
      color: #1F1F1F;
      margin-bottom: 20px;
      /* Shadow */

      box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
      border-radius: 15px;
  }
  .dashboard-card.red {
      background: #FFFAFA;
      border: 1px solid rgba(255, 128, 128, 0.5);
  }
  .dashboard-card .tag-no  {
      font-size: 14px;
      margin-bottom: 5px;
  }
  .dashboard-card h3 {
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      margin-bottom: 0;
  }
  .dashboard-card h4 {
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      color: rgba(27, 27, 27, 0.5);
  }
  .dashboard-card .tag {
      display: inline-block;
      background: rgba(92, 167, 255, 0.05);
      border-radius: 10px;
      color: #5CA7FF;
      font-size: 18px;
      padding: 4px 10px;
  }
  .dashboard-card.red .tag {
      background: rgba(238, 0, 0, 0.05);
      color: #EE0000
  }
  .dashboard-sidebar .sidebar-card {
      background: #FBFFFA;
      border: 1px solid rgba(145, 255, 128, 0.5);
      box-sizing: border-box;
      padding: 15px 20px;
      color: #1F1F1F;
      margin-bottom: 20px;
      /* Shadow */
      box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
      border-radius: 15px;
  }
  .dashboard-sidebar .sidebar-card h3 {
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
  }
  .dashboard-sidebar .sidebar-card h4  {
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
  }
  .lisence-no {
      font-size: 18px;
      color: rgba(27, 27, 27, 0.5);
  }
  .lisence-no span {
      color: #EE0000;
  }

  .report-card:hover {
    cursor: pointer;
  }
</style>
