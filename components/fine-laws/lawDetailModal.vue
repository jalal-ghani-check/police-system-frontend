<template>
  <div>
    <div v-if="getIsLawDetailPopupOpen" class="modal fade"
      :class= "{show: getIsLawDetailPopupOpen}"
      id="activeLaw" tabindex="-1" :style="{display: getIsLawDetailPopupOpen ? 'block' : 'none'}"  aria-hidden="true">
      <div class="modal-dialog alert-modal danger modal-dialog-centered">
        <div class="modal-content">
   
            <div class="modal-body">
                <div class="alert-content">
                    <h4>Law Detail</h4>
                    <div class="employee-info">

                      <div class="row">
                            <div class="col-md-12 mt-3">
                                <label>Title</label>
                                <div>{{ getDetailLawDetail.law_title }}</div>
                            </div>
                            <div class="col-md-12 mt-3">
                                <label>Code</label>
                                <div> {{ getDetailLawDetail.law_code }}</div>
                            </div>
                            <div class="col-md-12 mt-3">
                                <label>Class</label>
                                <div>{{ getDetailLawDetail.type_name }}</div>
                            </div>
                            <div class="col-md-12 mt-3">
                                <label>Jail Time</label>
                                <div>{{ getDetailLawDetail.duration }} months</div>
                            </div>
                            <div class="col-md-12 mt-3">
                                <label>Fine</label>
                                <div>$ {{ getDetailLawDetail.fine_amount }}</div>
                            </div>
                            <div class="col-md-12 mt-3">
                                <label>Points</label>
                                <div>{{ getDetailLawDetail.points }}</div>
                            </div>
                            <div class="col-md-12 mt-3">
                                <label>Details</label>
                                <div>{{ getDetailLawDetail.description }}</div>
                            </div>
                      </div>
                    </div>
        
                </div>
            </div>
            <div class="alert-footer">
                <button @click="closeModal" class="btn" data-bs-dismiss="modal">Close</button>
            </div>
           
          </div>

      </div>
    </div>

    <div v-if="getIsLawDetailPopupOpen" class="modal-backdrop fade show" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['showModal'],
  name: 'LawDetailModal',
  data () {
    return {
      active: true
    }
  },
  mounted() {
  },
  computed: {
    ...mapGetters({
      getDetailLawId: 'law/getDetailLawId',
      getIsLawDetailPopupOpen: 'law/getIsLawDetailPopupOpen',
      getDetailLawDetail: 'law/getDetailLawDetail'
    })
  },
  methods: {
    closeModal() {
      this.$store.commit('law/setDetailLawId', null)
      this.$store.commit('law/setIsLawDetailPopupOpen', false)
      this.$store.commit('law/setDetailLawDetail', [])
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