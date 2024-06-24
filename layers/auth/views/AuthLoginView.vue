<script setup lang="ts">
import type { CurrentUser } from '@auth/models/current-user/currentUser.model'
import { loginFormSchema } from '@auth/models/login/loginForm.model'
import { useAuthStore } from '@auth/stores/auth.store'
import { isFetchError } from '@base/utils/api/isFetchError'
import { AppText, useToast } from '@wisemen/vue-core'
import { useForm } from 'formango'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()
const localeRoute = useLocaleRoute()
const { lastLoggedInUser } = storeToRefs(authStore)

const { t } = useI18n()
const toast = useToast()

const { form, onSubmitForm } = useForm({
  schema: loginFormSchema,
})

async function handleLoggedIn(user: CurrentUser): Promise<void> {
  authStore.setLastLoginAttemptEmail(null)
  authStore.setLastLoggedInUser(user)

  const path = localeRoute({
    path: '/',
  })

  await navigateTo(path)
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
      title: t('auth.login.error_toast.title'),
      description: t('auth.login.error_toast.description'),
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

    void handleLoggedIn(currentUser)
  }
  catch (error) {
    console.error('error', error)
    handleLoginError(error)
    authStore.setLastLoginAttemptEmail(data.email)
  }
})
</script>

<template>
  <div class="flex w-full flex-1 items-center justify-center">
    <AuthCard>
      <AuthTitleSubtitle
        :title=" t('auth.login.title')"
        :subtitle=" t('auth.login.subtitle')"
      />

      <AuthLoginForm
        :form="form"
        :last-logged-in-user="lastLoggedInUser"
      />
      <I18nT
        keypath="auth.login.no_account"
        class="mt-8 text-center text-sm"
        tag="p"
      >
        <template #request_account>
          <NuxtLinkLocale
            to="/auth/register"
            class="py-2 text-right text-secondary hover:underline focus:underline"
          >
            <AppText
              class="ml-1 font-medium text-secondary"
              variant="subtext"
              as="span"
            >
              {{ t('auth.login.request_account') }}
            </AppText>
          </NuxtLinkLocale>
        </template>
      </I18nT>
    </AuthCard>
  </div>
</template>
