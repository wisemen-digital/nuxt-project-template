<script setup lang="ts">
import { useForm } from 'formango'

import { resetPasswordFormSchema } from '@/models/auth/reset-password/resetPasswordForm.model'
import { useAuthResetPasswordMutation } from '@/modules/auth/api/mutations/authResetPassword.mutation'
import { useErrorToast } from '~/composables/error/useErrorToast'

const hasPasswordBeenReset = ref<boolean>(false)

const { t } = useI18n()
const errorToast = useErrorToast()

const { form, onSubmitForm } = useForm({
  schema: resetPasswordFormSchema,
})

const queryParams = useRoute().query as { email: string, token: string }

form.register('token', queryParams.token)
form.register('email', queryParams.email)

const resetPasswordMutation = useAuthResetPasswordMutation()

const description = computed<string>(() => {
  if (hasPasswordBeenReset.value) {
    return t('auth.features.your_password_has_been_reset_you_can')
  }

  return t('auth.reset_password.description')
})

onSubmitForm(async (values) => {
  try {
    await resetPasswordMutation.mutateAsync(values)

    hasPasswordBeenReset.value = true
  }
  catch (error) {
    errorToast.show(error)
  }
})
</script>

<template>
  <AuthPage
    :description="description"
    :title="t('auth.reset_password.title')"
  >
    <ResetPasswordForm
      v-if="!hasPasswordBeenReset"
      :form="form"
    />
  </AuthPage>
</template>
