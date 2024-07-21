<template>
  <AppHeader />

  <main class="main">
    <div class="container">
      <keep-alive>
        <AppSearch @search="searchStore.searchVideos" />
      </keep-alive>

      <AppPlayer :item="selectedVideo" />

      <keep-alive>
        <AppShowcase
          v-if="searchStore.results.length"
          :items="searchStore.results"
          @select-video="selectVideo"
        />
      </keep-alive>
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
import { useSearchStore } from '@/stores/search'
import AppPlayer from '@/components/AppPlayer.vue'
import { ref } from 'vue'

const searchStore = useSearchStore()
const selectedVideo = ref()

const selectVideo = (item: Object) => {
  selectedVideo.value = item
  searchStore.isPLaying = true
}
</script>
