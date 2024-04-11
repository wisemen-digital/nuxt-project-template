import { useToast } from '@wisemen/vue-core'
import { useI18n } from 'vue-i18n'

import { isFetchError } from '~/utils/api/isFetchError'

interface UserErrorToastReturnType {
  show: (error: unknown) => void
}

export function useErrorToast(): UserErrorToastReturnType {
  const { t } = useI18n()
  const toast = useToast()

  function show(error: unknown): void {
    if (isFetchError(error)) {
      toast.error({
        description: error.message ?? t('error.default_error.description'),
        title: t('error.default_error.title'),
      })

      return
    }

    throw error
  }

  return {
    show,
  }
}
