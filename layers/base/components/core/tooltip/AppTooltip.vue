<script setup lang="ts">
import AppText from '@base/components/core/text/AppText.vue'
import AppTooltipContent from '@base/components/core/tooltip/AppTooltipContent.vue'
import AppTooltipProvider from '@base/components/core/tooltip/AppTooltipProvider.vue'
import { useTooltipStyle } from '@base/components/core/tooltip/tooltip.style'
import { TooltipPortal, TooltipTrigger } from 'radix-vue'
import { computed, useSlots } from 'vue'

const props = withDefaults(
  defineProps<{
    /**
     * When true, the tooltip will be hidden.
     * @default false
     */
    isHidden?: boolean
    /**
     * The alignment of the tooltip content.
     * @default 'center'
     */
    align?: 'center' | 'end' | 'start'
    /**
     * The content to show in the tooltip.
     * @default null
     */
    content?: null | string
    /**
     * The duration in milliseconds to wait before showing the tooltip.
     * @default 0
     */
    delayDuration?: number
    /**
     * When true, clicking on trigger will not close the content.
     * @default false
     */
    disableCloseOnTriggerClick?: boolean
    /**
     * When true, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.
     * @default false
     */
    disableHoverableContent?: boolean
    /**
     * When true, the arrow will be hidden.
     * @default false
     */
    hideArrow?: boolean
    /**
     * The offset of the tooltip content.
     * @default 10
     */
    offset?: number
    /**
     * The side of the trigger the tooltip should be on.
     * @default 'top'
     */
    side?: 'bottom' | 'left' | 'right' | 'top'
  }>(),
  {
    isHidden: false,
    align: 'center',
    content: null,
    delayDuration: 0,
    disableCloseOnTriggerClick: false,
    disableHoverableContent: false,
    hideArrow: false,
    offset: 10,
    side: 'top',
  },
)

const slots = useSlots()

if (props.content === null && slots.content === undefined) {
  throw new Error('[TOOLTIP] Either the `content` prop or `content` slot must be provided.')
}

const tooltipStyle = useTooltipStyle()

const contentTextClasses = computed<string>(() => tooltipStyle.contentText())
</script>

<template>
  <AppTooltipProvider
    :delay-duration="props.delayDuration"
    :disable-close-on-trigger-click="props.disableCloseOnTriggerClick"
    :disable-hoverable-content="props.disableHoverableContent"
  >
    <TooltipTrigger :as-child="true">
      <slot />
    </TooltipTrigger>

    <TooltipPortal>
      <AppTooltipContent
        v-if="!props.isHidden"
        :align="props.align"
        :has-arrow="!props.hideArrow"
        :offset="props.offset"
        :side="props.side"
      >
        <slot name="content">
          <AppText
            :class="contentTextClasses"
            variant="subtext"
          >
            {{ props.content }}
          </AppText>
        </slot>
      </AppTooltipContent>
    </TooltipPortal>
  </AppTooltipProvider>
</template>
