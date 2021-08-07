<template>
  <div>
    <div v-if="showMyInfoModal" class="modal fade"
      :class= "{show: showMyInfoModal}"
      id="activeLaw" tabindex="-1" :style="{display: showMyInfoModal ? 'block' : 'none'}"  aria-hidden="true">
      <div class="modal-dialog alert-modal danger modal-dialog-centered">
        <div class="modal-content">
   
            <div class="modal-body">
                <div class="alert-content">
                    <h4>My Information</h4>
                    <div class="employee-info">

                      <div class="row">
                        <div class="col-md-6 mt-3">
                          <div class="row">
                            <div class="col-md-12 mt-3">
                                <label>Name</label>
                                <div>{{ getUserData.full_name }}</div>
                            </div>
                            <div class="col-md-12 mt-3">
                                <label>Username</label>
                                <div> {{ getUserData.username }}</div>
                            </div>
                            <div class="col-md-12 mt-3">
                                <label>Citizen ID</label>
                                <div>{{ getUserData.citizen_id }}</div>
                            </div>
                            <div class="col-md-12 mt-3">
                                <label>Call Sign</label>
                                <div>{{ getUserData.call_sign }} months</div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 mt-3">   
                          <div class="row">
                            <div class="col-md-12 mt-3">
                                <label>Role </label>
                                <div>$ {{ getUserData.role_name }}</div>
                            </div>
                            <div class="col-md-12 mt-3">
                                <label>Rank</label>
                                <div>{{ getUserData.rank_name }}</div>
                            </div>
                             <div class="col-md-12 mt-3">
                                <label>Department</label>
                                <div>{{ getUserData.department_name }}</div>
                            </div>
                          </div>
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

    <div v-if="showMyInfoModal" class="modal-backdrop fade show" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['showModal'],
  name: 'MyInfoModal',
  data () {
    return {
      active: true
    }
  },
  mounted() {
  },
  computed: {
    showModalComputed() {
      return this.showModal
    },
    ...mapGetters({
      getUserData: 'auth/getUserData',
    }),
    ...mapGetters([
      'showMyInfoModal',
    ])
  },
  methods: {
    closeModal() {
      this.$store.commit('setshowInfoModal',false)
      // this.$store.commit('law/setDetailLawId', null)
      // this.$store.commit('law/setIsLawDetailPopupOpen', false)
      // this.$store.commit('law/setDetailLawDetail', [])
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