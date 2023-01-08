import TranscriptionsDataService from '@/services/TranscriptionsDataService'
import type ResponseData from '@/types/ResponseData'
import type Transcription from '@/types/TranscriptionData'
import { defineStore } from 'pinia'

export const useTranscriptionStore = defineStore('transcription', {
  state: () => {
    return {
      transcriptionList: [] as Transcription[],
    }
  },
  actions: {
    async getAllTranscription() {
      await TranscriptionsDataService.getAll().then((response: ResponseData) => {
        this.transcriptionList = [...response.data]
      })
    },
    async updateTranscriptions() {
      await TranscriptionsDataService.update(this.transcriptionList).then((response: ResponseData) => {
        this.transcriptionList = [...response.data]
      })
    },
    addTranscription(item: { voice: string; text: string }) {
      this.transcriptionList.push({
        id: this.transcriptionList.length + 1,
        ...item,
      })
    },
    updateTranscription(transcription: Transcription) {
      const transcriptionListCopy = this.transcriptionList.map((i) =>
        i.id === transcription.id ? { ...this.transcriptionList, ...transcription } : i
      )

      this.transcriptionList = [...transcriptionListCopy]
    },
    deleteTranscription(id: number) {
      this.transcriptionList = [...this.transcriptionList.filter((i) => i.id !== id)]
    },
  },
})
