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
                <h4>Add New User</h4>
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
                      <input type="text" v-model="username" class="form-control" placeholder="Username">
                        <div
                          v-if="$v.username.$error && !$v.username.required"
                          class="error"
                      >
                          Username is required
                      </div>
                  </div>
                  <div class="col">
                      <input type="password" v-model="password"  class="form-control" placeholder="Password">
                       <div
                          v-if="$v.password.$error && !$v.password.required"
                          class="error"
                      >
                          Password is required
                      </div>
                  </div>
 
                </div>
                <div class="row mb-3 g-3">
                  <div class="col">
                      <input type="text" v-model="citizen_id"  class="form-control" placeholder="Citizen ID">
                      <div
                          v-if="$v.citizen_id.$error && !$v.citizen_id.required"
                          class="error"
                      >
                          Citizen ID is required
                      </div>
                  </div>
                  <div class="col">
                    <input type="text" v-model="profile_picture" class="form-control" placeholder="Profile picture"  id="profilePicture">
                    <div
                        v-if="$v.profile_picture.$error && !$v.profile_picture.required"
                        class="error"
                        >
                            Profile picture url is required
                    </div>
                  </div>
                  <div class="col">
                      <input type="text" v-model="call_sign" class="form-control" placeholder="Callsign">
                      <div
                          v-if="$v.call_sign.$error && !$v.call_sign.required"
                          class="error"
                      >
                          Call sign is required
                      </div>
                  </div>
                </div>
                <div class="row mb-3 g-3">
                  <div class="col">
                      <select v-model="enc_department_id" class="form-select">
                          <option value="" >Select Department</option>
                          <option v-for="dept in getDepartments" :key="dept.key" :value="dept.key"  >{{ dept.value }}</option>
                      </select>
                      <div
                          v-if="$v.enc_department_id.$error && !$v.enc_department_id.required"
                          class="error"
                      >
                          Department is required
                      </div>
                  </div>
                  <div class="col">
                      <select v-model="enc_rank_id" class="form-select">
                          <option value="" >Select Rank</option>
                          <option v-for="rank in getRanks" :key="rank.key" :value="rank.key"  >{{ rank.value }}</option>
                      </select>
                      <div
                          v-if="$v.enc_rank_id.$error && !$v.enc_rank_id.required"
                          class="error"
                      >
                          Rank is required
                      </div>
                  </div>
                  <div v-if="isLoggedInUserAdmin" class="col">
                      <select v-model="enc_role_id" class="form-select">
                          <option value="" >Select Role</option>
                          <option v-for="role in getRoles" :key="role.key" :value="role.key"  >{{ role.value }}</option>
                      </select>
                      <div
                          v-if="$v.enc_role_id.$error && !$v.enc_role_id.required"
                          class="error"
                      >
                          Role is required
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
  props: ['showModal','userId'],
  name: 'DeleteUserModal',
  data () {
    return {
      full_name: "",
      username: "",
      password: "",
      citizen_id: "",
      profile_picture: "",
      enc_department_id: "",
      enc_rank_id: "",
      enc_role_id: "",
      call_sign: ""

    }
  },
  validations: {
    full_name: {
      required,
    },
    username: {
      required
    },
    password: {
      required
    },
    citizen_id: {
      required
    },
    profile_picture: {
      required
    },
    enc_department_id: {
      required
    },
    enc_role_id: {
      required: requiredIf(function () {
        return this.isLoggedInUserAdmin
      })
    },
    enc_rank_id: {
      required
    },
    call_sign: {
      required
    }
  },
  mounted() {
  },
  computed: {
    showModalComputed() {
      return this.showModal
    },
    ...mapGetters([ 'getRanks', 'getDepartments' , 'getRoles']),
    ...mapGetters({
      isLoggedInUserAdmin: 'auth/isLoggedInUserAdmin'
    }),

  },
  methods: {
    submitForm() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store
        .dispatch('auth/addUser', {
          full_name: this.full_name,
          username: this.username,
          password: this.password,
          citizen_id: this.citizen_id,
          profile_picture: this.profile_picture,
          enc_department_id: this.enc_department_id,
          enc_rank_id: this.enc_rank_id,
          enc_role_id: this.enc_role_id,
          call_sign: this.call_sign,

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
      this.username = ""
      this.password = ""
      this.citizen_id = ""
      this.profile_picture = ""
      this.enc_department_id = ""
      this.enc_rank_id = ""
      this.enc_role_id = ""
      this.call_sign = ""
      this.$emit('close', this.$event)
    }
  }
}
</script>