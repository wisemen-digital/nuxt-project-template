import { z } from 'zod'

import { userIdSchema } from './currentUserId.model'

export const currentUserDossierDtoSchema = z.object({
  name: z.string(),
  manager: z.object({
    email: z.string().email(),
    first_name: z.string(),
    last_name: z.string(),
    phone: z.string().nullable(),
  }),
})

export const currentUserDtoSchema = z.object({
  id: userIdSchema,
  contract_number: z.string().nullish(),
  dossier: currentUserDossierDtoSchema.nullish(),
  email: z.string().email(),
  first_name: z.string(),
  last_name: z.string(),
  phone: z.string().nullish(),
  vat: z.string().nullish(),
})

export type CurrentUserDto = z.infer<typeof currentUserDtoSchema>
export type CurrentUserDossierDto = z.infer<typeof currentUserDossierDtoSchema>
