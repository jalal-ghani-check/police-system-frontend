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
                <h4>Add / Edit Profile</h4>
                <notification-bar />
                <div class="row mb-5 mt-3 g-3">
                  <div class="col" >
                      <input type="text" v-model="full_name" class="form-control" placeholder="Full Name">
                      <div
                          v-if="$v.full_name.$error && !$v.full_name.required"
                          class="error"
                      >
                          Full Name is required
                      </div>
                  </div>
                  <div class="col">
                      <input type="text" v-model="designation" class="form-control" placeholder="Designation">
                        <div
                          v-if="$v.designation.$error && !$v.designation.required"
                          class="error"
                      >
                          Designation is required
                      </div>
                  </div>
                  <div class="col">
                      <input type="text" v-model="finger_print"  class="form-control" placeholder="Finger print">
                      <div
                          v-if="$v.finger_print.$error && !$v.finger_print.required"
                          class="error"
                      >
                          Finger print is required
                      </div>
                  </div>
                  <div class="col">
                      <input type="text" v-model="dna_code"  class="form-control" placeholder="Dna code">
                      <div
                          v-if="$v.dna_code.$error && !$v.dna_code.required"
                          class="error"
                      >
                          Dna code is required
                      </div>
                  </div>

 
                </div>
                <div class="row mb-3 g-3">
                  <div class="col-md-4">
                      <input type="text" v-model="citizen_id"  class="form-control" placeholder="Citizen ID">
                      <div
                          v-if="$v.citizen_id.$error && !$v.citizen_id.required"
                          class="error"
                      >
                          Citizen ID is required
                      </div>
                  </div>
         
                  <div class="col-md-8">
                      <input type="text" v-model="address"  class="form-control" placeholder="Address">
                       <div
                          v-if="$v.address.$error && !$v.address.required"
                          class="error"
                      >
                          Address is required
                      </div>
                  </div>
                  

                </div>
                <div class="row mb-3 g-3">
                  <div class="col">
                      <select v-model="gender" class="form-select">
                          <option value="" >Select Gender</option>
                          <option v-for="dept in getGenders" :key="dept.key" :value="dept.key"  >{{ dept.value }}</option>
                      </select>
                      <div
                          v-if="$v.gender.$error && !$v.gender.required"
                          class="error"
                      >
                          gender is required
                      </div>
                  </div>
                  <div class="col">
                      <date-picker v-model="dob" class="form-control" value-type="format" />

                      <div
                          v-if="$v.dob.$error && !$v.dob.required"
                          class="error"
                      >
                          Date of birth is required
                      </div>
                  </div>
                </div>
              </div>
             </div>
          </div>
          <div class="alert-footer">
              <button @click="closeModal" class="btn" data-bs-dismiss="modal">Close</button>
              <button @click="submitForm" class="btn btn-success">
                Save
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
import { required, requiredIf } from 'vuelidate/lib/validators'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'


export default {
  props: ['showModal', 'selectedProfile','profileId'],
  components: { DatePicker },
  name: 'AddNewProfileModal',
  data () {
    return {
      full_name: "",
      designation: "",
      gender: "",
      dob: "",
      address: "",
      citizen_id: "",
      finger_print: "",
      dna_code: "",

    }
  },
  validations: {
    full_name: {
      required,
    },
    designation: {
      required
    },
    gender: {
      required
    },
    dob: {
      required
    },
    address: {
      required
    },
    citizen_id: {
      required
    },
    finger_print: {
      required
    },
    dna_code: {
      required
    }
  },
  mounted() {
  },
  computed: {
    showModalComputed() {
      if(this.profileId) {
        this.full_name = this.selectedProfile.full_name
        this.designation = this.selectedProfile.designation
        this.gender = this.selectedProfile.gender
        this.dob = this.selectedProfile.dob_ymd
        this.address = this.selectedProfile.address
        this.citizen_id = this.selectedProfile.citizen_id
        this.finger_print = this.selectedProfile.finger_print
        this.dna_code = this.selectedProfile.dna_code
      }
      return this.showModal
    },
    ...mapGetters([ 'getGenders']),
    ...mapGetters({
      isLoggedInUserAdmin: 'auth/isLoggedInUserAdmin'
    }),
    selectedProfileComputed () {
      return this.selectedProfile
    }

  },
  methods: {
    submitForm() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store
        .dispatch('profile/manageProfle', {
          profile_id: this.selectedProfile.profile_id,
          full_name: this.full_name,
          designation: this.designation,
          gender: this.gender,
          citizen_id: this.citizen_id,
          dob: this.dob,
          address: this.address,
          finger_print: this.finger_print,
          dna_code: this.dna_code,

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
      this.full_name = ""
      this.designation = ""
      this.gender = ""
      this.citizen_id = ""
      this.dob = ""
      this.address = ""
      this.finger_print = ""
      this.dna_code = ""
      this.$emit('close', this.$event)
    }
  }
}
</script>