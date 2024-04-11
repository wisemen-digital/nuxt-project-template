import { z } from 'zod'

import { productUuidSchema } from '~/models/product/productUuid.model'

export const productSchema = z.object({
  id: productUuidSchema,
  name: z.string(),
  price: z.number(),
  quantity: z.number(),
})

export type Product = z.infer<typeof productSchema>
