<template>
  <div class="warrants-item report-card-frontend" @click="detailWarrant(warrant)" :class="{active: warrant.status === 'approved'}">
      <div class="tag-no">#{{ warrant.warrant_id }}</div>
      <div class="wanted-name">
          <h3>Wanted</h3>
          <h4>{{ warrant.profile_full_name }}</h4>
          <h5>By: {{ warrant.user_full_name }}</h5>
      </div>
      <div class="created-by">Created: {{ warrant.created_at }}</div>
      <div v-if="warrant.status === 'served'" class="tag">Served Warrant</div>
      <div v-if="warrant.status === 'pending'" class="tag">Pending Warrant</div>
      <div v-else-if="warrant.status === 'approved'" class="tag">Active Warrant</div>
      <div v-else-if="warrant.status === 'rejected'" class="tag">Rejected Warrant</div>

      <div class="warrants-item-footer d-grid gap-2">
          <button v-if="(warrant.status === 'pending') && isAllowedToApproveWarrants" @click="acceptWarrant(warrant.enc_warrant_id)" class="btn btn-outline-success">Accept</button>
          <button v-if="(warrant.status === 'pending') && isAllowedToDeleteWarrants"   @click="rejectWarrant(warrant.enc_warrant_id)" class="btn btn-outline-danger">Reject</button>
          <button v-if="(warrant.status !== 'approved') && isAllowedToDeleteWarrants"   @click="deleteWarrant(warrant.enc_warrant_id)" class="btn btn-outline-warning">Delete</button>
          <button v-if="warrant.status === 'approved'" @click="detailWarrant(warrant)"   class="btn btn-outline-secondary">View Details</button>
      </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['warrant'],
  name: 'WarrantItem',
  data () {
    return {
      active: true
    }
  },
  // mounted() {
  // },
  computed: {
      ...mapGetters({
      isAllowedToApproveWarrants: 'auth/isAllowedToApproveWarrants',
      isAllowedToDeleteWarrants: 'auth/isAllowedToDeleteWarrants'

    })
  },
  methods: {
    rejectWarrant(encWarrantId) {
      this.$renderWarrantRejectPopup(encWarrantId)
    },
    acceptWarrant(encWarrantId){
      this.$renderWarrantAcceptPopup(encWarrantId)
    },
    detailWarrant(warrant){
      this.$renderWarrantDetailPopup(warrant.enc_warrant_id,warrant)
    },
    
    deleteWarrant(warrant_id) {

      this.$store
        .dispatch('warrant/deleteWarrant', {
            warrant_id: warrant_id
        })
        .then(() => {
          this.$store.commit('warrant/setRefreshWarrantList', true)
        })
        .catch(() => {

        })

    },
    closeModal() {
      this.$emit('close', this.$event)
    }
  }
}
</script>





