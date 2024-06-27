<script setup lang="ts">
import { useCart } from '@cart/api/cart/queries/useCart'

definePageMeta({
  // middleware: 'auth-middleware',
})

const cart = useCart()
</script>

<template>
  <div class="w-full">
    <MockConstruction />
  </div>
</template>

<style scoped>

</style>
