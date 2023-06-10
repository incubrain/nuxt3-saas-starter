<template>
  <div class="md:w-auto border border-color rounded-md shadow-md py-6 px-8 md:px-10 xl:px-16" :class="pricingId === 2 ? 'bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary-500 to-primary-300' : 'foreground'">
    <div class="w-64 flex justify-center items-center">
      <div class="w-64 flex justify-center items-center flex-col">
        <div class="flex w-full justify-center items-center flex-col space-y-6 lg:space-y-4">
          <p class="text-base lg:text-lg font-medium leading-6 text-center">
            {{ title }}
          </p>
          <div class="flex justify-center items-center space-x-1">
            <p class="text-base leading-4"> $ </p>
            <p
              class="text-2xl lg:text-4xl font-medium leading-6 lg:leading-9 text-center"
            >
              {{ price }}
            </p>
            <p class="text-base font-bold leading-4"> /mo </p>
          </div>
        </div>

        <div class="mt-10 lg:mt-8 flex flex-col w-full justify-start items-start space-y-6">
          <PricingFeatureItem v-for="feature in features" :key="feature" :text="feature" />
        </div>

        <UButton
          class="mt-12 lg:mt-16 flex justify-center w-full"
          size="md"
          :variant="pricingId === 2 ? 'solid' : 'outline'"
          :color="pricingId === 2 ? 'white' : 'primary'"
        >
          Buy
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  pricingId: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  features: {
    type: Array as PropType<string[]>,
    required: true
  }
})
</script>
