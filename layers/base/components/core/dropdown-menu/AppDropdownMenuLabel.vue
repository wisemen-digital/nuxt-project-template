<script setup lang="ts">
import { useDropdownMenuStyle } from '@base/components/core/dropdown-menu/dropdownMenu.style'
import AppText from '@base/components/core/text/AppText.vue'
import { DropdownMenuLabel } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<{
  label: string
}>()

const dropdownMenuStyle = useDropdownMenuStyle()

const labelClasses = computed<string>(() => dropdownMenuStyle.itemLabel())
</script>

<template>
  <DropdownMenuLabel :class="labelClasses">
    <AppText variant="subtext">
      {{ props.label }}
    </AppText>
  </DropdownMenuLabel>
</template>
