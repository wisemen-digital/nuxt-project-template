import type { AppRouter } from '@payload/trpc/router/router'
import {
  createTRPCProxyClient,
  httpBatchLink,
} from '@trpc/client'

export function useTrpc() {
  const client = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: 'http://localhost:8000/api/trpc',
      }),
    ],
  })

  return client
}
