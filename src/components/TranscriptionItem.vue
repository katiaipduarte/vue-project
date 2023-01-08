<script setup lang="ts">
import { useTranscriptionStore } from '@/stores/useTranscriptionStore'
import type Transcription from '@/types/TranscriptionData'
import { ref } from 'vue'
import DeleteIcon from './icons/IconDelete.vue'
import PersonIcon from './icons/IconPerson.vue'

const props = defineProps<{
  transcription: Transcription
}>()

const { deleteTranscription } = useTranscriptionStore()

const checked = ref(false)
const change = () => {
  checked.value = !checked.value
}
</script>

<template>
  <div class="transcription-item">
    <label class="checkbox-container sr-only" :for="'checkbox' + props.transcription.id">
      <span class="hidden">Checkbox for transcription {{ props.transcription.voice }}</span>
      <input :id="'checkbox' + props.transcription.id" type="checkbox" :checked="checked" @change="change" />
      <span class="checkmark"></span>
    </label>
    <PersonIcon />
    <div class="transcription-text">
      <h2>{{ props.transcription.voice }}</h2>
      <p>{{ props.transcription.text }}</p>
    </div>
    <button class="btn-icon" @click="deleteTranscription(props.transcription.id)">
      <DeleteIcon />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.transcription-item {
  display: flex;
  align-items: flex-start;

  .transcription-text {
    max-width: 595px;
    padding-left: 10px;

    h2 {
      color: var(--color-grey);
    }

    p {
      color: var(--color-light-grey);
    }
  }

  &:hover {
    .btn-icon {
      display: block;
    }
  }

  .btn-icon {
    position: absolute;
    right: 20px;
    display: none;
  }
}
</style>
