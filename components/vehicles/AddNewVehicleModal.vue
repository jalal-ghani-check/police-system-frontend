<template>
  <div>

    <div v-if="showModalComputed" class="modal fade"
      :class= "{show: showModalComputed}"
      :style="{display: showModalComputed ? 'block' : 'none'}"
     id="addVehicleAlert" tabindex="-1"  aria-hidden="true">
      <div class="modal-dialog modal-lg alert-modal danger modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <div class="white-widget">
              <div class="form-section">
                <h4>Add / Edit Vehicle</h4>
                <!-- <notification-bar /> -->
                <div class="row mb-3 mt-3 g-3">
                  <div class="col">
                      <input type="text" v-model="name" class="form-control" placeholder="Vehicle Name">
                      <div
                          v-if="$v.name.$error && !$v.name.required"
                          class="error"
                      >
                        Vehicle name is required
                      </div>
                  </div>
                  <div class="col">
                      <input type="text" v-model="licensePlate"  class="form-control" placeholder="License plate #">
                      <div
                          v-if="$v.licensePlate.$error && !$v.licensePlate.required"
                          class="error"
                      >
                        License plate # is required
                      </div>
                  </div>
                </div>

                <div class="row mb-3 g-3">
                  <div class="col">
                    <select v-model="ownerId" class="form-select" >
                          <option value="" >Select Owner</option>
                          <option v-for="(profile) in allProfiles" :key="profile.profile_id" :value="profile.profile_id"  >{{ profile.full_name }}</option>
                      </select>
                      <div
                          v-if="$v.ownerId.$error && !$v.ownerId.required"
                          class="error"
                      >
                        Vehicle owner name is required
                      </div>
                  </div>
                </div>

                <div class="row mb-3 g-3">
                  <textarea rows="3" placeholder="Description" class="form-control" v-model="description"></textarea>
                          <div
                                v-if="$v.description.$error && !$v.description.required"
                                class="error"
                              >
                                Description required
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
import { required } from 'vuelidate/lib/validators'


export default {
  props: ['showModal', 'selectedVehicle'],
  name: 'AddNewVehicleModal',
  data () {
    return {
      vehicleId: "",
      name: "",
      licensePlate: "",
      description: "",
      ownerId: "",
      allProfiles: ""
    }
  },
  validations: {
    name: {
      required,
    },
    licensePlate: {
      required
    },
    description: {
      required
    },
    ownerId: {
      required
    }
  },
  mounted() {
    this.fetchAllProfiles()
  },
  computed: {
    showModalComputed() {
      this.vehicleId = this.selectedVehicle.vehicle_id
      this.name = this.selectedVehicle.vehicle_name
      this.licensePlate = this.selectedVehicle.license_plate
      this.description = this.selectedVehicle.description
      this.ownerId = this.selectedVehicle.owner_id
      return this.showModal
    },
    selectedVehicleComputed () {
      return this.selectedVehicle
    }
  },
  methods: {
    getProfileOptions () {
      let options = [
        { value: '', text: 'Select Owner' }
      ]
      this.allProfiles.forEach(profile => {
        options.push(
          { value: profile.profile_id, text: profile.full_name }
        )
      });
      return options
    },
    
    submitForm() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store
        .dispatch('vehicle/manageVehicle', {
          vehicle_id: this.vehicleId,
          name: this.name,
          owner_id: this.ownerId,
          description: this.description,
          license_plate: this.licensePlate
        })
        .then(() => {
          this.$emit('onSave', this.$event)
          this.closeModal()
        })
        .catch(() => {

        })

      }

    },
    closeModal() {
      this.$v.$reset()
      this.name = ""
      this.licensePlate = ""
      this.description = ""
      this.ownerId = ""
      this.$emit('close', this.$event)
    },
    fetchAllProfiles () {
      this.$store.dispatch(
        'profile/fetchAllProfileRecords',
        {}
      )
      .then((response) => {
        this.allProfiles = response
      })
      .catch(() => {})
    },
  }
}
</script>