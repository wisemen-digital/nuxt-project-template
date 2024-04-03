# [Nuxt3](https://nuxt.com/docs/getting-started/introduction) Project Template

Welcome to Wisemen's Nuxt3 project template. This template is designed to help you quickly set up and start developing your Nuxt3 applications. It comes pre-configured with several essential packages like PNPM for package management, AntFu ESLINT for code formatting, @nuxtjs/i18n for internationalization, and @nuxtjs/tailwindcss for styling. Follow the instructions below to set up the project, run it locally, build it, and check for linting errors. Happy coding!

## Setup a project
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

## Linting
Check for linting errors:
```bash
pnpm run lint
```

Autofix linting errors:
```bash
pnpm run lint:fix
```
<br>
<br>

## Environment variables
Use the `.env.example` file as a template
```bash
NUXT_PUBLIC_BASE_URL=http://localhost:3000
```
You can change the `BASE_URL` to a development API url for testing/implementing.

<br>

## Project Packages / Stack

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
