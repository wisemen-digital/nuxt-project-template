import { useQuery } from '@tanstack/vue-query'

import type { ProductUuid } from '~/models/product/productUuid.model'
import { productKeys } from '~/modules/product/api/keys/product.keys'

export function useProduct(uuid: MaybeRefOrGetter<ProductUuid>) {
  return useQuery({
    ...productKeys.detail(toValue(uuid)),
  })
};
