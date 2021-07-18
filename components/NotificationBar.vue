<template>
  <div id="notification-bar">
    <div
      v-if="hasErrors || hasMessages"
      class="message"
      :class="getNotificationClass"
    >
      <span
        v-for="message in messages"
        :key="message.key"
        class="align-self-start "
      >
        <span
          v-if="message.value === 'show_accept_contract_message'"
          style="width:auto"
        >
          {{ $t('go_to_dashboard')
          }}<NuxtLink to="/investor/dashboard">{{
            $t('button.press_here')
          }}</NuxtLink>
        </span>
        <span
          v-else-if="
            message.value === 'retail_investor_opportunity_limit_and_upgrade'
          "
        >
          {{ $t('retail_investor_opportunity_limit')
          }}<NuxtLink to="/investor/document-update">{{
            $t('click_here_to_upgrade')
          }}</NuxtLink>
        </span>
        <span v-else>
          {{ message.value }}
        </span>
      </span>
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
