<script setup lang="ts">
const key = '7bde8c4986d24540adc65d2d50195a89'
const token = JSON.stringify(`{'token': '${key}' }`)

useHead({
    script: [{
        id: 'cloudflare',
        src: 'https://static.cloudflareinsights.com/beacon.min.js',
        defer: true,
        'data-cf-beacon': JSON.parse(token)
    }],
    meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {key: 'theme-color', name: 'theme-color', content: '#000'},
    ],
    link: [
        {rel: 'manifest', href: '/site.webmanifest'},
        {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
        {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
        {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
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
  <NuxtLoadingIndicator/>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>

  <UNotifications/>
</template>

