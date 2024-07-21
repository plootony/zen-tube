<template>
  <div
    v-if="item"
    :class="['player', { 'player--compact': searchStore.isCompact }]"
  >
    <div class="player__body">
      <iframe
        width="560"
        height="315"
        :src="`https://www.youtube.com/embed/${item.id.videoId ? item.id.videoId : ''}`"
        title="title"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>

    <div class="player__footer"></div>
    <h2 class="player__title">{{ item.snippet.title }}</h2>

    <p class="player__desc">{{ item.snippet.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { useSearchStore } from '@/stores/search'

const searchStore = useSearchStore()
const props = defineProps({
  item: {
    type: Object,
    required: false
  }
})
</script>
