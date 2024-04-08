export function useHttp() {
  const httpClient = useNuxtApp().$httpClient

  return httpClient
}

export function useUnauthorizedHttp() {
  const unauthorizedHttpClient = useNuxtApp().$unauthorizedHttpClient

  return unauthorizedHttpClient
}
