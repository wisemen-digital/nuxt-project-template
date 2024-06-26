<script setup lang="ts">
import { useCollection } from '@base/components/core/roving-focus/collection.composable'
import { provideRovingFocusGroupContext } from '@base/components/core/roving-focus/rovingFocus.context'
import {
  type Direction,
  ENTRY_FOCUS,
  EVENT_OPTIONS,
  focusFirst,
  type Orientation,
} from '@base/components/core/roving-focus/rovingFocus.util'
import { useVModel } from '@vueuse/core'
import {
  Primitive,
  type PrimitiveProps,
  useForwardExpose,
} from 'radix-vue'
import { ref, toRefs } from 'vue'

interface RovingFocusGroupProps extends PrimitiveProps {
  currentTabStopId?: null | string
  defaultCurrentTabStopId?: string
  /**
   * The direction of navigation between items.
   */
  dir?: Direction
  /**
   * Whether keyboard navigation should loop around
   * @defaultValue false
   */
  loop?: boolean
  /**
   * The orientation of the group.
   * Mainly so arrow navigation is done accordingly (left & right vs. up & down)
   */
  orientation?: Orientation
}

const props = withDefaults(defineProps<RovingFocusGroupProps>(), {
  loop: false,
  orientation: undefined,
})

const emits = defineEmits<{
  'update:currentTabStopId': [value: null | string | undefined]
  'entryFocus': [event: Event]
}>()

const {
  dir: propDir,
  loop,
  orientation,
} = toRefs(props)
const dir = ref<Direction>(propDir.value ?? 'ltr')
const currentTabStopId = useVModel(props, 'currentTabStopId', emits, {
  defaultValue: props.defaultCurrentTabStopId,
  passive: (props.currentTabStopId === undefined) as false,
})
const isTabbingBackOut = ref<boolean>(false)
const isClickFocus = ref<boolean>(false)
const focusableItemsCount = ref<number>(0)

const { currentElement, forwardRef } = useForwardExpose()
const { createCollection } = useCollection('rovingFocus')
const collections = createCollection(currentElement)

function handleFocus(event: FocusEvent): void {
  // We normally wouldn't need this check, because we already check
  // that the focus is on the current target and not bubbling to it.
  // We do this because Safari doesn't focus buttons when clicked, and
  // instead, the wrapper will get focused and not through a bubbling event.
  const isKeyboardFocus = !isClickFocus.value

  if (
    event.currentTarget !== null
    && event.target === event.currentTarget
    && isKeyboardFocus
    && !isTabbingBackOut.value
  ) {
    const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS)

    event.currentTarget.dispatchEvent(entryFocusEvent)
    emits('entryFocus', entryFocusEvent)

    if (!entryFocusEvent.defaultPrevented) {
      const items = collections.value
      const activeItem = items.find((item) => item.getAttribute('data-active') === 'true')
      const currentItem = items.find(
        (item) => item.id === currentTabStopId.value,
      )
      const candidateItems = [
        activeItem,
        currentItem,
        ...items,
      ].filter(
        Boolean,
      ) as typeof items

      focusFirst(candidateItems)
    }
  }

  isClickFocus.value = false
}

provideRovingFocusGroupContext({
  currentTabStopId,
  dir,
  loop,
  orientation,
  onFocusableItemAdd: () => {
    focusableItemsCount.value++
  },
  onFocusableItemRemove: () => {
    focusableItemsCount.value--
  },
  onItemFocus: (tabStopId) => {
    currentTabStopId.value = tabStopId
  },
  onItemShiftTab: () => {
    isTabbingBackOut.value = true
  },
})
</script>

<template>
  <Primitive
    :ref="forwardRef"
    :as="props.as"
    :as-child="props.asChild"
    :tabindex="isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0"
    :data-orientation="orientation"
    :dir="dir"
    style="outline: none"
    @mousedown="isClickFocus = true"
    @focus="handleFocus"
    @blur="isTabbingBackOut = false"
  >
    <slot />
  </Primitive>
</template>
