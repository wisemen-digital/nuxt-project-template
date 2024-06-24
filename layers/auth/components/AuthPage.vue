<script setup lang="ts">
import { AppText } from '@wisemen/vue-core'

const props = defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="flex w-full flex-1 flex-col items-center justify-center">
    <AppText
      class="font-medium text-foreground"
      variant="title"
    >
      {{ props.title }}
    </AppText>

    <AppText
      class="mt-2"
      variant="subtext"
    >
      {{ props.description }}
    </AppText>

    <div class="mt-6 w-full">
      <slot />
    </div>
  </div>
</template>
