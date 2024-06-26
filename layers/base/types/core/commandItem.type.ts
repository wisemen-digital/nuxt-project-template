import type { Icon } from '@base/icons/icons'

export interface CommandOption {
  icon?: Icon
  image?: string
  label: string
  onSelect: () => void
}

export type CommandItem = CommandOption
