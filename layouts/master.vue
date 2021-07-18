<template>
  <div>
    <div class="spacer" />
    <h1>Master</h1>
    <nuxt id="body" />
    <div class="spacer" />
  </div>
</template>

<script>
export default {
  name: 'Master',
  middleware: ['initAuth', 'auth']

}
</script>
