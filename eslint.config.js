import WisemenEslintConfig from '@wisemen/eslint-config-vue'

export default [
  ...(await WisemenEslintConfig),
  {
    ignores: [
      '**/layers/base/components/core/sonner/Toaster.vue',
    ],
  },
  {
    rules: {
      'ts/explicit-function-return-type': 'off',
      'vue/no-undef-components': 'off',
    },
  },
]
