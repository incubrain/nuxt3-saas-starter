<template>
  <div>
    <FormHeader :title="title" :description="description" />
    <div>
      <FormStepButton
        v-for="(item, index) in steps"
        :key="index"
        :title="item.title"
        :controls="`step-${index + 1}`"
        :step-number="index + 1"
        :active-step="currentStep"
        @click="navigateToStep(index + 1)"
      />

      <FormSection v-show="currentStep === 1" form="step-1">
        <FormText
          type="text"
          name="firstName"
          placeholder="First name"
          label="First Name"
          v-model="form.firstName"
        />
        <FormText
          type="text"
          name="lastName"
          placeholder="Last name"
          label="Last Name"
          v-model="form.lastName"
        />
        <FormNavigation :nextStep="nextStep" :prevStep="prevStep" />
      </FormSection>

      <FormSection v-show="currentStep === 2" form="step-2">
        <FormText
          type="email"
          name="email"
          placeholder="Email"
          label="Email"
          v-model="form.email"
        />
        <FormText
          type="password"
          name="password"
          placeholder="Password"
          label="Password"
          v-model="form.password"
        />
        <FormNavigation :nextStep="nextStep" :prevStep="prevStep" />
      </FormSection>

      <FormSection v-show="currentStep === 3" form="step-3">
        <FormCheckbox
          id="terms"
          type="checkbox"
          name="terms"
          value="accepted"
          label="Accept Terms and Conditions"
          v-model="form.terms"
        />
        <FormNavigation :nextStep="nextStep" :prevStep="prevStep" />
      </FormSection>
    </div>
  </div>
</template>

<script setup lang="ts">
const title = 'Signup Form'
const description = 'Please fill out the form to signup'
const steps = reactive([
  { title: 'Personal Details' },
  { title: 'Account Details' },
  { title: 'Confirmation' }
])

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  terms: false
})

const currentStep = ref(1)

const nextStep = () => {
  if (currentStep.value < steps.length) currentStep.value++
}

const prevStep = () => {
  if (currentStep.value > 1) currentStep.value--
}

const navigateToStep = (step) => {
  currentStep.value = step
}
</script>
