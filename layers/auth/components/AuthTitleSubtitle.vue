<script setup lang="ts">
interface Props {
  subtitle: string
  title: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="mb-12 flex flex-col gap-2">
    <h1 class="font-eurostile text-hero font-bold uppercase">
      {{ props.title }}
    </h1>
    <p>
      {{ props.subtitle }}
    </p>
  </div>
</template>
