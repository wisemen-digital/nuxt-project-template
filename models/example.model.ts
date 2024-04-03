import { z } from 'zod'

export const ExampleSchema = z.object({
  id: z.string(),
  name: z.string(),
})

export type ExampleModel = z.infer<typeof ExampleSchema>
