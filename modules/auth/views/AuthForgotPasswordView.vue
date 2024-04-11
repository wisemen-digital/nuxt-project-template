<script setup lang="ts">
import { useForm } from 'formango'

import { useErrorToast } from '~/composables/error/useErrorToast'
import { forgotPasswordFormSchema } from '~/models/auth/forgot-password/forgotPasswordForm.model'
import { useAuthForgotPasswordMutation } from '~/modules/auth/api/mutations/authForgotPassword.mutation'
import { useAuthStore } from '~/stores/auth.store'

const authStore = useAuthStore()

const { lastLoginAttemptEmail } = storeToRefs(authStore)

const hasResetPassword = ref<boolean>(false)

const { t } = useI18n()
const errorToast = useErrorToast()

const resetEmail = ref<string>('')

const { form, onSubmitForm } = useForm({
  schema: forgotPasswordFormSchema,
})

const forgotPasswordMutation = useAuthForgotPasswordMutation()

const title = computed<string>(() => {
  if (hasResetPassword.value) {
    return t('auth.check_your_email')
  }

  return t('auth.forgot_password')
})

const description = computed<string>(() => {
  if (hasResetPassword.value) {
    return t('auth.instruction_email_sent_to', { email: resetEmail.value })
  }

  return t('auth.forgot_password_message')
})

onSubmitForm(async (values) => {
  try {
    await forgotPasswordMutation.mutateAsync(values)

    hasResetPassword.value = true
    resetEmail.value = values.email
  }
  catch (error) {
    errorToast.show(error)
  }
})
</script>

<template>
  <AuthPage
    :description="description"
    :title="title"
  >
    <AuthForgotPasswordForm
      v-if="!hasResetPassword"
      :form="form"
      :last-login-attempt-email="lastLoginAttemptEmail"
    />

    <div class="mt-4 flex justify-center">
      <NuxtLinkLocale
        class="text-caption"
        to="/auth/login"
      >
        {{ t('auth.back_to_login') }}
      </NuxtLinkLocale>
    </div>
  </AuthPage>
</template>
