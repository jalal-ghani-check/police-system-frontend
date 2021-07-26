<template>
  <div>
    <Header />
    <nuxt id="body" />
    <Footer />
    <police-report />
    <medical-report />
  </div>
</template>

<script>
import PoliceReport from '~/components/police-reports/PoliceReport.vue'
import MedicalReport from '~/components/medical-reports/MedicalReport.vue'

export default {
  name: 'Master',
  components: { PoliceReport, MedicalReport },
  middleware: ['initAuth', 'auth']

}
</script>
