import { z } from 'zod'

export const currentUserDossierSchema = z.object({
  name: z.string(),
  manager: z.object({
    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    phone: z.string().nullable(),
  }),
})

export type CurrentUserDossier = z.infer<typeof currentUserDossierSchema>
