export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  // const { session } = useUserSession()
  const $api = $fetch.create({
    baseURL: config.public.BASE_URL,
    // onRequest({ options }) {
    //   // if (session.value?.token) {
    //   //   // Add Authorization header
    //   //   // options.headers = options.headers || {}
    //   //   // options.headers.Authorization = `Bearer ${session.value?.token}`
    //   // }
    // },
    // onResponseError({ response }) {
    //   if (response.status === 401)
    //     return navigateTo('/login')
    // },
  })
  return {
    provide: {
      api: $api,
    },
  }
})
