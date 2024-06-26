import type { TypedRouteLocationRaw } from '@typed-router'

export interface NavigationLink {
  title: string
  isTargetBlank?: boolean
  to: TypedRouteLocationRaw
}

export const NAVIGATION_LINKS = [
  {
    title: 'Home',
    to: {
      name: 'index',
    },
  },
  {
    title: 'Login',
    to: {
      name: 'auth-login',
    },
  },
] satisfies NavigationLink[]
