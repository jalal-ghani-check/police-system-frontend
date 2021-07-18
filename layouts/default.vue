<template>
  <div>
    <div class="spacer" />

    <h1>Default</h1>
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
