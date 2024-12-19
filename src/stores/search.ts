import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios, { AxiosError } from 'axios'

export const useSearchStore = defineStore('search', () => {
  const results = ref([])
  const isPLaying = ref(false)
  const isCompact = ref(false)
  const isLoading = ref(false)
  const error = ref<Error | null>(null)
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
      const response = await axios.get('/api/search', {
        params: {
          q: query
        }
      })
      results.value = response.data.items
      searchCache.value.set(query, response.data.items)
    } catch (err) {
      error.value = err instanceof Error ? err : new Error('An unknown error occurred')
    } finally {
      isLoading.value = false
    }
  }

  return { results, isPLaying, isCompact, searchVideos, isLoading, error }
})
