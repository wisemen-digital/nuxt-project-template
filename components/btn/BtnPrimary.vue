<script setup lang="ts">
const props = defineProps<{
  to?: string
  text: string
  event?: boolean
  isDisabled?: boolean
  isLoading?: boolean
}>()

// Add or change this styling to your needs with Tailwind CSS
const buttonStyling = computed(() => {
  return {
    // Button Colors
    'bg-primary': true,
    'text-secondary': true,

    // Font size and coloring
    'text-[1.4rem]': true,
    'font-primary': true,
    'font-[600]': true,

    // Padding
    'px-[1.6rem]': true,
    'py-[0.8rem]': true,

    // Rounding
    'rounded-[5px]': true,

    // Transition config
    'transition': true,
    'duration-200': true,

    // Hover effect
    'hover:bg-white': true,
  }
})
</script>

<template>
  <template v-if="!props.event">
    <NuxtLink
      :to="props.to"
      :class="buttonStyling"
    >
      <div
        v-if="!props.isLoading"
        class="flex items-center justify-center gap-[1rem] text-center"
      >
        <slot name="prefix" />
        <span>{{ props.text }}</span>
        <slot name="suffix" />
      </div>
      <AppLoadingSpinner v-else />
    </NuxtLink>
  </template>

  <template v-else>
    <button
      type="button"
      :class="[props.isDisabled ? 'opacity-40' : 'opacity-100', buttonStyling]"
      :disabled="props.isDisabled"
    >
      <div
        v-if="!props.isLoading"
        class="flex items-center justify-center gap-[1rem] text-center"
      >
        <slot name="prefix" />
        <span>{{ props.text }}</span>
        <slot name="suffix" />
      </div>
      <AppLoadingSpinner v-else />
    </button>
  </template>
</template>

<style scoped>

</style>
