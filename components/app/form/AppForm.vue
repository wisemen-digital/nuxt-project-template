<script setup lang="ts" generic="TFormType extends z.ZodType">
import type { Form } from 'formango';
import { useId } from 'radix-vue';
import type { z } from 'zod';

const props = defineProps<{
  form: Form<TFormType>
}>()

const formId = useId()
</script>

<template>
  <form
    :id="formId"
    class="@container/form-layout flex size-full flex-1 flex-col"
    novalidate
    @submit.prevent="props.form.submit"
  >
    <slot :form-id="formId" />
  </form>
</template>
