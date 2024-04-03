# [Nuxt3](https://nuxt.com/docs/getting-started/introduction) Project Template

Welcome. This template is designed to help you quickly set up and start developing your Nuxt3 applications. It comes pre-configured with several essential packages.
<br>
Happy coding!

### Table of Contents

- 🚀 [Getting Started](#getting-started)
- 📖 [Linting](#linting)
- 🏠 [Environment Variables](#env-variables)
- 🧩 [Packages / Stack](#packages)

## <a name="getting-started">Getting Started</a>
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

<br>

## <a name="linting">Linting</a>
Check for linting errors:
```bash
pnpm run lint
```

Autofix linting errors:
```bash
pnpm run lint:fix
```

<br>

## <a name="env-variables">Environment Variables</a>
Use the `.env.example` file as a template
```bash
NUXT_PUBLIC_BASE_URL=http://localhost:3000
```
You can change the `BASE_URL` to a development API url for testing/implementing.

<br>

## <a name="packages">Project packages / stack</a>

Each package has a link to useful documentation

| Category | Package |
| --- | --- |
| Packages | [PNPM](https://pnpm.io/) |
| Formatting | [AntFu ESLINT](https://github.com/antfu/eslint-config) |
| i18n | [@nuxtjs/i18n](https://i18n.nuxtjs.org/docs/getting-started) with customRoutePaths (locales folder) |
| CSS | [@nuxtjs/tailwindcss](https://tailwindcss.nuxtjs.org/getting-started/configuration) |
| Validation | [Zod](https://zod.dev/) |
| Animations | [GSAP](https://gsap.com/docs/v3/) |
| Sliders | [Keen Slider](https://keen-slider.io/docs) / [SwiperJS](https://swiperjs.com/vue) (If need for complicated sliders) |
| Auth | Self-written |
| State | [Nuxt useState](https://nuxt.com/docs/api/composables/use-state) / [Pinia](https://pinia.vuejs.org/ssr/nuxt.html) |
| Data Fetching | [Custom API plugin → useAPI composable](https://notes.atinux.com/nuxt-custom-fetch) |
