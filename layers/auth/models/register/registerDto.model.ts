import { z } from 'zod'

export const registerDtoSchema = z.object({
  email: z.string().email(),
  first_name: z.string(),
  last_name: z.string(),
  phone: z.string().length(10),
})

export type RegisterDto = z.infer<typeof registerDtoSchema>
