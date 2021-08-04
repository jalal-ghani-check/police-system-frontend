<template>
  <!-- <div id="notification-bar">
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
  </div> -->
  <div v-if="hasToastMessages" class="toaster-container show">
    <div class="toaster" :class="getToastClass">
      <h5 v-for="(message,index) in getToastMessage"
        :key="index"  class="toaster-title">
        {{ message }}
      </h5>
      <button @click="closeToast" type="button" class="btn-close" aria-label="Close"></button>
    </div>
    <input type="hidden" :value="hideToast" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ToastMessage',
  computed: {
    hideToast() {
      if(this.hasToastMessages){
        setTimeout(() => {
          this.closeToast()
        }, 1500)
      }
      return 1;
    },
    ...mapGetters([
      'hasToastMessages',
      'getToastClass',
      'getToastMessage'

    ])
  },
  methods: {
    closeToast() {
      this.$store.dispatch('clearToastMessage')
    }
  }
}
</script>
