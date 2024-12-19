import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useSearchStore = defineStore('search', () => {
  const results = ref([])
  const isPLaying = ref(false)
  const isCompact = ref(false)

  const searchVideos = async (query: string) => {
    if (results.value.length && isPLaying.value) {
      isCompact.value = true
    }

    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          maxResults: 10,
          q: query,
          key: import.meta.env.VITE_YOUTUBE_API_KEY
        }
      })
      results.value = response.data.items

      console.log(results.value)
    } catch (err) {
      console.error(err)
    }
  }

  return { results, isPLaying, isCompact, searchVideos }
})
