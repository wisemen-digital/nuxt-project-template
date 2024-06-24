<script setup lang="ts">
import { useAuthResetPasswordMutation } from '@auth/api/mutations/authResetPassword.mutation'
import { resetPasswordFormSchema } from '@auth/models/reset-password/resetPasswordForm.model'
import { useToast } from '@base/composables/core/toast.composable'
import { useForm } from 'formango'

const hasPasswordBeenReset = ref<boolean>(false)

const { t } = useI18n()
const toast = useToast()

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
    toast.error({
      title: t('auth.reset_password.error_toast.title'),
      description: t('auth.reset_password.error_toast.description'),
    })
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
