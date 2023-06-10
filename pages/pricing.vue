<template>
  <body class="overflow-y-hidden">
    <div
      class="2xl:container 2xl:mx-auto py-12 px-4 md:px-6 xl:px-20 flex flex-col justify-center items-center"
    >
      <h1
        class="text-xl md:text-2xl lg:text-4xl font-bold lg:font-extrabold leading-6 md:leading-8 lg:leading-10 text-center w-2/3"
      >
        Finely-tuned for <br />individuals and teams
      </h1>

      <div class="mt-5 md:mt-6 lg:mt-10">
        <UButtonGroup size="lg" class="rounded-full overflow-hidden">
          <UButton
            class="w-32 flex justify-center"
            :color="selectedOption === 'monthly' ? 'primary' : 'gray'"
            label="Monthly"
            @click="show('monthly')"
          />
          <UButton
            class="w-32 flex justify-center"
            :color="selectedOption === 'yearly' ? 'primary' : 'gray'"
            label="Yearly"
            @click="show('yearly')"
          />
        </UButtonGroup>
      </div>

      <div
        class="mt-7 lg:mt-10 lg:mt-12 lg:flex-row flex-col flex justify-center items-start space-y-6 lg:space-y-0 lg:space-x-8"
      >
        <PricingCard
          v-for="plan in pricingPlans"
          :key="plan.title"
          :pricing-id="plan.id"
          :title="plan.title"
          :price="plan.price"
          :features="plan.features"
        />
      </div>
    </div>
  </body>
</template>

<script setup lang="ts">

definePageMeta({
  name: 'Contact'
})

const pricingOptions = ['monthly', 'yearly'] as const
type PricingOption = (typeof pricingOptions)[number]

const selectedOption = ref<PricingOption>('monthly')

const show = (option: PricingOption) => {
  selectedOption.value = option
}

const pricingPlans = [
  {
    id: 1,
    title: 'Free',
    price: '0',
    features: ['All limited links', 'Personal Analytics Platform', 'Chat Support']
  },
  {
    id: 2,
    title: 'Pro',
    price: '49',
    features: ['All limited links', 'Personal Analytics Platform', 'Chat Support']
  },
  {
    id: 3,
    title: 'Team',
    price: '149',
    features: [
      'All limited links',
      'Personal Analytics Platform',
      'Chat Support',
      'All limited links',
      'Personal Analytics Platform',
      'Chat Support'
    ]
  }
]
</script>
