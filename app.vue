<script setup lang="ts">
useHead({
    meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {key: 'theme-color', name: 'theme-color', content: '#000'}
    ],
    link: [
        {rel: 'manifest', href: '/site.webmanifest'},
        {rel: 'apple-touch-icon', sizes :'180x180', href: '/apple-touch-icon.png'},
        {rel: 'icon', type:'image/png', sizes :'32x32', href: '/favicon-32x32.png'},
        {rel: 'icon', type:'image/png', sizes :'16x16', href: '/favicon-16x16.png'},
        {rel: 'icon', href: '/favicon.ico'},
    ],
    htmlAttrs: {
        lang: 'en',
        class: 'dark bg-black'
    }
})

useSeoMeta({
    titleTemplate: '%s - Supersonic Ninjas',
    ogSiteName: 'Supersonic Ninjas',
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

