<script setup lang="ts">
import { useTranscriptionStore } from '@/stores/useTranscriptionStore'
import type Transcription from '@/types/TranscriptionData'
import { ref } from 'vue'
import DeleteIcon from './icons/IconDelete.vue'
import PersonIcon from './icons/IconPerson.vue'

const props = defineProps<{
  transcription: Transcription
}>()

const transcriptionObj = ref(props.transcription)
const editable = ref(false)

const { deleteTranscription, updateTranscription } = useTranscriptionStore()

const checked = ref(false)
const change = () => {
  checked.value = !checked.value
}

const updateTranscriptionRecord = () => {
  updateTranscription(transcriptionObj.value)
  editable.value = false
}
</script>

<template>
  <div class="transcription-item">
    <label class="checkbox-container sr-only" :for="'checkbox' + transcriptionObj.id">
      <span class="hidden">Checkbox for transcription {{ transcriptionObj.voice }}</span>
      <input :id="'checkbox' + transcriptionObj.id" type="checkbox" :checked="checked" @change="change" />
      <span class="checkmark"></span>
    </label>

    <div class="transcription-icon">
      <PersonIcon />
    </div>
    <div class="transcription-text">
      <div v-if="!editable">
        <h2>{{ transcriptionObj.voice }}</h2>
        <p>{{ transcriptionObj.text }}</p>
        <button aria-label="Edit transcription" @click="editable = true">Edit</button>
      </div>
      <div v-else>
        <input id="transcription-title" v-model="transcriptionObj.voice" type="text" required minLength="3" />
        <textarea id="transcription-text" v-model="transcriptionObj.text" type="text" required minLength="3"></textarea>
        <button aria-label="Update transcription" @click="updateTranscriptionRecord()">Update</button>
        <button aria-label="Cancel transcription" @click="editable = false">Cancel</button>
      </div>
    </div>
    <button class="btn-icon" aria-label="Delete transcription" @click="deleteTranscription(transcriptionObj.id)">
      <DeleteIcon />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.transcription-item {
  display: flex;
  align-items: flex-start;

  .transcription-icon {
    min-width: 26px;
  }

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
