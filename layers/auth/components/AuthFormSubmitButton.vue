<script setup lang="ts" generic="TFormType extends z.ZodType">
import type { Form } from 'formango'
import type { z } from 'zod'

const props = defineProps<{
  form: Form<TFormType>
}>()
</script>

<template>
  <AppFormSubmitButton
    :form="props.form"
    :is-keyboard-command-disabled="true"
    variant="secondary"
    class="mt-4"
  >
    <slot />
  </AppFormSubmitButton>
</template>
