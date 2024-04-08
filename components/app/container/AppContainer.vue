<script lang="ts" setup>
export interface Props {
  as?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: 'section',
})
</script>

<template>
  <Component
    :is="props.as"
    class="container mx-auto px-4"
  >
    <slot />
  </Component>
</template>
