<template>
    <div class="col-lg-3 col-md-4 mb-3 report-card-frontend">
      <div :class="getCardClasses(law.color_class)" @click="showDetails">
          <div class="number">{{ law.law_code }}</div>
          <h4>{{ law.law_title }}</h4>
          <div class="tag">{{ law.type_name }}</div>
          <hr>
          <div class="row">
            <div class="col-6">Fine: ${{ law.fine_amount }}</div>
            <div class="col-6 text-end">Months: {{ law.duration }}</div>
          </div>
      </div>
      <button v-if='isAllowedToEditLaws' class="btn text-danger" @click="editLaw(law)">Edit</button><span v-if='isAllowedToEditLaws && isAllowedToDeleteLaws'>|</span>
      <button v-if='isAllowedToDeleteLaws' class="btn text-danger" @click="showDeleteLawModal(law.law_id)">Delete</button>
    </div>
    
  
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['law'],
  name: 'fineCardItem',
  computed: {
    ...mapGetters({
      isAllowedToDeleteLaws: 'auth/isAllowedToDeleteLaws',
      isAllowedToEditLaws: 'auth/isAllowedToEditLaws',
    }),
  },
  methods: {
    getCardClasses (colorClass) {
      return 'fine-card ' + colorClass
    },
    showDetails () {
      this.$store.commit('law/setDetailLawDetail', this.law)
      this.$store.commit('law/setDetailLawId', this.law.law_id)
      this.$store.commit('law/setIsLawDetailPopupOpen', true)
    },
    editLaw(law) {
      this.$store.commit('law/setSelectedLaw', law)
      this.$emit('edit', this.$event)
    },
    closeModal () {
      this.$store.commit('law/setDetailLawDetail', [])
      this.$store.commit('law/setDetailLawId', null)
      this.$store.commit('law/setIsLawDetailPopupOpen', false)
    },
    showDeleteLawModal (lawId) {
      this.$store.commit('law/setIsLawDeletePopupOpen', true)
      this.$store.commit('law/setDetailLawId', lawId)
    }
  },  
}
</script>





