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

function handleError() {
  return clearError({ redirect: getLocalePath('index') })
}
</script>

<template>
  <NuxtLayout>
    <div>
      <h2>{{ props.error.statusCode ?? 404 }}</h2>
      <p>{{ props.error.message ?? 'Page not found' }}</p>
      <button @click="handleError">
        <span>Go back</span>
      </button>
    </div>
  </NuxtLayout>
</template>
