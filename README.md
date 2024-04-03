# Wisemen Nuxt 3 Project Template

[Nuxt 3 Official documentation](https://nuxt.com/docs/getting-started/introduction)

## Setup
Install the packages as following:
```bash
pnpm install
```

Run locally
```bash
pnpm run dev
```

Build
```bash
pnpm run build
```

## Linting
Check for linting errors:
```bash
pnpm run lint
```

Autofix linting errors:
```bash
pnpm run lint:fix
```

## Environment variables
Use the `.env.example` file as a template
```bash
NUXT_PUBLIC_BASE_URL=http://localhost:3000
```
You can change the `BASE_URL` to a development API url for testing/implementing.

## Techstack

Packages: `PNPM`
Formatting: [AntFu ESLINT](https://github.com/antfu/eslint-config)
i18n: [@nuxtjs/i18n](https://i18n.nuxtjs.org/docs/getting-started) with customRoutePaths (locales folder)
CSS: [@nuxtjs/tailwindcss](https://tailwindcss.nuxtjs.org/getting-started/configuration)
Validation: [Zod](https://zod.dev/)
Animations: [GSAP](https://gsap.com/docs/v3/)
Sliders: [Keen Slider](https://keen-slider.io/docs) / [SwiperJS](https://swiperjs.com/vue) (If need for complicated sliders)
Auth: Self-written
State: [Nuxt useState](https://nuxt.com/docs/api/composables/use-state) / [Pinia](https://pinia.vuejs.org/ssr/nuxt.html)
Data Fetching: [Custom API plugin → useAPI composable](https://notes.atinux.com/nuxt-custom-fetch)
