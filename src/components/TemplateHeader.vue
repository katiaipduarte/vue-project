<script setup lang="ts">
import { useTranscriptionStore } from '@/stores/useTranscriptionStore'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import FetchDocIcon from './icons/IconFetchDocument.vue'
import UploadIcon from './icons/IconUpload.vue'

const route = useRoute()
const { getAllTranscription, updateTranscriptions } = useTranscriptionStore()
const name = computed(() => route.name)
</script>

<template>
  <header>
    <h1>{{ name }}</h1>

    <div class="actions">
      <button
        class="btn-icon"
        type="submit"
        aria-label="Upload new and edited transcriptions"
        @click="updateTranscriptions"
      >
        <UploadIcon />
      </button>
      <button class="btn-icon" type="submit" aria-label="Get all transcriptions" @click="getAllTranscription">
        <FetchDocIcon />
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 69px;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;

  h1 {
    color: var(--color-dark-grey);
  }

  .actions {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;

    button:last-of-type {
      margin-left: 20px;
    }
  }
}
</style>
