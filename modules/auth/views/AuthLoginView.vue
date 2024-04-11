<script setup lang="ts">
import { useToast } from '@wisemen/vue-core'
import { useForm } from 'formango'
import { storeToRefs } from 'pinia'

import type { CurrentUser } from '@/models/auth/current-user/currentUser.model'
import { loginFormSchema } from '@/models/auth/login/loginForm.model'
import { useAuthStore } from '@/stores/auth.store'
import { isFetchError } from '~/utils/api/isFetchError'

const authStore = useAuthStore()
const localeRoute = useLocaleRoute()
const { lastLoggedInUser } = storeToRefs(authStore)

const { t } = useI18n()
const toast = useToast()

const { form, onSubmitForm } = useForm({
  schema: loginFormSchema,
})

const title = computed<string>(() => {
  if (lastLoggedInUser.value === null) {
    return t('auth.login.log_in')
  }

  return t('auth.login.welcome_back_name', {
    name: lastLoggedInUser.value?.firstName,
  })
})

async function handleLoggedIn(user: CurrentUser): Promise<void> {
  authStore.setLastLoginAttemptEmail(null)
  authStore.setLastLoggedInUser(user)

  await navigateTo(localeRoute('/'))
}

function handleLoginError(error: unknown): void {
  if (isFetchError(error)) {
    form.addErrors({
      password: {
        _errors: [
          t('auth.login.invalid_email_or_password'),
        ],
      },
    })

    toast.error({
      description: t('auth.login.error_toast.description'),
      title: t('auth.login.error_toast.title'),
    })
  }
  else {
    throw error
  }
}

onSubmitForm(async (data) => {
  try {
    await authStore.login(data)

    const currentUser = await authStore.getCurrentUser()

    await handleLoggedIn(currentUser)
  }
  catch (error) {
    handleLoginError(error)
    authStore.setLastLoginAttemptEmail(data.email)
  }
})
</script>

<template>
  <AuthPage
    :description="t('auth.login.sign_in_to_continue')"
    :title="title"
  >
    <AuthLoginForm
      :form="form"
      :last-logged-in-user="lastLoggedInUser"
    />
  </AuthPage>
</template>
