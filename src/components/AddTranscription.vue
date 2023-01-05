<script setup lang="ts">
import { useTranscriptionStore } from '@/stores/useTranscriptionStore'
import AddRowIcon from './icons/IconAddRow.vue'

const { addTranscription } = useTranscriptionStore()
</script>

<template>
  <div>
    <button class="btn-icon" @click="addTranscription">
      <AddRowIcon />
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
