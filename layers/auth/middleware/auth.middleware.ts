import { useAuthStore } from '@auth/stores/auth.store'
import { defineNuxtRouteMiddleware } from 'nuxt/app'

export default defineNuxtRouteMiddleware(async () => {
  const authStore = useAuthStore()
  const oAuthClient = useNuxtApp().$oAuthClient

  const hasTokens = oAuthClient.isLoggedIn()

  const localePath = useLocalePath()

  if (hasTokens == null) {
    return navigateTo(localePath('/auth/login'))
  }

  let userFound = true

  try {
    await authStore.getCurrentUser()
  }
  catch (error) {
    userFound = false
  }

  if (!userFound) {
    return navigateTo(localePath('/auth/login'))
  }
})
