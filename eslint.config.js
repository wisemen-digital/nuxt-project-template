import path from 'node:path'
import { fileURLToPath } from 'node:url'

import WisemenEslintConfig from '@wisemen/eslint-config-vue'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default [
  ...(await WisemenEslintConfig),
  {
    rules: {
      'tailwindcss/no-custom-classname': [
        'error',
        {
          whitelist: [
            '^custom-.*',
          ],
        },
      ],
      'ts/explicit-function-return-type': [
        'off',
      ],
      'vue/no-undef-components': 'off',
    },
  },
]
