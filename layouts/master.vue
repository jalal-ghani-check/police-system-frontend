<template>
  <div>
    <Header />
    <toast-message />
    <nuxt id="body" />
    <Footer />
    <police-report />
    <medical-report />
  </div>
</template>

<script>
import PoliceReport from '~/components/police-reports/PoliceReport.vue'
import MedicalReport from '~/components/medical-reports/MedicalReport.vue'
import ToastMessage from '~/components/ToastMessage.vue'

export default {
  name: 'Master',
  components: { PoliceReport, MedicalReport, ToastMessage },
  middleware: ['initAuth', 'auth']

}
</script>
