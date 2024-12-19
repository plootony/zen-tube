import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useSearchStore = defineStore('search', () => {
  const results = ref([])
  const isPLaying = ref(false)
  const isCompact = ref(false)
  const isLoading = ref(false)
  const error = ref(null)
  const searchCache = ref(new Map())

  const searchVideos = async (query: string) => {
    if (searchCache.value.has(query)) {
      results.value = searchCache.value.get(query)
      return
    }

    isLoading.value = true
    error.value = null

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
      searchCache.value.set(query, response.data.items)
    } catch (err) {
      error.value = err
    } finally {
      isLoading.value = false
    }
  }

  return { results, isPLaying, isCompact, searchVideos, isLoading, error }
})
