<template>
  <div>
    <div class="spacer" />
    <nuxt />
    <div class="spacer" />
  </div>
</template>

<script>
export default {
  name: 'Default',
  middleware: ['initAuth', 'guest'],

  mounted() {
    const pr =  this.$getDevicePixilRatio()
    if(pr >= 1.25){
      document.body.style.zoom = "80%";
    }
  }
}
</script>
