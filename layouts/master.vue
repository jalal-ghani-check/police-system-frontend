<template>
  <div>
    <Header />
    <nuxt id="body" />
    <Footer />
    <police-report />
  </div>
</template>

<script>
import PoliceReport from '~/components/police-reports/PoliceReport.vue'

export default {
  name: 'Master',
  components: { PoliceReport },
  middleware: ['initAuth', 'auth']

}
</script>
