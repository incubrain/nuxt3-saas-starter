<template>
  <div class="mx-auto w-full min-h-[100vh]">
    <div class="relative md:block flex flex-col-reverse min-h-[100vh]">
      <iframe
        id="iframe"
        :style="
          color.value === 'dark' ? { filter: ' grayscale(100%) invert(92%) contrast(83%)' } : {}
        "
        class="w-full md:absolute right-0 h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22702.32871950054!2d77.17716370085562!3d32.238668433044914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39048708163fd03f%3A0x8129a80ebe5076cd!2sManali%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1685021465051!5m2!1sen!2sin"
        width="600"
        height="450"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div class="min-h-[100vh]">
        <div
          class="xl:w-2/5 md:w-1/2 min-h-[100vh] relative flex flex-col gap-10 z-30 bg-gradient-to-r from-white dark:from-zinc-900 dark:via-zinc-900 via-white to-transparent md:pl-6 py-4 sm:py-10 lg:py-40"
        >
          <div class="lg:w-96">
            <h1 class="text-2xl sm:text-4xl lg:text-5xl font-bold leading-10"> LET’S TALK </h1>
            <p class="text-base leading-normal mt-4 lg:mt-2">
              We'll happily answer any questions <br />you have about AstronEra / AstroTribe
            </p>
          </div>
          <FormContactDetail
            title="Address"
            value="132, Les Doulgas Cresent Avenue NY, 1504 DB"
          />
          <FormContactDetail
            title="Phone"
            value="+1(888)24-2174 | +1(888)25-6666"
          />
          <FormContactDetail
            title="Email"
            value="creativestudionewyork12@gmail.com"
          />
          <!-- <NuxtLink to="/contact">
            <UButton
              type="primary"
              size="xl"
            >
              Send Email
            </UButton>
          </NuxtLink> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const color = useColorMode()

definePageMeta({
  name: 'Contact'
})
</script>

<style scoped></style>
