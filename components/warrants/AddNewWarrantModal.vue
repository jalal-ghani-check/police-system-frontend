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
                <h4>Create Warrant</h4>
                <notification-bar />
                <div class="row mb-5 mt-3 g-3">
                  <div class="col" >
                      <input type="text" v-model="title" class="form-control" placeholder="Title">
                      <div
                          v-if="$v.title.$error && !$v.title.required"
                          class="error"
                      >
                          Title is required
                      </div>
                  </div>

 
                </div>
                <div class="row mb-3 g-3">
                  <div class="col">
                      <textarea rows="3" v-model="description" placeholder="Description" class="form-control"></textarea>
                      <div
                          v-if="$v.description.$error && !$v.description.required"
                          class="error"
                      >
                          Description is required
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
import { required, requiredIf } from 'vuelidate/lib/validators'

export default {
  props: ['showModal','profileId'],
  name: 'AddNewWarranrModal',
  data () {
    return {
      title: "",
      description: "",

    }
  },
  validations: {
    title: {
      required,
    },
    description: {
      required
    }
  },
  mounted() {
  },
  computed: {
    showModalComputed() {
      return this.showModal
    },
    ...mapGetters({
      isLoggedInUserAdmin: 'auth/isLoggedInUserAdmin'
    }),

  },
  methods: {
    submitForm() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store
        .dispatch('warrant/addWarrant', {
          title: this.title,
          description: this.description,
          profile_id: this.profileId,

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
      this.title = ""
      this.description = ""
      this.$emit('close', this.$event)
    }
  }
}
</script>