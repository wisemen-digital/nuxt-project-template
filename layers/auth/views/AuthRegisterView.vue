<script setup lang="ts">
import { useAuthRegister } from '@auth/api/mutations/useAuthRegister'
import { registerFormSchema } from '@auth/models/register/registerForm.model'
import AppCollapseTransition from '@base/components/core/transitions/AppCollapseTransition.vue'
import { useToast } from '@base/composables/core/toast.composable'
import { useForm } from 'formango'

const { t } = useI18n()
const register = useAuthRegister()
const toast = useToast()
const { form, onSubmitForm } = useForm({
  schema: registerFormSchema,
})
const hasSubmitted = ref<boolean>(false)

onSubmitForm(async (data) => {
  try {
    await register.mutateAsync(data)
    hasSubmitted.value = true
  }
  catch (error) {
    toast.error({
      title: t('auth.register.error_title'),
      description: t('auth.register.error_description'),
    })
  }
})
</script>

<template>
  <div class="relative z-10 flex w-full flex-1 items-center justify-center">
    <AuthCard>
      <AuthTitleSubtitle
        :title=" t('auth.register.title')"
        :subtitle=" t('auth.register.subtitle')"
      />
      <AppCollapseTransition>
        <AuthRegisterForm
          v-if="!hasSubmitted"
          :form="form"
        />
        <div v-else>
          <AppBox
            icon="checkmarkCircle"
            variant="secondary"
          >
            <template #front>
              <AppText
                class="text-white"
                variant="body"
              >
                {{ t('auth.register.register_send') }}
              </AppText>
              <AppText
                class="text-muted"
                variant="subtext"
              >
                {{ t('auth.register.register_send_description') }}
              </AppText>
            </template>
          </AppBox>
        </div>
      </AppCollapseTransition>

      <AppText
        class="mt-12 flex flex-row flex-wrap items-center justify-center gap-x-1 text-white"
        variant="subtext"
      >
        <span>
          {{ t('auth.register.already_have_account') }}
        </span>
        <NuxtLinkLocale
          to="/auth/login"
          class="rounded text-secondary focus-ring hover:underline focus:underline"
        >
          {{ t('auth.register.login') }}
        </NuxtLinkLocale>
      </AppText>
    </AuthCard>
  </div>
</template>
