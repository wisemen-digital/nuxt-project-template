import { addAuthorizationHeader, OAuth2VueClient } from '~/lib/nuxtOAuthClient'

export default defineNuxtPlugin({
  name: 'api',
  parallel: true,
  setup() {
    const config = useRuntimeConfig()
    const localRoute = useLocaleRoute()

    const API_CLIENT_ID = config.public.apiClientId
    const API_CLIENT_SECRET = config.public.apiClientSecret
    const API_BASE_URL = config.public.apiBaseUrl

    const oAuthClient = new OAuth2VueClient({
      clientId: API_CLIENT_ID,
      clientSecret: API_CLIENT_SECRET,
      fetchInstance: $fetch,
      tokenEndpoint: `${API_BASE_URL}/api/auth/token`,
    })

    const api = $fetch.create({
      baseURL: API_BASE_URL,
      async onRequest({ options }) {
        await addAuthorizationHeader(oAuthClient, options)
      },
      async onResponseError({ response }) {
        if (response.status === 401) {
          await navigateTo(localRoute('login'))
        }
      },
    })

    const unauthorizedApi = $fetch.create({
      baseURL: API_BASE_URL,
    })

    return {
      provide: {
        api,
        oAuthClient,
        unauthorizedApi,
      },
    }
  },
})
