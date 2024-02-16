<script setup lang="ts">
defineProps<{ images: Array<String> }>()
</script>

<template>
  <div class="grid grid-cols-4 gap-x-1">
    <LazyNuxtImg v-for="(src, index) in images" :key="index" :src="src" class="rounded max-h-[600px]"/>
  </div>
</template>

