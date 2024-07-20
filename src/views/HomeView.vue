<template>
  <AppHeader />

  <main class="main">
    <div class="container">
      <AppSearch @search="searchVideos" />

      <AppShowcase
        v-if="results.length"
        :items="results"
      />
    </div>
  </main>

  <AppFooter />
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppSearch from '@/components/AppSearch.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppSearchResult from '@/components/AppShowcase.vue'
import AppShowcase from '@/components/AppShowcase.vue'
import { ref } from 'vue'
import axios from 'axios'

const results = ref([])

const searchVideos = async (query: string) => {
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
</script>
