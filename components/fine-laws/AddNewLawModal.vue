<template>
  <div>

    <div v-if="showModalComputed" class="modal fade"
      :class= "{show: showModalComputed}"
      :style="{display: showModalComputed ? 'block' : 'none'}"
     id="deleteHouseAlert" tabindex="-1"  aria-hidden="true">
      <div class="modal-dialog modal-lg alert-modal danger modal-dialog-centered">
        <div class="modal-content">
  
          <div class="modal-body">
            <div class="white-widget">
              <div class="form-section">
                <h4>Add New Law</h4>
                <notification-bar />
                <div class="row mb-3 mt-3 g-3">
                  <div class="col-md-4" >
                      <input type="text" v-model="name" class="form-control" placeholder="Name">
                      <div
                          v-if="$v.name.$error && !$v.name.required"
                          class="error"
                      >
                          <span class="text-danger">Name is required</span>
                      </div>
                  </div>
                  <div class="col-md-8">
                      <input type="text" v-model="description"  class="form-control" placeholder="Description">
                      <div
                          v-if="$v.description.$error && !$v.description.required"
                          class="error"
                      >
                          <span class="text-danger">Description is required</span>
                      </div>
                  </div>
 
                </div>
                <div class="row mb-3 g-3">
                  <div class="col">
                      <input type="text" v-model="law_code" class="form-control" placeholder="Law Code">
                        <div
                          v-if="$v.law_code.$error && !$v.law_code.required"
                          class="error"
                      >
                          <span class="text-danger">Law is required</span>
                      </div>
                  </div>
                  <div class="col">
                      <input type="text" v-model="points"  class="form-control" placeholder="Points">
                      <div
                          v-if="$v.points.$error && !$v.points.required"
                          class="error"
                      >
                          <span class="text-danger">Points is required</span>
                      </div>
                      <div
                          v-if="$v.points.$error && !$v.points.numeric"
                          class="error"
                      >
                          <span class="text-danger">Points must be numeric</span>
                      </div>
                  </div>
         
                  <div class="col">
                      <input type="text" v-model="fine_amount"  class="form-control" placeholder="Fine Amount">
                       <div
                          v-if="$v.fine_amount.$error && !$v.fine_amount.required"
                          class="error"
                      >
                          <span class="text-danger">Fine Amount is required</span>
                      </div>
                      <div
                          v-if="$v.fine_amount.$error && !$v.fine_amount.numeric"
                          class="error"
                      >
                          <span class="text-danger">Fine Amount must be numeric</span>
                      </div>
                  </div>
                </div>
                <div class="row mb-3 g-3">
                  <div class="col">
                      <select v-model="crime_type" class="form-select">
                          <option value="" >Select Crime Type</option>
                          <option v-for="dept in getCrimeTypes" :key="dept.key" :value="dept.key"  >{{ dept.value }}</option>
                      </select>
                      <div
                          v-if="$v.crime_type.$error && !$v.crime_type.required"
                          class="error"
                      >
                          <span class="text-danger">Crime Type is required</span>
                      </div>
                  </div>
                  <div class="col">
                      <input type="text" v-model="jail_time"  class="form-control" placeholder="Jail Time">
                       <div
                          v-if="$v.jail_time.$error && !$v.jail_time.required"
                          class="error"
                      >
                          <span class="text-danger">Jail Time is required</span>
                      </div>
                      <div
                          v-if="$v.jail_time.$error && !$v.jail_time.numeric"
                          class="error"
                      >
                          <span class="text-danger">Jail Time must be numeric</span>
                      </div>
                  </div>
                </div>
              </div>
             </div>
          </div>
          <div class="alert-footer">
              <button @click="closeModal" class="btn" data-bs-dismiss="modal">Close</button>
              <button @click="submitForm" class="btn btn-success">
                Add
              </button>
          </div>
          
        </div>
      </div>
    </div>


    <div v-if="showModalComputed" class="modal-backdrop fade show" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { required, numeric } from 'vuelidate/lib/validators'


export default {
  props: ['showModal'],
  name: 'AddNewLawModal',
  data () {
    return {
      name: "",
      law_code: "",
      description: "",
      crime_type: "",
      points: "",
      fine_amount: "",
      jail_time: "",

    }
  },
  validations: {
    name: {
      required,
    },
    law_code: {
      required
    },
    description: {
      required
    },
    crime_type: {
      required
    },
    points: {
      required,
      numeric
    },
    fine_amount: {
      required,
      numeric
    },
    jail_time: {
      required,
      numeric
    }
  },
  mounted() {
  },
  computed: {
    showModalComputed() {
      return this.showModal
    },
    ...mapGetters([ 'getCrimeTypes']),

  },
  methods: {
    submitForm() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store
        .dispatch('law/addLaw', {
          name: this.name,
          law_code: this.law_code,
          description: this.description,
          crime_type: this.crime_type,
          points: this.points,
          fine_amount: this.fine_amount,
          jail_time: this.jail_time,

        })
        .then(() => {
          this.closeModal()
        })
        .catch(() => {

        })

      }

    },
    closeModal() {
      this.$v.$reset()
      this.name = ""
      this.law_code = ""
      this.crime_type = ""
      this.points = ""
      this.fine_amount = ""
      this.description = ""
      this.jail_time = ""
      this.$emit('close', this.$event)
    }
  }
}
</script>