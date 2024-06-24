<script setup lang="ts">
import { useAuthForgotPasswordMutation } from '@auth/api/mutations/authForgotPassword.mutation'
import { forgotPasswordFormSchema } from '@auth/models/forgot-password/forgotPasswordForm.model'
import { useAuthStore } from '@auth/stores/auth.store'
import { useToast } from '@base/composables/core/toast.composable'
import { useForm } from 'formango'

const authStore = useAuthStore()

const { lastLoginAttemptEmail } = storeToRefs(authStore)

const hasResetPassword = ref<boolean>(false)

const { t } = useI18n()
const toast = useToast()

const resetEmail = ref<string>('')

const { form, onSubmitForm } = useForm({
  schema: forgotPasswordFormSchema,
})

const forgotPasswordMutation = useAuthForgotPasswordMutation()

onSubmitForm(async (values) => {
  try {
    await forgotPasswordMutation.mutateAsync(values)

    hasResetPassword.value = true
    resetEmail.value = values.email
    toast.success({
      title: t('auth.forgot_password.success_title'),
      description: t('auth.forgot_password.success_description'),
    })
  }
  catch (error) {
    toast.error({
      title: t('auth.forgot_password.error_title'),
      description: t('auth.forgot_password.error_description'),
    })
  }
})
</script>

<template>
  <div class="flex w-full flex-1 items-center justify-center">
    <AuthCard>
      <AuthTitleSubtitle
        :title=" t('auth.login.password_forgot_title')"
        :subtitle=" t('auth.login.password_forgot_subtitle')"
      />

      <AuthForgotPasswordForm
        v-if="!hasResetPassword"
        :form="form"
        :last-login-attempt-email="lastLoginAttemptEmail"
      />

      <div class="mt-8 flex justify-center">
        <NuxtLinkLocale
          class="text-subtext"
          to="/auth/login"
        >
          {{ t('auth.back_to_login') }}
        </NuxtLinkLocale>
      </div>
    </AuthCard>
  </div>
</template>
