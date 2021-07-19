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
  middleware: ['initAuth', 'guest']
}
</script>
