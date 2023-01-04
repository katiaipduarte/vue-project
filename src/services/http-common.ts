import axios, { type AxiosInstance } from 'axios'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://www.mocky.io/v2',
  headers: {
    'Content-type': 'application/json',
  },
})

export default apiClient
