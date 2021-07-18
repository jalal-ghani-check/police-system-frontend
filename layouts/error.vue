<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      <Error404 />
    </h1>
    <h1 v-else-if="error.statusCode === 500">
      <Error500 />
    </h1>
    <h1 v-else>
      <SomeThingWentWrong />
    </h1>
  </v-app>
</template>

<script>
import Error404 from '~/components/errors/Error404.vue'
import Error500 from '~/components/errors/Error500.vue'
import SomeThingWentWrong from '~/components/errors/SomeThingWentWrong.vue'
export default {
  components: { Error404, Error500, SomeThingWentWrong },
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
