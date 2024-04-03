import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    typescript: true,
    tailwindCSS: true,
    // Formatters
    formatters: {
      html: true,
      css: true,
    },

    // Rules
    rules: {
      'node/prefer-global/process': 'off',
    },

    typescript: {
      tsconfigPath: './tsconfig.json',
    },

    // Overrides
    typescript: {
      overrides: {
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
      },
    },
    vue: {
      overrides: {
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
      },
    },
  },
)
