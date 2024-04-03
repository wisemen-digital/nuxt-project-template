<script lang="ts" setup>

</script>

<template>
  <div class="min-h-screen flex flex-col overflow-hidden">
    <AppHeader class="hidden lg:block" />
    <AppHeaderMobile class="block lg:hidden" />
    <!-- Content -->
    <slot />
    <!-- Content -->
    <AppFooter class="mt-auto" />
  </div>
</template>

<style></style>
