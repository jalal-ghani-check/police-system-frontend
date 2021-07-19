<template>
  <section class="p-0">
    <div class="container my-4">
      <h1 class="mx-auto text-center">
        مرحبا بك في منصة الدين
        <span class="tagline">الرجاء تسجيل الدخول لحسابك</span>
      </h1>
      <div class="row ">
        <div class="col-lg-7 col-md-7 col-12 mx-auto">
          <div class="form-container">
            <form
              id="validate-user-form"
              method="post"
              autocomplete="off"
              class=" form-horizontal"
            >
              <notification-bar />
              <div class="row">
                <div class="col-12">
                  <div
                    class="field active"
                    :class="{ 'form-group--error': $v.username.$error }"
                  >
                    <input
                      id="username"
                      ref="username"
                      v-model="username"
                      type="username"
                      name="username"
                      class="form-control"
                      autocomplete="off"
                    >
                    <label class="required" for="username">{{
                      $t('usernameNationalId')
                    }}</label>
                  </div>
                  <div
                    v-if="$v.username.$error && !$v.username.required"
                    class="error"
                  >
                    {{ $t('username_required') }}
                  </div>
                </div>
                <div class="col-12">
                  <div
                    class="field mt-4"
                    :class="[
                      {
                        'form-group--error': $v.password.$error,
                        active: activeField
                      }
                    ]"
                  >
                    <input
                      id="password"
                      v-model="password"
                      type="password"
                      name="password"
                      class="form-control"
                      autocomplete="off"
                    >
                    <label class="required" for="password">
                      {{ $t('password') }}</label>
                  </div>
                  <div
                    v-if="$v.password.$error && !$v.password.required"
                    class="error"
                  >
                    {{ $t('password_required') }}
                  </div>
                  <div
                    v-if="$v.password.$error && !$v.password.minLength"
                    class="error"
                  >
                    {{
                      $t('field_length', {
                        field: $t('password'),
                        length: $v.password.$params.minLength.min
                      })
                    }}
                  </div>
                </div>
              </div>
              <!-- <button id="login-button" type="submit" /> -->

              <div class="row action-wrapper">
                <div class="col-lg-6 col-md-6 col-6">
                  <a
                    class="action-btn"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                    @click="onSubmit"
                  >تسجيل الدخول</a>
                </div>
                <div class="col-lg-6 col-md-6 col-6">
                  <div class="forgetpassword">
                    <NuxtLink to="/auth/change-password" class="link">
                      نسيت كلمة المرور؟
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'Login',
  data: () => ({
    username: '',
    password: '',
    activeField: ''
  }),
  validations: {
    username: {
      required
    },
    password: {
      required,
      minLength: minLength(8)
    }
  },
  mounted () {
    this.$refs.username.focus()
    this.$store.commit('setShowLoginButton', false)
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store
          .dispatch('auth/authenticateUser', {
            username: this.username,
            password: this.password
          })
          .then(() => {
            this.$router.push('dashboard')
          })
          .catch(() => {})
      }
    }
  }
}
</script>

<style lang="css" scoped>
.error {
  margin-top: -35px;
  font-size: 12px;
}

.form-footer {
  padding: 10px 20px;
  height: 80px;
  background-color: #f9f9f9;
  span {
    display: flex;
    align-items: center;
    margin-right: auto;
  }
}
</style>
