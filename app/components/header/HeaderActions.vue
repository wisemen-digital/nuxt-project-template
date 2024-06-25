<script setup lang="ts">
import type { CurrentUser } from '@auth/models/current-user/currentUser.model'
import { useAuthStore } from '@auth/stores/auth.store'

const authStore = useAuthStore()

const _currentUser = computed<CurrentUser | null>(() => authStore.currentUser)
</script>

<template>
  <div class="flex w-full items-center justify-end gap-2">
    <HeaderProfile />
    <TheLocaleSelector />
  </div>
</template>
