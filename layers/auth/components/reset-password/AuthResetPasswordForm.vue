<script setup lang="ts">
import type { resetPasswordFormSchema } from '@auth/models/reset-password/resetPasswordForm.model'
import { FormPasswordInput } from '@wisemen/vue-core'
import type { Form } from 'formango'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  form: Form<typeof resetPasswordFormSchema>
}>()

const { t } = useI18n()

const password = props.form.register('password')
</script>

<template>
  <AppForm
    :form="form"
    :can-exit-when-dirty="true"
  >
    <FormPasswordInput
      v-bind="password"
      :label="t('form.fields.password')"
      type="password"
    />

    <AuthFormSubmitButton
      :form="form"
      :label="t('auth.reset_password.action')"
    />
  </AppForm>
</template>
