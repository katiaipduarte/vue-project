<script setup lang="ts">
import { useTranscriptionStore } from '@/stores/useTranscriptionStore'
import { ref } from 'vue'
import AddRowIcon from './icons/IconAddRow.vue'

const { addTranscription } = useTranscriptionStore()

const transcription = ref({
  voice: '',
  text: '',
})

const isShow = ref(false)

const addTranscriptionAndClear = (transcription: { voice: string; text: string }): void => {
  addTranscription({
    ...transcription,
  })

  transcription.voice = ''
  transcription.text = ''
  isShow.value = false
}

const disableSubmit = (): boolean => {
  return transcription.value.voice === '' || transcription.value.text === ''
}
</script>
<template>
  <div v-show="isShow" class="modal">
    <div class="modal-content">
      <button class="close-btn" @click="isShow = false">
        <span class="close">&times;</span>
      </button>
      <h2>New Transcription</h2>

      <form @submit.prevent="addTranscriptionAndClear(transcription)">
        <label for="transcription-title">Title</label>
        <input id="transcription-title" v-model="transcription.voice" type="text" required minLength="3" />

        <label for="transcription-text">Text</label>
        <textarea id="transcription-text" v-model="transcription.text" type="text" required minLength="3" />

        <button class="btn-icon" :disabled="disableSubmit()">
          <AddRowIcon />
        </button>
      </form>
    </div>
  </div>

  <button class="btn-icon" @click="isShow = !isShow">
    <AddRowIcon />
  </button>
</template>

<style lang="scss" scoped>
.modal-content {
  form {
    display: flex;
    flex-direction: column;

    label {
      margin-top: 20px;
    }

    button {
      margin: 10px auto 0;
      &[disabled] {
        cursor: not-allowed;
      }
    }
  }
}
</style>
