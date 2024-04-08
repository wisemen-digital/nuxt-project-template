import { useMutation } from '@tanstack/vue-query'

import { AuthService } from '@/modules/auth/api/services/auth.service'

export function useAuthResetPasswordMutation() {
  return useMutation({
    mutationFn: async (input: ResetPasswordForm) => {
      await AuthService.resetPassword(input)
    },
  })
}
