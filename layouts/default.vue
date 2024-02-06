<script setup lang="ts">

const {data: navigation} = await useAsyncData('navigation', () => fetchContentNavigation(), {default: () => []})

provide('navigation', navigation)
</script>

<template>
  <div class="bg-black">
    <Header/>
    <UMain>
      <slot/>
    </UMain>

  </div>
</template>
