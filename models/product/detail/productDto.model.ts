import { z } from 'zod'

import { productUuidSchema } from '~/models/product/productUuid.model'

export const productDtoSchema = z.object({
  id: productUuidSchema,
  name: z.string(),
  price: z.number(),
  quantity: z.number(),
})

export type ProductDto = z.infer<typeof productDtoSchema>
