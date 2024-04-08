<script setup lang="ts">
import { AuthService } from '~/modules/auth/api/services/auth.service'

const userInfo = await AuthService.getCurrentUser()
</script>

<template>
  <div class="h-screen w-screen">
    <Container class="flex h-full flex-col items-center justify-center">
      {{ userInfo }}
      <h1 class="flex items-center gap-4 text-white">
        <img
          src="/favicon.ico"
        >
        <span>Wisemen Nuxt Project Template</span>
      </h1>
    </Container>
  </div>
</template>
