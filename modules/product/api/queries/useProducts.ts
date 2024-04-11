import { useQuery } from '@tanstack/vue-query'

import { productKeys } from '~/modules/product/api/keys/product.keys'

export function useProducts() {
  return useQuery({
    ...productKeys.all,
  })
};
