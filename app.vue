<script setup lang="ts">
import { ConfigProvider } from 'radix-vue'

function useIdFunction() {
  return useId()
}
</script>

<template>
  <ConfigProvider :use-id="useIdFunction">
    <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </ConfigProvider>
</template>
