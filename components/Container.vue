<script lang="ts" setup>
export interface Props {
  as?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: 'section',
})
</script>

<template>
  <component :is="props.as" class="mx-auto max-w-[1200px] px-2.5rem">
    <slot />
  </component>
</template>

<style></style>
