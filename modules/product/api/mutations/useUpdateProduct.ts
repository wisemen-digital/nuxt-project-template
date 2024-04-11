import { useMutation, useQueryClient } from '@tanstack/vue-query'

import type { ProductUuid } from '~/models/product/productUuid.model'
import { productKeys } from '~/modules/product/api/keys/product.keys'

export function useUpdateProduct() {
  return useMutation({
    mutationFn: async (input: ProductUuid) => {
      const queryClient = useQueryClient()
      // todo implement ProductService.update(input)

      await queryClient.invalidateQueries({
        queryKey: productKeys.detail(input).queryKey,
      })
    },
  })
};
