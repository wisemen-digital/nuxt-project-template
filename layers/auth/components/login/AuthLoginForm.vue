<script setup lang="ts">
import type { CurrentUser } from '@auth/models/current-user/currentUser.model'
import type { loginFormSchema } from '@auth/models/login/loginForm.model'
import { AppText } from '@wisemen/vue-core'
import type { Form } from 'formango'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  form: Form<typeof loginFormSchema>
  lastLoggedInUser: CurrentUser | null
}>()

const { t } = useI18n()

const email = props.form.register('email', props.lastLoggedInUser?.email)
const password = props.form.register('password')
</script>

<template>
  <AppForm :form="form">
    <AppFormElementSpacer>
      <FormInput
        v-bind="email"
        :is-required="true"
        :label="t('form.fields.email')"
        variant="auth"
        placeholder="email@example.com"
        type="email"
      />

      <FormPasswordInput
        v-bind="password"
        :is-required="true"
        :label="t('form.fields.password')"
        :placeholder="t('form.fields.password')"
        variant="auth"
      />
      <div class="flex justify-end">
        <NuxtLinkLocale
          :to="{
            name: 'auth-forgot-password',
          }"
          class="py-2 text-right"
        >
          <AppText
            class="font-medium text-primary hover:underline focus:underline"
            variant="subtext"
          >
            {{ t('auth.login.forgot_password') }}
          </AppText>
        </NuxtLinkLocale>
      </div>
    </AppFormElementSpacer>

    <AuthFormSubmitButton
      :form="form"
    >
      {{ t('auth.login.keep_on') }}
    </AuthFormSubmitButton>
  </AppForm>
</template>
