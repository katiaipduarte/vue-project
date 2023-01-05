<script setup lang="ts">
import TranscriptionItem from '@/components/TranscriptionItem.vue'
import { useTranscriptionStore } from '@/stores/useTranscriptionStore'
import { storeToRefs } from 'pinia'

const store = useTranscriptionStore()
const { transcriptionList } = storeToRefs(store)
</script>

<template>
  <div>
    <ul v-if="transcriptionList.length > 0" class="transcription-list">
      <li v-for="transcription in transcriptionList" :key="transcription.id">
        <TranscriptionItem :transcription="transcription" />
      </li>
    </ul>

    <p v-else>Please try to load transcriptions.</p>
  </div>
</template>

<style lang="scss" scoped>
.transcription-list {
  max-width: 738px;
  margin: 22px auto;
  padding: 0;
  background-color: var(--color-white);
  list-style: none;

  li {
    border-bottom: 1px solid var(--color-border);
    padding: 20px;

    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
