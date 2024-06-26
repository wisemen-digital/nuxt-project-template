<script setup lang="ts">
import AppDialogCloseButton from '@base/components/core/dialog/AppDialogCloseButton.vue'
import { useDialogStyle } from '@base/components/core/dialog/dialog.style'
import { DialogContent } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<{
  hideCloseButton: boolean
  shouldPreventClickOutside: boolean
}>()

const dialogStyle = useDialogStyle()
const contentClasses = computed<string>(() => dialogStyle.content())
const closeButtonClasses = computed<string>(() => dialogStyle.closeButton())

function onInteractOutside(e: CustomEvent): void {
  if (props.shouldPreventClickOutside) {
    e.preventDefault()

    return
  }

  const target = e.target as HTMLElement
  const isOverlay = target.classList.contains('custom-dialog-overlay')

  if (!isOverlay) {
    e.preventDefault()
  }
}

function onOpenAutoFocus(e: Event): void {
  e.preventDefault()
}
</script>

<template>
  <DialogContent
    :force-mount="true"
    :disable-outside-pointer-events="false"
    :class="contentClasses"
    @interact-outside="onInteractOutside"
    @open-auto-focus="onOpenAutoFocus"
  >
    <div>
      <slot />

      <AppDialogCloseButton
        v-if="!props.hideCloseButton"
        :class="closeButtonClasses"
      />
    </div>
  </DialogContent>
</template>
