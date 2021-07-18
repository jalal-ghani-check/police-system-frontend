<template>
    <h1>Register</h1>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
export default {
  data: () => ({
    iam: '',
    first_name: '',
    email: '',
    password: '',
    agreed: ''
  }),
  validations: {
    // iam: {
    //   required
    // },
    first_name: {
      required
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    },
    agreed: {
      required
    }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.loading = true
        this.$store
          .dispatch('auth/registerUser', {
            iam: this.iam,
            first_name: this.first_name,
            email: this.email,
            password: this.password,
            agreed: this.agreed
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
