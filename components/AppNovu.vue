<template>
  <NotificationCenterComponent
    :subscriberId="subscriberId"
    :applicationIdentifier="applicationIdentifier"
    :sessionLoaded="sessionLoaded"
    v-slot="slot"
  >
    <button>Notifications: {{ slot.unseenCount }}</button>
  </NotificationCenterComponent>
</template>
<script setup lang="ts">
const applicationIdentifier = 'fe4TU6T7G7ef'
const subscriberId = 'on-boarding-subscriber-id-123'
function sessionLoaded() {
  console.log('Session loaded!')
}
</script>

<style scoped></style>
