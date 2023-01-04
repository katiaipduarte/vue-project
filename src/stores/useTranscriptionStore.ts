import TranscriptionsDataService from '@/services/TranscriptionsDataService'
import type ResponseData from '@/types/ResponseData'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTranscriptionStore = defineStore('transcription', () => {
  const transcriptions = ref([])

  async function getAllTranscription() {
    await TranscriptionsDataService.getAll().then((response: ResponseData) => {
      transcriptions.value = response.data
      console.log(transcriptions)
    })
  }

  async function upsertTranscriptions() {
    console.log()
  }

  function addTranscription() {
    console.log()
  }

  function deleteTranscription() {
    console.log()
  }

  return { getAllTranscription, upsertTranscriptions, deleteTranscription, addTranscription }
})
