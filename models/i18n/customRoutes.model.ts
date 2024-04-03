import { z } from 'zod'

// Add new routes here so they get auto-completion in the codebase
const CustomRouteSchema = z.union([
  z.literal('index'),
  z.literal('about'),
])

const CustomRoutePathsSchema = z.record(z.record(z.string()))

export type CustomRoute = z.infer<typeof CustomRouteSchema>
export type CustomRoutePaths = z.infer<typeof CustomRoutePathsSchema>
