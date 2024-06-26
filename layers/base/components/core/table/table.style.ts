import type { VariantProps } from '@base/libs/twVariants.lib'
import { tv } from '@base/libs/twVariants.lib'

export const useTableStyle = tv({
  slots: {
    bodyColumn: 'relative flex h-full items-center px-6 py-4 text-left',
    bodyContainer: 'group grid grid-cols-subgrid items-center border-b border-solid border-border outline-none hover:bg-muted-background focus:bg-muted-background',
    cell: 'truncate',
    container: 'h-full flex-1 overflow-y-auto',
    emptyBackground: 'absolute left-0 top-0 z-10 size-full bg-gradient-to-b from-transparent to-background',
    emptyColumn: 'px-6 py-4',
    emptyContainer: 'relative grid h-full grid-cols-subgrid',
    emptyGrid: 'grid grid-cols-subgrid',
    emptyOverlayClearButton: 'mx-auto mt-4',
    emptyOverlayContainer: 'absolute left-1/2 top-1/2 z-10 w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-background/25 p-8 shadow-card-shadow backdrop-blur-sm',
    emptyOverlayContent: 'mt-2',
    emptyOverlayIcon: 'mx-auto text-muted-foreground',
    emptyOverlayText: 'text-center text-muted-foreground',
    emptyOverlayTitle: 'mt-4 text-center font-medium text-muted-foreground',
    filterBooleanOption: 'py-2',
    filterMultiSelectButton: 'block w-full py-0',
    filterMultiSelectContainer: 'flex w-full items-center justify-between gap-2',
    filterMultiSelectExpandedItems: 'max-h-40 overflow-y-auto px-2',
    filterMultiSelectOption: 'my-2',
    filterMultiSelectSelectedItems: 'flex size-5 items-center justify-center rounded-full bg-primary text-caption text-white',
    filterMultiSelectText: 'mr-auto',
    filterPopoverActiveFilters: 'absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-primary text-xs text-white',
    filterPopoverButton: 'w-10 !border-border',
    filterPopoverClearButton: 'text-primary',
    filterPopoverClearContainer: 'flex items-center justify-between gap-10 py-2 pl-2 pr-6',
    filterPopoverClearText: 'font-medium',
    filterPopoverContainer: 'relative',
    filterPopoverContentContainer: 'rounded-md border border-solid border-border bg-white p-2',
    filterPopoverFiltersContainer: 'p-2',
    filterWarningContainer: 'sticky left-0 flex items-center justify-center gap-x-2 p-4',
    filterWarningText: 'text-muted-foreground',
    footer: 'sticky bottom-0 left-0 z-10 flex h-14 w-full items-center justify-between border-t border-solid border-border bg-background px-6 py-2',
    grid: 'grid items-start bg-background',
    headerColumn: 'group relative flex items-center gap-x-2 bg-muted-background px-6 py-3 text-left outline-none focus-visible:bg-neutral-100',
    headerContainer: 'sticky top-0 z-20 grid min-w-full grid-cols-subgrid border-b border-solid border-border bg-muted-background',
    headerIcon: 'duration-200',
    headerText: 'truncate',
    skeletonLoaderBackground: 'absolute left-0 top-0 z-10 size-full bg-gradient-to-b from-transparent to-background',
    skeletonLoaderContainer: 'w-full',
    skeletonLoaderContentCell: 'rounded-md bg-neutral-200 p-3',
    skeletonLoaderContentContainer: 'relative',
    skeletonLoaderContentGrid: 'grid grid-cols-table-skeleton gap-x-8 px-8 py-4',
    skeletonLoaderContentRow: 'odd:bg-neutral-100',
    skeletonLoaderHeaderContainer: 'mb-4 border-y border-solid border-border pb-4',
    skeletonLoaderHeaderGrid: 'grid grid-cols-table-skeleton gap-x-8 px-8',
    skeletonLoaderHeaderRow: 'mt-4 rounded-md bg-neutral-100 p-3',
    table: 'relative flex h-full flex-1 flex-col overflow-hidden rounded-xl border border-solid border-border bg-background',
    topBadge: 'mt-0.5',
    topContainer: 'flex items-center gap-x-2 border-b border-solid border-border px-6 py-4',
    topSearchInput: 'ml-auto w-28 md:w-72',
    topSkeletonRow: 'mt-1 w-20',
    topTitle: 'font-medium',
  },
  variants: {
    isColumnSorted: {
      false: {
        headerIcon: 'text-muted-foreground/50 group-hover:text-foreground group-focus-visible:text-foreground',
      },
      true: {
        headerIcon: 'text-foreground',
      },
    },
    hasLastBorder: {
      true: {
        bodyContainer: 'last:border-0',
      },
    },
    hasRightBorder: {
      true: {
        bodyColumn: 'first:!border-r-border',
        emptyColumn: 'first:!border-r-border',
        headerColumn: 'first:!border-r-border',
      },
    },
    hasLeftBorder: {
      true: {
        bodyColumn: 'last:!border-l-border',
        emptyColumn: 'last:!border-l-border',
        headerColumn: 'last:!border-l-border',
      },
    },
    shouldPinFirstColumn: {
      true: {
        bodyColumn: 'first:sticky first:left-0 first:z-10 first:border-r first:border-solid first:border-r-transparent first:bg-background group-hover:bg-muted-background group-focus:bg-muted-background',
        emptyColumn: 'first:sticky first:left-0 first:z-10 first:border-r first:border-solid first:border-r-transparent first:bg-background group-hover:bg-muted-background group-focus:bg-muted-background',
        headerColumn: 'first:sticky first:left-0 first:z-10 first:border-r first:border-solid first:border-r-transparent',
      },
    },
    shouldPinLastColumn: {
      true: {
        bodyColumn: 'bg-background last:sticky last:right-0 last:z-10 last:border-l last:border-solid last:border-l-transparent group-hover:bg-muted-background group-focus:bg-muted-background',
        emptyColumn: 'bg-background last:sticky last:right-0 last:z-10 last:border-l last:border-solid last:border-l-transparent group-hover:bg-muted-background group-focus:bg-muted-background',
        headerColumn: 'last:sticky last:right-0 last:z-10 last:border-l last:border-solid last:border-l-transparent',
      },
    },
  },
})

export type TableStyleProps = VariantProps<typeof useTableStyle>
