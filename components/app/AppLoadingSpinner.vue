<script setup lang="ts">
const props = defineProps({
  isBig: { type: Boolean, default: false },
})

// Change size according to needs (use TailwindCSS)
const sizeClasses = computed(() =>
  props.isBig
    ? 'w-[6rem] h-[6rem] border-[6px]'
    : 'w-[2rem] h-[2rem] border-[3px]',
)

// Change spinner style according to needs (use TailwindCSS)
const spinnerStyle = computed(() => {
  return {
    // Spinner Background
    'border-secondary ': true,
    // Spinner Border
    'border-t-primary': true,
  }
})
</script>

<template>
  <div>
    <div
      :class="[sizeClasses, spinnerStyle]"
      class="spinner inline-block  rounded-full border-solid"
    />
  </div>
</template>

<style scoped>
.spinner {
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
