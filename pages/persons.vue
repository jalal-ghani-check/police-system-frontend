<template>
    <div>
        <h1>Persons</h1>
    </div>
</template>

<script>
export default {
  name: 'Persons',
  layout: 'master',
  mounted() {
    this.$store.commit('setActiveTab', 'search')
    
  }
}
</script>
