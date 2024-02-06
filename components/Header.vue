<script setup lang="ts">
import type {NavItem} from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const links = [{
    label: 'Articles',
    icon: 'i-heroicons-book-open',
    to: '/getting-started'
}]
</script>

<template>
  <UHeader>
    <template #logo>
      <NuxtLink to="/">
        <Logo class="size-20 text-red-500"/>
      </NuxtLink>
    </template>

    <template #right>
      <div class="space-x-3 font-black">
        <NuxtLink v-for="link in links" class="font-bold" :key="link.label" :to="link.to">{{ link.label }}</NuxtLink>
      </div>
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)"/>
    </template>
  </UHeader>
</template>

