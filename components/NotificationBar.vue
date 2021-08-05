<template>
  <div id="notification-bar">
    <div
      v-if="hasErrors || hasMessages"
      class="alert alert-danger"
      :class="getNotificationClass"
    >
      <div  
        v-for="message in messages"
        :key="message.key"
        class="align-self-start "
      >
        <span>
          {{ message.value }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'NotificationBar',
  computed: {
    messages () {
      if (this.hasErrors) {
        return this.$store.state.errors
      } else if (this.hasMessages) {
        return this.$store.state.messages
      }
      return this.$store.state.errors
    },
    ...mapGetters([
      'hasErrors',
      'hasMessages',
      'getNotificationClass'
    ])
  }
}
</script>
