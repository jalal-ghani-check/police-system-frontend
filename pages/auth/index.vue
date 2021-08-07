<template>
  <div class="container">
    <div class="my-4">
      <div class="row">
        <div class="col-lg-7 col-md-7 col-12 mx-auto">
          <div class="form-container login-form-wrapper">
            <form
              id="validate-user-form"
              method="post"
              autocomplete="off"
              class="form-horizontal"
            >
              <notification-bar />
              <div class="row">
                <div class="white-widget">
                  <div class="mx-auto text-center gz-icon-wrapper">
                    <img src="~assets/images/GZ.png" alt="">
                  </div>
                  <div class="form-section">
                    <div class="row mb-3 g-3">
                      <div class="col-12">
                        <input
                          placeholder="Username"
                          id="username"
                          ref="username"
                          v-model="username"
                          type="username"
                          name="username"
                          class="form-control"
                          autocomplete="off"
                        />
                        <div
                          v-if="$v.username.$error && !$v.username.required"
                          class="error"
                        >
                          Username required
                        </div>
                      </div>

                      <div class="col-12">
                        <input
                          placeholder="Password"
                          id="password"
                          v-model="password"
                          type="password"
                          name="password"
                          class="form-control"
                          autocomplete="off"
                        />
                        <div
                          v-if="$v.password.$error && !$v.password.required"
                          class="error"
                        >
                          Password required
                        </div>
                        <div
                          v-if="$v.password.$error && !$v.password.minLength"
                          class="error"
                        >
                          {{
                            $t("field_length", {
                              field: $t("password"),
                              length: $v.password.$params.minLength.min,
                            })
                          }}
                        </div>
                      </div>
                    </div>
                    <div class="text-center">
                        <a @click="onSubmit" class="btn btn-success btn-lg mx-3">
                          Login
                        </a>
                    </div>

                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "Login",
  data: () => ({
    username: "",
    password: "",
    activeField: "",
  }),
  validations: {
    username: {
      required,
    },
    password: {
      required,
      minLength: minLength(8),
    },
  },
  mounted() {
    this.$refs.username.focus();
  },
  methods: {
    onSubmit() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.$store
          .dispatch("auth/authenticateUser", {
            username: this.username,
            password: this.password,
          })
          .then(() => {
            this.$router.push("dashboard");
          })
          .catch(() => {});
      }
    },
  },
};
</script>

<style scoped>
  .gz-icon-wrapper {
    margin-top: 10px;
    margin-bottom: 80px;
  }

  .login-form-wrapper {
    margin-top: 40%;
    margin-left: 20%;
    margin-right: 20%;

  }
</style>