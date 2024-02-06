<script setup lang="ts">

const {data: navigation} = await useAsyncData('navigation', () => fetchContentNavigation(), {default: () => []})

provide('navigation', navigation)
</script>

<template>
    <Header/>
    <UMain>
      <slot/>
    </UMain>
</template>
