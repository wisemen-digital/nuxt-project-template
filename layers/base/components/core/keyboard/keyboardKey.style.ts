import type { VariantProps } from '@base/libs/twVariants.lib'
import { tv } from '@base/libs/twVariants.lib'

export const useKeyboardStyle = tv({
  defaultVariants: {
    variant: 'default',
  },
  slots: {
    key: 'flex h-[1.1rem] min-w-[1.1rem] items-center justify-center rounded border border-solid p-1 text-center text-[11px] capitalize',
    shortcutContainer: 'flex items-center gap-x-1',
    shortcutText: '',
  },
  variants: {
    variant: {
      bordered: {
        key: 'border-border bg-muted-background text-muted-foreground',
        shortcutText: 'text-muted-foreground',
      },
      default: {
        key: 'border-muted-background bg-muted-background text-secondary-foreground',
        shortcutText: 'text-secondary-foreground',
      },
      ghost: {
        key: 'border-transparent text-muted-foreground',
        shortcutText: 'text-muted-foreground',
      },
      secondary: {
        key: 'border-primary-foreground/0 bg-primary-foreground/20 text-primary-foreground',
        shortcutText: 'text-primary-foreground',
      },
    },
  },
})

export type KeyboardStyleProps = VariantProps<typeof useKeyboardStyle>
