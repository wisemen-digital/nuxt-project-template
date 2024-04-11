import { useMutation } from '@tanstack/vue-query'

import type { ResetPasswordForm } from '~/models/auth/reset-password/resetPasswordForm.model'
import { AuthService } from '~/modules/auth/api/services/auth.service'

export function useAuthResetPasswordMutation() {
  return useMutation({
    mutationFn: async (input: ResetPasswordForm) => {
      await AuthService.resetPassword(input)
    },
  })
}
