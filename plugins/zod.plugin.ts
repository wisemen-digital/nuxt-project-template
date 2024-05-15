import {
  type ErrorMapCtx,
  z,
  ZodIssueCode,
  type ZodIssueOptionalMessage,
} from 'zod'

import { useGlobalI18n } from '@/composables/i18n/useGlobaI18n'

export default defineNuxtPlugin({
  dependsOn: [
    'i18n:plugin',
  ],
  name: 'api',
  parallel: true,
  setup() {
    function customErrorMap(issue: ZodIssueOptionalMessage, ctx: ErrorMapCtx): { message: string } {
      const { t } = useGlobalI18n()

      if (issue.code === ZodIssueCode.invalid_type) {
        return { message: t('errors.invalid_type') }
      }

      if (issue.code === ZodIssueCode.invalid_string) {
        if (issue.validation === 'email') {
          return { message: t('errors.invalid_email') }
        }
        if (issue.validation === 'url') {
          return { message: t('errors.invalid_url') }
        }
        if (issue.validation === 'uuid') {
          return { message: t('errors.invalid_uuid') }
        }
        if (issue.validation === 'regex') {
          return { message: t('errors.invalid_regex') }
        }
        if (issue.validation === 'datetime') {
          return { message: t('errors.invalid_datetime') }
        }

        return { message: t('errors.invalid_string') }
      }

      if (issue.code === ZodIssueCode.invalid_date) {
        return { message: t('errors.invalid_date') }
      }
      if (issue.code === ZodIssueCode.too_big) {
        if (issue.type === 'string') {
          return { message: t('errors.too_big_string', { count: issue.maximum }) }
        }
        if (issue.type === 'number') {
          return { message: t('errors.too_big_number', { count: issue.maximum }) }
        }
        if (issue.type === 'array') {
          return { message: t('errors.too_big_array', { count: issue.maximum }) }
        }
        if (issue.type === 'date') {
          return { message: t('errors.too_big_date', { count: issue.maximum }) }
        }

        return { message: t('errors.too_big', { count: issue.maximum }) }
      }
      if (issue.code === ZodIssueCode.too_small) {
        if (issue.type === 'string') {
          if (issue.minimum === 1) {
            return { message: t('errors.invalid_type') }
          }

          return { message: t('errors.too_small_string', { count: issue.minimum }) }
        }
        if (issue.type === 'number') {
          return { message: t('errors.too_small_number', { count: issue.minimum }) }
        }
        if (issue.type === 'array') {
          return { message: t('errors.too_small_array', { count: issue.minimum }) }
        }
        if (issue.type === 'date') {
          return { message: t('errors.too_small_date', { v: issue.minimum }) }
        }

        return { message: t('errors.too_small', { count: issue.minimum }) }
      }

      return { message: ctx.defaultError }
    }

    z.setErrorMap(customErrorMap)
  },
})
