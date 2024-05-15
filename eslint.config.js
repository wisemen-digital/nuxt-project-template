import WisemenEslintConfig from '@wisemen/eslint-config-vue'

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

      'ts/explicit-function-return-type': 'off',
      'vue/no-undef-components': 'off',
    },
  },
]
