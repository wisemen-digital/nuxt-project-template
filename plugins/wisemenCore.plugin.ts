import { extendIcons } from '@wisemen/vue-core'

import { defineNuxtPlugin } from '#app'
import { icons } from '~/icons/icons'

export default defineNuxtPlugin({
  name: 'wisemenCore',
  parallel: true,
  setup() {
    extendIcons(icons)
  },
})
