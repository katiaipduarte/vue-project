<script setup lang="ts">
import { RouterView } from 'vue-router'
import TemplateHeader from './components/TemplateHeader.vue'
</script>

<template>
  <TemplateHeader />

  <main>
    <RouterView />
  </main>
</template>
