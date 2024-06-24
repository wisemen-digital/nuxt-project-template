<script setup lang="ts">
import type { forgotPasswordFormSchema } from '@auth/models/forgot-password/forgotPasswordForm.model'
import type { Form } from 'formango'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  form: Form<typeof forgotPasswordFormSchema>
  lastLoginAttemptEmail: null | string
}>()

const { t } = useI18n()

const email = props.form.register('email', props.lastLoginAttemptEmail ?? undefined)
</script>

<template>
  <AppForm :form="form">
    <FormInput
      v-bind="email"
      :is-required="true"
      :label="t('form.fields.email')"
      :placeholder="t('auth.enter_your_email')"
      variant="auth"
      type="email"
    />

    <AuthFormSubmitButton
      :form="form"
      :is-always-enabled="true"
    >
      {{ t('auth.reset_password') }}
    </AuthFormSubmitButton>
  </AppForm>
</template>
