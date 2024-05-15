<script setup lang="ts">
interface NuxtError {
  data: any
  description: string
  message: string
  statusCode: number
  statusMessage: string
  url: string
}

const props = defineProps<{
  error: NuxtError
}>()

const localeRoute = useLocaleRoute()

function handleError() {
  return clearError({ redirect: localeRoute('/')?.path })
}
</script>

<template>
  <NuxtLayout>
    <div>
      <h2>{{ props.error.statusCode ?? 404 }}</h2>
      <p>{{ props.error.message ?? 'Page not found' }}</p>
      <button @click="handleError">
        <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
        <span>Go back</span>
      </button>
    </div>
  </NuxtLayout>
</template>
