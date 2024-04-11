import { createQueryKeys } from '@lukemorales/query-key-factory'

import type { ProductUuid } from '~/models/product/productUuid.model'
import { ProductService } from '~/modules/product/api/services/product.service'

export const productKeys = createQueryKeys('products', {
  all: {
    queryFn: () => ProductService.getAll(),
    queryKey: null,
  },
  detail: (productUuid: ProductUuid) => ({
    contextQueries: {
      favourite: {
        queryFn: () => ProductService.getByUuid(productUuid),
        queryKey: null,
      },
    },
    queryFn: () => ProductService.getByUuid(productUuid),
    queryKey: [
      productUuid,
    ],
  }),
})
