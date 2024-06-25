import type { Component } from 'vue'

export interface BaseIcons {
  alertCircle: Promise<Component>
  arrowDown: Promise<Component>
  arrowLeft: Promise<Component>
  arrowRight: Promise<Component>
  arrowUp: Promise<Component>
  arrowUpDown: Promise<Component>
  calendar: Promise<Component>
  checkmark: Promise<Component>
  checkmarkCircle: Promise<Component>
  chevronDown: Promise<Component>
  chevronLeft: Promise<Component>
  chevronRight: Promise<Component>
  chevronUp: Promise<Component>
  close: Promise<Component>
  eye: Promise<Component>
  eyeSlash: Promise<Component>
  filterLines: Promise<Component>
  minus: Promise<Component>
  search: Promise<Component>
  warning: Promise<Component>
}

export interface Icons {}

export type AllIcons = BaseIcons & Icons

export const icons: AllIcons = {
  alertCircle: import('@base/icons/AlertCircleIcon.vue'),
  arrowDown: import('@base/icons/ArrowDownIcon.vue'),
  arrowLeft: import('@base/icons/ArrowLeftIcon.vue'),
  arrowRight: import('@base/icons/ArrowRightIcon.vue'),
  arrowUp: import('@base/icons/ArrowUpIcon.vue'),
  arrowUpDown: import('@base/icons/ArrowUpDownIcon.vue'),
  calendar: import('@base/icons/CalendarIcon.vue'),
  checkmark: import('@base/icons/CheckmarkIcon.vue'),
  checkmarkCircle: import('@base/icons/CheckmarkCircleIcon.vue'),
  chevronDown: import('@base/icons/ChevronDownIcon.vue'),
  chevronLeft: import('@base/icons/ChevronLeftIcon.vue'),
  chevronRight: import('@base/icons/ChevronRightIcon.vue'),
  chevronUp: import('@base/icons/ChevronUpIcon.vue'),
  close: import('@base/icons/CloseIcon.vue'),
  eye: import('@base/icons/EyeIcon.vue'),
  eyeSlash: import('@base/icons/EyeSlashIcon.vue'),
  filterLines: import('@base/icons/FilterLinesIcon.vue'),
  minus: import('@base/icons/MinusIcon.vue'),
  search: import('@base/icons/SearchIcon.vue'),
  warning: import('@base/icons/WarningIcon.vue'),
}

export function extendIcons(customIcons: Icons): void {
  Object.assign(icons, customIcons)
}

export type Icon = keyof AllIcons
