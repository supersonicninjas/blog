<script setup lang="ts">
useHead({
    meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {key: 'theme-color', name: 'theme-color', content: '#000'}
    ],
    link: [
        {rel: 'icon', href: '/favicon.ico'}
    ],
    htmlAttrs: {
        lang: 'en',
        class: 'dark bg-black'
    }
})

useSeoMeta({
    titleTemplate: '%s - Nuxt UI Pro - SaaS template',
    ogSiteName: 'Nuxt UI Pro - SaaS template',
    twitterCard: 'summary_large_image'
})
</script>

<template>
  <div>

    <NuxtLoadingIndicator/>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>

    <UNotifications/>
  </div>
</template>
