import { useMutation, useQueryClient } from '@tanstack/vue-query'

import { AuthService } from '@/modules/auth/api/services/auth.service'

export function useAuthForgotPasswordMutation() {
  return useMutation({
    mutationFn: async (input: ForgotPasswordForm) => {
      await AuthService.forgotPassword(input)
    },
    onSuccess: () => {
      const queryClient = useQueryClient()

      void queryClient.invalidateQueries({
        queryKey: [
          'current-user',
        ],
      })
    },
  })
}
