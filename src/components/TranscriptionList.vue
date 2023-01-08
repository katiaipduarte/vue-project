<script setup lang="ts">
import AddTranscription from '@/components/AddTranscription.vue'
import TranscriptionItem from '@/components/TranscriptionItem.vue'
import { useTranscriptionStore } from '@/stores/useTranscriptionStore'
import { storeToRefs } from 'pinia'

const store = useTranscriptionStore()
const { transcriptionList } = storeToRefs(store)
</script>

<template>
  <div v-if="transcriptionList.length > 0" class="transcriptions-container">
    <ul class="transcription-list">
      <li v-for="transcription in transcriptionList" :key="transcription.id">
        <TranscriptionItem :transcription="transcription" />
      </li>
    </ul>
    <AddTranscription />
  </div>

  <h2 v-else class="empty-message">Please try to load transcriptions first.</h2>
</template>

<style lang="scss" scoped>
.empty-message {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 110px);
}

.transcriptions-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
}
</style>
