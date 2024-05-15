<script setup lang="ts">
import { AppDialogContainer } from '@wisemen/vue-core'
import { ConfigProvider } from 'radix-vue'

function useIdFunction() {
  return useId()
}
</script>

<template>
  <div class="flex w-screen flex-1 overflow-auto overflow-x-hidden">
    <div class="w-full">
      <ConfigProvider :use-id="useIdFunction">
        <NuxtLoadingIndicator color="#E94935" />
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
        <AppDialogContainer />
      </ConfigProvider>
    </div>
  </div>
</template>
