<script setup lang="ts">

const {data: navigation} = await useAsyncData('navigation', () => fetchContentNavigation(), {default: () => []})

provide('navigation', navigation)
</script>

<template>
    <Header/>
    <UMain>
      <slot/>
    </UMain>
  <div class="bg-black/90 w-full flex items-center justify-center h-10 text-3xl py-10">
    📱🥷🥷🥷🚀
  </div>
</template>
