<script setup lang="ts">
import { NAVIGATION_LINKS } from '~/constants/header/navigationLinks.constant'

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col gap-4">
    <p class="font-medium text-neutral-400">
      {{ t('footer.links') }}
    </p>
    <div class="flex flex-col">
      <FooterLink
        v-for="menuItem in NAVIGATION_LINKS"
        v-bind="menuItem"
        :key="menuItem.title"
      >
        {{ menuItem.title }}
      </FooterLink>
    </div>
  </div>
</template>
