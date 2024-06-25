<script setup lang="ts">
import {
  NavigationMenuList,
  NavigationMenuRoot,
} from 'radix-vue'

import { NAVIGATION_LINKS } from '~/constants/header/navigationLinks.constant'
</script>

<template>
  <NavigationMenuRoot>
    <NavigationMenuList
      class="flex items-center gap-3"
    >
      <template
        v-for="menuItem in NAVIGATION_LINKS"
        :key="menuItem.title"
      >
        <HeaderNavigationMenuLink v-bind="menuItem">
          {{ menuItem.title }}
        </HeaderNavigationMenuLink>
        <HeaderNavigationMenuSpacer class="last:hidden" />
      </template>
    </NavigationMenuList>
  </NavigationMenuRoot>
</template>
