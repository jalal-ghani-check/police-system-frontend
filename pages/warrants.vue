<template>
    <div>
        <h1>Warrants</h1>
    </div>
</template>

<script>
export default {
  name: 'Warrants',
  layout: 'master',
  mounted () {
    this.$store.commit('setActiveTab', 'warrants')
  }
}
</script>
