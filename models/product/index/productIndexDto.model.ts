import { z } from 'zod'

import { productUuidSchema } from '~/models/product/productUuid.model'

export const productIndexDtoSchema = z.object({
  id: productUuidSchema,
  name: z.string(),
  price: z.number(),
})

export type ProductIndexDto = z.infer<typeof productIndexDtoSchema>
