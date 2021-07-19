<template>
  <div>
    <Header />
    <nuxt id="body" />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Master',
  middleware: ['initAuth', 'auth']

}
</script>
