<script setup lang="ts">
import type { registerFormSchema } from '@auth/models/register/registerForm.model'
import type { Form } from 'formango'

const { form } = defineProps<{
  form: Form<typeof registerFormSchema>
}>()
const { t } = useI18n()

const firstName = form.register('firstName')
const lastName = form.register('lastName')
const email = form.register('email')
const phone = form.register('phone')
</script>

<template>
  <AppFormGrid>
    <FormInput
      v-bind="firstName"
      :label="t('auth.register.first_name')"
      :placeholder="t('auth.register.first_name')"
      variant="auth"
    />
    <FormInput
      v-bind="lastName"
      :label="t('auth.register.last_name')"
      :placeholder="t('auth.register.last_name')"
      variant="auth"
    />
    <FormInput
      v-bind="email"
      :label="t('auth.register.email')"
      :placeholder="t('auth.register.email')"
      variant="auth"
    />
    <FormPhoneNumberInput
      v-bind="phone"
      :label="t('auth.register.phone')"
      :placeholder="t('placeholder.phone')"
      variant="auth"
    />
    <AppButton
      variant="secondary"
      class="lg:col-span-2"
      @click="form.submit"
    >
      {{ t('auth.register.send') }}
    </AppButton>
  </AppFormGrid>
</template>
