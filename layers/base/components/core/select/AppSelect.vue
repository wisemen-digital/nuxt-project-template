<script setup lang="ts" generic="TValue extends AcceptableValue">
import AppIcon from '@base/components/core/icon/AppIcon.vue'
import AppLoader from '@base/components/core/loader/AppLoader.vue'
import AppSelectContent from '@base/components/core/select/AppSelectContent.vue'
import AppSelectItem from '@base/components/core/select/AppSelectItem.vue'
import AppSelectRoot from '@base/components/core/select/AppSelectRoot.vue'
import AppSelectTrigger from '@base/components/core/select/AppSelectTrigger.vue'
import AppSelectValue from '@base/components/core/select/AppSelectValue.vue'
import { useSelectStyle } from '@base/components/core/select/select.style'
import type { Icon } from '@base/icons/icons'
import type {
  AcceptableValue,
  SelectItem,
} from '@base/types/core/selectItem.type'
import {
  SelectIcon,
  SelectPortal,
} from 'radix-vue'
import { computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    /**
     * The id of the select.
     * @default null
     */
    id?: null | string
    /**
     * Whether the select chevron is hidden.
     */
    isChevronHidden?: boolean
    /**
     * Whether the select is disabled.
     */
    isDisabled?: boolean
    /**
     * Whether the select is invalid.
     * @default false
     */
    isInvalid?: boolean
    /**
     * Whether the select is loading.
     */
    isLoading?: boolean
    /**
     * The value can be hidden to provide more customization.
     */
    isValueHidden?: boolean
    /**
     * display function for the selected value
     */
    displayFn: (value: TValue) => null | string
    /**
     * The icon to display on the left side of the select.
     */
    iconLeft?: Icon
    /**
     * The items of the select.
     */
    items: SelectItem<TValue>[]
    /**
     * The placeholder of the select.
     */
    placeholder?: null | string
    /**
     * The class to apply to the select trigger.
     */
    selectTriggerClass?: null | string
  }>(),
  {
    id: null,
    isChevronHidden: false,
    isDisabled: false,
    isInvalid: false,
    isLoading: false,
    isValueHidden: false,
    iconLeft: undefined,
    placeholder: null,
  },
)

const emit = defineEmits<{
  'blur': []
  'update:modelValue': [value: TValue | null]
}>()

const model = defineModel<TValue | null>({
  required: true,
})

const isOpen = ref<boolean>(false)

function onBlur(): void {
  emit('blur')
}

function onTriggerBlur(): void {
  if (!isOpen.value) {
    onBlur()
  }
}

const selectStyle = useSelectStyle()

const iconLeftClasses = computed<string>(() => selectStyle.iconLeft())
const loaderClasses = computed<string>(() => selectStyle.loader())
const triggerIconClasses = computed<string>(() => selectStyle.triggerIcon())
const popoverContainerClasses = computed<string>(() => selectStyle.popoverContainer())
</script>

<template>
  <div>
    <AppSelectRoot
      v-model="model"
      v-model:is-open="isOpen"
      :is-disabled="props.isDisabled"
    >
      <AppSelectTrigger
        :id="id"
        :is-disabled="props.isDisabled"
        :is-invalid="props.isInvalid"
        :class="props.selectTriggerClass"
        @blur="onTriggerBlur"
      >
        <slot name="left">
          <AppIcon
            v-if="props.iconLeft !== undefined"
            :icon="props.iconLeft"
            :class="iconLeftClasses"
          />
        </slot>

        <AppSelectValue
          v-if="!isValueHidden"
          :is-empty="model === null"
        >
          <template v-if="placeholder !== null && model === null">
            {{ props.placeholder }}
          </template>

          <template v-else-if="model !== null">
            {{ props.displayFn(model) }}
          </template>
        </AppSelectValue>

        <AppLoader
          v-if="props.isLoading"
          :class="loaderClasses"
        />

        <SelectIcon
          v-else-if="!isChevronHidden"
          :as-child="true"
          class="mr-3"
        >
          <AppIcon
            :class="triggerIconClasses"
            icon="chevronDown"
            size="sm"
          />
        </SelectIcon>
      </AppSelectTrigger>

      <SelectPortal>
        <Transition
          enter-active-class="duration-150"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="duration-150"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-if="isOpen"
            :class="popoverContainerClasses"
          >
            <AppSelectContent>
              <AppSelectItem
                v-for="(item, i) of props.items"
                :key="i"
                :item="item"
                :display-fn="props.displayFn"
              >
                <template #default="{ item: itemValue }">
                  <slot
                    v-if="itemValue.type === 'option'"
                    :value="itemValue.value"
                    name="option"
                  />
                </template>
              </AppSelectItem>
            </AppSelectContent>
          </div>
        </Transition>
      </SelectPortal>
    </AppSelectRoot>
  </div>
</template>
