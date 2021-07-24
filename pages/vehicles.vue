<template>
    <div>
        <h1>Vehicles</h1>
    </div>
</template>

<script>
export default {
  name: 'Vehicles',
  layout: 'master',
  mounted() {
    this.$store.commit('setActiveTab', 'search')
    
  }
}
</script>
