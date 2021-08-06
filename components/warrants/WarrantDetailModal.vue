<template>
  <div>
    <div v-if="getIsWarrantDetailPopupOpen" class="modal fade"
      :class= "{show: getIsWarrantDetailPopupOpen}"
      id="activeWarrant" tabindex="-1" :style="{display: getIsWarrantDetailPopupOpen ? 'block' : 'none'}"  aria-hidden="true">
      <div class="modal-dialog alert-modal danger modal-dialog-centered">
        <div class="modal-content">
   
            <div class="modal-body">
                <div class="alert-content">
                    <h4>Warrant Detail</h4>
                    <!-- <h2>{{ getDetailWarrantDetail.title }}</h2> -->
                    <div class="employee-info">

                      <div class="row">
                            <div class="col-md-12 mt-3">
                                <label>Title</label>
                                <div>{{ getDetailWarrantDetail.title }}</div>
                            </div>
                            <div class="col-md-12 mt-3">
                                <label>Regarding</label>
                                <div> {{ getDetailWarrantDetail.profile_full_name }}</div>
                            </div>
                            <div class="col-md-12 mt-3">
                                <label>Description</label>
                                <div>{{ getDetailWarrantDetail.description }}</div>
                            </div>
                            <div class="col-md-12 mt-3">
                                <label>Created At</label>
                                <div>{{ getDetailWarrantDetail.created_at }}</div>
                            </div>
                      </div>
                    </div>
        
                </div>
            </div>
            <div class="alert-footer">
                <button @click="closeModal" class="btn" data-bs-dismiss="modal">Close</button>
                <span></span>
                <button v-if="isAllowedToServeWarrants && getDetailWarrantDetail.status == 'approved'" @click="submitForm" class="btn btn-success"><svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.5877 1.37885C18.4686 1.25881 18.327 1.16352 18.1709 1.0985C18.0148 1.03348 17.8474 1 17.6783 1C17.5092 1 17.3418 1.03348 17.1858 1.0985C17.0297 1.16352 16.888 1.25881 16.769 1.37885L7.22709 10.9335L3.21822 6.91186C3.0946 6.79244 2.94867 6.69854 2.78875 6.63552C2.62884 6.5725 2.45808 6.54159 2.28622 6.54457C2.11437 6.54754 1.94478 6.58433 1.78714 6.65285C1.6295 6.72136 1.48691 6.82025 1.36749 6.94388C1.24807 7.0675 1.15417 7.21343 1.09115 7.37335C1.02813 7.53326 0.997223 7.70402 1.0002 7.87588C1.00317 8.04773 1.03996 8.21732 1.10848 8.37496C1.17699 8.5326 1.27588 8.67519 1.39951 8.79461L6.31773 13.7128C6.4368 13.8329 6.57845 13.9282 6.73453 13.9932C6.8906 14.0582 7.05801 14.0917 7.22709 14.0917C7.39617 14.0917 7.56357 14.0582 7.71965 13.9932C7.87573 13.9282 8.01738 13.8329 8.13645 13.7128L18.5877 3.26161C18.7177 3.14168 18.8214 2.99611 18.8924 2.83409C18.9634 2.67207 19 2.49711 19 2.32023C19 2.14335 18.9634 1.96839 18.8924 1.80637C18.8214 1.64435 18.7177 1.49879 18.5877 1.37885Z" fill="white" stroke="#1DD100" stroke-width="0.5"/>
                    </svg>
                    
                    Serve Warrant</button>
            </div>
           
          </div>

      </div>
    </div>

    <div v-if="getIsWarrantDetailPopupOpen" class="modal-backdrop fade show" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['showModal','warrantId'],
  name: 'WarrantDetailModal',
  data () {
    return {
      active: true
    }
  },
  mounted() {
  },
  computed: {
    // showModalComputed() {
    //   return this.showModal
    // },
    ...mapGetters({
      getDetailWarrantId: 'warrant/getDetailWarrantId',
      getIsWarrantDetailPopupOpen: 'warrant/getIsWarrantDetailPopupOpen',
      getDetailWarrantDetail: 'warrant/getDetailWarrantDetail',
      isAllowedToServeWarrants: 'auth/isAllowedToServeWarrants'
    })
  },
  methods: {
    submitForm() {
      this.$store
        .dispatch('warrant/updateWarrantStatus', {
            warrant_id: this.getDetailWarrantId,
            status: 'served'
        })
        .then(() => {
          this.closeModal()
          this.$store.commit('warrant/setRefreshWarrantList', true)

        })
        .catch(() => {

        })

    },
    closeModal() {
      this.$store.commit('warrant/setDetailWarrantId', null)
      this.$store.commit('warrant/setIsWarrantDetailPopupOpen', false)
      this.$store.commit('warrant/setDetailWarrantDetail', [])
    }
  }
}
</script>


<style lang="css" scoped>
  .page-title-banner.users {
      background: url(~/assets/images/users-banner.png) no-repeat;
      background-size: 100% !important;   
  }
  .header-buttons {
      text-align: right;
      margin-top: 15px;
  }
  .header-buttons .btn {
      font-weight: normal;
  }
  .employee-info label {
      color: rgba(27, 27, 27, 0.5);
  }
  .employee-info .row {
      margin-bottom: 20px;
  }

  .role-widget > h4 {
      font-size: 18px;
      font-weight: normal;
      margin-bottom: 15px;
      color: rgba(27, 27, 27, 0.5);
  }

  .alert-modal .alert-content {
    max-width: 420px;
    margin: auto;
    text-align: left;
  }
</style>