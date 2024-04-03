FROM node:20-alpine as build-stage

RUN corepack enable pnpm

WORKDIR /app

COPY . .

RUN pnpm install --frozen-lockfile

RUN pnpm run build

FROM node:20-alpine as production-stage

COPY --from=build-stage /app/.output  .

EXPOSE 3000
ENTRYPOINT ["node", "./server/index.mjs"]
