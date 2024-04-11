import { z } from 'zod'

import { productUuidSchema } from '~/models/product/productUuid.model'

export const productIndexSchema = z.object({
  id: productUuidSchema,
  name: z.string(),
  price: z.number(),
})

export type ProductIndex = z.infer<typeof productIndexSchema>
