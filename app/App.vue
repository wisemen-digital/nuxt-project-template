<script setup lang="ts">
import type { PostResponse } from '@payload/models/posts/postResponse.model'
import { ConfigProvider } from 'radix-vue'

import { useTrpc } from '~/api/useTrpc'

function useIdFunction() {
  return useId()
}

const trpc = useTrpc()
const posts = ref<PostResponse[]>([])

async function getData() {
  const response = await trpc.posts.getPosts.query()

  posts.value = response.docs
}

void getData()
</script>

<template>
  <SeoWrapper>
    <div class="flex w-screen flex-1">
      <div class="w-full">
        <ConfigProvider :use-id="useIdFunction">
          <NuxtLoadingIndicator color="#E94935" />
          <NuxtLayout>
            {{ posts }}
            <NuxtPage />
          </NuxtLayout>
          <Teleport to="#teleports">
            <AppDialogContainer />
            <AppToastContainer />
          </Teleport>
        </ConfigProvider>
      </div>
    </div>
  </SeoWrapper>
</template>
