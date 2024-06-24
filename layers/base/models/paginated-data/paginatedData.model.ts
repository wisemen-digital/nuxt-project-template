import { z } from 'zod'

export function paginatedDataSchema<T extends z.ZodType>(
  schema: T,
) {
  return z.object({
    data: schema.array(),
    pagination: z.object({
      count: z.number(),
      per_page: z.number(),
      total: z.number(),
    }),
  })
}

export interface PaginatedData<TSchema> {
  data: TSchema[]
  pagination: {
    count: number
    per_page: number
    total: number
  }
}
