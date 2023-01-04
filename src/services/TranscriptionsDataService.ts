import http from '@/services/http-common'
import type ResponseData from '@/types/ResponseData'
import type Transcription from '@/types/transcription'

class TranscriptionsDataService {
  getAll(): Promise<ResponseData> {
    return http.get('5ae1c5792d00004d009d7e5c')
  }

  update(data: Transcription[]): Promise<void> {
    return http.post('5ae1c5792d00004d009d7e5c', data)
  }
}

export default new TranscriptionsDataService()
